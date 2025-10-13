import React, { useState } from 'react';
import AddStudent from './AddStudent'; 
import ViewStudent from './ViewStudent'; 

const Store= () => {
  const [students, setStudents] = useState([]); 

  const addStudent = (studentName) => {
    setStudents([...students, studentName]); 
  };

  return (
    <div>
      <h1>Student Management App</h1>
      <AddStudent addStudent={addStudent} /> 
      <ViewStudent students={students} /> 
    </div>
  );
};
export default Store;