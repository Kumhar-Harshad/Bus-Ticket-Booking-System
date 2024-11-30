import React, { useEffect, useState } from "react";
import './css/downloadticket.css';
import title from './css/Image/grsrtc.png';
import axios from 'axios';
import { Link } from "react-router-dom";
function DownloadTicket() {
    const [, setName] = useState('');
    const [details, setDetails] = useState(null);
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        busNo: '',
        busName: '',
        service: '',
        mode: '',
        to: '',
        from: '',
        time: '',
        date: '',
        name: '',
        age: '',
        gender: '',
        mobileNo: '',
        seatNo: '',
        totalPrice: ''
    });

    useEffect(() => {
        const storedBus = JSON.parse(localStorage.getItem('selectedBus'));
        if (storedBus) {
            setFormData(prevState => ({
                ...prevState,
                busNo: storedBus.busno,
                busName: storedBus.busname,
                service: storedBus.service,
                mode: storedBus.mode,
                time: storedBus.time,
                // Set other properties as needed
            }));
        }
    }, []);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedPrice = localStorage.getItem("totalPrice");
        if (storedName) {
            setName(storedName);
            fetchLastInsertedPassenger();
        }
        if (storedPrice) {
            setFormData(prevState => ({
                ...prevState,
                totalPrice: storedPrice
            }));
        }
    }, []);

    const fetchLastInsertedPassenger = () => {
        axios.get('http://localhost:3001/last-passenger')
            .then(res => setDetails(res.data))
            .catch(err => console.error("Error fetching passenger details:", err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Insert new passenger data
        axios.post('http://localhost:3001/insert', formData)
            .then(() => {
                fetchLastInsertedPassenger();
                setFormData({ 
                    id: '',
                    busNo: formData.busNo,
                    busName: formData.busName,
                    service: formData.service,
                    mode: formData.mode,
                    to: formData.to,
                    from: formData.from,
                    time: formData.time,
                    date: '',
                    name: '',
                    age: '',
                    gender: '',
                    mobileNo: '',
                    seatNo: '',
                    totalPrice: ''
                });
                // alert("HAPPY JOURNEY....");
                // navigate("/home")
            })
            .catch(err => console.error("Error submitting passenger data:", err));
    };

    return (
        <div className="download-ticket">
            <div>
                <h1 className="dt">GSRTC TICKET</h1>
                <img className="ti" src={title} alt="title" />
            </div>

            {details ? (
                <form onSubmit={handleSubmit}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>PNR NUMBER</th>
                                <th>BUS NO</th>
                                <th>BUS NAME</th>
                                <th>SERVICE</th>
                                <th>MODE</th>
                                <th>From</th>
                                <th>To</th>
                                <th>TIME</th>
                                <th>DATE</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>MOBILE NO</th>
                                <th>SEAT NO</th>
                                <th>TOTAL PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{details.id}</td>
                                <td>{formData.busNo}</td>
                                <td>{formData.busName}</td>
                                <td>{formData.service}</td>
                                <td>{formData.mode}</td>
                                <td>{details.from}</td>
                                <td>{details.to}</td>
                                <td>{formData.time}</td>
                                <td>{details.date}</td>
                                <td>{details.name}</td>
                                <td>{details.age}</td>
                                <td>{details.gender}</td>
                                <td>{details.number}</td>
                                <td>{details.seat}</td>
                                <td>{formData.totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <Link to="/"><button class="button type1" onClick={() => window.print()}>
                    </button></Link>
                    
                    
                </form>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default DownloadTicket;
