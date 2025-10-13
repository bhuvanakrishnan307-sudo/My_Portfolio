import { useState } from 'react';

function App2() {
    const [Num, setNum] = useState("");
    const [result, setResult] = useState("");

    const checkPrime = () => {
        const number = parseInt(Num, 10); 
        if (!isNaN(number) && number > 1) {
                        const isPrime = isPrimeNumber(number);
            setResult(isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`);
        } else {
            setResult("Please enter a valid integer greater than 1");
        }
    };

    const isPrimeNumber = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false; 
            }
        }
        return true; 
    };

    return (
        <div>
            <label>Enter an Integer Greater than 1:</label>
            <input
                type="text"
                value={Num}
                onChange={(event) => setNum(event.target.value)} 
            />
            <p>Answer: {result}</p> 
            <button onClick={checkPrime}>Submit</button> 
        </div>
    );
}

export default App2;