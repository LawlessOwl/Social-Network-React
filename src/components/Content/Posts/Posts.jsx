import React from "react";
import style from './Posts.module.css'
import Post from "../Post/Post";

const Posts = () => {
  return <div className={style.Posts}>
    <div className={style.postsButton}>
      my posts
    </div>
    <div className={style.postsButton}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <Post message = 'Hello world!' profile_icon = "https://i.pinimg.com/originals/e9/10/1a/e9101a6e66486645265e4241abf509ae.png"/>
    <Post message = 'Have a nice day!' profile_icon = 'https://i.pinimg.com/originals/cd/cb/c3/cdcbc3a30cca0fc8a2ea8500d83e1076.jpg'/>
    <Post message = 'I learn React!' profile_icon = 'https://i.pinimg.com/originals/bb/4c/89/bb4c894d6eff9e51254c5f90acf52fff.jpg'/>
  </div>
}

export default Posts;