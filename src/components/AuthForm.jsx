import React, { useState, useEffect } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import { useUser } from './hooks/useUser';
import { useActionsUser } from './hooks/useActionsUser';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const AuthForm = () => {
  const [form] = Form.useForm();

  const user = useUser();
  
  console.log(user);
  const {setUser} = useActionsUser();

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    let login = values.email;
    let userObj = {
      nickname: values.nickname,
      password: values.password,
      email: values.email,
      favorites: []
    }
    localStorage.setItem(login, JSON.stringify(userObj));
    setUser(login);
    alert('You are registrated!')
    // localStorage.setItem('currentUser', login);
    // navigate('/user')
  };

  
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Невалидный E-mail!',
          },
          {
            required: true,
            message: 'Введите E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Повторите пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Повторите пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли не совпадают!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Никнейм"
        tooltip="Как к Вам обращаться?"
        rules={[
          {
            required: true,
            message: 'Введите никнейм!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};