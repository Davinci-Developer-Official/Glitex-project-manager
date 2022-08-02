import React from 'react'
import { FaGithub, FaGoogle, FaStackOverflow } from 'react-icons/fa'

function Outsource() {
  return (
    <div className='outsorce'>
        <p className='lw'>Login with</p>
        <div ><FaGoogle href='www.google.com' className='icons-info' /></div>
        <div ><FaGithub href='www.github.com' className='icons-info' /></div>
        <div ><FaStackOverflow href='www.stackoverflow.com' className='icons-info' /></div>
    </div>
  )
}

export default Outsource