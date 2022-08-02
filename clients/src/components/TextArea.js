import React from 'react'
import { useNavigate } from 'react-router-dom'

function TextArea() {
   let redirect = useNavigate(); 
  return (
   <article className='article'>
    Project Manager is a Website
    <br/>
    Dediated for uploading user  for users (developers) to upload projects
    <br/>
    to Admins (project Managers),Admins can respond to users by pointing out solutions for users to explore.
    <br/>
    <br/>
    This websites eliminates all complexities involved in project sharing by both parties,by 
    adhering to a straight forward approach.
    <br/>
    <br/>
    <br/>
    <a
    onClick={
      ()=> redirect('/upload')
    }>
      Upload project
    </a> or 
    <a 
    onClick={
      ()=>redirect('/feedback')
    }>
       Veiw feedback
    </a>


   </article>
  )
}

export default TextArea