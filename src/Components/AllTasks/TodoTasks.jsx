import TaskCard from "./TaskCard";

const TodoTasks = ({todos, updateTodoList}) => {

    const handleDeleteTask = (index) =>{
        const updatedTasks = todos.filter((_, ind) => ind !== index);
        updateTodoList(updatedTasks);
    }

    return (
        <div className="text-white">
            {
                todos.map((task, index) => <TaskCard 
                    handleDeleteTask={handleDeleteTask}
                    task={task}
                    key={index}
                    index={index}
                ></TaskCard>)
            }
        </div>
    );
};

export default TodoTasks;