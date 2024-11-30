import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Alert from 'react-bootstrap/Alert';


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

import Layout from './Layout1';
import Login from './components/Login';
import Singup from './components/SingUp';
import Home from './components/Home';
import Busserch from './components/Busserch';
import ReviewPage from "./components/Review";
import ContactUs from "./components/ContactUs";
import AboutUS from "./components/AboutUS";
import Availabelbus from "./components/AvailabelBus";
import Seatlayout from "./components/Seatlayout";
import PassengerDetails from "./components/PassengerDetails";
import Payment from "./components/Payment.js";
import Privacypolicy from "./components/PrivacyPolicyPage.js";
import Termscondition from "./components/Terms-conditions.js";
import FAQ from "./components/FAQ.js";
import Adverties from "./components/Advertise.js";
import CancelTicket from "./components/CancelTicket.js";
import SearchTicket from "./components/SearchTicket.js";
import Downloadtikcet from "./components/Downloadticket.js";
import PassengerTable from "./components/admin/PassangerData.js";
import Service from "./components/Service.js";
import PaymentTable from "./components/admin/PaymetData.js";
import Forgetpass from "./components/Forgetpass.js";
import BusTable from "./components/admin/BusData.js";
import Userprofile from "./components/Userprofile.js";
import Adminprofile from "./components/admin/Adminprofile.js";
import Addbus from "./components/admin/Addbus.js";
import UpdateBus from "./components/admin/UpdateBus.js";
import UserData from "./components/admin/UserData.js";
import SeatSelector from "./components/Seatmul.js";




function App() {

  return (
    <>
      <BrowserRouter>
      
    <Routes>
    <Route path='/' element={<Layout />} >
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/forgetpass" element={<Forgetpass/>}/>
      <Route path="/userprofile" element={<Userprofile/>}/>
      <Route path="/busserch" element={<Busserch />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/availabelbus" element={<Availabelbus />} />
      <Route path="/passengerdetail" element={<PassengerDetails/>} />
      <Route path="/seatlayout" element={<Seatlayout/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/privacypolicy" element={<Privacypolicy/>} />
      <Route path="/termscondition" element={<Termscondition/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/adverties" element={<Adverties/>} />
      <Route path="/cancelticket" element={<CancelTicket/>}/>
      <Route path="/searchticket" element={<SearchTicket/>}/>
      <Route path="/other" element={<Downloadtikcet/>}/>
      
      <Route path="/service" element={<Service/>}/>


      <Route path="/passangertable" element={<PassengerTable/>}/>
      <Route path="/adminprofile" element={<Adminprofile/>}/>
      <Route path="/paymenttable" element={<PaymentTable/>}/>
      <Route path="/userdata" element={<UserData/>}/>
      <Route path="/busdata" element={<BusTable/>}/>
      <Route path="/addbus" element={<Addbus/>}/>
      <Route path="/updatebus" element={<UpdateBus/>}/>
      <Route path="/seatmul" element={<SeatSelector/>}/>
      


    </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
