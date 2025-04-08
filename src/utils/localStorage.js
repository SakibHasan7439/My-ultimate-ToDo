export const getItem = () =>{
    const todoTask = localStorage.getItem("task");
    return todoTask ? JSON.parse(todoTask) : [];
}

export const saveItem = (todo) =>{
    localStorage.setItem("task", JSON.stringify(todo));
}
