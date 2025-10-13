import { useState } from 'react';

function App2() {
    const [Num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkOddEven = () => {
        const number = parseInt(Num, 10); 
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                setResult("Even");
            } else {
                setResult("Odd");
            }
        } else {
            setResult("Please enter a valid number");
        }
    };

    return (
        <div>
            <label>Enter a Number:</label>
            <input
                type="text"
                value={Num}
                onChange={(event) => setNum(event.target.value)} 
            />
            <p>Answer: {result}</p> 
            <button onClick={checkOddEven}>Submit</button> 
        </div>
    );
}

export default App2;