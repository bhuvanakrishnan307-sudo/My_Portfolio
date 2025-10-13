import { useState } from "react";
import './App7.css'; 

function App6() {
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ Name: "", password: "" });

  const validateUsername = (input) => {
    const username = /^[A-Za-z]+$/; 
    return username.test(input);
  };

  const validatePassword = (input) => {
    const passwordtest= /^.{6}$/; 
    return passwordtest.test(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { Name: "", password: "" };

    if (!validateUsername(Name)) {
      newErrors.Name = "Username must only contain letters (no numbers or special characters).";
    }

    if (!validatePassword(password)) {
      newErrors.password = "Password must be exactly 6 characters long.";
    }

    if (!newErrors.Name && !newErrors.password) {
      console.log("Form submitted successfully!");
      alert("Login successful!");
    }

    setErrors(newErrors);
  };

  
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (!validateUsername(value)) {
      setErrors((user) => ({ ...user, Name: "Username must only contain letters." }));
    } else {
      setErrors((user) => ({ ...user, Name: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setErrors((user) => ({ ...user, password: "Password must be exactly 6 characters long." }));
    } else {
      setErrors((user) => ({ ...user, password: "" }));
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={Name}
            onChange={handleUsernameChange}
            className={errors.Name ? "error" : ""}
          />
          {errors.Name && <p className="error-message">{errors.Name}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default App6;
