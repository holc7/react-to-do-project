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



const MainContainer = () => {
        return ( 
            <div className="container my-5">
            <div className="row justify-content-center">
              <div className="second-container col-12 col-md-12 col-lg-12">
              <TopNavBar />
              <BottomNavBar />
              {/* <TasksSuggestions /> */}
              <DigitalClock />
              {/* <MyTasks /> */}
              <HomepageTask/>
              </div>
            </div>
          </div>


        )
           
    
}
 
export default MainContainer;