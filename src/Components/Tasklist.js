import React, {Fragment} from "react";
import {RiDeleteBin5Line} from "react-icons/ri";

function TaskList({ taskList, handleDeleteTask }) {
    return (
        <div className="mb-4">
            {taskList.map((task) => (
                <Fragment>
                    <div>
                        <div>
                            {task}
                            <button
                                type="button"
                                onClick={handleDeleteTask}
                                className="transition duration-500 ease hover:text-red-900 text-red-500 text-xl cursor-pointer"
                            >
                                <RiDeleteBin5Line />
                            </button>
                        </div>
                    </div>                    
                </Fragment>                               
            ))}
        </div>
    )
}

export default TaskList;