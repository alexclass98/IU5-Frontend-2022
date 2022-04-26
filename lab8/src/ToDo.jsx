import './App.css';

function ToDo({todo, HandleToggle, removeTask}){
    const classChange = ["item-text"]
    if (todo.complete)
    {
        [].push("chertila");
        classChange.push("chertila");
    }
    return (
        <div class = 'body'>
            <div key = {todo.id} className = "item-todo">
                <div className = {todo.complete ? classChange.join(' ') : classChange.join(' ')}
                    onClick = {() => HandleToggle(todo.id)}>
                    {todo.task}
                </div>
                <div className = "item-delete" onClick = {() => removeTask(todo.id)}>
                    X
                </div>
            </div>
        </div>
    )
}

export default ToDo