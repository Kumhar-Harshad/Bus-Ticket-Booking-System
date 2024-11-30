import { Link } from 'react-router-dom';
import './css/seatlayout.css';
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";
import axios from 'axios';

function Seatlayout() {
    const navigate = useNavigate();

    const [seat,setSeat] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Adjust the data format as per the schema
       
    
        axios.post('http://localhost:3001/seat', { seat })
            .then(result => {
                console.log(result);
                alert("Next Payment of Ticket ");
                
                navigate("/payment")
            })
            .catch(err => console.error(err));
    };
    
    return (
        <>
            <div className="seat-layout ">
                <h1 className='h'>Seat layout </h1>

                <table className="seat" >
                    <tr className="">
                        <th>A1</th>
                        <th></th>
                        <th>S1</th>
                        <th>S2</th>

                    </tr>
                    <tr id='sl'>
                        <td id='bb'><input type='checkbox' value='1' onChange={(e) => setSeat(e.target.value)} />1</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td id='bb'><input type='checkbox' value='2' onChange={(e) => setSeat(e.target.value)} />2</td>
                        <td id='bb'><input type='checkbox' value='3' onChange={(e) => setSeat(e.target.value)} />3</td>
                    </tr>
                    <tr>
                        <td id='bb'><input type='checkbox' value='4' onChange={(e) => setSeat(e.target.value)}  />4</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td id='bb'><input type='checkbox' value='5' onChange={(e) => setSeat(e.target.value)}  />5</td>                       
                        <td id='bb'><input type='checkbox' value='6' onChange={(e) => setSeat(e.target.value)}  />6</td>
                    </tr>
                    <tr>
                        <td id='bb'><input type='checkbox' value='7' onChange={(e) => setSeat(e.target.value)}  />7</td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td id='bb'><input type='checkbox' value='8' onChange={(e) => setSeat(e.target.value)} />8</td>
                        <td id='bb'><input type='checkbox' value='9' onChange={(e) => setSeat(e.target.value)}  />9</td>
                    </tr>
                    <tr>
                        <td id='bb'><input type='checkbox' value='10' onChange={(e) => setSeat(e.target.value)} />10</td>
                        <td id='bb'><input type='checkbox' value='11' onChange={(e) => setSeat(e.target.value)} />11</td>
                        <td id='bb'><input type='checkbox' value='12' onChange={(e) => setSeat(e.target.value)} />12</td>
                        <td id='bb'><input type='checkbox' value='13' onChange={(e) => setSeat(e.target.value)} />13+</td>
                    </tr>

                    
                </table>
                <div className='but'>
                <Link to='/passengerdetail'><button className='btn btn-outline-danger sb'>Back</button></Link>
                <button className='btn btn-outline-success sn' onClick={handleSubmit}>Next</button>
                </div>
                <div className='row cont'>
          <Marquee className='mark' scrollamount="8" delay='0.5' direction="left"> Welcome TO GSRTC (GUJARAT SATE ROAD TRANSPORT CORPORATION ),In Select bus Seat in your choiece  Surat, GUJARAT</Marquee>
        </div>
            </div>
        </>
    )

}
export default Seatlayout;