import React, { useState } from 'react';
import {HeartOutlined, HomeOutlined, LoginOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Badge, Button, Menu } from 'antd';
import {Link, useNavigate, } from 'react-router-dom'
import { useUser } from './hooks/useUser';
import { useActionsUser } from './hooks/useActionsUser';




// isLoggedIn ? 

export const HeaderTest = () => {
  const [current, setCurrent] = useState('home');
  // const [isLoggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')));
  // console.log(isLoggedIn);
  

  const state = useUser();
  console.log(state);
  const {setUser} = useActionsUser();

  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };


  const items = [
    {
      label: (<Link to='/' > Главная </Link>),
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: (<Link to='/favorites'> Избранное </Link>),
      key: 'favorites',
      icon: <Badge count={0} size='small' showZero><HeartOutlined /></Badge>,
    },
    {
      label: (
        state!="" ? JSON.parse(localStorage.getItem(state)).nickname :<Link to='/login'> Войти </Link>
      ),
      key: 'login',
      icon: state!="" ? <UserOutlined />: <LoginOutlined /> ,
    },
    // {
    //   label: (
    //     state!="" ? <Button onClick={userIsExit()}>  Выйти </Button> : <div></div>
    //   ),
    //   key: 'logout',
    //   icon: state!="" ? <LogoutOutlined /> : <div></div> ,
    // }
  ];

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
        {/* {state == "" ? null : <Button onClick={userIsExit()}> <LogoutOutlined /> Выйти </Button>} */}
    </div>

  );
};
