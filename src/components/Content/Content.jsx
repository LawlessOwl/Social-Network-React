import React from "react";
import style from './Content.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/Profileinfo"

const Content = (props) => {

    return <div className = {style.content}>
      <ProfileInfo />
      <Posts postsData={props.profile.postsData} newPostText={props.profile.newPostText} dispatch={props.dispatch}/>
  </div>
}

export default Content;