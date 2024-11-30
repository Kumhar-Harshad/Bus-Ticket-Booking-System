import './css/payment.css'
import { useState ,useEffect } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";


function Payment() {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  //data

  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  
  const [cardname, setCardname] = useState();
  const [cardnumber, setCardnumber] = useState();
  const [expmonth, setExpmonth] = useState();
  const [expyear, setExpyear] = useState();
  const [cvv, setCvv] = useState();
  console.log(totalPrice);

  useEffect(() => {
    const price = localStorage.getItem("totalPrice");
    if (price) {
      setTotalPrice(price);
    }
  }, []);

  const handleSubmi = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/payment', {
      firstname,
      email,
      address,
      city,
      state,
      zip,
      totalPrice: totalPrice, 
      cardname,
      cardnumber,
      expmonth,
      expyear,
      cvv
    })
      .then(result => {
        console.log(result);
        alert("See Your Ticket for GSRTC");
        navigate('/other');
      })
      .catch(err => console.log(err));
  };


  return (
    <>
      <div className='payment-page'>
        <h1 id='pay'>Payment</h1>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form >

                <div className="row">
                  <div className="col-50">
                    <h3 >Billing Address</h3>
                    <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Enter Your Full Name" onChange={(e) => setFirstname(e.target.value)} />
                    <label for="email"><i className="fa fa-envelope"></i> Email</label>
                    <input type="text" id="email" name="email" placeholder="WWW12@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                    <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={(e) => setAddress(e.target.value)} />
                    <label for="city"><i className="fa fa-institution"></i> City</label>
                    <input type="text" id="city" name="city" placeholder="Surat ,Gujarat" onChange={(e) => setCity(e.target.value)} />

                    <div className="row">
                      <div className="col-50">
                        <label for="state">State</label>
                        <input type="text" id="state" name="state" placeholder="NY" onChange={(e) => setState(e.target.value)} />
                      </div>
                      <div className="col-50">
                        <label for="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder="10001" onChange={(e) => setZip(e.target.value)} />
                      </div>
                    </div>
                  </div>

                  <div className="col-50">

                    <div className="icon-container row ">
                      <div className='col-6'>
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <i className='bx bxs-credit-card  cd' ></i>
                        <i className='bx bxl-visa vi' ></i>
                        <i className='bx bxl-paypal pp'></i>
                        <i className='bx bxs-credit-card-alt cdc' ></i>
                        <i className='bx bxl-mastercard mc' ></i>
                        <i className='bx bx-money mo' ></i>

                      </div>
                      <div className='col-6'>
                        <h3>Total Price</h3>
                        <span><input id='totalprice' name='totalprice' value={totalPrice}  onChange={(e) => setTotalPrice(e.target.value)} /></span>
                      </div>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="Enter Card Name" onChange={(e) => setCardname(e.target.value)} />
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={(e) => setCardnumber(e.target.value)} />
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={(e) => setExpmonth(e.target.value)} />
                    <div className="row">
                      <div className="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2050" onChange={(e) => setExpyear(e.target.value)} />
                      </div>
                      <div className="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352" onChange={(e) => setCvv(e.target.value)} />
                      </div>
                    </div>
                  </div>

                </div>
                <label className='col-6'>
                  <input type="checkbox" className='col-6' name="sameadr" />Conmform payment billing
                </label>
                <input type="submit" value="Continue to checkout" class="btn pb" onClick={handleSubmi} />
              </form>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
export default Payment;