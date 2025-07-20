import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const [trailerVid, setTrailerVid] = useState(null);

  // Fetch trailer video and
  // const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://tmdb-proxy-server-w1ng.onrender.com/movieVideo?movieID=${movieId}`
      );
      const res = await data.json();
      // console.log(res.results);

      const filterData = res.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : res.results[0];
      // dispatch(addTrailerVideo(trailer));
      setTrailerVid(trailer);
    } catch (err) {
      console.error("Failed to fetch trailer video:", err);
      setTrailerVid(null); // prevent stale or undefined data
    }
  };

  useEffect(() => {
    setTrailerVid(null); // clear old trailer while loading new one
    getMovieVideo();
  }, [movieId]);

  return trailerVid;
};

export default useMovieTrailer;
