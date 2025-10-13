import React from "react";
import { useSelector } from "react-redux";
const ViewStudent =()=>{
    const students = useSelector((state)=>state.students.students);
    return(
        <diV>
            <h2>Students list</h2>
            <ul>
                {students.map((student,index)=>(
                    <li key={index}>:{student}</li>
                ))}
            </ul>
        </diV>
    );
};
export default ViewStudent