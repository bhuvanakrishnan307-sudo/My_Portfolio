import { useState } from 'react';

function App5() {
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [result, setResult] = useState("");

    const performArithmeticOperations = () => {
        const numA = parseFloat(A); 
        const numB = parseFloat(B); 

        if (!isNaN(numA) && !isNaN(numB) && numB !== 0) { 
            const addition = numA + numB; 
            const subtraction = numA - numB;
            const multiplication = numA * numB;
            const division = numB !== 0 ? (numA / numB) : "undefined"; 

            setResult(<>
             <p>  Addition: {addition}</p>
             <p>  Subtraction: {subtraction}</p>
             <p>   Multiplication: {multiplication}</p>
             <p>  Division: {division}</p>
            </>);
        } else {
            setResult("Please enter valid numbers. Division by zero is not allowed.");
        }
    };

    return (
        <div>
            <label>Enter Number A:</label>
            <input
                type="text"
                value={A}
                onChange={(event) => setA(event.target.value)} 
            />
            <br />
            <label>Enter Number B:</label>
            <input
                type="text"
                value={B}
                onChange={(event) => setB(event.target.value)} 
            />
            <p>Answer: {result}</p> 
            <button onClick={performArithmeticOperations}>Submit</button>
        </div>
    );
}

export default App5;