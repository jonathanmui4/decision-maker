import React, { Fragment, useRef, useState} from "react";
import tasks from "../data/tasks";
import {RiDeleteBin5Line} from "react-icons/ri";

function Form() {
    const taskRef = useRef();

    const [taskList, setTaskList] = React.useState(tasks);

    function handleAddTask() {
        const newTaskList = taskList.concat(taskRef.current.value);
        setTaskList(newTaskList);
    }

    function handleDeleteTask() {

    }

    function handleRemoveAll() {
        const emptyArr = [];
        setTaskList(emptyArr);
    }

    function handleRandomiser() {
        const length = tasks.length;
        const index = Math.floor((Math.random() * (length)));
        window.alert(taskList[index]);
    }

    return(
        <Fragment>
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
            <form className="grid grid-cols-3 gap-2">
                <input 
                    type="text"
                    ref={taskRef}
                    className="py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-300 bg-gray-200 text-gray-700"
                    placeholder="Type task here"
                    name="task"
                />
                <button
                    type="button"
                    onClick={handleAddTask}
                    className="transition duration-500 ease hover:bg-purple-900 bg-blue-600 text-2xl rounded-full w-12 h-12 text-white cursor-pointer"
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={handleRemoveAll}
                    className="transition duration-500 ease hover:bg-red-900 bg-red-500 text-2xl rounded-full text-white cursor-pointer"
                >
                    Remove all
                </button>
                <button
                    type="button"
                    onClick={handleRandomiser}
                    className="transition duration-500 ease hover:bg-purple-900 bg-blue-600 text-2xl rounded-full px-8 py-3 text-white cursor-pointer"
                >
                    Tell me what to do
                </button>
            </form>
        </Fragment>        
    );
}

export default Form;