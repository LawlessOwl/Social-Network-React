import React from "react";
import style from './Posts.module.css'
import Post from "../Post/Post";

const Posts = (props) => {

  let postsElement = props.postsData
    .map(post => <Post message = {post.message} profileIcon = {post.profileIcon} likesCount = {post.likesCount}/>)

  let newPostElement = React.createRef()

  let addNewPost = () => {
    let newPost = newPostElement.current.value
    props.addPost(newPost)
    newPostElement.current.value = ''
  }

  return <div className={style.Posts}>
    <div className={style.postsButton}>
      my posts
    </div>
    <div className={style.postsButton}>
      <textarea ref={newPostElement}></textarea>
      <button onClick={addNewPost}>Add post</button>
    </div>
    {postsElement}
  </div>
}

export default Posts;