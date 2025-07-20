import { IMG_CDN_URL } from "../utils/constant";

const Moviecard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 sm:w-48 transform hover:scale-105 hover:shadow-lg transition duration-300">
      <img
        alt="movie cart"
        className="rounded-lg"
        src={IMG_CDN_URL + posterPath}
        loading="lazy"
      />
    </div>
  );
};

export default Moviecard;
