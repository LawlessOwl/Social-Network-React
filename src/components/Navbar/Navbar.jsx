import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={style.navigation_menu}>
        <ul className = {style.navigation_list}>
          <li className = {style.navigation_item}>
            <NavLink to = "/Content" className={ navbarPage => navbarPage.isActive ? style.active : style.link_item}>Profile</NavLink>
          </li>
          <li className = {style.navigation_item}>
            <NavLink to = "/Dialogs" className={ navbarPage => navbarPage.isActive ? style.active : style.link_item}>Messages</NavLink>
            </li>
          <li className = {style.navigation_item}>
            <NavLink to = "/News" className={ navbarPage => navbarPage.isActive ? style.active : style.link_item}>News</NavLink>
            </li>
          <li className = {style.navigation_item}>
            <NavLink  to= "/Music" className={ navbarPage => navbarPage.isActive ? style.active : style.link_item}>Music</NavLink>
            </li>
            <NavLink to = "/Settings" className={ navbarPage => navbarPage.isActive ? style.active : style.link_item}>Settings</NavLink>
          <li className = {style.navigation_item}>
            </li>
        </ul>
      </nav>
  ) 
}

export default NavBar;