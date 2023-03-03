import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import cl from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <Link className={cl.navbar__link} to="/">Главная </Link>
                <Link className={cl.navbar__link} to="/posts">Посты</Link>
                <Link className={cl.navbar__link} to="/profile">Кабинет</Link>
                <Link className={cl.navbar__link} to="/about">О сайте </Link>
            </div>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
        </div>
    );
};

export default Navbar;