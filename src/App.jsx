import { useState } from 'react'
import './App.css'
import TodoField from './Components/TodoField/TodoField'
import CompletedTask from './Components/AllTasks/CompletedTask';
import TodoTasks from './Components/AllTasks/TodoTasks';
import Button from './Components/Button/Button';
import { getItem, saveItem } from './utils/localStorage';

function App() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [todos, setTodos] = useState(getItem());
  const updateTodoList = (newTodos) =>{
    setTodos(newTodos);
    saveItem(newTodos); //adding data to localstorage
  }
  return (
    <div className='bg-[#1b1b1b] h-screen pb-20'>
      <div className='max-w-4xl w-full mx-auto'>
        <h1 className='text-center pt-4 text-2xl text-white md:text-3xl font-bold mb-6'>
          Add Your <span className='uppercase text-green-500'>todo</span>
        </h1>
        <div className='bg-[#343434] p-4 md:p-8'>
          <TodoField               
              todos={todos} 
              updateTodoList={updateTodoList}/>
          <div className='flex items-center mb-2'>
            <Button
              onclick={()=>setShowCompleted(false)}
              bgColor={showCompleted ? "bg-[#5e5e5e]":"bg-green-500" }
              innerText={"To Do"}
            ></Button>
            <Button
              onclick={()=>setShowCompleted(true)}
              bgColor={showCompleted ? "bg-green-500": "bg-[#5e5e5e]"}
              innerText={"Completed"}
            ></Button>

          </div>
          {showCompleted ? <CompletedTask/>
           : <TodoTasks 
              todos={todos} 
              updateTodoList={updateTodoList}
            />}
        </div>
      </div>
    </div>
  )
}

export default App
