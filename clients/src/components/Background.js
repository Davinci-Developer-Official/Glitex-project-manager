import React from 'react'
import Profileimg from './Profileimg'
import background from '../images/vlcsnap-2022-04-03-01h20m37s924.png'
function Background() {
  return (
    <div>
        <div className='background'>
            <img src={background} />
            
            <Profileimg/>
        </div>
        
        
        </div>
  )
}

export default Background