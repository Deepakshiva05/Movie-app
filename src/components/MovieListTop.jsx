import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import './movietop.css';


const apiKey = 'bb43f39ce5cedc1992dae6523bfa6777';
const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const MovieListTop = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


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

  return (
    <div className='text-white text-center mt-5'>
      <h1>Popular Movies</h1>
      {error && <p>{error}</p>}
      <div className="movie-list text-white d-flex justify-content-center flex-wrap gap-5 mt-4">
      {movies.map((movie) => (
  <Link to={`/Topdetail/${movie.id}`} key={movie.id}>
    <div className="movie">
      <img style={{ width: '12rem', height: '15rem' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
    </div>
  </Link>
))}
      </div>
    </div>
    
  );
};

export default MovieListTop;



// import React, { useState, useEffect } from 'react';
// import './movietop.css';
// import { Link } from 'react-router-dom';

// const apiKey = 'bb43f39ce5cedc1992dae6523bfa6777';
// const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

// const MovieListTop = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Failed to fetch movies');
//         }
//         const data = await response.json();
//         setMovies(data.results);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className='text-white text-center mt-5'>
//       <h1>Popular Movies</h1>
//       {error && <p>{error}</p>}
//       <div className="movie-list text-white d-flex justify-content-center flex-wrap gap-5 mt-4">
//         {movies.map((movie) => (
//           <Link to={`/Moviedetail/${movie.id}`} key={movie.id}>
//           <div className="movie">
//             <img style={{ width: '12rem', height: '15rem' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} />
//           </div>
//         </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieListTop;
