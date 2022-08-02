import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Rform() {
    const [showPass , setShowPass]= useState(false);
    const show = ()=> setShowPass(true);
    const hide = ()=> setShowPass(false);
    let redirect = useNavigate()
  return (
    <div className='reg-box'>
        <form className='reg-form'>
        <label className='lr'>
            Username
            <input type='text' className='ib' placeholder='Davinci Developer' />
        </label>
        <label className='lr'>
            email 
            <input type='email' className='ib' placeholder='davincideveloper01@gmail.com' />
        </label>
        <label className='lr'>
            github profile link
            <input type='text' className='ib' placeholder='http://github.com/Davinci-Developer' />
        </label>
        <label className='lr'>
            Phone number 
            <input type='text' className='ib' placeholder='+254798601308' />
        </label>
         <label className='lr'>
            create password 
            <div className='lrp'>
            <input type={showPass ? 'text' : "password"} 
            placeholder='**************'
            className='ib' />
            <FaEyeSlash
            onClick={show}
            onDoubleClick={hide}
            className="show"
            />
            </div>
        </label>
          <label className='lr'>
            confirm password 
            <div className='lrp'>
            <input type={showPass ? 'text' : "password"} 
            placeholder='**************'
            className='ib' />
            <FaEyeSlash
            onClick={show}
            onDoubleClick={hide}
            className="show"
            />
            </div>
        </label>
        <button className='ls'>
            Register
        </button>
        <p>if already have an account <a
        onClick={
            ()=> redirect('/login')
        }
        >Login</a></p>

        </form>
    </div>
  )
}

export default Rform