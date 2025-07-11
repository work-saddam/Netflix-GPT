import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";
import { useRef } from "react";
import client from "../utils/openai";
import { SAMBANOVA_API_KEY, SAMBANOVA_BASE_URL } from "../utils/constant";
import { addGptMoviesResult } from "../utils/gptSlice";

export const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movieName) => {
    const data = await fetch(
      `https://tmdb-proxy-server-w1ng.onrender.com/search?movieName=${movieName}`
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    // Make an API call to GPT and get Movies Result----

    // const gptResult = await client.responses.create({
    //   model: " 3.5 Turbo",
    //   instructions: "You are a movie recommendation system. Given any user query, you suggest 5 movie names that best match the query. Return only the names, comma separated, no explanation.",
    //   input: searchText.current.value,
    // });
    // console.log(gptResult.output_text);

    // Make an API call to sambanova----------

    const body = {
      model: "Llama-4-Maverick-17B-128E-Instruct",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are a movie recommendation system. Suggest 5 movie names that best match the query: ${searchText.current.value}. Return only the names, comma separated, no explanation.`,
            },
          ],
        },
      ],
      temperature: 0.7,
      top_p: 1,
    };

    const response = await fetch(`${SAMBANOVA_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SAMBANOVA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();

    if (!result.choices) {
      // TODO: Write Error Handling.
    }

    // console.log(result.choices?.[0]?.message?.content);

    const gptResult = result.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptResult.map((movie) => searchMovieTmdb(movie));

    const tmdbResult = await Promise.all(promiseArray);
    // console.log(tmdbResult);
    dispatch(addGptMoviesResult( {movieNames:gptResult, movieResults:tmdbResult}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4 bg-white rounded-lg col-span-8"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-1 px-4 m-4 bg-red-700 text-white rounded-lg col-span-4 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
