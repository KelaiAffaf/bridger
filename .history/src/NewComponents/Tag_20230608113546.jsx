/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Tag({tags}) {
  return (
   <div>
    <div 
    
    >
      {tags && tags.map((ele,index)=>
      <div
      style={{
        borderRedius: '5px',
        backgroundColor: 'grey',
      }} 
      key={index} >
        {ele}
      </div>)
    }
    </div>
   </div>
  )
}

export default Tag