import React, {  useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function UpdateBus() {
    const [ busno, setbusno ] = useState();
    console.log(busno);
    
    const [formData, setFormData] = useState({
        busname: '',
        busroute: '',
        time: '',
        service: '',
        mode: '',
    });
    const navigate = useNavigate();

    // useEffect(() => {
    //     // Fetch the bus details to edit
    //     axios.get(`http://localhost:3001/bus/${busno}`)
    //         .then(response => setFormData(response.data))
    //         .catch(err => console.error(err));
    // }, [busno]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/bus/${busno}`, formData)
            .then((data) => {
                console.log(data);
                alert("DATA UPDATED SUCCESS")
                navigate('/busdata'); // Redirect back to the bus list
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Update Bus</h3>
            <form onSubmit={handleSubmit} className='addbus'>
            <div>
                    
                    <input type="text" name="busno" onChange={(e) => setbusno(e.target.value)} placeholder='Enter Youer Update Bus No....' required />
                </div>
                <div>
                    <label>Bus Name:</label>
                    <input type="text" name="busname" value={formData.busname} onChange={handleChange} required />
                </div>
                <div>
                    <label>Bus Route:</label>
                    <input type="text" name="busroute" value={formData.busroute} onChange={handleChange} required />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="text" name="time" value={formData.time} onChange={handleChange} required />
                </div>
                <div>
                    <label>Service:</label>
                    <input type="text" name="service" value={formData.service} onChange={handleChange} required />
                </div>
                <div>
                    <label>Mode (Day/Night):</label>
                    <input type="text" name="mode" value={formData.mode} onChange={handleChange} required />
                </div>
                <button type="submit" className='btn btn-outline-primary addb'>Update</button>
            </form>
        </div>
    );
}

export default UpdateBus;
