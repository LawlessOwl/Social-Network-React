import React from "react";
import Post from "../Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

const PostsContainer = (props) => {

  let postChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
  }

  let addNewPost = () => {
    props.dispatch(addPostActionCreator())
  }

  return (<Post updateNewPostText ={postChange} addNewPost={addNewPost} post = {props.post}></Post>)
}


export default PostsContainer;