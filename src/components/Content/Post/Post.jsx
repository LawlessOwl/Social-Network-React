import React from "react";
import style from './Post.module.css'

const Post = (props) => {
  return  <div className={style.post_item}>
      <img src={props.profile_icon} alt="user-img" className={style.user_img}/>
    {props.message}
    <div className={style.like_box}>
        <span className={style.like_count}>like</span>
    </div>
    </div>
}

export default Post;