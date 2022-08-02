import React, { useState } from 'react'
import Upload from '../components/Upload'
import { FaUpload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


function Upbtn() {
    const [cont,showCont]= useState(false);
    const click = ()=>{
        showCont(true)
    }
    const UploadNavigate = useNavigate();
    
   
  return (
    <button className='uplb'  
    
    onPointerover={click}
    onClick={()=>{
      UploadNavigate('/upload')
    }}
    > 
    Upload-Project.
    {cont &&(<Upload/> )}
    <FaUpload />

    
    
      </button> 
  )
}

export default Upbtn