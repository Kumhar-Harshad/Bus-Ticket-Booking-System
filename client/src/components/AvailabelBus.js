import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './css/availabelbus.css'

function Availabelbus() {
    const [data, setData] = useState([]);
    const handleSelectBus = (bus) => {
        alert("Next TO Passenger Details....");
        localStorage.setItem('selectedBus', JSON.stringify(bus)); // Ensure this line executes
    };

    useEffect(() => {
        axios.get("http://localhost:3001/bus")
            .then((response) => {
                setData(response.data);
                console.log(response.data);

            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!data.length) return <div>Loading...</div>; // Show loading state if data is not yet available

    return (
        <div className='Availabel-bus'>
            <h3>Availabel Bus</h3>

            <Table striped bordered hover>
                <thead >
                    <tr >
                        <th className='bg-warning' >BUS.No</th>
                        <th className='bg-warning'>Bus Name</th>
                        <th className='bg-warning'>Bus Route</th>
                        <th className='bg-warning'>Time</th>
                        <th className='bg-warning'>Service</th>
                        <th className='bg-warning'>Mode(Day/Night)</th>
                        <th className='bg-warning'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((bus) => (
                        <tr key={bus.busno}>
                            <td>{bus.busno}</td>
                            <td>{bus.busname}</td>
                            <td>{bus.busroute}</td>
                            <td>{bus.time}</td>
                            <td>{bus.service}</td>
                            <td>{bus.mode}</td>
                            <td>

                                <Link to='/passengerdetail' onClick={() => handleSelectBus(bus)}>
                                    <button className='btn btn-outline-success'>Select</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Availabelbus;
