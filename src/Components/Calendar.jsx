import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import BottomNavBar from "./BottomNavBar";


const MyCalendar = () => {
    const [calendarOpen, setCalendarOpen] = useState (false);
    const [value, setValue] = useState(new Date());

    const handleCalendar = () => {
        setCalendarOpen(calendarOpen);
    }

    const onChange = (newValue) => {
        setValue(newValue)
    }

    return (  
        <div>
            <Calendar
                onChange={onChange}
                value={value}   
            />
            <BottomNavBar handleCalendar={handleCalendar} />
           
        </div>
    );
}
 
export default MyCalendar;