import React from 'react'
import "./Signal.css"

const Signals = ({isActive,color}) => {
  return (
    <div className='signal' style={{background:isActive?color:"gray", margin:"1rem"}}>
      
    </div>
  )
}

export default Signals
