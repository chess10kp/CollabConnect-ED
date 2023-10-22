import React from 'react'
import {useState} from 'react'

import Navbar from './Navbar'
import Login from './Login'


const Main = () => {
  const [showLogin, setshowLogin] = useState(false)
  return (
    <>
    <Navbar></Navbar>
    {showLogin && <Login></Login>}
    </>
  )
}

export default Main
