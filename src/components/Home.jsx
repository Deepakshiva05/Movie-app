import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"
import img from '../assets/poster4.jpg'
import '../../src/App.css';

const Home = () => {
  return (
    <div>
        <section>
      <div className="container">
           <div className="col-lg-6">
            <img src={img} className='img-fluid' style={{position:'absolute',zIndex:'-122',top:0,left:0,height:'100vh',width:'100%',objectFit:'cover'}}></img>
           </div>
           <div className="col-lg-6 text-white">
               <h2>The Avengers : The Age<br />of Ultrons In End Game</h2>
               <p><span className='text-success'>72% Match</span> 2023-11-15</p>
               <p>64 years before the president of panam of chief <br />Lorem ipsum dolor sit amet consectetur adipisicing. <br />Lorem ipsum dolor sit amet consectetur.</p>
               <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
           </div>

      </div>
      </section>
    </div>
  );
}

export default Home;
