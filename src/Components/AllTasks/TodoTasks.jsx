import { getItem } from "../../utils/localStorage";
import TaskCard from "./TaskCard";

const TodoTasks = () => {
    const tasks = [
        {
            "title": "Submit Assignment",
            "description": "Need to submit the last assignment before the final exam",
        },
        {
           "title": "Report Admin",
            "description": "Need to report admin about a problem in the environment",
        },
        {
           "title": "Collaborate with team leader",
            "description": "Need to collaborate with team leader about our final checkup before publishing",
        }
    ];

    console.log(getItem());
    return (
        <div className="text-white">
            {
                tasks.map((task, index) => <TaskCard 
                    task={task}
                    key={index}
                ></TaskCard>)
            }
        </div>
    );
};

export default TodoTasks;