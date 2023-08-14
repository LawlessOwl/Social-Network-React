import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

let postsData = [
{id: 1, message: 'Hello world!', likesCount: '45', profileIcon: "https://i.pinimg.com/originals/e9/10/1a/e9101a6e66486645265e4241abf509ae.png"},
{id: 2, message: 'Have a nice day!', likesCount: '30', profileIcon: 'https://i.pinimg.com/originals/cd/cb/c3/cdcbc3a30cca0fc8a2ea8500d83e1076.jpg'},
{id: 3, message: 'I learn React!', likesCount: '25', profileIcon: 'https://i.pinimg.com/originals/bb/4c/89/bb4c894d6eff9e51254c5f90acf52fff.jpg'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} messages={messages} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
