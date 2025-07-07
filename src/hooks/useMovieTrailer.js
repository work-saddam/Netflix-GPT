import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  // Fetch trailer video and
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://tmdb-proxy-server-w1ng.onrender.com/movie?movieID=${movieId}`
    );
    const res = await data.json();
    // console.log(res.results);

    const filterData = res.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : res.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
