import TaskCard from "./TaskCard";

const TodoTasks = ({todos, updateTodoList}) => {
    return (
        <div className="text-white">
            {
                todos.map((task, index) => <TaskCard 
                    task={task}
                    key={index}
                    index={index}
                    updateTodoList={updateTodoList}
                    todos={todos}
                ></TaskCard>)
            }
        </div>
    );
};

export default TodoTasks;