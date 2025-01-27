import React, { useState } from 'react';
import {HeartOutlined, HomeOutlined, LoginOutlined, UserOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {Link, } from 'react-router-dom'


const items = [
  {
    label: (<Link to = '/' > Главная </Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (<Link to = '/favorites'> Избранное </Link>),
    key: 'favorites',
    icon: <HeartOutlined />,
  },
  {
    label: (<Link to = '/login'> Войти </Link>),
    key: 'login',
    icon: <LoginOutlined />,
  },
];


export const HeaderTest = () => {
    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
            }}>
            <div className="demo-logo" />
            
            <Menu style={{
                flex: 1,
                minWidth: 0,
            }}
                onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items} />
        </div>

    );
};
