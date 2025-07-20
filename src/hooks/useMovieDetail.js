import { useEffect, useState } from "react";

const useMovieDetail = (movieId) => {
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = async () => {
    const data = await fetch(
      `https://tmdb-proxy-server-w1ng.onrender.com/movieDetail?movieID=${movieId}`
    );
    const res = await data.json();
    // console.log(res.results);
    setMovieDetail(res);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return movieDetail;
};

export default useMovieDetail;
