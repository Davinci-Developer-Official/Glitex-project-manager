import { FaBell } from "react-icons/fa";

import React, { useEffect } from 'react'
import {useState} from 'react'
import Boxnotification from "./Boxnotification";


function Notification() {
  const [not,setNot] =useState([
      { 
        id: 1,
        tittle: "board Meeting",
        date: '04/12/2023',
        sender: ' sent by admin'
      },
        {
          id: 2,
        tittle: "Project organization",
        date: '04/12/2023',
        sender: 'sent by Project Manager'
      },
        {
          id: 3,
        tittle: "Retake The Project",
        date: '04/12/2023',
        sender: 'sent by Regional Manager'
      }
    ]);
   //delete task
   const deleteTask = (id)=>{
      setNot(not.filter((single)=>{
        single.id !== id
      }) ,
      useEffect(
        window.location.reload(true)

      )
      )
    }
  const exit =()=>{setisShownHoverContent(false)}
  const click= ()=>{setisShownHoverContent(true)}
  const [isShownHoverContent,setisShownHoverContent ] = useState(false); 
  
  return (
    <div >
    <button 
    
    onClick={click}
    onDoubleClick={exit}
            
  
    className='notbtn'
    >
        <FaBell/>
    </button>
    {isShownHoverContent && (
      <div className="notification-box">
        {not.length >0 ? <Boxnotification not={not} onDelete={deleteTask} />:'No notifications available'}
      </div>
    )}

    </div>
  )
}



export default Notification;