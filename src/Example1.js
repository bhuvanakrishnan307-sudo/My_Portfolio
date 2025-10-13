import { useState } from "react";
function Example1(){
  const[Value,setValue]=useState("");
  return(
    <div>
      <label>Enter a Value:</label>
      <input
      type="text"
      value={Value}
      onChange={(event)=>setValue(event.target.value)}
      placeholder="Enter a value"
      />
    </div>
  );
}
export  default Example1;