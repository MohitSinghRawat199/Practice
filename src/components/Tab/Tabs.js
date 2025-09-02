 import React, { useState } from 'react';
import Tab from './Tab';

 const Tabs = () => {
    const [index,setindex]=useState(0);
    
 const tabsData = [
  {
    label: "Profile",
    content: <div>Profile Info Content</div>,
  },
  {
    label: "Dashboard",
    content: <div>Dashboard Content</div>,
  },
  {
    label: "Settings",
    content: <div>Settings Content</div>,
  },
  {
    label: "Invoice",
    content: <div>Invoice Content</div>,
  },
];

const onchangeIndex = (index)=>{
    setindex(index);
}
   return (
     <div>
       <Tab tabsData={tabsData} onChange={onchangeIndex}/>
       <h1>{index}</h1>
     </div>
   )
 }
 
 export default Tabs
 