import React from "react";
import style from './Friend.module.css'

const Friend = (props) => {
    return <div>
        <img src={props.profileIcon} alt="friendImg" className={style.friend_img}/>
        <div>
            <span>{props.name}</span>
        </div>
    </div>
}

export default Friend