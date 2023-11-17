import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faUser, faAdd, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash, faTasks, faCogs } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';

const BottomNavBar = ({ handleCalendar }) => {
  console.log("handleCalendar prop:", handleCalendar);
  return (  
      <div className="bottom-nav">
          <button onClick={handleCalendar} type="button" className="btn-glass-3">
            <FontAwesomeIcon icon={faCalendar}/>
          </button>
          
          <div className="notch">
            <button type="button" className="btn-glass-3 notch-button">
              <FontAwesomeIcon className='add-bottom-icon' icon={faAdd}/>
            </button>
          </div>
          <button type="button" className="btn-glass-3">
            <FontAwesomeIcon icon={faCogs}/>
          </button>
      </div>
  );
}

export default BottomNavBar;