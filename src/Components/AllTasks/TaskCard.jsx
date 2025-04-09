import { AiOutlineDelete } from "react-icons/ai";

const TaskCard = ({task, index, updateTodoList, todos}) => {
    const {title, description, status} = task;

    // Function for deleting a todo item
    const handleDeleteTask = (index) =>{
        const updatedTasks = todos.filter((_, ind) => ind !== index);
        updateTodoList(updatedTasks);
    }
    // Function to update todo item status
    const handleUpdateCheckbox = () =>{
        const updatedTodo = todos.map((todo, inx) =>{
            return inx === index ? {...todo, status: status === "todo" ? "complete": "todo"}: todo;
        })
        updateTodoList(updatedTodo);
    }
    return (
        <div className="p-4 flex items-center justify-between bg-[#3f3f3f] shadow-lg mb-4">
            <div>
                <h2 className="text-xl text-green-400 pb-3 md:text-2xl font-bold">
                    {title}
                </h2>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <div className="flex items-center gap-2">
                <AiOutlineDelete onClick={()=>handleDeleteTask(index)} className="text-2xl cursor-pointer hover:text-green-500 md:text-3xl"/>
                <form>
                    <input 
                        type="checkbox" 
                        checked={status === "complete"}
                        onChange={handleUpdateCheckbox}
                        className="w-5 cursor-pointer mt-2 h-5 accent-green-500 ring-green-300" />
                </form>
            </div>
        </div>
    );
};

export default TaskCard;