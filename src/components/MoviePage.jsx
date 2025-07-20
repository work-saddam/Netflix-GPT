import { useParams } from "react-router-dom";
import { VideoBackground } from "./VideoBackground";
import useMovieDetail from "../hooks/useMovieDetail";
import MovieList from "./MovieList";
import useSimilarMovies from "../hooks/useSimilarMovies";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

export const MoviePage = () => {
  const { movieID } = useParams();
  const movieDetail = useMovieDetail(movieID);
  const similarMovies = useSimilarMovies(movieID);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieID]);

  if (movieDetail === null) return <Shimmer/>;
  if (similarMovies === null) return null;

  const {
    original_title,
    overview,
    tagline,
    popularity,
    homepage,
    genres,
    vote_average,
    runtime,
    origin_country,
    vote_count,
    release_date,
  } = movieDetail;

  return (
    <div className="w-screen bg-black text-white">
      {/* Video Section */}
      <div className="relative w-full ">
        <VideoBackground movieId={movieID} />

        {/* Bottom gradient fade-out */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Spacer between video and content */}
      <div className="h-10 bg-black"></div>

      {/* Movie Detail Section */}
      <div className="px-6 py-10 max-w-5xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{original_title}</h1>

        <div className="flex flex-wrap gap-3">
          {genres.map((genre) => (
            <span
              key={genre.id}
              className="px-4 py-1 rounded-full bg-zinc-800 border border-zinc-600 text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed">{overview}</p>

        <div className="text-sm text-gray-400">
          <p className="text-xl italic text-gray-400">"{tagline}"</p>
          <p>Popularity: {Math.round(popularity)}</p>
          <p>
            <span className="font-semibold">Release Date:</span> {release_date}
          </p>
          <p>
            <span className="font-semibold">Duration:</span> {runtime} min
          </p>
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {origin_country.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Rating:</span>{" "}
            {vote_average.toFixed(1)} / 10 ({vote_count} votes)
          </p>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-400 hover:text-blue-300"
            >
              Visit Official Site
            </a>
          )}
        </div>
      </div>

      {/* similar movie list  */}
      <div>
        <MovieList title={"Similar Movies"} movies={similarMovies} />
      </div>
    </div>
  );
};
