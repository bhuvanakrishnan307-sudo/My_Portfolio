import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from './Studentslice';
const AddStudent=()=>{
    const[name,setName]=useState("");
    const dispatch =useDispatch();
    const handelAddStudent=()=>{
     if(name.trim() !==""){
        dispatch(addStudent(name));
        setName("");
     }
    }
    return(
        <div>
            <h2>Add student
            </h2>
            <input 
            type="text"
            value={name}
            onChange={(event)=> setName(event.target.value)}
            placeholder="Enter anything..." 
            />           
            <button onClick={handelAddStudent}>Click</button>
        </div>
    )
};
export default AddStudent;