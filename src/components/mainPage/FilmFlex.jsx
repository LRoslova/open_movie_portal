import { Button, Flex } from 'antd';
import { Card, Pagination, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Meta } = Card;


export const FilmFlex = () => {

    const [ data, setData] = useState([{
        "id": 6994027,
        "name": "Проливной дождь",
        "year": 2023,
        "movieLength": 137,
        "poster": {
          "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/d3e47b48-2ad4-4e7f-97f2-bcff5062ba6c/orig",
          "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/d3e47b48-2ad4-4e7f-97f2-bcff5062ba6c/x1000"
        },
        "genres": [
          {
            "name": "драма"
          }
        ],
        "countries": [
          {
            "name": "Япония"
          }
        ]
      }]);

    useEffect(() => {
        fetch(`https://api.kinopoisk.dev/v1.4/movie?page=2&limit=12&selectFields=id&selectFields=name&selectFields=year&selectFields=movieLength&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=movieLength&notNullFields=poster.url&notNullFields=genres.name&notNullFields=countries.name&sortField=&sortType=1&type=movie&year=2020-2024`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-API-KEY': '1676QMC-5HRMB52-KGRA9G2-V1SWGC6'
            }
        })
        .then( res => res.json())
        .then(
            (result) => {
                setData(result.docs);
                console.log(result.docs);
            },
            (e) => console.warn('fetch failrue', e)
        )
    }, [])

    
    return (
        <div>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
            </Space>
            
            <Flex wrap gap="small">
                {data.map(
                    // {
                    //     length: 12,
                    // },
                    (i) => (
                        <Card
                            key={data[i].id}
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhudognik.net%2Fpictures%2F54538-Kotik%2F&psig=AOvVaw1_Z8opL2tlLEZf3JPao_wK&ust=1737745418670000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNifq6fEjIsDFQAAAAAdAAAAABAE' />}

                        >
                            <Meta title={data[i].name} description={`Жанр: ${data[i].genres[0].name}`} />
                        </Card>
                    ),
                )}
            </Flex>

            <Pagination align = 'center' defaultCurrent={6} total={500} />
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
