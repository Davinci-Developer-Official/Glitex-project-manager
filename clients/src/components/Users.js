import React from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
  let redirect = useNavigate();
  return (
    <div className='users'>
        
     
            Users
            <button className='cat1'
            onClick={
              ()=>{
                redirect('/upload')
              }
            }
            >
                Upload Data
            </button>
            <button 
            onClick={
              ()=> redirect('/feedback')
            }
            className='cat2'>
                Feed back
            </button>
            <button 
            onClick={
              ()=> redirect('/profile')
            }
            className='cat3'>
                user profile
            </button>
        
    </div>
  )
}

export default Users