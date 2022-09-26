import React from 'react'
const myHeadingStyle = {
    fontSize: '48px',
    color: 'yellow'
}

function InlineStyling() {
  return (
    <div>
        <h1 style={myHeadingStyle}>In line styling</h1>
    </div>
  )
}

export default InlineStyling