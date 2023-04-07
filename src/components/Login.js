import React from 'react'
import './login.css'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router'
function Login() {
  const setuser=(e)=>{
    {
      localStorage.setItem('username',e.target.value)
    }
  }
  const route = useNavigate();
  return (
    <div className="login">
      <img className='logo' src={logo} alt=""/>
      <form className='form'>
        <h2 className='title'>Sign in</h2>
        <label className='label'>UserName or Phone number</label>
        <input className='input' type="text" onChange={setuser} required />
        <label className='label'>password</label>
        <input className='input' type="password" required/>
        <button className="button" onClick={()=>route('/')}>Sign in</button>
        <div className='desc'>
        By continuing, you agree to Amazon's
        <span className='span'> Conditions of Use
          </span>
           and
          <span className='span'> Privacy Notice.</span>
        </div>
        <p className='help'>Need help?</p>
      </form>
   
     <div className='footer'> 
       <div className='links'>
        <span className='span'> Conditions of Use </span>
        <span className='span'>   Privacy Notice   </span>
        <span className='span'>  Help </span>
       </div>
       <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
     </div>
    </div>
  )

}

export default Login