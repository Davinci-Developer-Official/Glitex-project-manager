import React from 'react'
import { useNavigate } from 'react-router-dom'

function Rbtn() {
  let redirect = useNavigate();
  return (
   <button 
   className='registerbtn'
   style={{cursor:'pointer'}}
   onClick={
    ()=> redirect('/register')
  }
   > register</button>
  )
}

export default Rbtn