import React from 'react'
import "./Style.css"

const DaySlots = () => {
const slots = Array.from({length:24},(_,index)=>index+1);
  return (
    <div>
      {
        slots.map((slot)=>{
            return(
                <div className='slot'>{slot}:00</div>
            )
        })
      }
    </div>
  )
}

export default DaySlots
