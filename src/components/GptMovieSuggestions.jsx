import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames)
    return (
      <div className="p-6 m-6 bg-black/90 text-white rounded-xl shadow-md border border-white/10">
        <h1 className="text-3xl font-bold mb-4">🔍 Smart Search with GPT</h1>
        <p className="text-lg mb-2">Can’t remember the movie name?</p>
        <p className="text-lg mb-2">
          No problem — just type anything you remember and let AI do the magic.
          Here’s how you can search:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-white/90">
          <li>
            <strong>By Title</strong>
          </li>
          <li>
            <strong>By Genre</strong> (e.g., comedy, sci-fi, action)
          </li>
          <li>
            <strong>By Actor/Actress</strong> 
          </li>
          <li>
            <strong>Scene Description</strong> — Even if you don’t remember the
            name, describe a scene like:
            <em> "a movie where a guy dreams inside a dream" → Inception</em>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="p-4 m-4 bg-black/90 text-white rounded-lg">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
