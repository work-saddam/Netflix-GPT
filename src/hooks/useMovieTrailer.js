import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const [trailerVid, setTrailerVid] = useState(null)

  // Fetch trailer video and
  // const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://tmdb-proxy-server-w1ng.onrender.com/movieVideo?movieID=${movieId}`
    );
    const res = await data.json();
    // console.log(res.results);

    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : res.results[0];
    // dispatch(addTrailerVideo(trailer));
    setTrailerVid(trailer)
  };

  useEffect(() => {
     getMovieVideo();
  }, []);

  return trailerVid
};

export default useMovieTrailer;
