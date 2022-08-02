import { useNavigate } from "react-router-dom"
import{FaArrowLeft} from 'react-icons/fa'
function Form() {
  
  let back = useNavigate();
  
  

  return (
    
    <div className='form-box'>
        <form className='form'>
            <label className="ul">
              Project Name
              <input type='text' placeholder='Project manager' />
            </label>
             <label className="ul">
              Project github link
              <input type='text' placeholder='https://github/Davinci-Developer/Project-Manager-V.1.0.0' />
            </label>
             <label className="ul">
              Project file
              <input type='file'  /> 
            </label>
             <label className="ul">
              Project Author
              <input type='text' placeholder='Davinci Developer & glitex Team' />
            </label>
             <label className="ul">
              Tech Stack Used
              <input type='text' placeholder='Mern stack' />
            </label>
             <label className="ul">
              Date Uploaded
              <input type='date' />
            </label>
             


            <input type="submit" style={{cursor:'pointer'}} className="submit"   />
        </form>
        <button style={{
          cursor:'pointer'
          }} 
          className='resubmit'
          onClick={
            ()=> back('/')
          }
          >
            <FaArrowLeft/>
          Go Back
        </button>
     
    </div>
  )
}


export default Form