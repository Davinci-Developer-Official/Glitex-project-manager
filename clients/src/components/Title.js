import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const[welcome,setWelcome]=useState(false)
  const hover= ()=>{
    setWelcome(true);
    
  }
  const leave = ()=>{
    setWelcome(false)
  }
  let redirect = useNavigate();
  const refresh = ()=>{
    setWelcome(true);
    useEffect(
      window.location.reload(false)
    )

  }
  return (
    <div className='title' 
    onMouseEnter={hover} 
    onMouseLeave={leave}
    onDoubleClick={refresh}
    >
        <p style={{}}>Project manager.<br/></p>
        {welcome &&(
        <p> Welcome to glitex Forum...
          <br/>
          <a 
          onClick={
            ()=> redirect('/')
          }
          
          >
            go to dashboard!
          </a> 
        </p>
        )}
    </div>
  )
}





export default Header