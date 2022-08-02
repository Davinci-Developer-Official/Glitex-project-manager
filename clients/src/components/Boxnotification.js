/* eslint-disable react/prop-types */

import SingleNotification from '../components/Singlenotification'


function Boxnotification({not ,onDelete}) {
  
  const mapping =not.map(
      (single)=>(
        <SingleNotification key={single.id} single={single} onDelete={onDelete}/>
      )

    )

  return (
    
 
   <>
   {mapping}
   </>
    
   
  );
}

export default Boxnotification