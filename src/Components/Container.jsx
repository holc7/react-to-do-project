import React, { useState } from 'react';
// Import necessary components
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import DigitalClock from './DigitalClock';
import HomepageTask from './HomepageTask';
import Alltasks from './Alltasks';
import CreateTask from './CreateTask';
// Import other necessary components and icons

const MainContainer = () => {
  const [quickTasks, setQuickTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [mainTasks, setMainTasks] = useState([]);
  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false)
  const [sortByDate, setSortByDate] = useState(true)

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
    setMainTasks([...mainTasks, newMainTask]);
    setIsNewTaskAdded(true);
  };

  const handleTaskDelete = (index) => {
    setQuickTasks(quickTasks.filter((_, i) => i !== index));
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
