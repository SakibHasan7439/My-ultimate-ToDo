import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import Title from "../Title/title";

const TodoField = ({updateTodoList, todos}) => {
    const handleTodoSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = "todo";
        const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
        const newTodoTask = {title, description, status, uniqueId};
        updateTodoList([...todos, newTodoTask]);
        form.reset(); 
    }
    return (
        <form onSubmit={handleTodoSubmit} className="flex border-b border-b-white pb-6 mb-6 flex-col md:flex-row gap-4 items-center justify-between">
            <div className="md:w-1/2">
                <Title text={"Title"}/>
                <TextField 
                    placeholder={"What's the title of your To Do"}
                    name={"title"}
                />
            </div>
            <div className="md:w-1/2">
                <Title text={"Description"}/>
                <TextField
                    placeholder={"Write the description"}
                    name={"description"}
                />
            </div>
            <Button 
                type={"submit"}
                className={"md:mt-11 hover:bg-green-600"}
                bgColor={"bg-green-500"}
                innerText={"Add"}    
            />
        </form>
    );
};

export default TodoField;