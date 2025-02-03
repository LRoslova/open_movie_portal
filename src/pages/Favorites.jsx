import { Flex } from 'antd';
import { Card, Pagination, Input, Space, Empty } from 'antd';
import { useUser } from '../components/hooks/useUser';
import { useActionsUser } from '../components/hooks/useActionsUser';
import { useActions } from '../components/hooks/useActions';
import { useFavorites } from '../components/hooks/useFavorites';
import { useGetFavoritesQuery} from '../store/api/api';
import { useEffect, useState } from 'react';


const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Meta } = Card;


export const Favorites = () => {

  const user = useUser();
  const {setUser} = useActionsUser();
  console.log(user);
  
  const favorites = useFavorites();
  const {toggleTofavorites, initialTofavorites} = useActions();
  console.log(favorites);

    // const [ data, setData] = useState([{
    //     "id": 6994027,
    //     "name": "Какой-то там дождь",
    //     "year": 2023,
    //     "movieLength": 137,
    //     "poster": {
    //       "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/d3e47b48-2ad4-4e7f-97f2-bcff5062ba6c/orig",
    //       "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/d3e47b48-2ad4-4e7f-97f2-bcff5062ba6c/x1000"
    //     },
    //     "genres": [
    //       {
    //         "name": "драма"
    //       }
    //     ],
    //     "countries": [
    //       {
    //         "name": "Япония"
    //       }
    //     ]
    //   }]);
    const printGenres = (arr) => {
      let genresName = [];
      for(let genre of arr){
          genresName.push(genre.name)
      }
      return genresName.join(' ')
  }
  const [page, setPagePag] = useState({currPage: 1, sizePage: 10});
  const onChangePagination = (pageValue, pageSize) => {
    // console.log(pageValue, pageSize);
    setPagePag({currPage: pageValue, sizePage: pageSize})
};

// useEffect(()=>{
//   let start = (page.currPage-1)*page.sizePage;
//   let end = page.currPage*page.sizePage;
//   console.log(start, end);
  
//   let dataF = favorites.slice(start, end )
//   console.table(dataF);
// }, [])
    
    return (
      <div>
        {user == '' ? <><p>Войдите или зарегистрируйтесь</p><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></> : 
        !favorites[0] ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : <div>
        <Flex wrap gap="small">
            {
                favorites.slice((page.currPage-1)*page.sizePage, page.currPage*page.sizePage).map((item)=>
                    <Card
                        key={item.id}
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="Нет ссылки на постер в БД" src= {item.poster.url} />}
                        // onClick={()=>showModal(item)}

                    >
                        <Meta title={item.name} description={`Рейтинг: ${item.rating.imdb == 0 ? 'не указан' : item.rating.imdb} `} />
                        <p>{`Год: ${item.year ? item.year : 'не указано'}`}</p>
                        <p>{`Жанр: ${item.genres[0] ? printGenres(item.genres) : 'не указано'}`}</p>
                        <p>{`Страна: ${item.countries[0] ? printGenres(item.countries) : 'не указано'}`}</p>
                    </Card>
                )
            }
        </Flex>

        <Pagination align = 'center' defaultCurrent={page.currPage} total={favorites.length} defaultPageSize={page.pageSize} onChange={onChangePagination} />
        </div>
        }
      </div>
        
        
    )
}

