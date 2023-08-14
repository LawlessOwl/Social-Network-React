import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
let dialogsElement = props.dialogsData
.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

let messagesElement = props.messages
    .map(messages => <Message message={messages.message} id={messages.id}/>)

    return <div className={style.dialogs}>
        <div className={style.dialogs_item}>
            {dialogsElement}
        </div>
        <div className={style.messages}>
            {messagesElement}
        </div>

        
    </div>
}

export default Dialogs