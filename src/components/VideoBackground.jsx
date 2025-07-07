import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log("🎬 From store.movies.trailerVideo:", trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
