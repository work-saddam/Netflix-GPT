import { useParams } from "react-router-dom";
import { VideoBackground } from "./VideoBackground";

export const MoviePage = () => {
  const { movieID } = useParams();

  return (
    <div className="bg-black">
      <VideoBackground movieId={movieID} />
     
    </div>
  );
};
