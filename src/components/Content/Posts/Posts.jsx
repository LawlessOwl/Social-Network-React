import React from "react";
import style from './Posts.module.css'
import Post from "../Post/Post";

const Posts = () => {

  let postsData = [
    {id: 1, message: "Hello world!"},
    {id: 2, message: "Goodby world!"}
  ]

  let postsElements = postsData
  .map(p => <Post message={p.message}/>)
  
    return <div className={style.Posts}>
        <div className={style.postsButton}>
      my posts
    </div>
    <div className={style.postsButton}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={style.postsItem}>
      <img src="https://i.pinimg.com/originals/e9/10/1a/e9101a6e66486645265e4241abf509ae.png" alt="user-img" className={style.user_img}/>
    { postsElements[0] }
    </div>
    <div className={style.postsItem}>
      <img src="https://i.pinimg.com/originals/28/e7/aa/28e7aa6558c41e93117273e0beee5609.jpg" alt="user-img" className={style.user_img}/>
    { postsElements[1] }
    </div>
    </div>
}

export default Posts;