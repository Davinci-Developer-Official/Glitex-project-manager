import React from 'react'
import LoginForm from '../components/LoginForm'
import Outsource from '../components/Outsource'
import Wlback from '../components/Wlback'

function Login() {
  return (
    <div 
    className='login'
    >   
        <Wlback/>
        <LoginForm/>
        <Outsource/>
    </div>
  )
}

export default Login