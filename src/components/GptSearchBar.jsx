import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";

export const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black rounded-lg grid grid-cols-12">
        <input
          className="p-2 m-4 bg-white rounded-lg col-span-8"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-1 px-4 m-4 bg-red-700 text-white rounded-lg col-span-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
