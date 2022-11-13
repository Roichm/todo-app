

const TodoStatistic = ({todos =[]}) =>{

    
    return <div className="fw-bold">
        {todos.length > 0 ? 
        <p>Statistic:  {todos.filter((todo) => todo.isCompleted).length} / {todos.length}</p> : null
    }
        
        
        
    
    </div> 
    
 
  

}

export default TodoStatistic;