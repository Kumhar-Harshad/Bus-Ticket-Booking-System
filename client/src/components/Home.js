import './css/home.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Advertise from "./Advertise";
import ContactUs from './ContactUs';
import AboutUS from './AboutUS';
import ReviewPage from './Review';
import GrowingNumber from './GrowingNumbers';
import axios from "axios";
import Service from './Service';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ThemeProvider from 'react-bootstrap/ThemeProvider'


function Home() {

    //alert
    // const showAlert = () => {
    //     alert('Button was clicked!');
    //   };
    const [showA, setShowA] = useState(true);
    
  
    const toggleShowA = () => setShowA(!showA);
    
    const [city, setCity] = useState("");
    const [city1, setCity1] = useState("");
    const navigate = useNavigate();

    // get city
    const handleSearch = () => {
        console.log("Searching for destination in:", city);
        alert("Search Bus GSRTC");

        navigate("/availabelbus")
    };

    // load all city
    const [citys, setCitys] = useState([]);
    const [citys1, setCitys1] = useState([]);

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
                setCitys1(data)
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }

        loadCities();
    }, []);

    //get user 
    useEffect(() => {
        axios.get('http://localhost:3001/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                console.log(res.data.user.username);
                console.log(res.data.user.role);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
                    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
            <div className='home col-md-12 col-sm-12 col-lg-12'>
                <form>
                    <div className='container col-md-12 col-sm-12 col-lg-12'>
                        
                            <h2 id='wlc' className='blink'>Welcome To GSRTC</h2>
                            <div className="itemserch col-md col-sm col-lg">

                                <label id='te'>From Stop:</label>
                                <select
                                    className="allcity mb-4 px-4 py-2 border rounded w-full text-black" id='to' placeholder="Serch Bus From..."
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a city
                                    </option>
                                    {citys.map((city) => (
                                        <option key={city.id} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select> <br></br><br></br>

                                <label id='te'>To Stop:</label>
                                <select
                                    className="allcity mb-4 px-4 py-2 border rounded w-full text-black" placeholder="Serch Bus To..."
                                    id='from'
                                    value={city1}
                                    onChange={(e) => setCity1(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a city
                                    </option>
                                    {citys1.map((city) => (
                                        <option key={city.id} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select><br></br><br></br>

                                <label id='te' >Date:</label><input type="date" name="form" data-toggle="tooltip" data-placement="top" title="Select Date" required />
                                <br></br><br></br>
                                <button className="btn btn-danger serch" onClick={handleSearch} >Serch</button>
                                
                            </div>
                            
                            
                    </div>

                </form>
                <Row >
                            <Col md={6} className="mb-2">
                               
                                <Toast className='tost '  show={showA} onClose={toggleShowA} delay={3000} autohide animation='ture' >
                                    <Toast.Header >
                                        <img
                                            src="holder.js/20x20?text=%20"
                                            className="rounded me-2"
                                            alt=""
                                        />
                                        <strong className="me-auto">GSRTC</strong>
                                        <small>just now</small>
                                    </Toast.Header>
                                    <Toast.Body >Welcome to GSRTC!</Toast.Body>
                                </Toast>
                            </Col>
                            </Row>
            </div>

  
</ThemeProvider>;
            <br></br>
            <GrowingNumber />

            <br></br>
            <Service /><br></br>
            <ReviewPage />

            <br></br>
            <Advertise />

            <br></br>
            <AboutUS />
            <br></br>
            <ContactUs />


        </>
    )
}
export default Home