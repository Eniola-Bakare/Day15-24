import React from 'react'

function MemoComp({name}) {
  console.log('rendering memoooo!')
  return (
    <div>
        <p>MemoComp {name}</p>
    </div>
  )
}

export default React.memo(MemoComp)
