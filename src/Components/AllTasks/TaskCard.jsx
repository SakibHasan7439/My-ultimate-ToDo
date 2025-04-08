import { AiOutlineDelete } from "react-icons/ai";

const TaskCard = ({task}) => {
    const {title, description} = task;
    return (
        <div className="p-4 flex items-center justify-between bg-[#3f3f3f] shadow-lg mb-4">
            <div>
                <h2 className="text-xl text-green-400 pb-3 md:text-2xl font-bold">
                    {title}
                </h2>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <div className="flex items-center gap-2">
                <AiOutlineDelete className="text-2xl cursor-pointer hover:text-green-500 md:text-3xl"/>
                <form>
                    <input type="checkbox" className="w-5 cursor-pointer mt-2 h-5 accent-green-500 ring-green-300" />
                </form>
            </div>
        </div>
    );
};

export default TaskCard;