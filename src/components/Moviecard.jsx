import { IMG_CDN_URL } from "../utils/constant";

const Moviecard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 sm:w-48 pr-4">
      <img alt="movie cart" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default Moviecard;
