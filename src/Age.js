import { useState } from 'react';

function Age() {
  const [Age, setAge] = useState("");

  const message = Age >= 18 ? "You are an Adult" : "You are a minor";
  const textColor = Age >= 18 ? "green" : "red"; 

  return (
    <div>
      <input
        type="text"
        value={Age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter your Age"
      />
      <p style={{ color: textColor }}>
        {message}
      </p>
    </div>
  );
}

export default Age;
