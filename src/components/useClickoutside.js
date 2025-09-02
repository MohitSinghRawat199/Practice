// import React, { useEffect } from 'react'

import { useEffect } from "react";

// const useClickoutside = (elementRef,handler,ignoreRef) => {
//     useEffect(()=>{
//         const cb = (e)=>{
//             if(elementRef.current &&
//              !elementRef?.current?.contains(e.target)&&
//              (!ignoreRef || !ignoreRef.current.contains(e.target))){
//                 handler();
//             }
//         }
//         document.addEventListener("mousedown",cb); 

//         return ()=>{
//             document.removeEventListener("mousedown",cb);
//         }

//     },[ elementRef,handler])
// }

// export default useClickoutside







export default function useClickoutside(ignoreRef ,elementRef, handler) {

    useEffect(() => {
        const cb = (e) => {
            if (elementRef.current && 
                !elementRef.current.contains(e.target) && (!ignoreRef.current || !ignoreRef.current.contains(e.target)) ) {
                handler();
            }
        }

        document.addEventListener("mousedown", cb);

        return () => {
            document.removeEventListener("mousedown", cb)
        }

    }, [elementRef,handler,ignoreRef]);

}











