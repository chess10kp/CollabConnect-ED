import React from 'react'
import {useState} from 'react'

import Navbar from './Navbar'
import Login from './Login'
import BrowseProjects from './BrowseComponents'
import About from './About'



const Main = () => {
  const [showLogin, setshowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
    <Navbar></Navbar>
    <BrowseProjects isLoggedIn={isLoggedIn}></BrowseProjects>
    <About></About>
    {showLogin && <Login></Login>}
    </>
  )
}

export default Main
