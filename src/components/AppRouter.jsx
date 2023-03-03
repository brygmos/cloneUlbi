import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
                    <Route
                        element={<Posts/>}
                        path={'/'}
                    />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
                    <Route
                        element={<Login/>}
                        path={'*'}
                    />
            </Routes>
    );
};

export default AppRouter