import TodoItem from "./todoItem";
const TodoList = ({todos, onIsCompleteChange, onRemove})=> {
    
    return (
        
        <>
        <ul className="list-group">
            { todos.map((todo)=>{
               return  <TodoItem key = {todo.id} {...todo} onIsCompleteChange={() => onIsCompleteChange(todo.id)} onRemove = {()=>onRemove(todo.id)}/>


            })
            
            }
           

           
        </ul>
        </>
    )

}

export default TodoList;