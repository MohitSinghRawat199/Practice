import React, { useState } from 'react'
import "./Todo.css"

const Item = ({ todo, handleComplete, handleDelete,Todos, setTodos }) => {
    const [isEditing, setisEditing] = useState(false);
    const [updated,setupdated]=useState("");

    const handleUpdate=(e)=>{
        if(e.target.value.trim()==" ")
            return;
        setupdated(e.target.value)
    }

    const handleSave = (id)=>{
       if(updated.trim(" ")=="")
        return;

       const newtodo = Todos.map((todo)=>{
        return({...todo});
       });

       newtodo.forEach((todo)=>{
        if(todo.id==id)
        {
            todo.value=updated;
        }
       });
       setTodos(newtodo);
       setisEditing(false);

    }

    const handleKey =(e,id)=>{
        if(updated.trim(" ")=="")
        return;
        if(e.key=="Enter")
        {
            const newtodo = Todos.map((todo)=>{
        return({...todo});
       });

       newtodo.forEach((todo)=>{
        if(todo.id==id)
        {
            todo.value=updated;
        }
       });
       setTodos(newtodo);
       setisEditing(false);
        }
    }

    return (
        <div>
            <div key={todo.id} className="todo-item">
                {
                    isEditing ?
                        (<input
                            className="todo-input"
                            value={updated}
                            onKeyDown={(e)=>handleKey(e,todo.id)}
                            onChange={(e)=>handleUpdate(e)}
                            type="text"
                        />) : (
                            <span className={todo.isCompleted ? "Line todo-text" : "todo-text"}>
                                {todo.value}</span>)
                }

                <div>
                    {
                        !isEditing && <button
                            onClick={() => setisEditing(true)}
                            className="todo-btn complete-btn">Edit</button>
                    }
                    {
                        isEditing && <button
                            onClick={() => handleSave(todo.id)}
                            className="todo-btn complete-btn">Save</button>
                    }
                    
                    {!isEditing &&<button
                        onClick={() => handleComplete(todo.id)}
                        className="todo-btn complete-btn">
                    Completed</button>
                    }
                    {  !isEditing &&
                        <button
                        onClick={() => handleDelete(todo.id)}
                        className="todo-btn delete-btn">
                    Delete</button>}
                </div>
            </div>
        </div>
    )
}

export default Item
