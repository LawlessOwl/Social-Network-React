import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {

let state = props.store.getState().chat

let dialogsElement = state.dialogsData
.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>)

let messagesElement = state.messages
.map(messages => <Message message={messages.message} id={messages.id}/>)

let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
}
let onNewMessageChange = (event) => {
    let body = event.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
}


return <div className={style.dialogs}>
    <div className={style.dialogs_item}>
        {dialogsElement}
    </div>
    <div className={style.messages}>
        <div>{messagesElement}</div>
        <div>
            <div><textarea value = {newMessageBody} 
            onChange={onNewMessageChange}
            placeholder="enter new message"></textarea></div>
            <div><button onClick={onSendMessageClick}>send</button></div>
        </div>
    </div>
</div>
}

export default Dialogs