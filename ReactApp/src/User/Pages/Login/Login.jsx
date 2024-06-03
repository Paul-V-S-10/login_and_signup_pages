import React, { useState } from 'react'
import './Login.css'


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <div className="login">
      <div className="container">
        <div className="welcome">WELCOME</div>
        <div className="email">
          <input className='emailInput' onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
        </div>
        <div className="password">
          <input className='passwordInput' onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
        </div>
        <div className="loginb">
          <button className='loginButton'>Login</button>
        </div>
        <div className="footer">
          <div className="question">Don't Have an account? </div>
          <div className="signup">SignUp</div>
        </div>
      </div>
      {email}
    </div>
  )
}

export default Login