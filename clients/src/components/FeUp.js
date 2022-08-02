import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FeedBbtn from './FeedBbtn';


function FeUp() {
      const [cont,showCont]= useState(false);
    const show = ()=>{
        showCont(true)
    }
    const exit =()=>{
        showCont(false)
    }
    let redirect = useNavigate();
  return (
    <div className='fbb'  
    onMouseEnter={show}
    onMouseLeave={exit}
    onClick={
      ()=> redirect('/feedback')
    }
    > 
    Veiw Feedback
    <br/>
     {cont &&(<span > Now !</span>)}

     <FeedBbtn/>
     </div> 
     
  )

}

export default FeUp;