import { useEffect, useState } from "react";
import { getItem } from "../../utils/localStorage";
import TaskCard from "./TaskCard";

const TodoTasks = () => {
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        const todoTasks =  getItem();
        setTodos(todoTasks);
    }, []);

    return (
        <div className="text-white">
            {
                todos.map((task, index) => <TaskCard 
                    task={task}
                    key={index}
                ></TaskCard>)
            }
        </div>
    );
};

export default TodoTasks;