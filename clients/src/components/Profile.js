
import React, { useEffect, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import Pbox from './Pbox';

function Profile() {
 
  const[leave,setLeave]=useState(true);
  const[box,showBox]= useState(false);
  
  const exit = ()=>{ 
    setLeave(false)
    useEffect(
      
      window.location.reload(false)
    )
 
  }
  const click=()=>{showBox(true); console.log('profile box prompted');}
  return (
    <button className='profile' 
    onClick={click}
    
    >
        
      {box && (<>
      <button onClick={exit} ><FaTimes/></button>
      {leave &&<Pbox  />}
      </>)}
      
     
      
    </button>
  )
}

export default Profile