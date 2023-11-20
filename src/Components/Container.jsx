import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import DigitalClock from './DigitalClock';
import HomepageTask from './HomepageTask';
import Alltasks from './Alltasks';
import CreateTask from './CreateTask';


const MainContainer = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [currentTask2, setCurrentTask2] = useState("");


  const [isNewTaskAdded, setIsNewTaskAdded] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [showHomepage, setShowHomepage] = useState(false)
  
  const [sortByDate, setSortByDate] = useState(true)
  const [tasks, setTasks] = useState([]);
  const savedMainTasks = localStorage.getItem('mainTasks');
const initialMainTasks = savedMainTasks ? JSON.parse(savedMainTasks) : [];
const [mainTasks, setMainTasks] = useState(initialMainTasks);

const savedQuickTasks = localStorage.getItem("quickTasks");
const initialQuickTasks = savedQuickTasks ? JSON.parse(savedQuickTasks) : [];
const [quickTasks, setQuickTasks] = useState(initialQuickTasks);
const [editingTask, setEditingTask] = useState(null);





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
  
  const deleteAllMainTasks = () => {
    setMainTasks([])
    localStorage.setItem('mainTasks', JSON.stringify([]));
  }
  const deleteCompletedTasks = () => {
    const updatedMainTasks = mainTasks.filter(task => !task.completed);
    setMainTasks(updatedMainTasks);
    localStorage.setItem('mainTasks', JSON.stringify(updatedMainTasks));
  };
 

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
  const handleTaskDelete = (index) => {
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
    setCurrentTask2("");
  };

  const handleFormSubmit2 = (e) => {
    e.preventDefault();
    handleQuickTask(currentTask2);
    setCurrentTask2("");
  };

  const toggleCompletion = (id) => {
    console.log("Toggle completion for", id);
  
    setMainTasks(mainTasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  }
  
  const saveEditedTitle = (id, newTitle) => {
    setMainTasks(mainTasks.map(task => task.id === id ? {...task, title: newTitle} : task));
  };

  useEffect(() => {
    localStorage.setItem('mainTasks', JSON.stringify(mainTasks));
  }, [mainTasks]);

  useEffect(() => {
    localStorage.setItem("quickTasks", JSON.stringify(quickTasks))
  })

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
            setCurrentTask2={setCurrentTask2}
            currentTask2={currentTask2}
            setQuickTasks={setQuickTasks}
            handleFormSubmit2={handleFormSubmit2}
          />
          {showAllTasks && (
            <Alltasks
            deleteCompletedTasks={deleteCompletedTasks}
            editingTask={editingTask} 
            setEditingTask={setEditingTask}
            deleteAllMainTasks={deleteAllMainTasks}
              onAddTask={addMainTask}
              tasks={mainTasks}
              handleMainTaskDelete={handleMainTaskDelete}
              sortTasksByDate={sortTasksByDate}
              toggleCompletion = {toggleCompletion}
              saveEditedTitle = {saveEditedTitle}
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
               currentTask={currentTask}
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
