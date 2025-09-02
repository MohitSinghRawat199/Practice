import React, { useState } from 'react'
import "./Post.css"

const Pagination = ({ pageNo, setPageNo }) => {

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }
    const prevThreeNoArr = Array.from({ length: 3 },
        (_, index) =>
            pageNo - 1 - index
    ).filter((value)=>value>0).reverse();

    const nextTreadNoArr=Array.from({length:4},
        (_, index)=>pageNo + index);
    
    const PaginationArr=[...prevThreeNoArr,...nextTreadNoArr];

    const handlePrev = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    }
    return (
        <div className='pagination_container'>
            {pageNo > 1 ?
                (<button onClick={handlePrev} className='page-btn'>
                    {"<"}</button>) :
                ("")
            }
            {
                PaginationArr.map((value,index)=>{
                    return <button key={index} onClick={()=>setPageNo(value)} className={value===pageNo?`page-btn active`:`page-btn`}>{value}</button>
                })
            }
            
            <button onClick={handleNext} className='page-btn'>{">"}</button>
        </div>
    )
}

export default Pagination
