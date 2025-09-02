import React, { useRef, useState } from 'react'
import './Toast.css'

const Toast = () => {
    const [Toast, setToast] = useState([]);
    const TimerRef = useRef({});

    const AddList = (message, type) => {
        const id = new Date().getTime();
        const newList = [...Toast, { id, message, type }];
        setToast(newList);
         TimerRef.current[id]=setTimeout(()=>Delete(id),5000);
    }
    const Delete = (id)=>{
        clearTimeout(TimerRef.current[id]);
        delete TimerRef.current[id];
        setToast((prev)=>prev.filter((Toast)=>Toast.id!==id))
    }


    return (
        <div>

            <div className='Toast-Container'>
                {
                    Toast.map(({ id, message, type }) => {
                        return (
                            <div className={`Toast ${type}`}>
                                {message}<span onClick={()=>Delete(id)}>X</span>
                            </div>
                        )
                    })
                }

            </div>
            <button onClick={() => AddList("Success", "success")}>Success</button>
            <button onClick={() => AddList("Info", "Info")}>Info Toast</button>
            <button onClick={() => AddList("Warning", "warning")}>Warning Toast</button>
            <button onClick={() => AddList("Error", "error")}>Error Toast</button>
        </div>
    )
}

export default Toast
