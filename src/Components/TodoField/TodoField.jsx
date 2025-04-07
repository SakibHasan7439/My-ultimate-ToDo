import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import Title from "../Title/title";

const TodoField = () => {
    return (
        <div className="flex bg-[#343434] p-4 md:p-8 flex-col md:flex-row gap-4 items-center justify-between">
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
                className={"md:mt-11 hover:bg-green-600"}
                bgColor={"bg-green-500"}
                innerText={"Add"}    
            />
        </div>
    );
};

export default TodoField;