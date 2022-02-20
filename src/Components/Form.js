import {React, useRef } from "react";
import {GrBin} from "react-icons/gr";


function Form() {
    const taskRef = useRef();

    function handleAddTask() {

    }

    return(
        <form className="grid grid-cols-2 gap-2">
            <input 
                type="text"
                ref={taskRef}
                className="py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-blue-300 bg-gray-200 text-gray-700"
                placeholder="Type task here"
                name="Task"
            />
            <button
                type="button"
                onClick={handleAddTask}
                className="transition duration-500 ease hover:bg-purple-900 bg-blue-600 text-2xl rounded-full w-12 h-12 text-white cursor-pointer"
            >
                +
            </button>
        </form>
    );
}

export default Form;