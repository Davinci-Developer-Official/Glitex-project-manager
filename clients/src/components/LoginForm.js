import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [showPass,setShowPass]= useState(false);
    let show = ()=>{
            setShowPass(true)
    }
    let hide = ()=>setShowPass(false);
    
    let redirect = useNavigate();
    

  return (
    <div 
    className='login-form'
    >
        <form className='form-login'>
            <label className='lf' >
                username
                <input type="text"  placeholder='Davinci Developer' className='lb' />
            </label>
              <label className='lf'>
                email address
                <input type='email' placeholder='davincideveloper01@gmail.com' className='lb' />
            </label>
            <label className='lf'>
                Password
                <div className='lp'>
                <input type={showPass ? 'text' : 'password' } className='lb'
                placeholder='****************'
                />
                <FaEyeSlash
                 onClick={show}
                 onDoubleClick={hide} 
                 style={{cursor:'pointer'}}
                 className='eye'/>
                </div>
            </label>
            <button className="ls">
                login
            </button>

            <div className='link'>Have no account ? <a onClick={()=>{
                redirect('/register')
            }} >Register</a> </div>
        </form>
    </div>
  )
}

export default LoginForm