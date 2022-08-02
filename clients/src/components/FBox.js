import React from 'react'
import Res from './Res'

function FBox({feedback,onDelete}) {
    const response = feedback.map((res)=>{
                <Res key={res.id} res={res} onDelete={onDelete} />
            }
        );
    
  return (
    <>
        {response}
    </>
  )
}

export default FBox