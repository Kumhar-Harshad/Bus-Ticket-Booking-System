import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addbus = () => {
    const navigate = useNavigate();
    const [busno, setBusno] = useState('');
    const [busname, setBusname] = useState('');  
    const [busroute, setBusroute] = useState('');  
    const [time, setTime] = useState('');  
    const [service, setService] = useState('');  
    const [mode, setMode] = useState('');  

    useEffect(() => {
        console.log("Add Bus");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("busno:", busno, "busname:", busname, "busroute:", busroute, "time:", time, "service:", service, "mode:", mode);

        axios.post("http://localhost:3001/addbus", {
            busno,
            busname,
            busroute,
            time,
            service,
            mode,
        })
        .then((response) => {  
           
            alert("BUS ADD IN YOUER DESHOBORAD");
            navigate('/busdata')               
            console.log("data:", response);
        })
        .catch((error) => {
            console.error("There was an error adding the bus!", error);
        });
    };

    return (
        <>
            <div>
                <h1>Add Bus Details</h1>
                <form onSubmit={handleSubmit} className='addbus'>
                    <div>
                        <input type='text' placeholder="Enter Your Bus No" value={busno} onChange={(e) => setBusno(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Enter Bus Name" value={busname} onChange={(e) => setBusname(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Bus Route" value={busroute} onChange={(e) => setBusroute(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Bus Time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Bus Service" value={service} onChange={(e) => setService(e.target.value)} />
                    </div>
                    <div>
                        <input type='text' placeholder="Enter Mode Bus Night/Morn" value={mode} onChange={(e) => setMode(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className='btn btn-outline-success addb'>Add Bus</button>
                    </div>
                </form>        
            </div>
        </>
    );
};

export default Addbus;
