import React from 'react'
import Lottie from 'lottie-react'
import taskAnimation from "../assets/animations/task-animation.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import sentMessage from "../assets/send-mess.png";
import trashIcon from "../assets/icons8-trash.svg"

const TaskAnimation = () => {
    return <Lottie animationData={taskAnimation} />
}

const  formContainer = (e) => {
    e.preventDefault()
}

export default function HomepageTask() {
  return (
    <div>
       <div className='new-task-container'>
          <h4>Create a quick task:</h4>
        <div className='glassmorphic-search-bar-cat-quick mt-2'>
          <form onSubmit={formContainer}>
            <input type='text' placeholder='Add a quick task...'></input>
            <img src={sentMessage} alt='sent-message' style={{ width: "30px", marginRight: "15px"}}/>
          </form>
          <div className='quick-task-container'> 
            <div className="b-example-divider"></div>
            <div className='to-do-quick'>
            <img src={trashIcon} alt='sent-message' style={{ width: "30px"}}/>
            </div>
            <div className="b-example-divider"></div>
            <div className='to-do-quick'>
            <img src={trashIcon} alt='sent-message' style={{ width: "30px"}}/>
            </div>
            
            
          </div> 

          {/* <Lottie animationData={taskAnimation} style={{width: "300px", marginLeft: "2.5rem"}}/> */}

         
        </div>    



       </div>



    </div>
  )
}
