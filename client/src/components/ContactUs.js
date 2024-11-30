import React from 'react';
import '../components/css/contactus.css';
import insta from './css/Image/insta.png'
import facebook from './css/Image/facebook.png'
import whatsapp from './css/Image/whatsapp.png'
import linkedin from './css/Image/linkedin.png'
import Marquee from "react-fast-marquee";


const ContactUs = () => {
    return (
        <div className="contact-us">

            <section className="contact-info">
                <h2 id='l'>Contact Us</h2>
                <p>
                    Have questions or want to get in touch with us? Feel free to reach out to us through the following channels:
                </p>
                <ul>
                    <li><i className='bx bxs-envelope bx-tada bx-flip-horizontal' ></i>Email: <a href="mailto:info@buscompany.com">GSRTC@buscompany.com</a></li>
                    <li><i className='bx bxs-contact bx-tada bx-flip-horizontal' ></i>Phone: <a href="tel:+1234567890">+1 234-567-890</a></li>
                    <li><i className='bx bx-current-location bx-tada bx-flip-horizontal' ></i>Address: 123 Bus Street, Surat, GUJARAT</li>
                </ul>
             <div className="social-icon">
              <h3>Social Media</h3>
              <img className='social' alt='facebook' src={facebook}/>
              <img className='social' alt='instagram' src={insta}/>
              <img className='social' alt='whatsapp' src={whatsapp}/>
              <img className='social' alt='inkendin' src={linkedin}/>
            </div>
           
            </section>
            <div className='row cont'>
                <Marquee className='mark' scrollamount="8" delay='0.5' direction="right">Welcome TO GSRTC (GUJARAT SATE ROAD TRANSPORT CORPORATION ),In case any bus inquiry problems please call the toll free number 1800-2000-103, 7412069719 / 7412069699 of GRSRTC. ,Email: GSRTC@buscompany.com  , Phone: +1 234-567-890  ,Address: 123 Bus Street, Surat, GUJARAT</Marquee>
            </div>
        </div>
    );
};

export default ContactUs;