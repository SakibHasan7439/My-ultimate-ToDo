import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { getItem } from "../../utils/localStorage";

const CompletedTask = () => {
    const [completedTask, setCompletedTask] = useState([]);
    useEffect(() =>{
        const allTasks = getItem();
        const completed = allTasks.filter((task)=> task.status ==="complete");
        setCompletedTask(completed);
    }, []);
    return (
        <div className="text-white">
            {
                completedTask.map((task, index) => <TaskCard 
                    task={task}
                    key={index}
                ></TaskCard>)
            }
        </div>
    );
};

export default CompletedTask;