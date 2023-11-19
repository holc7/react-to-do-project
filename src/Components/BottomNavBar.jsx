import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faUser, faAdd, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash, faTasks, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import sentMessage from "../assets/send-mess.png";
import taskAnimated from "../assets//icons8-todo-list.gif";
import allTaskIcons from "../assets/icons8-to-do-32.png";



const BottomNavBar = ({ toggleAllTasks, toggleCreateTask, toggleVisibility, toggleComponentVisibility, quickTask, setQuickTask, handleQuickTask, setCurrentTask, handleFormSubmit, currentTask, }) => {
  const [taskMenu, setTaskmenu] = useState(false)
 
const handleComponentSwitch = () => {
  toggleComponentVisibility()
}


  return (  
      <div className="bottom-nav">
          <button onClick={toggleAllTasks} type="button" className="btn-glass-3">
          <img src={allTaskIcons} alt='sent-message' style={{ width: "30px", marginRight: "15px"}}/>

          </button>
          
          <div className="notch">
            <button type="button" className="btn-glass-3 notch-button" onClick={() => setTaskmenu(!taskMenu)}>
            <FontAwesomeIcon className='add-bottom-icon' icon={faAdd}/>
            </button>
              {taskMenu && (
                <div className='task-menu-container align-items-center d-flex'>
                  <div className="column-task-menu d-flex flex-column align-items-center">
                    <img src={taskAnimated} alt='sent-message' style={{ width: "60px"}}/>
                    <h5>Add new task or a reminder </h5>
                    <p>Be productive today 😛</p>
                    <div className='glassmorphic-search-bar-cat-task-menu'>
                    <form onSubmit={(e) => { e.preventDefault(); handleQuickTask(currentTask); }}>
                      <input onChange={(e) => setCurrentTask(e.target.value)} value={currentTask} type='text' placeholder='Add a quick task...'></input>
                      <img onClick={(e) => { e.preventDefault(); handleQuickTask(currentTask); }} src={sentMessage} alt='sent-message' style={{ width: "30px", marginRight: "15px"}}/>
                    </form>
                        </div>
                  </div>  
                </div>
              
              )}
              
          </div>
          <button onClick={toggleCreateTask} type="button" className="btn-glass-3">
            <FontAwesomeIcon icon={faCogs}/>
          </button>
      </div>
  );
}

export default BottomNavBar;