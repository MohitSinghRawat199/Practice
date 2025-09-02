import React, { useState } from 'react'
import "./Tab.css"

const Tab = ({tabsData,onChange}) => {
    const [active,setactive]=useState(0);
  return (
    <div>
      {
        tabsData.map((Data,index)=>{
            return(
                <>
                   <button 
                   key={index}
                   className={active==index?"Active":""}
                    onClick={()=>{setactive(index);onChange(index);}}
                    style={{padding:"0.5rem", width:"5rem"}}>{Data.label}</button>
                 </>
            )
        })
      }
      <div style={{border:"1px solid black", height:"500px",padding:"0.5rem", width:"20rem",borderTop:"none"}}>
          {tabsData[active].content}
      </div>
    </div>
  )
}

export default Tab
