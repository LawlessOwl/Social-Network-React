import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Angelina'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'WTF'},
        {id: 3, message: "Oh shit i'm sorry"},
    ]

let dialogsElement = dialogsData
    .map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

let messagesElement = messages
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