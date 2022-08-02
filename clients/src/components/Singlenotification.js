/* eslint-disable react/prop-types */

import{FaTimes} from 'react-icons/fa'


function Singlenotification({single,onDelete}) {
 
    const click=()=>{
      console.log('click')
    }
    

  
  return (
        <div className='single' onClick={click}>
            <h3 className='tit'>{single.tittle} </h3>
            <p className='send'>{single.sender}</p>
            <p className='date'>{single.date} </p>
            <><FaTimes 
            onClick={()=>onDelete(single.id)}
            style={{color:'black',cursor:'pointer',height:'30px',paddingLeft:'5%'}}/></>
            
     
        </div>
  )
}

export default Singlenotification;