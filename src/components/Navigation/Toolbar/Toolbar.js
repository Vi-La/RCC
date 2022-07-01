import React from 'react'
import Logo from '../../../assets/logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import './toolbar.css'
const toolbar = (props) => {
  console.log(props)
    return <header className="Toolbar">
       <DrawToggle clicked ={props.toggle} />
          <img src ={Logo} height='50px' width='65px'/>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
    </header>
}
export default toolbar