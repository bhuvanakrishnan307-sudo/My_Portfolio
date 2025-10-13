import { useState} from 'react';
function App1(){
    const[inputValue,setInputValue]=useState("");

    return(
        <div>
            <inpuy 
            type="text"
            value={inputValue}
            onChange={(event)=> setInputValue(event.target.value)}
            placeholder="Enter anything..." 
            />           
        </div>

    );
}
export default App1;