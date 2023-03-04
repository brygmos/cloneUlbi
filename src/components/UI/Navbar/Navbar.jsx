import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
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
                <NavLink className={({isActive}) => isActive ? cl.navbar__link_active : cl.navbar__link} to="/">Главная </NavLink>
                <NavLink className={({isActive}) => isActive ? cl.navbar__link_active : cl.navbar__link} to="/posts">Посты</NavLink>
                <NavLink className={({isActive}) => isActive ? cl.navbar__link_active : cl.navbar__link} to="/profile">Кабинет</NavLink>
                <NavLink className={({isActive}) => isActive ? cl.navbar__link_active : cl.navbar__link} to="/about">О сайте </NavLink>
            </div>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
        </div>
    );
};

export default Navbar;