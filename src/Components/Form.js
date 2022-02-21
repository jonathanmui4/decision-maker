import React, { Fragment, useRef, useState} from "react";
import Tasklist from "./Tasklist";

function Form() {
    const taskRef = useRef();

    const [taskList, setTaskList] = React.useState([]);

    function handleAddTask() {
        const newTask = { id: new Date().getTime().toString(), task: taskRef.current.value };
        const newTaskList = taskList.concat(newTask);
        console.log(newTaskList);
        setTaskList(newTaskList);
        taskRef.current.value = "";
    }

    function handleDeleteTask() {
        // const newTaskList = taskList.filter((task) => task !== );
        // setTaskList(newTaskList);
    }

    function handleRemoveAll() {
        const emptyArr = [];
        setTaskList(emptyArr);
    }

    function handleRandomiser() {
        const length = taskList.length;
        const index = Math.floor((Math.random() * (length)));
        window.alert(taskList[index].task);
    }

    return(
        <Fragment>
            <Tasklist taskList={taskList} handleDeleteTask={handleDeleteTask} />
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