import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCalendar, faUser, faAdd, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash, faTasks, faCogs } from '@fortawesome/free-solid-svg-icons';

const BottomNavBar = () => {
    return (  
        <div className="bottom-nav">
        <button type="button" className="btn-glass-3">
          <FontAwesomeIcon icon={faTasks}/>
        </button>
        
        <div className="notch">
          <button type="button" className="btn-glass-3 notch-button">
            <FontAwesomeIcon icon={faCalendar}/>
          </button>
        </div>
        <button type="button" className="btn-glass-3">
          <FontAwesomeIcon icon={faCogs}/>
        </button>
      </div>
    );
}
 
export default BottomNavBar;