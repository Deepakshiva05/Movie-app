import React from 'react';
import './subscribe.css';

const Subscribe = () => {
  return (
    <div id="sub">
      <section>
        <div className="container text-white text-center bg-dark p-5 rounded-4" >
            <h1>Unlimited movies, TV <br />shows and more.</h1>
            <h3 className='text-danger'>Watch anywhere. cancel anytime.</h3>
            <h6>Ready to watch? Avail your membership soon.</h6><br />
            {/* <input type='text' style={{width:'13cm',paddingLeft:'4cm'}} id='text' className='form-control border bg-dark ms-5'></input> */}
            <button className='btn btn-danger rounded-0'>Get Started</button>
           
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
