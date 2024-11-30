import './css/passengerdetail.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";

function PassengerDetails() {
    const navigate = useNavigate();
    
    //new
    const [passengers, setPassengers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        number: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalPrice = formData.seat * 550;
        axios.post('http://localhost:3001/addPassenger', { ...formData, totalPrice })

            .then(response => {
                setPassengers(prevPassengers => [...prevPassengers, response.data]);
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    number: '',
                    from: '',
                    to: '',
                    date: '',
                    seat: '',

                });
                alert("Select Seat On Your Choice");
                localStorage.setItem("name", formData.name);

                localStorage.setItem("totalPrice", totalPrice); //
                navigate('/seatlayout');
            })
            .catch(err => console.error(err));
    };







    // load all city
    const [citys, setCitys] = useState([]);
    const [citys1, setCitys1] = useState([]);
    // get city
    // const handleSearch = () => {
    //     console.log("Searching for destination in:", city);

    // };

    useEffect(() => {
        const config = {
            cUrl: 'https://api.countrystatecity.in/v1/countries/IN/states/GJ/cities',
            ckey: 'QWFqZnRBUGVpVVpFOGZhcHhCRko4cFdRdFFRakhVWkpmb0MwcjhGag==' // this key sent in email
        };

        async function loadCities() {
            try {
                const response = await fetch(config.cUrl, {
                    headers: {
                        "X-CSCAPI-KEY": config.ckey
                    }
                });
                const data = await response.json();
                setCitys(data);
                setCitys1(data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }

        loadCities();
    }, []);
    return (
        <>
            <div className='passenger-detail table-responsive'>
                <form onSubmit={handleSubmit} >
                    <h1>Passenger Details</h1>
                    <Table striped bordered hover>
                        <tr>
                            <th className='' data-toggle="tooltip" data-placement="top" title="Serial no" >Sr.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Mobile No</th>
                            <th>From</th>
                            <th>TO</th>
                            <th>Date</th>
                            <th>No of Seat</th>
                            <th>Fare</th>
                        </tr>
                        <tr>
                            <td><input type='text' /></td>
                            <td> <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enert Your Name" required /></td>
                            <td> <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" required /></td>
                            <td><select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                                <option selected >Select Gender</option>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select></td>
                            <td><input type='text' name='number' placeholder='Enter Mobile No' value={formData.number} onChange={handleChange} required /></td>
                            <td> <select
                                className="allcity mb-4 px-4 py-2 border rounded w-full text-black" id='from'


                                value={formData.from} onChange={handleChange}
                                name='from'
                            >
                                <option value="" disabled>
                                    Select a city
                                </option>
                                {citys.map((city) => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select></td>
                            <td><select
                                className="allcity mb-4 px-4 py-2 border rounded w-full text-black" id='from'

                                value={formData.to} onChange={handleChange}

                                name='to'
                            >
                                <option value="" disabled>
                                    Select a city
                                </option>
                                {citys1.map((city) => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select></td>
                            <td><input type='date' name='date' value={formData.date} onChange={handleChange} required /></td>
                            <td><input
                                type='number'
                                name='seat'
                                value={formData.seat}
                                onChange={handleChange}
                                
                                min='1'
                                required
                            /></td>
                            <td><button className='btn btn-outline-success'>Fare</button></td>
                        </tr>

                        <tr>
                            <td><input type='text' name='id' /></td>
                            <td><input type='text' name='name1' /></td>
                            <td><input type='number' name='age1' /></td>
                            <td><select className="form-select" aria-label="Default select example" name="gender1" >
                                <option selected>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select></td>
                            <td><input type='text' name='number1' placeholder='Enter Mobile No' /></td>
                            <td><input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to"
                                    name='to1'>
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist> </td>
                            <td><input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to"
                                    name='from1'>
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist></td>
                            <td><input type='date' name='date1' /></td>
                            <td><input type='text' name='seat1' /></td>
                            <td><button className='btn btn-success'>Fare</button></td>
                        </tr>

                        <tr>
                            <td><input type='text' name='id' /></td>
                            <td><input type='text' name='name' /></td>
                            <td><input type='number' name='age' /></td>
                            <td><select className="form-select" aria-label="Default select example">
                                <option selected>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select></td>
                            <td><input type='text' name='number' placeholder='Enter Mobile No' /></td>
                            <td><input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to">
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist></td>
                            <td><input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to">
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist></td>
                            <td><input type='date' /></td>
                            <td><input type='number' /></td>
                            <td><button className='btn btn-success'>Fare</button></td>
                        </tr>

                        <tr>
                            <td><input type='text' name='id' /></td>
                            <td><input type='text' name='name' /></td>
                            <td><input type='number' name='age' /></td>
                            <td><select className="form-select" aria-label="Default select example">
                                <option selected>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select></td>
                            <td><input type='text' name='number' placeholder='Enter Mobile No' /></td>
                            <td> <input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to">
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist></td>
                            <td><input type="text" list="to" placeholder="Serch Bus To..." />
                                <datalist id="to">
                                    <option>Surat</option>
                                    <option>Varodara</option>
                                    <option>Vapi</option>
                                    <option>Bharch</option>
                                </datalist></td>
                            <td><input type='date' /></td>
                            <td><input type='number' /></td>
                            <td><button className='btn btn-success'>Fare</button></td>
                        </tr>
                    </Table>

                    <div className='but'>
                        <Link to='/availabelbus'><button className='btn btn-outline-danger b'>Back</button></Link>
                        <button type='submit' className='btn btn-outline-success n'  >Next</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default PassengerDetails;