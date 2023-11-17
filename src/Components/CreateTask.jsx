

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd, faSuitcase, faSchool, faJetFighter,
  faExclamationTriangle, faMinus, faArrowCircleDown, faSmile
} from '@fortawesome/free-solid-svg-icons';
import sentMessage from "../assets/send-mess.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CreateTask() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDateChange = (date) => {
    setDueDate(date);
    setIsCalendarVisible(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() === "") {
        alert("Please type something!") && setIsCalendarVisible(false)
    
    

    return;
    }
    console.log('Task:', task, 'Due Date:', dueDate.toLocaleDateString());
    
    setTask("");
    setDueDate(new Date());
    setIsCalendarVisible(false);
  };

  return (
    <div className='create-task-container d-flex flex-column'>
      <h4>Task name</h4>
      <div className='glassmorphic-search-bar-cat'>
        <form onSubmit={handleSubmit}>
          <input 
            onChange={handleTaskChange} 
            onFocus={() => setIsCalendarVisible(true)} 
            value={task} 
            type='text' 
            placeholder='Add new task....'
          />
          {/* <input 
            type="text" 
            value={dueDate.toLocaleDateString()}  
            readOnly 
            onClick={() => setIsCalendarVisible(!isCalendarVisible)} 
            placeholder='Due date'
          /> */}
          {isCalendarVisible && (
            <Calendar 
              onChange={handleDateChange} 
              value={dueDate} 
            />
          )}
           <button className='quick-add-button-add' type='submit'>
            <img src={sentMessage} alt='sent-message' style={{ width: "30px"}}/>
          </button>
        </form>
      </div>

      <h5 className='category-text mt-3'>Categories</h5> 
      <div className={!isCalendarVisible ?  'category-container' : "category-container-active-calendar"}>
        <div className="category-body-container">
            <div className='category-separator mt-1 d-flex justify-content-around'>

                    <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faSuitcase} size="2xl"/>
                        <div className="icon-text">WORK</div>
                      </div>
                      <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faSchool} size="2xl"/>
                        <div className="icon-text-school">SCHOOL</div>
                      </div>
    
                      <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faJetFighter} size="2xl"/>
                        <div className="icon-text-holiday">HOLIDAY</div>
                      </div>
                      <div className="icon-border-cat-add">
                        <FontAwesomeIcon  className="test-fa-cat-add" icon={faAdd} size="2xl"/>
                        <div className="icon-text">ADD</div>
                      </div>
                      
                    </div>      
                     






            </div>       
        </div>

        <h5 className='category-text'>Urgency</h5> 
      <div className={!isCalendarVisible ?  'category-container' : "category-container-active-calendar"}>
        <div className="category-body-container">
            <div className='category-separator mt-2 d-flex justify-content-around'>

                    <div className="icon-border-cat-high">
                        <FontAwesomeIcon  className="test-fa-cat-high" icon={faExclamationTriangle} size="2xl"/>
                        <div className="icon-text">HIGH</div>
                      </div>
                      <div className="icon-border-cat-medium">
                        <FontAwesomeIcon  className="test-fa-cat-minus" icon={faMinus} size="2xl"/>
                        <div className="icon-text-medium">MEDIUM</div>
                      </div>
    
                      <div className="icon-border-cat-low">
                        <FontAwesomeIcon  className="test-fa-cat-low" icon={faArrowCircleDown} size="2xl"/>
                        <div className="icon-text-low">LOW</div>
                      </div>
                      <div className="icon-border-cat-add">
                        <FontAwesomeIcon  className="test-fa-cat-add" icon={faSmile} size="2xl"/>
                        <div className="icon-text">ZERO</div>
                      </div>
                      
                    </div>      
                     






            </div>       
        </div>
        





    </div>

  )
}
