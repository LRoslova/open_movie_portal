import { Button, Checkbox, Form, Input } from 'antd';
import { useUser } from './hooks/useUser';
import { useActionsUser } from './hooks/useActionsUser';
import { useNavigate } from 'react-router-dom';
import { useMenu } from './hooks/useMenu';
import { useActionsMenu } from './hooks/useActionsMenu';




const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {
  const user = useUser();
  const page = useMenu();
  const {setPage} = useActionsMenu();
  const navigate = useNavigate();

  const onFinish = (values) => {
  console.log('Success:', values);
  let password = values.password;
  let login = values.email;
  let localUser = JSON.parse(localStorage.getItem(login));
  console.log(localUser);
  if(localUser !== null){
    if(password == localUser.password){
      setUser(login);
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
  const {setUser} = useActionsUser();


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

