import React, { useEffect, useRef, useState } from 'react'
import "./CountDownTimer.css";

const CountDownTimer = () => {
    const [Time, setTime] = useState({
        hour: 0,
        minutes: 0,
        second: 0,
    });

    const intervalRef = useRef(null);
    const formatTime = (num) => {
        return String(num).padStart(2, "0");
    };

    const [IsRunning, setIsRuning] = useState(false);

    const handleChange = (e, field) => {
        let val = parseInt(e.target.value, 10) || 0;
        let copyTime = { ...Time }
        copyTime[field] = val;
        copyTime.minutes += Math.floor(copyTime.second / 60);
        copyTime.second = copyTime.second % 60;
        copyTime.hour += Math.floor(copyTime.minutes / 60);
        copyTime.minutes = copyTime.minutes % 60;
        setTime(copyTime);
    }

    const HandleStart = () => {
        setIsRuning(prev => !prev);
    }

    const HandleReset = () => {
        clearInterval(intervalRef.current);
        setIsRuning(false);
        setTime({
            hour: 0,
            minutes: 0,
            second: 0,
        })
    }

    useEffect(() => {
        if (IsRunning) {
            if ((Time.hour == 0 &&
                Time.minutes == 0 &&
                Time.second == 0)) {
                return;
            }
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    const copyPrevTime = { ...prevTime };
                    copyPrevTime.second--;
                    if (copyPrevTime.second < 0) {
                        copyPrevTime.minutes--;
                        copyPrevTime.second = 59;
                        if (copyPrevTime.minutes < 0) {
                            copyPrevTime.hour--;
                            copyPrevTime.minutes = 59;
                            if (copyPrevTime.hour < 0) {
                                clearInterval(intervalRef.current);
                                return { hour: 0, second: 0, minutes: 0 };
                            }
                        }
                    }
                    return copyPrevTime;
                });
            }, 1000);
            return () => {
                clearInterval(intervalRef.current);
            }
        }
    }, [IsRunning])

    return (
        <div className="timer">
            <div>
                <div className="fields">
                    <input
                        style={{ width: "10%", height: "50px", fontSize: "24px" }}
                        placeholder='HH'
                        value={Time.hour}
                        onChange={(e) => handleChange(e, "hour")}
                        type="number" />
                    <input style={{ width: "10%", height: "50px", fontSize: "24px" }}
                        placeholder='MIN'
                        value={Time.minutes}
                        onChange={(e) => handleChange(e, "minutes")}
                        type="number" />
                    <input style={{ width: "10%", height: "50px", fontSize: "24px" }}
                        placeholder='SS'
                        value={Time.second}
                        onChange={(e) => handleChange(e, "second")}
                        type="number" />
                </div>
                <h2 className="display">{formatTime(Time.hour)}:{formatTime(Time.minutes)}:{formatTime(Time.second)}</h2>
                <div className="buttons">
                    {
                        <button style={{ width: "60px", height: "30px" }}
                            onClick={HandleStart}>{!IsRunning ? "Start" : "Pause"}</button>
                    }
                    {
                        IsRunning && <button style={{ width: "60px", height: "30px" }}
                            onClick={HandleReset}>Reset</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CountDownTimer
