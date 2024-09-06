import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript 0", body: "Description"},
        {id: 2, title: "Javascript 1", body: "Description"},
        {id: 3, title: "Javascript 2", body: "Description"}
    ]);

    const createPost = (newPost) => {  // Функция обратного вызова передаёт в дочерний компонент данные
        setPosts([...posts, newPost])
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: "15px 0"}}/>
            <div>
                <select>
                    <option value="value1">По названию</option>
                    <option value="value2">По описанию</option>
                </select>
            </div>
            {posts.length  // Условная отрисовка
                ? <PostList remove={removePost} posts={posts} title="Посты про JS" />
                : <h1 style={{textAlign: "center"}}>
                    Посты не найдены!
                  </h1> }
        </div>
    );
}

export default App;
