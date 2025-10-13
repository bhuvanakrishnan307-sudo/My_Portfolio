import axios from "axios";
import { useState, useEffect } from "react";

function UserList() {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/records");
            setUsers(response.data); 
        } catch (err) {
            console.error("Error Fetching Users:", err);
        }
    };

    return (
        <div>
            <h2>Database</h2>
            
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <ul>
                        <li key={user._id || index}>{user.name}</li> 
                        </ul>
                    ))
                ) : (
                    <p>No users found.</p>
                )}
           
        </div>
    );
}

export default UserList;
