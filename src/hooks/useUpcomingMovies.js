import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://tmdb-proxy-server-w1ng.onrender.com/upcoming"
    );
    const res = await data.json();

    dispatch(addUpcomingMovies(res.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
