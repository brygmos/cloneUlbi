import React, {useContext, useEffect} from 'react';
import {useState} from "react";
import {UserContext} from "../context";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import PostList from "../components/PostList";
import {CSSTransition} from "react-transition-group";
import PostItem from "../components/PostItem";
import {logDOM} from "@testing-library/react";


const Profile = () => {
    const [userId, setUserId] = useState('1');
    const [filter, setFilter] = useState({sort: 'gg', query: ''})
    const [posts, setPosts] = useState([]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (userId) => {
        const response = await PostService.getPostsByUserId(userId);
        setPosts(response.data)
    })

    useEffect(() => {fetchPosts(userId)},[userId])

    return (
        <UserContext.Consumer>
            <h1>
                Личный кабинет id = {userId}
            </h1>
            <p>Мои посты</p>
            {/*{posts.map((post, index) =>*/}
            {/*    <div key={post.id}>*/}
            {/*        <PostItem remove={''} number={index + 1} post={post} />*/}
            {/*    </div>*/}
            {/*)}*/}
        </UserContext.Consumer>);
}

export default Profile