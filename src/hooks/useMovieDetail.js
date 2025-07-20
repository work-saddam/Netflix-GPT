import { useEffect, useState } from "react";

const useMovieDetail = (movieId) => {
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = async () => {
    try {
      const data = await fetch(
        `https://tmdb-proxy-server-w1ng.onrender.com/movieDetail?movieID=${movieId}`
      );
      const res = await data.json();
      // console.log(res.results);
      setMovieDetail(res);
    } catch (error) {
      console.error("Failed to fetch movie detail:", error);
      setMovieDetail(null); // Optionally handle errors
    }
  };

  useEffect(() => {
    setMovieDetail(null); // clear old detail while loading new one
    getMovieDetail();
  }, [movieId]);

  return movieDetail;
};

export default useMovieDetail;
