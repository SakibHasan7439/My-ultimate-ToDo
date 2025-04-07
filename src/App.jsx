import './App.css'
import TodoField from './Components/TodoField/TodoField'

function App() {

  return (
    <div className='bg-[#1b1b1b] h-screen'>
      <div className='max-w-4xl w-full mx-auto'>
        <h1 className='text-center pt-4 text-2xl text-white md:text-3xl font-bold mb-6'>
          Add Your <span className='uppercase text-green-500'>todo</span>
        </h1>
        <TodoField/>
      </div>
    </div>
  )
}

export default App
