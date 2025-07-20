import { useEffect, useState } from "react";

const useSimilarMovies = (movieId) => {
  const [similarMovies, setSimilarMovies] = useState(null);

  const getSimilarMovies = async () => {
    const data = await fetch(
      `https://tmdb-proxy-server-w1ng.onrender.com/similarMovies?movieID=${movieId}`
    );
    const res = await data.json();
    // console.log(res.results);
    setSimilarMovies(res.results);
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);

  return similarMovies;
};

export default useSimilarMovies;
