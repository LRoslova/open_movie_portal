import {HeartOutlined, HomeOutlined, LoginOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Badge, Button, Menu } from 'antd';
import {Link, useNavigate, } from 'react-router-dom'
import { useUser } from './hooks/useUser';
import { useActionsUser } from './hooks/useActionsUser';
import { useMenu } from './hooks/useMenu';
import { useActionsMenu } from './hooks/useActionsMenu';


export const HeaderTest = () => {
  
  const page = useMenu();
  const {setPage} = useActionsMenu();
  
 const navigate = useNavigate();

  const state = useUser();
  console.log(state);
  const {setUser} = useActionsUser();

  const onClick = (e) => {
    console.log('click ', e);
    setPage(e.key);
  };


  const userIsExit = () => {
    console.log('exit lk');
    setUser('');
    setPage('home')
    navigate('/')
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
        state!="" ? JSON.parse(localStorage.getItem(state)).nickname : <Link to='/login'> Войти </Link>
      ),
      key: 'login',
      icon: state!="" ? <UserOutlined />: <LoginOutlined /> ,
      disabled: state!="" ? true : false
    }
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
        onClick={onClick} selectedKeys={[page]} mode="horizontal" theme="dark" items={items} />
        {state == "" ? null : <Button onClick={userIsExit}> <LogoutOutlined /> Выйти </Button>}
    </div>

  );
};
