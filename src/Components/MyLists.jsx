import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faUser, faTasksAlt, faCalendarAlt, faCheck, faDeleteLeft, faEdit, faEyeDropper, faHome, faHomeAlt, faTrash, faSuitcase, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';


const MyTasks = () => {
    return ( 
        <div class="my-lists-container mt-5">
            <h4>My Lists</h4>
            <div class="row container-lists mt-4">
                <div class="col-6 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                    <FontAwesomeIcon icon={faTasksAlt} size="2xl"/>
                    <h3 class="card-title">All Tasks</h3>
                    <p class="card-text">9 Items</p>
                    </div>
                </div>
                </div>
                <div class="col-6 mb-4">
                <div className="card text-center">
                <div className="card-body">
                    <div className="icon-border">
                        <FontAwesomeIcon icon={faPersonChalkboard} size="2xl"/>
                    </div>
                    <h3 className="card-title">Personal</h3>
                     <p className="card-text">9 Items</p>
                    </div>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                    <FontAwesomeIcon icon={faSuitcase} size="2xl"/>
                    <h3 class="card-title">Work</h3>
                    <p class="card-text">No Items</p>
                    </div>
                </div>
                </div>
                <div class="col-6 mb-4">
                <div class="card text-center">
                    <div class="card-body">
                    <FontAwesomeIcon icon={faAdd} size="2xl"/>
                    <h3 class="card-title">Add List</h3>
                    <p class="card-text">9 Items</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

     );
}
 
export default MyTasks;
