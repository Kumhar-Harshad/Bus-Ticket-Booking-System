import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BusTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/bus");
                setData(response.data);
            } catch (err) {
                setError("Error fetching data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deleteBus = async (busno) => {
        console.log("Attempting to delete bus with busno:", busno);
        if (window.confirm("Are you sure you want to delete this bus?")) {
            try {
    const response = await axios.delete(`http://localhost:3001/bus/${busno}`);
    console.log('Bus deleted successfully:', response.data);
} catch (error) {
    console.error('Error deleting bus:', error);
    // Handle specific error cases if needed
}

        }
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data.length) return <p>No bus data available.</p>;

    return (
        <div>
            <h3>Bus Details</h3>
            <table>
                <thead>
                    <tr>
                        <th>BUS No</th>
                        <th>Bus Name</th>
                        <th>Bus Route</th>
                        <th>Time</th>
                        <th>Service</th>
                        <th>Mode (Day/Night)</th>
                        <th>Edit</th>
                        <th>Delete</th>
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
                                <Link to={`/updatebus`}>
                                    <button className='btn btn-outline-primary'>Update</button>
                                </Link>
                            </td>
                            <td>
                                <button
                                    className='btn btn-outline-danger'
                                    onClick={() => deleteBus(bus.busno)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Add Bus:</h4>
            <Link to='/addbus'>
                <button className='btn btn-outline-success'>Insert</button>
            </Link>
        </div>
    );
}

export default BusTable;
