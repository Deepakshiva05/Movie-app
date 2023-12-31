import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"

const apiKey = 'bb43f39ce5cedc1992dae6523bfa6777';

const Moviedetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return (
    
    <div>
        <section>
      {error && <p>{error}</p>}
      <div className="container d-flex align-center justify-content-center flex-wrap  text-white">
      <div className="col-lg-6 col-md-6">
      <img style={{ width: '20rem', height: '25rem' }} 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
      </div>
      
      <div className="col-lg-6 col-md-6 text-white mt-5">
               <h2>{movie.title}</h2>
               <p><span className='text-success'>72% Match</span> 2023-11-15</p>
               <p>{movie.overview}<br /></p>
               <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
           </div>
           </div>
           </section>
      </div>
     
     
   
   
  );
 
};

export default Moviedetail;
