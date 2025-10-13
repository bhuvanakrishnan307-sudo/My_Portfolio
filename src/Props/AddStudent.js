import React, { useState } from 'react';

const AddStudent = ({ addStudent }) => { // Accept addStudent as a prop
  const [name, setName] = useState("");

  const handleAddStudent = () => {
    if (name.trim() !== "") {
      addStudent(name); // Call the addStudent function passed as a prop
      setName(""); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter student name..."
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudent;
