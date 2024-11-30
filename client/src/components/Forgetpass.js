import React, { useState } from 'react';
import './css/forget.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Forgetpass = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmpass, setCPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmpass) {
          axios.post('http://localhost:3001/forget', {
              email,
              password,
              confirmpass
            })
            .then(
              (data) => 
              console.log(data),
              alert("Your Password Has Been Changed"),
              navigate("/login")
            )
            .catch((err) => console.log(err));
        } else {
          console.log("Password dose not match");
        }
      };
    return (
        <>
        <div className='forget-page' >
            <form  onSubmit={handleSubmit}>
            <h2>Forget Password</h2>
            <input type='email' name='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} required/>
            <input type='text' name='confpassword' placeholder='Enter Your New Password' onChange={(e) => setPassword(e.target.value)} required/>
            <input type='text' name='newpassword' placeholder='Enter Your confirm password' onChange={(e) => setCPassword(e.target.value)} required/>
            <button type='submit' className='btn btn-outline-danger fbtn'>CHANGE</button>
            </form>
        </div>
        
        </>
    );
}


export default Forgetpass;
