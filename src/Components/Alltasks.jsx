import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCheckCircle, faClock, faSort, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Alltasks() {
  const [showMenu, setShowMenu] = useState(false);
  



  return (
    <div>
      <div className='text-sort-container d-flex justify-content-between align-items-center'>
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
    </div>
  );
}
