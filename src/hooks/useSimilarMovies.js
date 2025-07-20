import { useEffect, useState } from "react";

const useSimilarMovies = (movieId) => {
  const [similarMovies, setSimilarMovies] = useState(null);

  const getSimilarMovies = async () => {
    try {
      const data = await fetch(
        `https://tmdb-proxy-server-w1ng.onrender.com/similarMovies?movieID=${movieId}`
      );
      const res = await data.json();
      // console.log(res.results);
      setSimilarMovies(res.results);
    } catch (err) {
      console.error("Failed to fetch similar movies:", err);
      setSimilarMovies([]); // avoid `null` state for consistency
    }
  };

  useEffect(() => {
    setSimilarMovies(null); // clear previous similar movies
    getSimilarMovies();
  }, [movieId]);

  return similarMovies;
};

export default useSimilarMovies;
