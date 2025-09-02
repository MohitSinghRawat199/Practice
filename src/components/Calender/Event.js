import React from 'react'
import "./Style.css"

const Event = ({ events }) => {
    // console.log(events);
    return (
        <div>
            {
                events.map((event) => {
                    const startHour = event.start.split(":")[0];
                    const startMinutes = event.start.split(":")[1];
                    const EndHour = event.end.split(":")[0];
                    const EndMinute = event.end.split(":")[1];
                    const top = startHour*5+(startMinutes/60)*5;
                    const height = (EndHour-startHour)*5+(EndMinute-startMinutes)*5;
                    
                    return(
                        <div className='event' style={{top:`${top}rem`,height:`${height}rem`}}>
                            {event.title}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Event
