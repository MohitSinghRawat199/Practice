import React, { useRef, useState } from 'react'

const DragAndDrop = ({ initialData }) => {
    const [data, setdata] = useState(initialData);
    const DragItem = useRef();
    const DragContainer =useRef();

    const handleDragStart = (e,container,item)=>{
      e.target.style.opacity ="0.5"
      DragItem.current = item;
      DragContainer.current=container;
    }

    const handleDragEnd =(e)=>{
      e.target.style.opacity = "1"
    }

   const handleDrop =(e,targetContainer)=>{
       const Item = DragItem.current;
       const sourceContainer = DragContainer.current;
       setdata((prev)=>{
        const newData = {...prev};
        newData[sourceContainer]=newData[sourceContainer].filter((i)=>i!==Item);
        newData[targetContainer]=[...newData[targetContainer],Item];
        return newData;
       });
   }

   const handleDragOver = (e)=>{
    e.preventDefault();
   }
    
    // console.log(item,sourceContainer);

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {
                Object.keys(data).map((container,index) => {
                    return (
                        <div 
                        onDrop={(e)=>handleDrop(e,container)}
                        onDragOver={(e)=>handleDragOver(e)}
                        style={{
                            userSelect:"none",
                            background:"#f0f0f0",
                            width:250,
                            height:500,
                            cursor:"move"
                        }}
                            key={index}>
                                <h2>{container}</h2>
                                {
                                    data[container].map((item)=>{
                                        return(
                                            <div>
                                                <div
                                                draggable
                                                onDragStart={(e)=>handleDragStart(e,container,item)}
                                                onDragEnd={(e)=>handleDragEnd(e)}
                                                style={{
                                                background:"white",
                                                padding:"1rem",
                                                margin:"0.5rem"
                                                }}
                                                >
                                                    {item}
                                                </div>
                                            </div> 
                                        )
                                    })
                                }
                            </div>
                    )
                })
            }
        </div>
    )
}

export default DragAndDrop
