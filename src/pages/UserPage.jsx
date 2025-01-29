import React, { useState } from 'react';
import { Button, Card, Space, Input,  } from "antd";
import { useUser } from '../components/hooks/useUser';
import { useActionsUser } from '../components/hooks/useActionsUser';
import { useNavigate } from 'react-router-dom';



export const UserPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const state = useUser();
    console.log(state);
    const { setUser } = useActionsUser();

    const navigate = useNavigate()

    let user = JSON.parse(localStorage.getItem(state))

    function isExitUser () {
        setUser('');
        navigate('/home')
        
    }

    return (
        <Card title={user.nickname} bordered={false} style={{ width: 300 }}>
            <p>Почта: {user.email}</p>
            <Space direction="horizontal">
                Пароль:
                <Input.Password
                    value={user.password}
                    visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                />
            </Space>

            <Button onClick={isExitUser()}>Выйти из аккаунта</Button>
        </Card>
    )
}