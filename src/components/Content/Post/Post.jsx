import React from "react";
import style from './Post.module.css'

function Post(props) {
    return <div className={style.post}>  
    {props.message}
    </div>
}

export default Post;