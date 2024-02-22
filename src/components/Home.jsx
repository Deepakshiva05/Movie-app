import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"
import '../../src/App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Home() {

  const apiKey = 'bb43f39ce5cedc1992dae6523bfa6777';
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;


  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const movieId=movies.id;
  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
        const data = await response.json();

        const key = data.results[0]?.key;

        if (key) {
          setTrailerKey(key);
        } else {
          console.error('No trailer found for the specified movie.');
        }
      } catch (error) {
        console.error('Error fetching trailer data:', error);
      }
    };


    fetchTrailer();
  }, [movieId, apiKey]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <section>
      <div className="container">
      {/* <div className="col-lg-6">
            <img src={img} className='img-fluid' style={{position:'absolute',zIndex:'-122',top:0,left:0,height:'100vh',width:'100%',objectFit:'cover'}}></img>
           </div>
           <div className="col-lg-6 text-white">
               <h2>The Avengers : The Age<br />of Ultrons In End Game</h2>
               <p><span className='text-success'>72% Match</span> 2023-11-15</p>
               <p>Avengers: Endgame, a blockbuster epic, unites heroes, <br /> confronts Thanos, time-travels, sacrifices, and delivers <br />an emotional, satisfying conclusion</p>
               <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
           </div> */}
      <Slider {...settings}>
        {movies.map((movie)=>{
          return(
          
<div id='slide'>
  <div className="poster" id='movpos' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,backgroundRepeat:'no-repeat',backgroundSize:'contain'}}>
    {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} id='movpos'></img> */}
  </div>

            {/* <h5><div className="col-lg-6 text-white" style={{position:'absolute',top:'12rem',right:'3rem'}}>
                   <h4>{movie.title}</h4>
                   <h6>{movie.tagline}</h6>
                   <p><span className='text-success'>72% Match</span> 2023-11-15</p>
                   <p>{movie.overview}</p>
                   <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
               </div></h5> */}
          </div>
          )
        })}
      
    </Slider>
      </div>
      </section>
    </div>
  );
  
  }
  export default Home;

//  <div className="container">
//            <div className="col-lg-6">
//             <img src={img} className='img-fluid' style={{position:'absolute',zIndex:'-122',top:0,left:0,height:'100vh',width:'100%',objectFit:'cover'}}></img>
//            </div>
//            <div className="col-lg-6 text-white">
//                <h2>The Avengers : The Age<br />of Ultrons In End Game</h2>
//                <p><span className='text-success'>72% Match</span> 2023-11-15</p>
//                <p>Avengers: Endgame, a blockbuster epic, unites heroes, <br /> confronts Thanos, time-travels, sacrifices, and delivers <br />an emotional, satisfying conclusion</p>
//                <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
//            </div>

//       </div>