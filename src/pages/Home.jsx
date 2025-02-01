import { Flex } from 'antd';
import { Card, Pagination, Input, Space, DatePicker, Spin, Select, Modal, Button} from 'antd';
import { useEffect, useState } from 'react';
import { useGetFilmsQuery} from '../store/api/api';
import { GENRES } from '../components/options';

import { useActions } from '../components/hooks/useActions';
import { useFavorites } from '../components/hooks/useFavorites';


const { Search } = Input;
const { Meta } = Card;
let film = {
    "id": 0,
    "name": '',
    "year": 0,
    "movieLength": 0,
    "poster": {
      "url": ''
    },
    "genres": [],
    'countries': [],
    'rating': {
        "imdb": ''
      },
}


export const Home = () => {
    const [page, setPage] = useState({currPage: 1, sizePage: 10});
    // console.log(page);

    const [searchstr, setSearchstr] = useState('');
    // console.log(searchstr);

    const {isLoading, data, isFetching} = useGetFilmsQuery([page, searchstr]);
    // console.log(isLoading, data, isFetching);
    
    const genres = GENRES;
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredGenres = genres.filter((o) => !selectedItems.includes(o));

    const favorites = useFavorites();
    const {toggleTofavorites} = useActions();
    // const isExist = favorites.some(m => m.id === movie.id)
    console.log(favorites);
    

    
    const [isModalOpen, setIsModalOpen] = useState({isOpen: false, data: film});
    const showModal = (value) => {
        // console.log(value);
        setIsModalOpen({isOpen: true, data: value});
    };
    const handleOk = () => {
        setIsModalOpen({isOpen: false, data: film});
    };
    const handleCancel = () => {
        setIsModalOpen({isOpen: false, data: film});
    };
    

    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    
    const onSearch = (value, _e, info) => {
    // console.log(info?.source, value);
    setSearchstr(value);
    };
      
    const onChangePagination = (pageValue, pageSize) => {
            // console.log(pageValue, pageSize);
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
                            <p>{`Год: ${item.year ? item.year : 'не указано'}`}</p>
                            <p>{`Жанр: ${item.genres[0] ? printGenres(item.genres) : 'не указано'}`}</p>
                            <p>{`Страна: ${item.countries[0] ? printGenres(item.countries) : 'не указано'}`}</p>
                        </Card>
                    )
                }
            </Flex>

            <Pagination align = 'center' defaultCurrent={data.page} total={data.total} defaultPageSize={data.limit} onChange={onChangePagination} />
            </div>}

            <Modal title={isModalOpen.data.name} open={isModalOpen.isOpen} onOk={handleOk} onCancel={handleCancel}>
                <img alt="Нет ссылки на постер в БД" src= {isModalOpen.data.poster.url ? isModalOpen.data.poster.url : ''} />
                <p>{`Рейтинг: ${isModalOpen.data.rating.imdb == 0 ? 'не указан' : isModalOpen.data.rating.imdb}`} </p>
                <p>{`Год: ${isModalOpen.data.year ? isModalOpen.data.year : 'не указано'}`}</p>
                <p>{`Жанр: ${isModalOpen.data.genres[0] ? printGenres(isModalOpen.data.genres) : 'не указано'}`}</p>
                <p>{`Страна: ${isModalOpen.data.countries[0] ? printGenres(isModalOpen.data.countries) : 'не указано'}`}</p>
                <p>{`Продолжительность: ${isModalOpen.data.movieLength ? isModalOpen.data.movieLength + ' мин' : 'не указано'}`}</p>
                <p>{isModalOpen.data.description == '' ? 'Описания не добавлено' : isModalOpen.data.description}</p>
                
                <Button onClick={() => toggleTofavorites(isModalOpen.data)}> {favorites.some(m => m.id === isModalOpen.data.id) ? 'Удалить из избранного' : 'Добавить в избранное'} </Button>
            </Modal>
            
        </div>
        
    )
}
