import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const TaskCard = ({ task, index, updateTodoList, todos }) => {
  const { title, description, status, uniqueId } = task;

  // Function for deleting a todo item
  const handleDeleteTask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTasks = todos.filter((_, ind) => ind !== index);
        updateTodoList(updatedTasks);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  // Function to update todo item status
  const handleUpdateCheckbox = () => {
    const updatedTodo = todos.map((todo, inx) => {
      return inx === index
        ? { ...todo, status: status === "todo" ? "complete" : "todo" }
        : todo;
    });
    updateTodoList(updatedTodo);
  };

//   Function to update todoTask
  const handleEditSubmit = (e, uniqueId) =>{
    e.preventDefault();
    const form = e.target;
    const updatedTitle = form.title.value;
    const updatedDescription = form.description.value;

    const updatedTodos = todos.map(todo => {
        if (todo.uniqueId === uniqueId) {
          return {
            ...todo,
            title: updatedTitle,
            description: updatedDescription
          };
        }
        return todo;
      });
      
      updateTodoList(updatedTodos);
      document.getElementById(uniqueId).close();
  }
  return (
    <div className="p-4 flex gap-4 items-center justify-between bg-[#3f3f3f] shadow-lg mb-4">
      <div>
        <h2 className="text-xl text-green-400 pb-3 md:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-gray-400 text-sm">{description}</p>
        <dialog id={uniqueId} className="modal text-black modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={(e) => handleEditSubmit(e, uniqueId)}>
                <div className="mb-2">
                    <label>Title</label>
                    <input defaultValue={title} className="w-full p-2 border" type="text" name="title" />
                </div>
                <div>
                    <label>description</label>
                    <textarea  defaultValue={description} className="w-full p-2 border" type="text" name="description" />
                </div>
                <input type="submit" value={"Submit"} className="bg-green-500 p-2 rounded-md text-white cursor-pointer" />
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="flex items-center gap-2">
        {status === "todo" ? (
          <CiEdit onClick={() => document.getElementById(uniqueId).showModal()} className="text-3xl hover:text-green-500 cursor-pointer" />
        ) : (
          ""
        )}
        <AiOutlineDelete
          onClick={() => handleDeleteTask(index)}
          className="text-2xl cursor-pointer hover:text-green-500 md:text-3xl"
        />
        <form>
          <input
            type="checkbox"
            checked={status === "complete"}
            onChange={handleUpdateCheckbox}
            className="w-5 cursor-pointer mt-2 h-5 accent-green-500 ring-green-300"
          />
        </form>
      </div>
    </div>
  );
};

export default TaskCard;
