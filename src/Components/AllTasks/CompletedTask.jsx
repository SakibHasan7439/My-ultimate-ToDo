import TaskCard from "./TaskCard";

const CompletedTask = () => {
    const tasks = [
        {
            "title": "Submit Job Task",
            "description": "Need to submit the Job task before tomorrow morning",
        },
        {
           "title": "Talk to teacher",
            "description": "Need to talk to our teacher about a problem in the project",
        },
        {
           "title": "Collaborate with team leader",
            "description": "Need to collaborate with team leader about our final checkup before publishing",
        }
    ]
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

export default CompletedTask;