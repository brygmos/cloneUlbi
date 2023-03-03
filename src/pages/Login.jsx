import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {users} from "../users/index"

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    //TODO normal auth

    const login = event => {
        for (let user of users) {
            if ((user.login == name) && (user.password == password)) {
                setIsAuth(true);
                localStorage.setItem('auth', 'true')
            }
            else console.log('wrong credentials')
        }
    }

        const auth = (e) => {
            e.preventDefault();
            login(e)
        }

        return (
            <div>
                <h1>Вход в личный кабинет</h1>
                <form onSubmit={auth}>
                    <MyInput
                        type="text"
                        placeholder="Введите логин"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <MyInput
                        type="password"
                        placeholder="Введите пароль"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <MyButton>Войти</MyButton>
                </form>
            </div>
        );
    };
    export default Login
