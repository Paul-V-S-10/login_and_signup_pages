import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div className='heading'><h1>Welcome to our Project</h1></div>
      <div className="loginButton">
        <Link to={'./Login'}>Login</Link>
      </div>
      <div className="signUpButton">
        <Link to={'./SignUp'}>SignUp</Link>
      </div>
    </div>
  )
}

export default Home