import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <div id="sub">
      <section>
        <div className="container text-white text-center bg-dark" >
            <h1>Unlimited movies, TV <br />shows and more.</h1>
            <h4>Watch anywhere. cancel anytime.</h4>
            <h6>Read to watch? Enter Your email to create or restart your membership.</h6>
            <br />
            <input type='text' style={{width:'auto'}} id='text' className='form-control border bg-dark ms-5'></input>
            <button className='btn btn-danger rounded-0'>Get Started</button>
           
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
