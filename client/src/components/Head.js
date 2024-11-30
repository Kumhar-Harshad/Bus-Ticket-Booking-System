import { useEffect, useState } from 'react';
import './css/style.css'
import bus from './css/Image/grsrtc.png'
import axios from 'axios'

import Nav from 'react-bootstrap/Nav';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {

    const [login, setlogin] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        setlogin(localStorage.getItem("token"))
    }, [])

    const logout = () => {
        alert("logout successfully")
        localStorage.removeItem('token')
    }

    const [role, setrole] = useState();

    useEffect(() => {
        axios.get('http://localhost:3001/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                setrole(res.data.user.role);
                setUsername(res.data.user.username);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
                            <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
            <div className="head row col-md-12 col-lg-12 col-sm-12">
                <div className="logo col-3"><img src={bus} alt='hello' /></div>
                {/* <div className="logo col-3"><h3><i class='bx bxs-bus ' ></i> Bus Ticket Booking</h3></div> */}

                {role === "ADMIN" ?
                    <>
                        <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/" className='ae'>Home</a></div>
                        <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/busdata" className='ae'>BUS DETAILS</a></div>
                        <div className="col-md-2 col-sm-2 col-lg-2 lin"><a href="/passangertable" className='ae'>PASSANGERS DETAILS</a></div>
                        <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/paymenttable" className='ae'>PAYMENTS DETAILS</a></div>
                        <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/userdata" className='ae'>USERS DETAILS</a></div>
                    </>
                    :
                    <><div className="col-md-1 col-sm-1 col-lg-1 lin "><a href="/" className='ae '><i class='bx bx-home-heart'></i>Home</a></div>
                    <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/adverties" className='ae'>Adverties</a></div>
                    <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/review" className='ae'>Review</a></div>
                    <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/contactus" className='ae'>ContactUs</a></div>
                    <div className="col-md-1 col-sm-1 col-lg-1 lin"><a href="/aboutus" className='ae'>AboutUS</a></div>
                    
                    
                    <div className="col-md-1 col-sm-1 col-lg-1 lin" >
                            <Nav >
                                <NavDropdown  
                                    className="drop"
                                    title="More Options"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item href="searchticket">Ticket Download</NavDropdown.Item>
                                    <NavDropdown.Item href="cancelticket">Cancellation Ticket</NavDropdown.Item>
                                    <NavDropdown.Item href="/service">Service</NavDropdown.Item>
                                    <NavDropdown.Item href="/privacypolicy">Privacy & PolicyPage</NavDropdown.Item>
                                    <NavDropdown.Item href="/termscondition">Terms & Conditions</NavDropdown.Item>
                                    <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                                    <NavDropdown.Item href="/other">Other</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            


                        </div></>
                }


                {login ?
                    <>
                       <Link to='/userprofile' className='col-md-2 col-sm-2 col-lg-2 ln' > <p >Welcome To ,<span>{username}</span></p></Link>
                        <a href='/' className="col-md-1 col-sm-1 col-lg-1 out"><button className="btn btn-outline-danger" onClick={logout}>Logout</button>  </a>
                    </>
                    
                    :
                    <>
                        <a href='/login' className="col-md-1 col-sm-1 col-lg-1 lin"><button className="btn btn-outline-success L">Login</button> </a>
                        <a href='/singup' className="col-md-1 col-sm-1 col-lg-1 lin"><button className="btn btn-outline-danger R">Registration</button>  </a>
                    </>}


            </div >
            </ThemeProvider>

        </>


    )
}

export default Header