import React, { useEffect, useState } from 'react'

import Admin from './Admin';
import Settings from './Settings';
import Users from './Users';
import {FaBars, FaTimes} from 'react-icons/fa'
import ForumUi from './ForumUi';
function Menu() {
    const exit =()=>{showSideMenu(false)
    useEffect(
     
      window.location.reload(false)
    )
    }
    const click= ()=>{showSideMenu(true)}
    const[sideMenu ,showSideMenu]= useState(false);
    
  
  return (
    <button
    onClick={click}
    onDoubleClick={exit}
    >
        <FaBars/>
        {sideMenu&&(<div className='side-menu'>
            <button className='exit' onClick={exit} ><FaTimes/></button>
            
            <Users/>
            <Admin/>
            <ForumUi/>
            <Settings/>

        </div>)}
        </button>
  )
}

export default Menu