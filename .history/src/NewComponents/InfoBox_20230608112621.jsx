// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function InfoBox({title,body}) {
  return (
    <div
    style={{
      backgroundColor: 'grey',
      width :"800px"
    }}
    >
        <h1>{title}</h1>
        <p>{body} </p>
    </div>
  )
}

export default InfoBox