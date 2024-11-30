// ImageSlider.js
// import React, { useState, useEffect } from 'react';

import './css/service.css'; // Ensure you have your CSS for styling

// // Import images
import image1 from './css/Image/service.jpg';
import image2 from './css/Image/service1.jpg';
import image3 from './css/Image/service2.jpg';
import vedio from './css/video/Gsrtc.mp4';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
const Service = () => {

  return (
    <>
  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
    <div className=' sc'>
      <div className='Service-page  row col-md-12 col-sm-12 col-lg-12 '>
        <div  className='col-6' >
          <h4 className='ser'>Special Services</h4>

          <ul>
            <h5>GSRTC provides the following special services</h5>
            <li className='sli'>Services to accomodate some major schedules of railway.</li>
            <li className='sli'>Contract services - Buses are given out on contract basis to the public for the special occasions.</li>
            <li className='sli'>Services to major schedules of railway.</li>
            <li className='sli'>Festival services.</li>
            <li className='sli'>Services connecting to schools and colleges.</li>
            <li className='sli'>Services connecting to pilgrim places.</li>
            <li className='sli'>Metro Link Services.</li>
            <li className='sli'>Volvo Services.</li>
            <li className='sli'> Intercity Services.</li>
          </ul>
          <p className="sp">There is a range with varied speed, comfort and amenities - Volvo, Volvo Sleeper, AC Seater, AC Sleeper, Sleeper, Gurjarnagari, Express, Ordinary, Intercity Express etc.</p>
        </div>
        <div className='col-6 vedi'>
        <video
        className="video-player"
        width="640"
        height="360"
        controls
        autoPlay
        loop
        muted
        src={vedio}// Replace with your video URL
      >
        Your browser does not support the video tag.
      </video>
        </div>
        <div className='row'>
      
      <img src={image1} alt='buss' className='col-4 ms'/>
      <img src={image2} alt='buss' className='col-4 ms'/>
      <img src={image3} alt='buss' className='col-4 ms'/>
  
    </div>

      </div>
      
      </div>
        
</ThemeProvider>

    </>
  );
};

export default Service;
