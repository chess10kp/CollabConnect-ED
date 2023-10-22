import React from 'react'
import {useState} from 'react'

import Navbar from './Navbar'
import Login from './Login'
import BrowseProjects from './BrowseComponents'
import About from './About'
import MakeProject from './newProject'



const Main = () => {
  const [showLogin, setshowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isGuest, setIsGuest] = useState(false)
  const [isMakingNewProject, setIsMakingNewProject] = useState(false)
  return (
    <>
    <Navbar isMakingNewProject={isMakingNewProject} setIsMakingNewProject={setIsMakingNewProject} showlogin={showLogin} isLoggedIn={isLoggedIn} setshowLogin={setshowLogin} setIsLoggedIn={setIsLoggedIn} ></Navbar>
    {(isGuest || isLoggedIn) && <BrowseProjects isMakingNewProject={isMakingNewProject} setIsMakingNewProject={setIsMakingNewProject}  showLogin={showLogin} isLoggedIn={isLoggedIn} setshowLogin={setshowLogin} setIsLoggedIn={setIsLoggedIn}></BrowseProjects>}
    {(!isGuest && !isLoggedIn) && <About></About>}
    {(showLogin) && <Login showLogin={showLogin} isLoggedIn={isLoggedIn} setshowLogin={setshowLogin} setIsLoggedIn={setIsLoggedIn}></Login>}
    </>
  )
}

export default Main
