import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeaderTest } from './components/HeaderTest';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Authorization } from './pages/Authorization';
import { UserPage } from './pages/UserPage';




const { Content, Footer } = Layout;

export const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // localStorage.clear();
  localStorage.setItem('currentUser', '');

  

  return (
    <BrowserRouter>

      <Layout >

        <HeaderTest />

        <Content
          style={{
            padding: '0 48px',
            height: '91.7vh',
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: '280',
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/favorites' element={<Favorites />} />
              <Route exact path='/login' element={<Authorization />} />
              <Route exact path='/user' element={<UserPage />} />
            </Routes>

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

    </BrowserRouter>
  );
}
  



{/* <MovieItem movie = {{
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
      }} ></MovieItem> */}