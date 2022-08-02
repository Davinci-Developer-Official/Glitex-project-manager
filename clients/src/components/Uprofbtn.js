import React from 'react'
import { useNavigate } from 'react-router-dom'

function Uprofbtn() {
    let redirect = useNavigate();

  return (
     < button 
     className='up'
     onClick={
      ()=> redirect('/profile')
     }
     >
        
        
            <img/>
            <a 
            className='content'
            onClick={
              ()=> redirect('/profile')
            }
            >
                Veiw your profile settings
            </a>
    
     </button>
  )
}

export default Uprofbtn