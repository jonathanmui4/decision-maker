import React from "react";
import tasks from "../data/tasks";

function Tasklist() {
    return(
        <div>
            {tasks.map((task) => (
                <div>
                    {task}
                </div>
            ))}
        </div>
    );
}

export default Tasklist;