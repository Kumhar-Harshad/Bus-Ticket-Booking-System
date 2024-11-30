import { useState } from 'react';
import './css/cancelticket.css'
import { useNavigate } from 'react-router-dom';
// import {useState } from "react";
import axios from 'axios';

function CancelTicket() {
//     const [bookings,setBookings] = useState();

//     const deleteBooking =async (number) =>{
//     try{
//     const response = await fetch(
//         `http://localhost:3001//passenger/$()`,
//         {
//             method:"DELETE",
//         }

//     );

//     const result = await Response.json();
//     if (result) {
//         alert("delete Booking");
//         setBookings((prevBookings) => 
//             prevBookings.filter((Booking) => Booking._id !== id)
//     );
//     }
// }  catch (error)
//     {
//         console.error("Error Booking Delete " ,error);
//     }
// };
const [id, setId] = useState("")
const navigate = useNavigate();

const cancle = () => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    
    .then((e) => {
        alert("DATA Are Deleted in Database");
        navigate('/')})

    .catch((err) => console.error(err))
}

    return(
        <>
        <div className="cancel-ticket">
        <form onSubmit={cancle} >
            <h3 className="rehead text-center">TICKET CANCELLATION OF YOUR JOURNEY</h3>
            <p className="text-center">Verify your Details and Cancel of your Journey Tickets</p>
            
       
            <div>
                        <div className="textbox">
                            <input type="text" name="id" id='pn' onChange={(e) => setId(e.target.value)}  placeholder="Enter Your PNR Number"  />
                        </div>
                      
                       
                    <a href='/login'>  <button type="submit" class="btn btn-warning bc">Cancel TIcket</button></a>
                    </div>
                </form>
                   
        </div>
        
        </>
    )
    
}
export default CancelTicket