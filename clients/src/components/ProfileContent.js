import React from 'react'
import{useNavigate} from 'react-router-dom'
function ProfileContent() {
  const redirect = useNavigate();
  return (
    <div className='profile-content' >
        <form className='profile-form'>
            <label className='pl'>
                username
                <input type="text" placeholder='Davinci Developer' />
            </label>
               <label className='pl'>
                Github Profile link
                <input type="text" placeholder='http://github.com/Davinci-Developer' />
            </label>
               <label className='pl'>
                Twitter Account
                <input type="text" placeholder='http://twitter.com/DavinciDeveloper' />
            </label>
               <label className='pl'>
                Email Address
                <input type="email" placeholder='davincideveloper01@gmail.com' />
            </label>
               <label className='pl'>
                Linkedin Account
                <input type="text" placeholder='http://linkedin.com/DavinciDeveloper' />
            </label>
            <button className='save-changes'>
              save changes
            </button>
            <button className='go-back' onClick={
              ()=>redirect('/')
            } >
              go back
            </button>
        </form>
    </div>
  )
}

export default ProfileContent