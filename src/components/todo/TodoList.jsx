import { useState } from 'react'
import s from './TodoList.module.css'


const TodoList = () => {

    const [list,setList] = useState([])
    const [todo,setTodo] = useState("")

    const handleAdd = (e) =>{

        if(!todo) return alert ("No input")
            
        e.preventDefault()
        setTodo("")
        setList([...list,todo])
    }

    const handleRemove = (indexToRemove) => {
        const newList = list.filter((_, index) => index !== indexToRemove)
        setList(newList)
    }

    return(
        <div className={s.todoContainer}>
            <div>
                <h2>Todo list</h2>
                <div className={s.inputContainer}>
                    <input
                    type="text"
                    placeholder='add to your todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={handleAdd}>Add</button>
                </div>
            </div>
            <div>
                <ol>
                    {
                        list.map((todo,index)=><div className={s.listContainer}>
                            <li key={index}>{todo}</li>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>)
                    }
                </ol>

            </div>

        
        </div>

    )
}

export default TodoList