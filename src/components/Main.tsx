import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

const [showLogin, setshowLogin] = useState(false)

const Main = () => {
  return (
    <>
    <Navbar></Navbar>
    {showLogin && <Login></Login>}
    </>
  )
}

export default Main
