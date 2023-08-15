import React from "react";
import Friend from "../friend/Friend";

const FriendBar = (props) => {
    let friendElement = props.friendData
    .map(friend => <Friend name = {friend.name} profileIcon = {friend.profileIcon}/>)
    return <div>
        {friendElement}
    </div>
}

export default FriendBar