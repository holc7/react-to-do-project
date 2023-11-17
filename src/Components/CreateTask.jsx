import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUser, faTasksAlt, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash, faSuitcase, faPersonChalkboard, faJetFighter, faSchool, faExclamationTriangle, faMinus, faArrowCircleDown, faCircle, faSmile } from '@fortawesome/free-solid-svg-icons';


export default function CreateTask() {

    const formContainer = (e) => {
        e.preventDefault()
    }

  return (
    <div className='create-task-container d-flex flex-column'>
        <h4>Task name</h4> 
      <div className='glassmorphic-search-bar-cat' >
        <form onSubmit={formContainer}>
            <input type='text' placeholder='Dont be shy....'></input>
          </form>
      </div>

      <h5 className='category-text mt-4'>Categories</h5> 
      <div className='category-container'>
        <div class="category-body-container">
            <div className='category-separator mt-2 d-flex justify-content-evenly'>

                    <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faSuitcase} size="2xl"/>
                        <div className="icon-text">WORK</div>
                      </div>
                      <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faSchool} size="2xl"/>
                        <div className="icon-text">SCHOOL</div>
                      </div>
    
                      <div className="icon-border-cat">
                        <FontAwesomeIcon  className="test-fa-cat" icon={faJetFighter} size="2xl"/>
                        <div className="icon-text">HOLIDAY</div>
                      </div>
                      <div className="icon-border-cat-add">
                        <FontAwesomeIcon  className="test-fa-cat-add" icon={faAdd} size="2xl"/>
                        <div className="icon-text">ADD</div>
                      </div>
                      
                    </div>      
                     






            </div>       
        </div>

        <h5 className='category-text mt-5'>Urgency</h5> 
      <div className='category-container'>
        <div class="category-body-container">
            <div className='category-separator mt-2 d-flex justify-content-evenly'>

                    <div className="icon-border-cat-high">
                        <FontAwesomeIcon  className="test-fa-cat-high" icon={faExclamationTriangle} size="2xl"/>
                        <div className="icon-text">HIGH</div>
                      </div>
                      <div className="icon-border-cat-medium">
                        <FontAwesomeIcon  className="test-fa-cat-minus" icon={faMinus} size="2xl"/>
                        <div className="icon-text">MEDIUM</div>
                      </div>
    
                      <div className="icon-border-cat-low">
                        <FontAwesomeIcon  className="test-fa-cat-low" icon={faArrowCircleDown} size="2xl"/>
                        <div className="icon-text">LOW</div>
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
