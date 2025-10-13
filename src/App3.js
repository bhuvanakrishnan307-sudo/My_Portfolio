import { useState } from 'react';

function App3() {
    const [Num, setNum] = useState("");
    const [result, setResult] = useState("");

    const calculateFactorial = () => {
        const number = parseInt(Num, 10); 
        if (!isNaN(number) && number >= 0) {
            const factorial = factorialOf(number);
            setResult(`Factorial of ${number} is ${factorial}`);
        } else {
            setResult("Please enter a valid non-negative integer");
        }
    };

    const factorialOf = (n) => {
        if (n === 0 || n === 1) {
            return 1; 
        }
        return n * factorialOf(n - 1); 
    };

    return (
        <div>
            <label>Enter a Non-Negative Integer:</label>
            <input
                type="text"
                value={Num}
                onChange={(event) => setNum(event.target.value)}
            />
            <p>Answer: {result}</p>
            <button onClick={calculateFactorial}>Submit</button> 
        </div>
    );
}

export default App3;