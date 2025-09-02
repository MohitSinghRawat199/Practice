// import React, { useEffect, useRef, useState } from 'react'
// import "./Otp.css"

// const Otp = ({ otplength = 6 }) => {
//     const [otpFields, setotpFields] = useState(new Array(otplength).fill(""));
//     const ref = useRef([])

//     // console.log(ref.current[0]);
//     const handleKeyDown = (e, index) => {
//         const key = e.key;
//         const copyOtpFields = [...otpFields];
//         copyOtpFields[index] = key;
//         if (key == "ArrowLeft") {
//             if ((index) > 0) {
//                 ref.current[index - 1].focus();
//             }
//         }
//         if (key == "ArrowRight") {
//             if (index + 1 < otpFields.length) {
//                 ref.current[index + 1].focus();
//             }
//         }
//         if (key === "Backspace") {
//             console.log("Backspace");
//             copyOtpFields[index] = "";
//             setotpFields(copyOtpFields);
//             if ((index) > 0) {
//                 ref.current[index - 1].focus();
//             }
//             return;
//         }
//         // console.log(key);
//         if (isNaN(key)) {
//             return;
//         }

//         if (index + 1 < otpFields.length) {
//             ref.current[index + 1].focus();
//         }
//         setotpFields(copyOtpFields);
//     }
//     useEffect(() => {
//         ref.current[0].focus();
//     },[])


//     return (
//         <div className='container'>
//             {
//                 otpFields.map((value, index) => {
//                     return (
//                         <input
//                             key={index}
//                             type='text'
//                             value={value}
//                             ref={(currenInput) => {
//                                 ref.current[index] = currenInput }}
//                             onKeyDown={(e) => handleKeyDown(e, index)} 
//                             onChange={()=>{}}
//                             />
//                     )
//                 })
//             }

//         </div>
//     )
// }

// export default Otp






import React, { useRef, useState } from 'react'
import "./Otp.css"

const Otp = ({ otpLength = 6 }) => {
    const [otpFields, setotpFields] = useState(new Array(otpLength).fill(""));
    const ref = useRef([]);

    const handleKeydown = (e, index) => {
        const key = e.key;
        const copyOtpFields = [...otpFields];
        if(key=="ArrowLeft")
        {
            if(index>0)
            {
                ref.current[index-1].focus();
            }
        }
        if(key =="ArrowRight")
        {
            if((index+1)<otpFields.length){
                ref.current[index+1].focus();
            }
        }
        if(key=="Backspace")
        {
            copyOtpFields[index]="";
            if(index>0)
            {
                ref.current[index-1].focus();
            }
            setotpFields(copyOtpFields);
            return;
        }
        if (isNaN(key)) {
            return;
        }
        if((index+1)<otpFields.length)
        {
            ref.current[index+1].focus();
        }
        copyOtpFields[index] = key;
        setotpFields(copyOtpFields);

    }

    return (
        <div className='conatiner'>

            {
                otpFields.map((value, index) => {
                    return (
                        <input type='text'
                            key={index}
                            value={value}
                            ref={(input)=>ref.current[index]=input}
                            onKeyDown={(e) => handleKeydown(e, index)}
                            onChange={() => { }}
                        />
                    )
                })
            }
        </div>
    )
}

export default Otp
