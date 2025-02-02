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
    
    return (
      <div>
        {/* {state == '' ? <><p>Войдите или зарегистрируйтесь</p><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></> : 
        <div>
          <Flex wrap gap="small">
            {Array.from(
              data,
              (_, i) => (
                <Card
                  key={data[i].id}
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={data[i].poster.url} />}

                >
                  <Meta title={data[i].name} description={`Жанр: ${data[i].genres[0].name} Страна: ${data[i].countries[0].name}  Год: ${data[i].year}`} />
                </Card>
              ),
            )}
          </Flex>

          <Pagination align='center' defaultCurrent={6} total={500} />
        </div>} */}
      </div>
        
        
    )
}

