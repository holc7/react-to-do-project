import { useEffect, useState } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const intervalId = setInterval (() => {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []);
    const formatTime = (date) => {
        return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    }

    
    return (  
        <div className="clock-container"> 
            <p className="clock-status">Good Morning!</p>
            <div className="digital-clock">
            {formatTime(time)}
             </div>
        </div>
    );
}
 
export default DigitalClock;