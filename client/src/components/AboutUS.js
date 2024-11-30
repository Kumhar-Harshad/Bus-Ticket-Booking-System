import React from 'react';
import '../components/css/aboutus.css';
import person from './css/Image/person.jpg'
import person2 from './css/Image/person2.jpg'
import insta from './css/Image/insta.png'
import facebook from './css/Image/facebook.png'
import whatsapp from './css/Image/whatsapp.png'
import linkedin from './css/Image/linkedin.png'
import Marquee from "react-fast-marquee";

function AboutUS() {
  return (
    <>

      <div className="about-us col-md-12 col-sm-12 col-lg-12">
        <header className="about-us-header">
          <h1 className='rehead'>About Us</h1>
          <p>Welcome to our GSRTC BUS!</p>
        </header>

        <section className="company-info ">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide safe, reliable, and affordable transportation
            services to our community. We are committed to delivering high-quality
            service and ensuring that every journey with us is a pleasant experience.
          </p>
          <p>
            With over 20 years of experience in the industry, we pride ourselves on
            our dedication to customer satisfaction and our environmentally friendly
            practices.
          </p>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={person} alt="Nitesh Varma" />
              <h3>Nitesh Varma</h3>
              <p>CEO</p>
              <p>John has over 30 years of experience in the transportation industry and is dedicated to leading our company to new heights.</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Tanvi Jani" />
              <h3>Tanvi Jani</h3>
              <p>Chief Operations Officer</p>
              <p>Jane ensures that our operations run smoothly and that our buses are always ready to serve our customers.</p>
            </div>
            {/* Add more team members as needed */}
          
          <div className="social-icon">
             
              <h3>Social Media</h3>
              <img className='social' alt='facebook' src={facebook}/>
              <img className='social' alt='instagram' src={insta}/>
              <img className='social' alt='whatsapp' src={whatsapp}/>
              <img className='social' alt='inkendin' src={linkedin}/>
            </div>
            {/* Add more team members as needed */}
          </div>
          
        </section>
        <div className='row cont'>
          <Marquee className='mark' scrollamount="8" delay='0.5' direction="right">Welcome TO GSRTC (GUJARAT SATE ROAD TRANSPORT CORPORATION ),In case any bus inquiry problems please call the toll free number 1800-2000-103, 7412069719 / 7412069699 of GRSRTC. ,Email: GSRTC@buscompany.com  , Phone: +1 234-567-890  ,Address: 123 Bus Street, Surat, GUJARAT</Marquee>
        </div>
      </div>
    </>
  )

}
export default AboutUS;