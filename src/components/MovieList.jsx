import { Link } from "react-router-dom";
import Moviecard from "./Moviecard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);
  if (!movies) return;

  return (
    <div className="px-4">
      <h1 className="text-xl sm:text-2xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex space-x-4">
          {movies.map((movie) => (
            <Link key={movie.id} to={"/movie/" + movie.id}>
              <Moviecard posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
