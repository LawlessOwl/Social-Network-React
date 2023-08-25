import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import style from './components/Content/Content.module.css'
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <NavBar />
        <div className={style.content}>
          <Routes>
            <Route path = '/Content' element = {<Content profile={props.stateData.profile} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>}/>
            <Route path = '/Dialogs' element = {<Dialogs state={props.stateData.chat}/>} />
            <Route path = '/News' element = {<News/>} />
            <Route path = '/Music' element = {<Music/>} />
            <Route path = '/Settings' element = {<Settings/>} />
            <Route path = '/Friends' element = {<Friends state={props.stateData.profile}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
