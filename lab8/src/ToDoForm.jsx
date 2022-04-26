import { useState } from "react"
import './App.css';
function ToDoForm({addTask}) {
    const[userInput, setUserInput] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const handleKeyPress = (e) =>{
        if(e.key === "Enter"){
            handleSubmit(e)
        }

    }
    return (
        <form onSubmit = {handleSubmit} className='ToDoForm'>
            <input
            class='input'
            value = {userInput}
            type = 'text'
            onChange = {handleChange}
            onKeyDown = {handleKeyPress}
            placeholder = "Что Вы хотите сделать?"
            />
            <button class='but'><h4>Сохранить</h4></button>
        </form>

    )
}

export default ToDoForm