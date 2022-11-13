import { useState } from "react"; 
const TodoForm = ({onSubmit = ()=>{}})=>{

    const [input, setInput] = useState("");
    const [error, setError] = useState("")

    const handleInputChange = (e)=> {
        setError("");
        setInput(e.target.value)};
    const handleReset = () => setInput("");
    const handleOnSubmit = ()=>{

        if(input.length < 2){
            setError("Please enter task with more than 2 characters");
            return;
        }
         onSubmit(input);
         handleReset();
    }

    return (
        
        <>
        <div className="input-group mb-3">
            <span className="input-group-text" >I need to:</span>
            <input type="text" className="form-control" value={input} onChange={handleInputChange}/>
            <button className="btn btn-primary" onClick={handleOnSubmit}>Add</button>
        </div>
        <div className="text-danger">{error}</div>
        </>

    );

}
export default TodoForm;