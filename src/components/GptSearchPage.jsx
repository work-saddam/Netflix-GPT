import { BG_IMAGE } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen scale-[1.1] xl:h-auto object-cover " src={BG_IMAGE} alt="background-image" />
      </div>
      <div className="pt-[30%] sm:pt-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
