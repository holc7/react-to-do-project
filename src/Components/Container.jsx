import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import DigitalClock from './DigitalClock';
import HomepageTask from './HomepageTask';
import Alltasks from './Alltasks';
import CreateTask from './CreateTask';


const MainContainer = () => {
  const [quickTasks, setQuickTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false)
  const [sortByDate, setSortByDate] = useState(true)
  const [tasks, setTasks] = useState([]);
  const savedMainTasks = localStorage.getItem('mainTasks');
const initialMainTasks = savedMainTasks ? JSON.parse(savedMainTasks) : [];
const [mainTasks, setMainTasks] = useState(initialMainTasks);



  const sortTasksByDate = () => {  
    console.log('sortTasksByDate called');
    let sortedTasks;
    if (sortByDate) {
       sortedTasks = [...mainTasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else {
      sortedTasks = [...mainTasks].sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }
    
    setMainTasks(sortedTasks)
    setSortByDate(!sortByDate)
  }

  const handleQuickTask = (newTask) => {
    if (newTask.trim() === "") {
      alert("Please type something!!!");
    } else {
      setQuickTasks([...quickTasks, newTask]);
    }
  };
  const addMainTask = (newMainTask) => {
    newMainTask.id = uuidv4();
    setMainTasks([...mainTasks, newMainTask]);
    setIsNewTaskAdded(true);
  };
  const handleTaskDelete = (taskId) => {
    setQuickTasks(quickTasks.filter((_, i) => i !== index));
    setMainTasks(mainTasks.filter(task => task.id !== taskId))
  };

  const handleMainTaskDelete = (index) => {
    setMainTasks(mainTasks.filter((_, i) => i !== index));
  };

  const toggleAllTasksVisibility = () => {
    setShowAllTasks(!showAllTasks);
    setShowCreateTask(false);
  };

  const toggleCreateTaskVisibility = () => {
    setShowCreateTask(!showCreateTask);
    setShowAllTasks(false);
  };

  const toggleHomePageVisibility = () => {
    setShowHomepage(!showHomepage);
    setShowAllTasks(false);
    setShowCreateTask(false);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleQuickTask(currentTask);
    setCurrentTask("");
  };
  useEffect(() => {
    localStorage.setItem('mainTasks', JSON.stringify(mainTasks));
  }, [mainTasks]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="second-container col-12 col-md-12 col-lg-12">
          <TopNavBar toggleHomepage = {toggleHomePageVisibility} />
          <BottomNavBar
            toggleAllTasks={toggleAllTasksVisibility}
            toggleCreateTask={toggleCreateTaskVisibility}
            quickTasks={quickTasks}
            handleQuickTask={handleQuickTask}
            handleFormSubmit={handleFormSubmit}
            setCurrentTask={setCurrentTask}
            currentTask={currentTask}
            setQuickTasks={setQuickTasks}
          />
          {showAllTasks && (
            <Alltasks
              onAddTask={addMainTask}
              tasks={mainTasks}
              handleMainTaskDelete={handleMainTaskDelete}
              sortTasksByDate={sortTasksByDate}
            />
          )}
          {showCreateTask && (
            <CreateTask
              toggleAllTasks={toggleAllTasksVisibility}
              tasks={mainTasks}
              onAddTask={addMainTask}
              isNewTaskAdded={isNewTaskAdded}
              setIsNewTaskAdded={setIsNewTaskAdded}
            />
          )}
          {!showAllTasks && !showCreateTask &&  (
            <>
              <DigitalClock />
              <HomepageTask
                quickTasks={quickTasks}
                handleQuickTask={handleQuickTask}
                handleFormSubmit={handleFormSubmit}
                setCurrentTask={setCurrentTask}
                setQuickTasks={setQuickTasks}
                handleTaskDelete={handleTaskDelete}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
