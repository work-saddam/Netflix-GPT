import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Shimmer from "./Shimmer";

export const VideoBackground = ({ movieId }) => {
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log("🎬 From store.movies.trailerVideo:", trailerVideo);

  const trailerVideo = useMovieTrailer(movieId);

  if (trailerVideo === null)
    return <div className="w-screen h-screen bg-black relative"></div>;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
