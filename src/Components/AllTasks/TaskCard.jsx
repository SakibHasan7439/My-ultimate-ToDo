const TaskCard = ({task}) => {
    const {title, description} = task;
    console.log(title, description);
    return (
        <div className="p-4 bg-[#3f3f3f] shadow-lg mb-4">
            <h2 className="text-xl pb-3 md:text-2xl font-semibold text-white">
                {title}
            </h2>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    );
};

export default TaskCard;