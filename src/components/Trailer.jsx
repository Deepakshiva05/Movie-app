import React, { useState, useEffect } from 'react';


const Trailer = ({ movieId, apiKey }) => {
  const [trailerKey, setTrailerKey] = useState(null);

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

  return (
    <div>
      {trailerKey && (
        <iframe
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Trailer;
