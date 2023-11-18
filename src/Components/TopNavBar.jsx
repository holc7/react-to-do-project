import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faAdd, faCalendarAlt, faCheck, faCog, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faPersonArrowUpFromLine, faPersonRifle, faTrash } from '@fortawesome/free-solid-svg-icons';




const TopNavBar = () => {
    return ( 
        <div className="three-items-container mt-3 justify-content-around d-flex align-items-center mb-3">
  <button type="button" className="btn-glass">
    <FontAwesomeIcon icon={faHomeAlt}/>
  </button>
  <h3 className="fw-normal me-3 ms-3 mt-2">
     TO DO APP
  </h3>
  <button type="button" className="btn-glass-2">
    <FontAwesomeIcon icon={faUser}/>
  </button>
</div>
     );
}
 
export default TopNavBar;