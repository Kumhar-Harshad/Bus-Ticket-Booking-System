import React, { useState } from 'react';
import axios from 'axios';
import './css/searchticket.css'
import Table from 'react-bootstrap/Table';

function SearchTicket() {
    const [pnr, setPnr] = useState("");
    const [passengers, setPassengers] = useState([]);
    const [error, setError] = useState(null);
    const storedBus = JSON.parse(localStorage.getItem('selectedBus'));

    

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        axios.post('http://localhost:3001/pdetails', { pnr })
            .then((response) => {
                setPassengers(response.data);// Update state with fetched data
                setError(null); // Clear any previous error
            })
            .catch((err) => {
                setError('Error fetching details');
                console.error(err);
            });
    };
   

    return (
        <div className="search-ticket col-md-12 col-sm-12 col-lg-12">
        <form onSubmit={handleSubmit}>
            <h3 className="rehead text-center">TICKET SEARCH OF YOUR JOURNEY</h3>
            <p className="text-center">Verify your Details and SEARCH for your Journey Tickets</p>

            <div>
                <input
                    type='text'
                    id='pnr'
                    name='pnr'
                    value={pnr}
                    onChange={(e) => setPnr(e.target.value)}
                    placeholder='PNR NUMBER ENTER'
                />
                <button type='submit' className='btn btn-outline-danger search'>Search</button>
            </div>
        </form>

        {error && <p className="error">{error}</p>} {/* Display error message if any */}

        <div>
        <Table striped bordered hover>
                <thead >
                    <tr >
                        <th >PNR Number</th>
                        <th>Bus No</th>
                        <th>Bus Name</th>
                        <th>Service</th>
                        <th>Mode</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Seat NO</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody >
                    {passengers.length > 0 ? (
                        passengers.map((passenger) => (
                            <tr key={passenger.id}>
                                <td>{passenger.id}</td>
                                <td>{storedBus.busno}</td>
                                <td>{storedBus.busname}</td>
                                <td>{storedBus.service}</td>
                                <td>{storedBus.mode}</td>
                                <td>{passenger.name}</td>
                                <td>{passenger.age}</td>
                                <td>{passenger.gender}</td>
                                <td>{passenger.number}</td>
                                <td>{passenger.from}</td>
                                <td>{passenger.to}</td>
                                <td>{storedBus.time}</td>
                                <td>{passenger.date}</td>
                                <td>{passenger.seat}</td>
                                <td>{localStorage.totalPrice    }</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="15" className='text-center'>No data available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    </div>
);
}
export default SearchTicket;
