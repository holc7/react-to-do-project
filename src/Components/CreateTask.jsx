

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd, faSuitcase, faSchool, faJetFighter,
  faExclamationTriangle, faMinus, faArrowCircleDown, faSmile, faAirFreshener, faUmbrellaBeach
} from '@fortawesome/free-solid-svg-icons';
import sentMessage from "../assets/send-mess.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CreateTask({ onAddTask, isNewTaskAdded, setIsNewTaskAdded}) {
    const [taskTitle, setTaskTitle] = useState("");
    const [category, setCategory] = useState("");
    const [urgency, setUrgency] = useState("");

  
  const [dueDate, setDueDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);



  const handleDateChange = (date) => {
    console.log("Selected Date:", date); 

    setDueDate(date);
    setIsCalendarVisible(false); 
  };

  const handleUrgencyClick = (urgencyValue) => {
    setUrgency(urgencyValue);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "" || !dueDate) {
        alert("Date and name are required!");
        return; 
    }
    const newMainTask = {
        title: taskTitle,
        category,
        urgency,
        dueDate: dueDate.toLocaleDateString()
    };

    onAddTask(newMainTask); // Call the onAddTask function with the new task object
    setTaskTitle(""); // Reset the title
    setCategory(""); // Reset the category
    setUrgency(""); // Reset the urgency
    setDueDate(new Date()); // Reset the due date to current date
    setIsCalendarVisible(false)
};
  return (
            <div>
              <div className='create-task-container d-flex flex-column'>
                <h4>Task name</h4>
                <div className='glassmorphic-search-bar-cat'>
                    <form onSubmit={handleSubmit}>
                    <input 
                       onChange={(e) => setTaskTitle(e.target.value)}
                        onFocus={() => setIsCalendarVisible(true)} 
                        value={taskTitle}
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
                <div className={!isCalendarVisible ?  'category-container' : "category-container-active-calendar" }>
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

                                <div onClick={() => handleUrgencyClick('High')} className="icon-border-cat-high">
                                    <FontAwesomeIcon  className="test-fa-cat-high" icon={faExclamationTriangle} size="2xl"/>
                                    <div className="icon-text">HIGH</div>
                                </div>
                                <div onClick={() => handleUrgencyClick('Medium')} className="icon-border-cat-medium">
                                    <FontAwesomeIcon  className="test-fa-cat-minus" icon={faMinus} size="2xl"/>
                                    <div className="icon-text-medium">MEDIUM</div>
                                </div>
                
                                <div onClick={() => handleUrgencyClick('Low')} className="icon-border-cat-low">
                                    <FontAwesomeIcon  className="test-fa-cat-low" icon={faArrowCircleDown} size="2xl"/>
                                    <div className="icon-text-low">LOW</div>
                                </div>
                                <div onClick={() => handleUrgencyClick('Zero')} className="icon-border-cat-add">
                                    <FontAwesomeIcon  className="test-fa-cat-add" icon={faSmile} size="2xl"/>
                                    <div className="icon-text">ZERO</div>
                                </div>
                                
                                </div>      
                                






                        </div>       
                    </div>
                
                            


                </div>

                <div className="second-all-tasks-container d-flex justify-content-around ">
                    <div className={
                        `${!isCalendarVisible ? "card-all-task-1 mt-5" : "full-hidden"}
                      
                        ${isNewTaskAdded ? "card-all-task-1-new-task" : ""}`
                  
                    
                    }>

                        <div className={!isCalendarVisible ? "icon-border-all-task-1 d-flex justify-content-between" : "WHAAAAAAAT"}>
                            <FontAwesomeIcon className="test-fa-tasks" icon={faSuitcase} size="2xl"/>
                            <FontAwesomeIcon className="test-fa-tasks" icon={faUmbrellaBeach} size="2xl"/>
                            <FontAwesomeIcon className="test-fa-tasks" icon={faJetFighter} size="2xl"/>
                            <FontAwesomeIcon className="test-fa-tasks" icon={faSchool} size="2xl"/>
                            </div>   
                        <h3 className="card-title-all-task-1">All tasks</h3>
                        </div>

                    <div className={!isCalendarVisible ? "card-all-task-2" : ""}>
                        <div className={!isCalendarVisible ? "icon-border-all-task-2" : "category-container-active-calendar"}>
                            <FontAwesomeIcon className="test-fa" icon={faSuitcase} size="2xl"/>
                            
                            </div>   
                        <h4 className="card-title-all-task-2">Work</h4>
                        </div>
                       
                    </div>
            </div>    



    
  )
}
