import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './App.css';

function App() {
    const[todos, SetToDo]= useState([])

    const addTask = (userInput) =>{
        if(userInput){
            const newItem = {
                id: Date.now(),
                task: userInput,
                complete: false

            }
            SetToDo([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        SetToDo([...todos.filter((todo) => todo.id !== id)])
    }


    const HandleToggle = (id) => {
        SetToDo([...todos.map((todo) =>
            todo.id === id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }
  return (
    <div className = "App">
      <header className = 'head' >
            <h1>Добро пожаловать в уникальный и неповторимый блокнот!</h1>
          <h2>Количество задач: {todos.length}</h2>
      </header>
      <ToDoForm
      addTask={addTask}
      />
      {todos.map((todo) =>{
      return (<ToDo
        todo = {todo}
        key = {todo.id}
        HandleToggle = {HandleToggle}
        removeTask = {removeTask}
        />)
      })}
    </div>
  );
}

export default App;
