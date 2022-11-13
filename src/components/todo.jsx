import { useState } from "react";
import TodoForm from "./todoForm";
import {v4 as uuid} from "uuid";
import TodoList from "./todoList";
import TodoStatistic from "./todoStatistic"
const Todo = ()=>{
    const [todos, setTodos] = useState([]);
    

    const handleOnSubmit =(title)=>{
       
        setTodos((todos)=>[...todos, {id:uuid(), title, isCompleted:false, createdAt: new Date()}]);
    };

    const handleIsCompletedChange = (id , isCompleted)=>{

      setTodos(todos.map((todo)=> {

        if (todo.id === id){

            return {
                ...todo, 
                isCompleted: 
                typeof isCompleted ==="boolean" ? isCompleted : !todo.isCompleted,
            };

        }
        return todo;

      }))
      
    }

    const clearAllDone = ()=>{
        setTodos((todos)=>todos.filter((todo)=>!todo.isCompleted))
    }

    const removeTodo = (id)=>{
        setTodos(todos=>todos.filter(todo=>todo.id!==id))
    }

    return (
        <>
        
        
         <TodoForm onSubmit={handleOnSubmit}/>
         <TodoStatistic todos={todos}/>
         <TodoList todos={todos} onIsCompleteChange = {handleIsCompletedChange} onRemove = {removeTodo} />
        <div>
            {todos.length>0 ? 
            <button className="btn btn-info" onClick={clearAllDone}>Clear All Done</button> : null}
        </div>
        </>
       
        
    )

}

export default Todo;