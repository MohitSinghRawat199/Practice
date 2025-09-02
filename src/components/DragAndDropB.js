import React, { useRef, useState } from 'react'

const DragAndDrop = ({ initialData }) => {
    // console.log(initialData)
    const [Data, setData] = useState(initialData)
    const dragItem = useRef();
    const dragContainer = useRef();

    const handleDragStart = (e, item, container) => {
        e.target.style.opacity = "0.5";
        dragItem.current = item;
        dragContainer.current = container;
    }

    const handleDragEnd = (e) => {
        e.target.style.opacity = "1";
    }

    const handleDrop = (e, targetContainer) => {
        const Item = dragItem.current;
        const sourceContainer = dragContainer.current;
        setData((prev) => {
            const newData = { ...prev }
            newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== Item);
            newData[targetContainer] = [...newData[targetContainer], Item]
            return newData;
        })
    }
    
    const handleDraOver = (e)=>{
        e.preventDefault();
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {
                Object.keys(Data).map((container) => {
                    return (
                        <>
                            <div
                                key={container}
                                onDrop={(e) => handleDrop(e, container)}
                                onDragOver={(e)=>handleDraOver(e)}
                                style={{
                                    background: "#f0f0f0",
                                    padding: "1rem",
                                    width: 250,
                                    minHeight: 300
                                }}
                            >
                                <h2>{container}</h2>
                                {Data[container].map((item) => {
                                    return (
                                        <div
                                            key={item}
                                            onDragStart={(e) => handleDragStart(e, item, container)}
                                            onDragEnd={handleDragEnd}
                                            draggable
                                            style={{
                                                userSelect: "none",
                                                padding: 16,
                                                margin: "0 0 8px 0",
                                                backgroundColor: "white",
                                                cursor: "move"
                                            }}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}

export default DragAndDrop
