import { Button, Form, Input } from 'antd';
import { useUser } from './hooks/useUser';
import { useActionsUser } from './hooks/useActionsUser';
import { useNavigate } from 'react-router-dom';
import { useMenu } from './hooks/useMenu';
import { useActionsMenu } from './hooks/useActionsMenu';
import { useFavorites } from './hooks/useFavorites';
import { useActions } from './hooks/useActions';
import { useGetFavoritesQuery} from '../store/api/api';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {

  const user = useUser();
  const {setUser} = useActionsUser();

  const page = useMenu();
  const {setPage} = useActionsMenu();

  const navigate = useNavigate();

  const favorites = useFavorites();
  const {toggleTofavorites, initialTofavorites} = useActions();
  console.log(favorites);
  

  // const {isLoading, data, isFetching} = useGetFavoritesQuery({currPage: 1, sizePage: 10, favorites: user});
  // console.log(isLoading, data, isFetching);





  const onFinish = (values) => {
  console.log('Success:', values);
  let password = values.password;
  let login = values.email;
  let localUser = JSON.parse(localStorage.getItem(login));
  console.log(localUser);
  if(localUser !== null){
    if(password == localUser.password){
      setUser(login);
      initialTofavorites(localUser.favorites)
      setPage('home')
      navigate('/')
    }else{
      alert('Password is incorrect!')
    }
  }else{
    alert('Email is incorrect!')
  }
};

  console.log(user);
  


  return <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Логин"
      name="email"
      rules={[
        {
          required: true,
          message: 'Введите логин!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Пароль"
      name="password"
      rules={[
        {
          required: true,
          message: 'Введите пароль!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Войти
      </Button>
    </Form.Item>
  </Form>
}

