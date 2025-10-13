import { useState } from "react";
function App8(){
        const [Name,setName]=useState("");
        const [Students,setStudents]=useState([]);
        const addStudent = () => {
            setStudents([...Students,Name]);
        };
        const Deletefrom = (index) => {
            setStudents(delarray => delarray.filter((_, stuIndex) => stuIndex !== index));            
        };
    return(
        <div>
            <label>Enter a name:</label>
            <input type="text"
             value={Name}
             onChange={(event)=>setName(event.target.value)} />
             <button onClick={addStudent}>Submit</button>
             <ol>
           { Students.map((student,index)=>
           (
             <li>
            <p Key={index}>{student}</p>
            <button onClick={() => Deletefrom(index)}>Delete</button>
            </li>
           )
        )}
        </ol>
        </div>
    );
}
export default App8;
