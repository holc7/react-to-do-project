import React, { useState } from 'react'
import Lottie from 'lottie-react'
import taskAnimation from "../assets/animations/task-animation.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import sentMessage from "../assets/send-mess.png";
import trashIcon from "../assets/icons8-trash.svg"

const TaskAnimation = () => {
  return <Lottie animationData={taskAnimation} />
}

export default function HomepageTask({ quickTasks, setCurrentTask, handleFormSubmit, setQuickTasks, handleTaskDelete }) {
  


  
  
  return (
    <div className='new-task-container'>
      <h4>Create a quick task:</h4>
      <div className='glassmorphic-search-bar-cat-quick mt-2'>
        <form onSubmit={handleFormSubmit}>
          <input 
            name="quickTask" 
            onChange={(e) => setCurrentTask(e.target.value)}
            type='text' 
            placeholder='Add a quick task...'
          />
          <img onClick={handleFormSubmit} src={sentMessage} alt='sent-message' style={{ width: "30px", marginRight: "15px"}}/>
          </form>
        <div className='quick-task-container'>
          {quickTasks.map((task, index) => (
           <div key={index} className='to-do-quick mt-2'>
              <p style={{marginTop : "15px"}}>{task}</p>
              <img src={trashIcon} alt='Delete task' style={{ width: "30px", marginRight: "5px", textAlign: "center"}} onClick={() => handleTaskDelete(index)}/>
            </div>
          ))}

          

  
      
     
        
            
            
          </div> 
            {quickTasks.length === 0 && <Lottie  animationData={taskAnimation}  style={{width: "280px", marginLeft:"2.5rem"}}/>}
         

         
        </div>    






    </div>
  )
}
