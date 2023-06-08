/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Tag({tags}) {
  return (
   <div>
    <div 
    style={{
     display:"flex",
     flexDirection:"column",
     gap:10,
    }}
    >
      {tags && tags.map((ele,index)=>
      <div
      style={{
        borderRadius: '15px',
        backgroundColor: '#D8D8D8',
        padding: '10px',
      }} 
      key={index}  >
        {ele}
      </div>)
    }
    </div>
   </div>
  )
}

export default Tag