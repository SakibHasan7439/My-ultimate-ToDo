const TaskCard = ({task}) => {
    const {title, description} = task;
    return (
        <div className="p-4 bg-[#3f3f3f] shadow-lg mb-4">
            <h2 className="text-xl text-green-400 pb-3 md:text-2xl font-bold">
                {title}
            </h2>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
};

export default TaskCard;