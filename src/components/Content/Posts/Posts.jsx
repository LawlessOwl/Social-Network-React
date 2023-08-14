import React from "react";
import style from './Posts.module.css'
import Post from "../Post/Post";

const Posts = (props) => {

  let postsData = [
    {id: 1, message: 'Hello world!', likesCount: '45', profileIcon: "https://i.pinimg.com/originals/e9/10/1a/e9101a6e66486645265e4241abf509ae.png"},
    {id: 2, message: 'Have a nice day!', likesCount: '30', profileIcon: 'https://i.pinimg.com/originals/cd/cb/c3/cdcbc3a30cca0fc8a2ea8500d83e1076.jpg'},
    {id: 3, message: 'I learn React!', likesCount: '25', profileIcon: 'https://i.pinimg.com/originals/bb/4c/89/bb4c894d6eff9e51254c5f90acf52fff.jpg'}
  ]

  let postsElement = postsData
    .map(post => <Post message = {post.message} profileIcon = {post.profileIcon} likesCount = {post.likesCount}/>)

  return <div className={style.Posts}>
    <div className={style.postsButton}>
      my posts
    </div>
    <div className={style.postsButton}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    {postsElement}
  </div>
}

export default Posts;