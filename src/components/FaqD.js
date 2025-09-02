// import React from 'react'
// import "./Faq.css";

// const FaqD = ({ qna,showAns,handleQna}) => {
//     return (
//         <div>
//             {
//                 <div className='border'>{qna.question}
//                    <span onClick={handleQna}>{showAns?"-":"+"}</span>
//                 </div>     
//             }
//             {
//                 showAns && qna.answer
//             }
//         </div>
//     )
// }

// export default FaqD


import React from 'react'
import "./Faq.css"

const FaqD = ({ qna, showans, handleQna }) => {
    return (
        <div className='qna' onClick={handleQna}>
            {
                <div>
                    {qna.question}
                    <span>+</span>
                </div>
            }
            {showans &&
                <div className='border'>
                    {qna.answer}
                </div>
            }

        </div>
    )
}

export default FaqD
