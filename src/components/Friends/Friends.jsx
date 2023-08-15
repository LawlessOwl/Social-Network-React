import React from "react";
import style from "./Friends.module.css";
import FriendBar from "./FriendBar/friendBar";


const Friends = (props) => {
    return <div className={style.Friends}>
    <FriendBar friendData={props.state.friendList}/>
    </div>
}
<Friends/>


export default Friends