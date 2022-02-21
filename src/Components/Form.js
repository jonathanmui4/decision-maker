import React, { Fragment, useRef, useState} from "react";
import Tasklist from "./Tasklist";
import Notification from "./Notification";

function Form() {
    const taskRef = useRef();

    const [taskList, setTaskList] = React.useState([]);
    const [alert, setAlert] = useState({show: false, message: "", type:''});

    function showAlert(show=false, message="", type="") {
        setAlert({show, message, type});
    } 

    function handleAddTask() {
        if (taskRef.current.value === "") {
            showAlert(true, "Please enter a task!", "red");
        }
        else {
            const newTask = { id: new Date().getTime().toString(), task: taskRef.current.value };
            const newTaskList = taskList.concat(newTask);
            setTaskList(newTaskList);
            taskRef.current.value = "";
        }       
    }

    function handleDeleteTask(id) {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    }

    function handleRemoveAll() {
        const emptyArr = [];
        setTaskList(emptyArr);
    }

    function handleRandomiser() {
        const length = taskList.length;
        if (length === 0) {
            showAlert(true, "Whoa you have no tasks in your list!", "red");
        }
        const index = Math.floor((Math.random() * (length)));
        const textToPrint = "Let's " + taskList[index].task
        showAlert(true, textToPrint, "green");
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
            {alert.show && <Notification {...alert} removeAlert={showAlert} />}
        </Fragment>        
    );
}

export default Form;