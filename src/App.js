import { useRef, useState } from 'react';
import './App.css';
import Faq from './components/Faq';
import Modal from './components/Modal';
import Otp from './components/Otp';
import PasswordGenerator from './components/PasswordGenerator';
import Post from './components/Post';
import Star from './components/Star';
import StopWatch from './components/StopWatch';
import Toast from './components/Toast';
import DragAndDrop from './components/DragAndDrop';
import Signals from './components/Signals';
import Traffic from './components/Traffic';
import DayView from './components/Calender/DayView';
import Tabs from './components/Tab/Tabs';
import Todo from './components/Todo/Todo';

function App() {
// const[showModal,setShowModal]=useState(false);
// const buttonRef = useRef();
const initialData = {
  Todo:[
    "Design Ui mockups",
    "set Up project",
    "write unit test",
    "integrate payment gateway"
  ],
  Inprogress:[
    "Develop authentication system",
    "Implement ReactJs"
  ],
  Completed:[
    "setUp CI/CD pipelines",
    "Conduct code reviews",
    "sDeploy initial version to signup"
  ]
}


  return (
    <div className="App">
      {/* <StopWatch/> */}
      {/* <PasswordGenerator/>,m */}
      {/* <Toast/> */}
      {/* <Star/> */}
      {/* <Otp/> */}
      {/* <Faq/> */}
      {/* <Post/> */}
      {/* <button  ref={buttonRef} onClick={()=>setShowModal((prev)=>!prev)}>Show Modal</button>
      <Modal ignoreRef={buttonRef} isOpen={showModal} closeModal={()=>setShowModal(false)}/>
        {console.log(showModal)} */}

      {/* <button onClick={()=>setShowModal((prev)=>!prev)} ref={buttonRef}>{!showModal?'show Modal':'close Modal'}</button>
      <Modal ignoreRef={buttonRef} isOpen={showModal} closeModal={()=>setShowModal(false)} /> */}
      {/* <DragAndDrop initialData={initialData}/>*/}

      {/* <Traffic/> */}
      {/* <DayView/> */}
      {/* <Tabs/> */}
      <Todo/>
      
    </div>
  );
}

export default App;
