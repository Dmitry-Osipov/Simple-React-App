import React, {useState} from 'react';
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);  // Благодаря callback мы получаем из родительского класса данные и используем в дочернем
        setPost({title: "", body: ""});
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            {/*Неуправляемый/Неконтролируемый компонент*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;