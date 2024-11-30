import '../components/css/review.css'

// import React, { useState } from 'react';

const ReviewPage = () => {
  
//   const alertr = () => {
       
//     alert("Thank You For Review....");
    
// };

  return (
    <>
    <div className="review-page col-md-12 col-sm-12 col-lg-12">
        <div >
          <h1 className='rehead'>
          GSRTC Ratings & Reviews</h1>
          <div className='row reviwew-box'>
            <div className='col-10'>
              <h4>PANKAJ PARAJAPATI</h4>
              <p className="rp">I am very satisfied with your service</p>
              
            </div>
            <div className='col-2'>
            <button className='btn btn-success reviewbtn'>5.1 <i class="fa fa-star" aria-hidden="true"></i></button>
            </div>  
            
          </div>

          <div className='row reviwew-box'>
            <div className='col-10'>
              <h4>BHARAT PATEL</h4>
              <p className="rp">The bus was punctual and the overall experience was great</p>
              
            </div>
            <div className='col-2'>
            <button className='btn btn-success reviewbtn'>5.1 <i class="fa fa-star" aria-hidden="true"></i></button>
            </div>  
            
          </div>

          <div className='row reviwew-box'>
            <div className='col-10'>
              <h4>pradeep gupta
              </h4>
              <p className="rp">Very good service</p>
              
            </div>
            <div className='col-2'>
            <button className='btn btn-success reviewbtn'>5.0 <i class="fa fa-star" aria-hidden="true"></i></button>
            </div>  
            
          </div>

          <div className='row reviwew-box'>
            <div className='col-10'>
              <h4>KRUPALI KAUSHALKUMAR PATEL
              </h4>
              <p className="rp">Good behaviour and service, reached on time</p>
              
            </div>
            <div className='col-2'>
            <button className='btn btn-success reviewbtn'>5.1 <i class="fa fa-star" aria-hidden="true"></i></button>
            </div>  
            
          </div>

          <div className='row reviwew-box'>
            <div className='col-10'>
              <h4>Kishan Parmar
              </h4>
              <p className="rp">Overall experience outstanding</p>
              
            </div>
            <div className='col-2 '>
            <button className='btn btn-success reviewbtn'>5.1 <i class="fa fa-star" aria-hidden="true"></i></button>
            </div>  
            
          </div>

          
      
      </div>
    </div>
    </>
  );
};

export default ReviewPage;
