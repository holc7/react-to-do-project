import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faClock, faSort, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import sentMessage from "../assets/send-mess.png";


export default function Alltasks({ deleteCompletedTasks, saveEditedTitle, editingTask, setEditingTask, toggleCompletion, deleteAllMainTasks , sortTasksByDate, handleMainTaskDelete ,tasks }) {
  const [showMenu, setShowMenu] = useState(false);
  const  [taskDropdown, setTaskDropdown] = useState(false)
  
  
  


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
                <span onClick={sortTasksByDate} className='dropdown-text'>Sort by: Date</span>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon className='fa-priority' icon={faSort} />
                <span className='dropdown-text-priority'>Sort by: Priority</span>
              </div>
              <div className="menu-item">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span  onClick={deleteCompletedTasks} className='dropdown-text'>Clear completed</span>
              </div>
              <div  className="menu-item">
                <FontAwesomeIcon icon={faTrash} />
                <span onClick={deleteAllMainTasks} className='dropdown-text-delete'>Delete all</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="tasks-container">
  <div className="all-tasks-second-container mt-2">
    <div>
      <h5>Today</h5>
      <ul>
  {Array.isArray(tasks) && tasks.map((task, index) => (
    <li onClick={() => toggleCompletion(task.id)} key={task.id} className={`task-time mt-2 urgency-${task.urgency ? task.urgency.toLowerCase() : 'none'} ${task.completed ? "main-task-completed" : ""}`}>
      <div className="span-container">
        {editingTask === task.id ? (
          <input 
            
            defaultValue={task.title} 
            onClick={(event) => event.stopPropagation()}
            onBlur={() => setEditingTask(null)} 
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                saveEditedTitle(task.id, event.target.value);
                setEditingTask(null);
                
              }
            }} 
          />
        ) : (
          <p className="task-title">{task.title}</p>
        )}
        <p className='task-date'>{task.dueDate}</p>
        <p className='task-category'>{task.category}</p>
      </div>
      <div className='edit-delete-icon'>
        <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={(event) => { event.stopPropagation(); setEditingTask(task.id); }} />
        <FontAwesomeIcon onClick={(event) => { event.stopPropagation(); handleMainTaskDelete(index); }} icon={faTrash} className="trash-icon" />
      </div>
    </li>
  ))}
</ul>
    </div>
  </div>
</div>
</div>
  );
}