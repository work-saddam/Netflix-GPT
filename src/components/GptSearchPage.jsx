import { BG_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMAGE}
          alt="background-image"
        />
      </div>

      <div className="pt-[30%] sm:pt-0 relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
