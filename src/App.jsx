
import { useState } from 'react';
import './App.css'

function App() {
  let [todos, setTodos] = useState([]);

  const saveTodo = (todo) => {
    let Todo = todo.target.mytodo.value;
    if (!todos.includes(Todo)) {
      let newTodo = [...todos, Todo]
      setTodos(newTodo);
    } else {
      alert('Todo already exists')
    }


    todo.preventDefault()
  }
  let list = todos.map((value, index) => {
  
    return(
       <TodoList value={value} key={index} indexNumber={index} 
      todos={todos }  setTodos={setTodos}
       />
    )
  })


  return (
    <>
      <div className='container mx-auto h-full  flex flex-col justify-center items-center'>
        <h1 className='text-4xl mt-50 mb-5'>Todo App</h1>
        <form onSubmit={saveTodo}>
          <input name='mytodo' className='border p-2 w-200 pr-20 rounded-md ' type="text" placeholder='Search.....' /><button 
          onSubmit={saveTodo} className='border w-20 ml-10 bg-gray-200 p-2 rounded-md cursor-pointer ' >Save</button>
        </form>
        <div>

          <ul className=''>
         {list}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App


function TodoList({value, indexNumber, todos, setTodos}) {

let [status, setStatus] = useState(false)


  let deletTodo = () => {
    let finalData = todos.filter((v,i )=> i!=indexNumber)
    setTodos(finalData)
  }

  
 
  return (
    <li  className='bg-black w-230 p-2 text-white relative mt-30 '>{indexNumber + 1} {value} <span onClick={deletTodo} className='absolute top-0 right-2 text-2xl cursor-pointer'>&times;</span></li>
  )

}
