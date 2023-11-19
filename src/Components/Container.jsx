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
  const [mainTasks, setMainTasks] = useState([]);
  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);

  
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


  const addMainTask = (newMainTask) => {
    setMainTasks([...mainTasks, newMainTask])
    setIsNewTaskAdded(true);

  }
  const handleTaskDelete = (index) => {
    setQuickTasks(quickTasks.filter((_, i) => i !== index))
  };

  const handleMainTaskDelete = (index) => {
    setMainTasks(mainTasks.filter((_, i) => i !== index))
  };

  const toggleAllTasksVisibility = () => {
    setShowAllTasks(!showAllTasks);
};

    const toggleComponentVisibility = () => {
      setIsComponentVisible(!isComponentVisible)
    }

        return ( 
            <div className="container my-5">
            <div className="row justify-content-center">
              <div className="second-container col-12 col-md-12 col-lg-12">
              <TopNavBar />
              <BottomNavBar 
              toggleVisibility={toggleAllTasksVisibility}
              toggleComponentVisibility={toggleComponentVisibility} 
              isVisible={isComponentVisible}  
              quickTasks={quickTasks} 
              handleQuickTask={handleQuickTask} 
              handleFormSubmit={handleFormSubmit} 
              setCurrentTask={setCurrentTask}  
              currentTask={currentTask} 
              setQuickTasks={setQuickTasks} />
              {showAllTasks ? (
                <Alltasks 
                onAddTask={addMainTask} 
                tasks={mainTasks}  
                handleMainTaskDelete={handleMainTaskDelete}/> 
              ) : (
                <>
                <DigitalClock />
              <HomepageTask 
              quickTasks={quickTasks} 
              handleQuickTask={handleQuickTask} 
              handleFormSubmit={handleFormSubmit} 
              setCurrentTask={setCurrentTask} 
              setQuickTasks={setQuickTasks} 
              handleTaskDelete={handleTaskDelete} />
                
                </>
              )}
              {/* <TasksSuggestions /> */}

           
              {/* <MyTasks /> */}
             {/* <CreateTask  
             tasks={mainTasks} 
             onAddTask={addMainTask} 
             isNewTaskAdded={isNewTaskAdded} 
             setIsNewTaskAdded={setIsNewTaskAdded}/> */}
           
            
            
              </div>
            </div>
          </div>


        )
           
    
}
 
export default MainContainer;