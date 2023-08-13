import React from "react";
import style from './Content.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/Profileinfo"

function Content() {
    return <div className = {style.content}>
      <ProfileInfo />
      <Posts />
  </div>
}

export default Content;