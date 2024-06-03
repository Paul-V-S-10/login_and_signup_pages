import React, { useState } from 'react'
import './SignUp.css'


const SignUp = () => {
  const [firstName,setFirstName]  = useState('')
  const [lastName,setLastName]  = useState('')
  const [gender,setGender]  = useState('')
  const [email,setEmail]  = useState('')
  const [password,setPassword]  = useState('')
  const [securityQuestion,setSecurityQuestion]  = useState('')
  const [answer,setAnswer]  = useState('')
  const [photo,setPhoto] = useState([])



  return (
    <div className='signUp'>
      <div className="container">
        <div className="header"><h1>Sign Up</h1></div>
        <div className="inputbox">
        <input onChange={(e) => {setFirstName(e.target.value)}} className='inputBox' type="text" placeholder='First Name' />
        </div>
        <div className="inputbox">
          <input onChange={(e) => {setLastName(e.target.value)}} className='inputBox' type="text" placeholder='Last Name' />
        </div>
        <div className="gender">
          <div className="title">Gender:  </div>
          <div><input onClick={(e) => {setGender(e.target.value)}} type="radio" name="gender" value="male"/>Male</div>
          <div><input onClick={(e) => {setGender(e.target.value)}} type="radio" name="gender" value="female"/>Female</div>
        </div>
        <div className="inputbox">
          <input onChange={(e) => {setEmail(e.target.value)}} className='inputBox' type="text" placeholder='Email' />
        </div>
        <div className="inputbox">
          <input onChange={(e) => {setPassword(e.target.value)}} className='inputBox' type="text" placeholder='Password'/>
        </div>
        <div className="securityQuestion">
          <div className="title">Security Question :</div>
          <div className="select">
          <select onClick={(e) => {setSecurityQuestion(e.target.value)}} className='ddlsqn' name="ddlsqn">
                    <option value="select">---Options---</option>
                    <option value="Favspots">Favourite sports</option>
                    <option value="Firstschooling ">First place of schooling</option>
                </select>
          </div>
        </div>
        <div className="answer">
          <div className="title">Answer :</div>
          <div className="box">
            <input onChange={(e) => {setAnswer(e.target.value)}} type="text" className='inputBox' />
          </div>
        </div>
        <div className="photoUpload">
          <div className="title">Photo :</div>
          <div className="photo"><input onChange={(e) => {setPhoto(e.target.value)}} className="photoInput" type="file" name="filephoto"/></div>
        </div>
        <div className="loginQuestion">
          <div className="question">Aldready have an account?</div>
          <div className="loginButton">Login</div>
        </div>
        <div className="signupButton">
          <button className='signupbutton'>SignUp</button>
        </div>
      </div>
    </div>
)
}
export default SignUp