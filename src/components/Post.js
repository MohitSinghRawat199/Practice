import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import "./Post.css"
import axios from 'axios';

const Post = () => {
  
const [data,setData]=useState([]);
const [pageNo,setPageNo]=useState(5);

useEffect(()=>{
 axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=>setData(res.data));
},[pageNo]);


  return (
    <div>
      <div className='container'>
        <div className='post-container'>
            {
                data?.map((data,index)=>{
                    return (
                        <img key={index}
                         src={data.download_url}     
                        />
                    )
                })
            }
        </div>
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Post
