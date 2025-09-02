import React from 'react'
import DaySlots from './DaySlots'
import "./Style.css"
import Event from './Event'
import events from "./data.json"

const DayView = () => {
    // console.log(events);
    return (
        <div className='calender'>
            <div className='line'></div>
            <DaySlots />
            <Event events={events}/>
        </div>
    )
}

export default DayView
