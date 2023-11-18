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

export default function HomepageTask({ quickTask, setQuickTask, handleQuickTask }) {
  


  return (
    <div>
       <div className='new-task-container'>
          <h4  >Create a quick task:</h4>
        <div className='glassmorphic-search-bar-cat-quick mt-2'>
          <form onSubmit={handleQuickTask}>
            <input value={quickTask}  onChange={(e) => setQuickTask (e.target.value)} type='text' placeholder='Add a quick task...'></input>
            <img onClick={handleQuickTask}  src={sentMessage} alt='sent-message' style={{ width: "30px", marginRight: "15px"}}/>
          </form>
          <div className='quick-task-container'> 
            <div className="b-example-divider"></div>
            <div className='to-do-quick' onClick={() => console.log("It is clicked!")}>
            <img onClick={() => console.log("It is clicked!")} src={trashIcon} alt='sent-message' style={{ width: "30px"}}/>
            </div>
            <div className="b-example-divider"></div>
            <div className='to-do-quick' onClick={() => console.log("It is clicked!")}>
            <img src={trashIcon} alt='sent-message' style={{ width: "30px"}}/>
            </div>
            
        
            
            
          </div> 

          {/* <Lottie animationData={taskAnimation} style={{width: "300px", marginLeft: "2.5rem"}}/> */}

         
        </div>    



       </div>



    </div>
  )
}
