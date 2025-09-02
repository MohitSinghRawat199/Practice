import React, { useEffect, useState } from 'react'
import './Todo.css'
import { use } from 'react';
import Item from './Item';

const Todo = () => {
    const [Task, setTask] = useState("");
    const [Todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[]);


    const handlechange = (e) => {
        setTask(e.target.value);
    };

    const AddTodos = (e) => {
        if (Task.trim() === "") return;
        const newTodos = Todos.map((Item) => ({ ...Item }));
        newTodos.push({
            value: Task,
            isCompleted: false,
            id: new Date().getTime()
        });
        setTodos(newTodos);
        setTask("");
    };

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            if (Task.trim() === "") return;
            const newTodos = Todos.map((Item) => ({ ...Item }));
            newTodos.push({
                value: Task,
                isCompleted: false,
                id: new Date().getTime()
            });
            setTodos(newTodos);
            setTask("");
        }
    }

    const handleDelete = (id)=>{
        const filteredTodo = Todos.filter((todo)=>todo.id!==id);
        setTodos(filteredTodo);
    }

    const handleComplete = (id)=>{
      const newTodo = Todos.map((todo)=>{
        return(
            {...todo}
        )
      });
      newTodo.forEach((todo)=>{
        if(todo.id==id){
            todo.isCompleted=!todo.isCompleted;
        }
      });
      setTodos(newTodo);  
    }

   useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(Todos))
   },[Todos])

    return (
        <>
            <div className="todo-container">
                <div>
                    <label>
                        <input
                        onKeyDown={handleKeyDown} 
                            className="todo-input"
                            value={Task}
                            onChange={handlechange}
                            type="text"
                        />
                    </label>
                    <button 
                    
                    onClick={AddTodos} className="todo-btn add-btn">
                        Add Task
                    </button>
                </div>
            </div>

            <div className="todo-list">
                {Todos.map((todo,index) => {
                    return (
                        <Item todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} Todos={Todos} setTodos={setTodos} />
                    );
                })}
            </div>
        </>
    );
};

export default Todo;
