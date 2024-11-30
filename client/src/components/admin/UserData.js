import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserData() {
    const [user, setUser] = useState([]);
   

    useEffect(() => {
        // Fetch all passengers when the component mounts
        axios.get('http://localhost:3001/users')
            .then(response => setUser(response.data))
            .catch(err => console.error(err));
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({ ...prevData, [name]: value }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3001/adduser')
    //         .then(response => {
    //             setUser(prevUser => [...prevUser, response.data]);
                
    //         })
    //         .catch(err => console.error(err));
    // };

    return (
        <div>
            

            <h3>Users & Admin List</h3>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserData;