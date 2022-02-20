import {React, Fragment} from "react";
import tasks from "../data/tasks";
import {RiDeleteBin5Line} from "react-icons/ri";

function Tasklist() {

    function handleAddTask() {

    }

    return(
        <div className="mb-4">
            {tasks.map((task) => (
                <Fragment>
                    <div>
                        <div>
                            {task}
                            <button
                                type="button"
                                onClick={handleAddTask}
                                className="transition duration-500 ease hover:text-red-900 text-red-500 text-xl cursor-pointer"
                            >
                                <RiDeleteBin5Line />
                            </button>
                        </div>
                    </div>                    
                </Fragment>                               
            ))}
        </div>
    );
}

export default Tasklist;