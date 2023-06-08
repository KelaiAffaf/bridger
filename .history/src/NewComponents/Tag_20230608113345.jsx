/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Tag({tags}) {
  return (
   <div>
    <div 
    style={{
      borderRedius: '5px',
      backgroundColor: 'grey',
    }}
    >
      {tags && tags.map((ele,index)=><div key={index} >{ele}</div>)
    }
    </div>
   </div>
  )
}

export default Tag