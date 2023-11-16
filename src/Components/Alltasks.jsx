import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faSort, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Alltasks() {
  const [showMenu, setShowMenu] = useState(false);
  const [tasks, setTasks] = useState([
    {
      date: "Today",
      items: [
        { id:1, title: "Google project", time: "10:00 AM", subtask: "Website project", completed: false },
        { id:3, title : "Meta Project", time:"12:00 AM", subtask:"Google project", completed: false},
        { id:3, title : "Meta Project", time:"12:00 AM", subtask:"Google project", completed: false},
        { id:3, title : "Meta Project", time:"12:00 AM", subtask:"Google project", completed: false},
        { id:3, title : "Meta Project", time:"12:00 AM", subtask:"Google project", completed: false},
      ],
    },
    {
      date: "Tomorrow",
      items: [
        { id: 2, title: "Product Design", time: "10:00 PM", subtask: "Website update", completed: false },
      ],
    },


  ]);

  // Function to toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(tasks => tasks.map(dateGroup => ({
      ...dateGroup,
      items: dateGroup.items.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })));
  };

  // Render the TaskList component, passing tasks as a prop
  return (
    <div className='text-sort-container'>
      <div className="header-container d-flex justify-content-between align-items-center">
        <h4 className='all-tasks-container'>All Tasks</h4>
        <div className="menu-container">
          <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>•••</button>
          {showMenu && (
            <div className="dropdown-menu">
                <div className="menu-item">
            <FontAwesomeIcon icon={faClock} />
            <span className='dropdown-text'>Sort by: Time</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon className='fa-priority' icon={faSort} />
            <span className='dropdown-text-priority'>Sort by: Priority</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faCheckCircle} />
            <span className='dropdown-text' >Clear completed</span>
          </div>
          <div className="menu-item">
            <FontAwesomeIcon icon={faTrash} />
            <span className='dropdown-text-delete' >Delete all</span>
          </div>
            </div>
          )}
        </div>
      </div>
      <div className="tasks-container">
        <TaskList tasksByDate={tasks} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

function TaskList({ tasksByDate, toggleComplete }) {
  return (
    <div className="all-tasks-second-container mt-2">
      {tasksByDate.map((dateGroup) => (
        <div key={dateGroup.date}>
          <h5>{dateGroup.date}</h5>
          <ul>
            {dateGroup.items.map((task) => (
              <li key={task.id} className="task-time d-flex justify-content-around mt-4">{task.completed ? 'completed' : ''}
                <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
                <span>{task.title}</span>
                <span>{task.time}</span>
                {/* Rest of the task details */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
