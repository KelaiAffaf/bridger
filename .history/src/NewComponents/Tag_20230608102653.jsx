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
      {tags && tags.map(ele=><div >{ele}</div>)
    }
    </div>
   </div>
  )
}

export default Tag