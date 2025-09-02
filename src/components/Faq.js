// import React, { useState } from 'react'
// import "./Faq.css"
// import FaqD from './FaqD'
// import Data from "./FaqData.json"

// const Faq = () => {
//     const [showIndex,setshowIndex]=useState(3);
//     const handleQna=(index)=>{
//          setshowIndex((prev)=>{
//             if(prev===index){
//                 return -1;
//             }
//             return index;
//          });
//     }
//     return (
//         <div>
//             {
//                 Data.faqs.map((qna,index) => {
//                     return (
//                         <div className='qna'>
//                         <FaqD qna={qna}  showAns={index==showIndex} handleQna={()=>handleQna(index)}/>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Faq


import React, { useState } from 'react'
import data from "./FaqData.json"
import FaqD from './FaqD'

const Faq = () => {
 const [showIndex,setshowIndex]=useState(-1);
 const handleQna = (index)=>{
    setshowIndex((prev)=>{
        if(prev==index)
        {
            return -1;
        }
        return index;
    })
 }
  return (
    <div>
      {
        data.faqs.map((qna,index)=>{
            return(
                <FaqD qna={qna} showans={index==showIndex} handleQna={()=>handleQna(index)}/>
            )
        })
      }
    </div>
  )
}

export default Faq
