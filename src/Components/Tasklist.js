import React, {Fragment} from "react";
import {RiDeleteBin5Line} from "react-icons/ri";

function TaskList({ taskList, handleDeleteTask }) {
    return (
        <div className="mb-4">
            <ul>
            {taskList.map((task) => (
                <Fragment>
                    <div>
                        <li key={task.id}>
                            {task.task}
                            <button
                                type="button"
                                onClick={handleDeleteTask}
                                className="transition duration-500 ease hover:text-red-900 text-red-500 text-xl cursor-pointer"
                            >
                                <RiDeleteBin5Line />
                            </button>
                        </li>
                    </div>                    
                </Fragment>                               
            ))}
            </ul>           
        </div>
    )
}

export default TaskList;