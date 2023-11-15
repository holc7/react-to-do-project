import React from 'react'
import Lottie from 'lottie-react'
import taskAnimation from "../assets/animations/task-animation.json"

const TaskAnimation = () => {
    return <Lottie animationData={taskAnimation} />
}

const  formcontainer = (e) => {
    e.preventDefault()
}

export default function HomepageTask() {
  return (
    <div>
       <div className='new-task-container'>
          <h4>Create a quick task:</h4>
        <div className='glassmorphic-search-bar'>
          <form onSubmit={formcontainer}>
            <input type='text' placeholder='Dont be shy....'></input>
            <button type='submit'>Add</button>
          </form>
          {/* <Lottie animationData={taskAnimation} style={{width: "300px", marginLeft: "2.5rem"}}/> */}

         
        </div>    



       </div>



    </div>
  )
}
