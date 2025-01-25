import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { FilmFlex } from './components/mainPage/FilmFlex';
import { Header } from './components/mainPage/Header';
import { MovieItem } from './components/favoritesPage/MovieItem';

const {  Content, Footer } = Layout;




// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));
export const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      
      <Header/>

      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            margin: '20px 0',
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            Content
            <FilmFlex/>

            <MovieItem movie = {{
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
      }} ></MovieItem>


          
        </div>
      </Content>





      
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

