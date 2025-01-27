import { Tabs } from 'antd';
import { LoginForm } from '../components/LoginForm';
import { AuthForm } from '../components/AuthForm';


const onChange = (key) => {
  console.log(key);
};


export const Authorization = () => {

    
    
    return (
        <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: 'Войти',
        key: 'login',
        children: (<LoginForm/>),
      },
      {
        label: 'Зарегистрироваться',
        key: '2',
        children: (<AuthForm/>),
      }
    ]}
  />
    )
}