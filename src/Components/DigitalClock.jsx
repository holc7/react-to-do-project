import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import afternoonAnimation from "../assets/animations/cloud-raining.json"

const AfternoonAnimation = () => {
    return <Lottie animationData={afternoonAnimation} />
}

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
    const demoTime = () => {
        const newTime = new Date(time.getTime());
        newTime.setHours(newTime.getHours() + 5 )
        setTime(newTime)
    }
    return (  
        <div className="status-weather-container">
        <div className="row-container" style={{ display: 'flex'}}>
            <div className="clock-container"> 
                <p className="clock-status mt-3">Good Morning!</p>
                <div className="digital-clock" onClick={demoTime}>
                    {formatTime(time)}
                </div>
            </div>
            <div className="second-container">
                <Lottie animationData={afternoonAnimation} style={{ width : "150px", height: "150px", marginBottom: "40px"}}/>
            </div>
        </div>
    </div>
    )
}
 
export default DigitalClock;