import React from "react";
import style from './Posts.module.css'
import Post from "../Post/Post";

const Posts = (props) => {

  let postsElement = props.postsData
    .map(post => <Post message = {post.message} profileIcon = {post.profileIcon} likesCount = {post.likesCount}/>)

  let newPostElement = React.createRef()

  let postChange = () => {
    let text = newPostElement.current.value
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action)
  }

  let addNewPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  return <div className={style.Posts}>
    <div className={style.postsButton}>
      my posts
    </div>
    <div className={style.postsButton}>
      <textarea ref={newPostElement} onChange={postChange} value = {props.newPostText}/>
      <button onClick={addNewPost}>Add post</button>
    </div>
    {postsElement}
  </div>
}

export default Posts;