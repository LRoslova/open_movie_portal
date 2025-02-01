import { Flex } from 'antd';
import { Card, Pagination, Input, Space, DatePicker, Spin, Select, Modal} from 'antd';
import { useEffect, useState } from 'react';
import { useGetFilmsQuery} from '../store/api/api';
import { GENRES } from '../components/options';


const { Search } = Input;
const { Meta } = Card;


export const Home = () => {
    const [page, setPage] = useState({currPage: 1, sizePage: 10});
    console.log(page);

    const [searchstr, setSearchstr] = useState('');
    console.log(searchstr);

    const {isLoading, data, isFetching} = useGetFilmsQuery([page, searchstr]);
    console.log(isLoading, data, isFetching);
    
    const genres = GENRES;
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredGenres = genres.filter((o) => !selectedItems.includes(o));

    const [isModalOpen, setIsModalOpen] = useState({isOpen: false, data: {}});
    const showModal = (value) => {
        console.log(value);
        setIsModalOpen({isOpen: true, data: value});
    };
    const handleOk = () => {
        setIsModalOpen({isOpen: false, data: {}});
    };
    const handleCancel = () => {
        setIsModalOpen({isOpen: false, data: {}});
    };
    

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    
    const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    setSearchstr(value);
    };
      
    const onChangePagination = (pageValue, pageSize) => {
            console.log(pageValue, pageSize);
            setPage({currPage: pageValue, sizePage: pageSize})
    };

    const printGenres = (arr) => {
        let genresName = [];
        for(let genre of arr){
            genresName.push(genre.name)
        }
        return genresName.join(' ')
    }

    return (
        <div>
            <Space direction="vertical" >
                <Search placeholder="Название фильма" defaultValue={searchstr} onSearch={onSearch} enterButton />
                
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
                {
                    data.docs.map((item)=>
                        <Card
                            key={item.id}
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="Нет ссылки на постер в БД" src= {item.poster.url} />}
                            onClick={()=>showModal(item)}

                        >
                            <Meta title={item.name} description={`Рейтинг: ${item.rating.imdb == 0 ? 'не указан' : item.rating.imdb} `} />
                            <p>{`Жанр: ${item.genres[0] ? printGenres(item.genres) : 'не указано'}`}</p>
                            <p>{`Страна: ${item.countries[0] ? printGenres(item.countries) : 'не указано'}`}</p>
                        </Card>
                    )
                }
            </Flex>

            <Pagination align = 'center' defaultCurrent={data.page} total={data.total} defaultPageSize={data.limit} onChange={onChangePagination} />
            </div>}

            <Modal title={isModalOpen.data.name} open={isModalOpen.isOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            
        </div>
        
    )
}
