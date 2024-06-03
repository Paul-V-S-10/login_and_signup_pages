import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import { Outlet } from 'react-router-dom'

const MainUser = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MainUser