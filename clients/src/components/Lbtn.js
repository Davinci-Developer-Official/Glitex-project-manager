import React from 'react'
import { useNavigate } from 'react-router-dom'

function Lbtn() {
  let redirect = useNavigate();
  return (
     <button 
     className='loginbtn'
     style={{cursor:'pointer'}}
     onClick={
      ()=> redirect('/login')
     }
     >login</button>
  )
}

export default Lbtn