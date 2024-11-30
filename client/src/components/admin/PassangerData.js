import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PassengerTable() {
    const [passengers, setPassengers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        number:'',
        from: '',
        to: '',
        date: '',
        seat: '',
        
    });

    useEffect(() => {
        // Fetch all passengers when the component mounts
        axios.get('http://localhost:3001/passengers')
            .then(response => setPassengers(response.data))
            .catch(err => console.error(err));
    }, []);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({ ...prevData, [name]: value }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/addPassenger', formData)
            .then(response => {
                setPassengers(prevPassengers => [...prevPassengers, response.data]);
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    number:'',
                    from: '',
                    to: '',
                    date: '',
                    seat: '',
                   
                });
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            

            <h3>Passenger List</h3>
            <table >
                <thead>
                    <tr>
                        <th>PNR Number</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th>No OF Seat </th>
                       
                    </tr>
                </thead>
                <tbody>
                    {passengers.map((passenger) => (
                        <tr key={passenger.id}>
                            <td>{passenger.id}</td>
                            <td>{passenger.name}</td>
                            <td>{passenger.age}</td>
                            <td>{passenger.gender}</td>
                            <td>{passenger.number}</td>
                            <td>{passenger.from}</td>
                            <td>{passenger.to}</td>
                            <td>{passenger.date}</td>
                            <td>{passenger.seat}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PassengerTable;
