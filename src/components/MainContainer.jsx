import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import Shimmer from "./Shimmer";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log("🎬 From store.movies.nowPlayingMovies:", movies);
  if (!movies) return <Shimmer/>;

  const mainMovie = movies[0];
//   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
