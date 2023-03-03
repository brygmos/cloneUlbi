import React from 'react';
import MyButton, {MyDangerButton} from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';
import "./UI/button/MyButton";

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>
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