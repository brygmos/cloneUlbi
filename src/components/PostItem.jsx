import React from 'react';
import MyButton, {MyDangerButton} from "./UI/button/MyButton";
import "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyDangerButton className="removeBtn" onClick={() => props.remove(props.post)}>
                    Удалить
                </MyDangerButton>
            </div>
        </div>
    );
};

export default PostItem;