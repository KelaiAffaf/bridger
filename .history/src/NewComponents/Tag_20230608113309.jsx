/* eslint-disable no-unused-vars */
import React from 'react'

// eslint-disable-next-line react/prop-types
function Tag({tags}) {
  return (
   <div>
    <div 
    style={{
      borderRedius: '5px',
      backgroundColor: 'grey',
    }}
    >
      {tags && tags.map(ele=><div key={ind} >{ele}</div>)
    }
    </div>
   </div>
  )
}

export default Tag