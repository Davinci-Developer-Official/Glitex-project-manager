import React from 'react'
import Outsource from '../components/Outsource'
import Rform from '../components/Rform'
import Welcome from '../components/Welcome'

function Register() {
  return (
    <div className='register'>
      <Welcome/>
      <Rform/>
      <Outsource/>

    </div>
  )
}

export default Register