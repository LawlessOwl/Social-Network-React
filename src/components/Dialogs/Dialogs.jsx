import React from "react";
import style from "./Dialogs.module.css";
import {BrowserRouter, Route, NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return <div className={style.items + ' ' + style.active}>
            <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>

}

const Message = (props) => {
   return <div className={style.dialogs}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Angelina'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Misha'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'WTF'},
        {id: 3, message: "Oh shit i'm sorry"},
    ]

    return <div className={style.dialogs}>
        <div className={style.dialogs_item}>
            <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
            <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
            <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
            <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
        </div>
        <div className={style.messages}>
            <Message message = {messagesData[0].message}/>
            <Message message = {messagesData[1].message}/>
            <Message message = {messagesData[2].message}/>
        </div>

        
    </div>
}

export default Dialogs