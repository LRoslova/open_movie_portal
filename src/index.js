import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { store } from './store/store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        // Seed Token
        colorPrimary: '#9E339F',
        borderRadius: '5px',

        // Alias Token
        // colorBgContainer: '#f6ffed',
      }
    }}
  >
      
    <Provider store={store}>
      <App/>
    </Provider>
    
  </ConfigProvider>

);

