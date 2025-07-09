import { BG_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMAGE} alt="background-image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
