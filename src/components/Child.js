import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.helloParent("Chennai")}> Welcome</button>
      <button onClick={props.newf}>New Func</button>
    </div>
  )
}

export default Child
