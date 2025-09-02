// import React, { useRef } from 'react'
// import "./Modal.css"
// import useClickoutside from './useClickoutside';

// const Modal = ({ignoreRef, isOpen,closeModal}) => {
//     const modalRef =useRef();
//     useClickoutside(modalRef,closeModal,ignoreRef)
//     if(!isOpen)
//     {
//         return null;
//     }
//     return (
//         <div ref={modalRef} className='modal-container'>
//             <p>In VS Code, you can generate
//                 "Lorem Ipsum" placeholder text using
//                 Emmet abbreviations, which are built-in</p>
//             <button onClick={closeModal}>close</button>
//         </div>
//     )
// }

// // export default Modal





import { useRef } from "react";
import "./Modal.css";
import useClickoutside from "./useClickoutside";

export default function Modal({ ignoreRef, isOpen, closeModal }) {
    const elementRef=useRef();
    useClickoutside(ignoreRef, elementRef,closeModal)


    if (!isOpen) {
        return null;
    }
    

    return (
        <>
            <div ref={elementRef} className="modal-container">
                <p>Hi i am mohit singh rawat
                    I am software Engineer
                </p>
                <button onClick={closeModal}>close Modal</button>
            </div>
        </>
    )
}



















