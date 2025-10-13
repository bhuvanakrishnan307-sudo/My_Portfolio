import React from "react";

const ViewStudent = ({ students }) => {
  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((student, index) => (
            <li key={index}>{student}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ViewStudent;
