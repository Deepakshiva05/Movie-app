import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io"

const apiKey = 'bb43f39ce5cedc1992dae6523bfa6777';

const Tvdetail = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const apiUrl = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
        const response = await fetch(apiUrl);
        
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
    <div className="text-white">
      {error && <p>{error}</p>}
      <section>
      <div className='container d-flex flex-wrap justify-content-between'>
        
        <div className="col-lg-6 col-md-6">
            <img style={{ width: '20rem', height: '25rem' }} 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
        </div>
        
        <div className="col-lg-6 col-md-6 text-white mt-5 text-right">
               <h2>{movie.name}</h2>
               <h6 className='text-danger'>{movie.tagline}</h6>
               <p><span className='text-success'>72% Match</span> {movie.first_air_date}</p>
               <p>{movie.overview}<br /></p>
               <button className='btn btn-light'><FaPlay className='text-dark'/> Play</button><button className='btn btn-outline-light ms-3'><IoIosInformationCircleOutline className='text-light mb-1 me-1'/>More info</button>
           </div>
    </div>
    </section>
    </div>
  );
};

export default Tvdetail;
