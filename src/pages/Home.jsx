import { Flex } from 'antd';
import { Card, Pagination, Input, Space, DatePicker, Spin, Select} from 'antd';
import { useEffect, useState } from 'react';
import { useGetFilmsQuery, useGetFilmsByNameQuery } from '../store/api/api';
import { GENRES } from '../components/options';





const { Search } = Input;



const { Meta } = Card;


export const Home = () => {

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    
    const genres = GENRES;
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredGenres = genres.filter((o) => !selectedItems.includes(o));
    
    const [page, setPage] = useState({currPage: 1, sizePage: 10, string: ''});
    // console.log(page);

    const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    const nextPage = {currPage: page.currPage, sizePage: page.sizePage, string: value}
    setPage(nextPage);

};

    const [inputValue, setInputValue] = useState("");
    // const [debouncedValue] = useDebounce(inputValue, 3000);
    const [debouncedValue, setDebouncedValue] = useState("");
    console.log(debouncedValue);
    
      
    const {isLoading, data, isFetching} = useGetFilmsQuery(page);
    console.log(isLoading, data, isFetching);
    
    // const {isLoadingBN, dataBN, isFetchingBN} = useGetFilmsByNameQuery({size: page.sizePage, string: debouncedValue});
    // console.log(isLoadingBN, dataBN, isFetchingBN);
   
    const onChangePagination = (pageValue, pageSize) => {
            console.log(pageValue, pageSize);
            setPage({currPage: pageValue, sizePage: pageSize, string: page.string})
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setDebouncedValue(inputValue);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }, [inputValue, 2000]);

      useEffect(() => {
        setPage({currPage: 1, sizePage: 10, string: debouncedValue});
    }, [debouncedValue]);
    
    

    
    return (
        <div>
            <Space direction="vertical" >
                <Search placeholder="Название фильма" onSearch={onSearch} enterButton />
                <Input placeholder="Название фильма" value={inputValue} onChange={handleInputChange} />
                <DatePicker onChange={onChange} picker="year" />
                <Select
                    mode="multiple"
                    placeholder="Жанр"
                    value={selectedItems}
                    onChange={setSelectedItems}
                    style={{
                        width: '100%',
                    }}
                    options={filteredGenres}
                />
            </Space>
            
            
            {isLoading || isFetching ? <Spin tip="Loading" size="large">Loading...</Spin> : <div>
            <Flex wrap gap="small">
                {/* {Array.from(
                    data.docs,
                    (_, i) => (
                        <Card
                            key={data.docs[i].id}
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src= {data.docs[i].poster.url} />}

                        >
                            <Meta title={data.docs[i].name } description={`Жанр: ${data.docs[i].genres[0].name} Страна: ${data.docs[i].countries[0].name}  Год: ${data.docs[i].year}`} />
                        </Card>
                    ),
                )} */}
                {
                    data.docs.map((item)=>
                        <Card
                            key={item.id}
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src= {item.poster.url} />}

                        >
                            <Meta title={item.name} description={`Жанр: ${item.genres[0].name} Страна: ${item.countries[0].name}  Год: ${item.year}`} />
                        </Card>
                    )
                }
            </Flex>
            <Pagination align = 'center' defaultCurrent={data.page} total={data.total} defaultPageSize={data.limit} onChange={onChangePagination} />
            </div>}
            

            
        </div>
        
    )
}

// import const FilmFlex = () => (
//     return (
//         <Flex wrap gap="small">
//             {Array.from(
//                 {
//                     length: 24,
//                 },
//                 (_, i) => (
//                     <Button key={i} type="primary">
//                         Button
//                     </Button>
//                 ),
//             )}
//         </Flex>
//     )
 
// );
