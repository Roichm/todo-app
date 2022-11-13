const TodoItem = ({id, title, isCompleted, createdAt, onIsCompleteChange, onRemove})=> {
    return <>
         <li className="list-group-item">
                <input className="form-check-input me-1 " 
                        onChange={onIsCompleteChange}
                       type="checkbox" 
                       checked = {isCompleted} />
                <span className="text-primary fw-bold">
                    {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()}</span>
                <span className="mx-2"> {title}</span>
                <button className="btn btn-danger" onClick={onRemove}>Remove</button>
            </li>
    </>

}

export default TodoItem;