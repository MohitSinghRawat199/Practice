import React, { useEffect, useState } from 'react'
import Signals from './Signals'

const Traffic = ( {lights=["red","yellow","green","blue"]}) => {
    const [active,setactive]=useState(0);

useEffect(()=>{
const interval = setInterval(()=>{
   setactive((prev)=>{
    return (prev+1)%lights.length;
   }) 
},[1000])

return()=>{
    clearInterval(interval);
}
},[])

  return (
    <div>
     {
        lights.map((color,index)=>{
            return <Signals isActive={index==active} color={color}/>
        })
     } 
    </div>
  )
}

export default Traffic
