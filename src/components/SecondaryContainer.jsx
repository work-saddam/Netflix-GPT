import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;

  return (
    <div className="bg-black">
      <div className="-mt-24 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
