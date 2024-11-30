import React from 'react';
import { useEffect, useState } from 'react';
import prof from '../css/Image/profile.png';
import '../css/profile.css'
import axios from 'axios'

const Adminprofile = () => {
    const [login,setlogin] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [role, setrole] = useState();

    useEffect(() => {
        setlogin(localStorage.getItem("token"))
    }, [])

   

    useEffect(() => {
        axios.get('http://localhost:3001/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                setrole(res.data.user.role);
                setUsername(res.data.user.username);
                setEmail(res.data.user.email);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <>

            <div className='user-profile col-md-12 col-lg-12 col-sm-12'>
        <h3 className='text-center '>ADMIN PROFILE</h3>
        
       
        
        <div className='k'>
        <img className='pf' src={prof} alt='profile' />
        </div>
    

                {role === "ADMIN" ?
                    <>  <h3><span className='blink'>{role}</span></h3>
                         <h5 className='ph'>{role} Name : <span id='pname'>{username}</span></h5>
                         <h5 className='ph'>{role} Email : <span id='pname'>{email}</span></h5>
                    
                    </>
                    :

                    <>
                    <h5 className='ph'>Admin Name : <span id='pname'>Not Login</span></h5>
                    <h5 className='ph'>Admin Email : <span id='pname'></span>Not Login</h5>
                    </>}
       
        </div>

        </>
    );
}



export default Adminprofile;
