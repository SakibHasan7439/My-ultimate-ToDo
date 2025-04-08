export const getItem = () =>{
    const todoTask = localStorage.getItem("task");
    return todoTask ? JSON.parse(todoTask) : [];
}

export const saveItem = (todo) =>{
    const existingTask = getItem();
    const updatedStorage = [...existingTask, todo];
    const makeStringify = JSON.stringify(updatedStorage);
    localStorage.setItem("task", makeStringify);
}
