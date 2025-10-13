import { useState} from 'react';
function Student(){
    const[Name,setName]=useState("");
    const[Students,setStudents]=useState(["Nithu","vidhu"]);
    const addStudent =()=>{
        setStudents([...Students,Name]);
    }

    return(
        <div>
            <label>Enter a name</label>
            <input
            type="text"
            value={Name}
            onChange={(event)=> setName(event.target.value)}
            placeholder="Enter a name"/>
            <button onClick={addStudent}>Add Names:</button>
            <ol>
            { 
            Students.map((student,index)=>(
                <li key={index}>{student}</li>)
            )} 
            </ol>          
        </div>
    );
}
export default Student;