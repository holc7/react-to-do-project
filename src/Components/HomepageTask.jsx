import React from 'react'
import Lottie from 'lottie-react'
import taskAnimation from "../assets/animations/task-animation.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

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
        <div className='glassmorphic-search-bar'>
          <form onSubmit={formContainer}>
            <input type='text' placeholder='Dont be shy....'></input>
            <button className='quick-add-button' type='submit'>ADD</button>
          </form>
          <div className='quick-task-container'> 
            <div class="b-example-divider"></div>
            <div className='to-do-quick'>
                <button className='quick-delete-button' type='submit'>Delete</button>
            </div>
            <div class="b-example-divider"></div>
            <div className='to-do-quick'>
                <button className='quick-delete-button' type='submit'>Delete</button>
            </div>
            <div class="b-example-divider"></div>
            <div className='to-do-quick'>
                <button className='quick-delete-button' type='submit'>Delete</button>
            </div>
            <div class="b-example-divider"></div>
            <div className='to-do-quick'>
                <button className='quick-delete-button' type='submit'>Delete</button>
            </div>
            
          </div> 

          {/* <Lottie animationData={taskAnimation} style={{width: "300px", marginLeft: "2.5rem"}}/> */}

         
        </div>    



       </div>



    </div>
  )
}
