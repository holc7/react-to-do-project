import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App from '../App';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import DigitalClock from './DigitalClock';
import MyTasks from './MyLists';
import TasksSuggestions from './TasksSuggestions';
import HomepageTask from './HomepageTask';
import Alltasks from './Alltasks';
import CreateTask from './CreateTask';
import { useState } from 'react';

const MainContainer = () => {

  const [quickTasks, setQuickTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleQuickTask(currentTask);
    setCurrentTask("");
  }




  const handleQuickTask = (newTask) => {
  if (newTask.trim() === "") {
    alert("Please type something!!!");
  } else {
    setQuickTasks([...quickTasks, newTask]);
    
  }
};

  


        return ( 
            <div className="container my-5">
            <div className="row justify-content-center">
              <div className="second-container col-12 col-md-12 col-lg-12">
              <TopNavBar />
              <BottomNavBar  quickTasks={quickTasks} handleQuickTask={handleQuickTask} handleFormSubmit={handleFormSubmit} setCurrentTask={setCurrentTask}  currentTask={currentTask}  />
              {/* <TasksSuggestions /> */}
              <DigitalClock />
              {/* <Alltasks /> */}
              {/* <MyTasks /> */}
             {/* <CreateTask /> */}
              <HomepageTask quickTasks={quickTasks} handleQuickTask={handleQuickTask} handleFormSubmit={handleFormSubmit} setCurrentTask={setCurrentTask} />
            
            
              </div>
            </div>
          </div>


        )
           
    
}
 
export default MainContainer;