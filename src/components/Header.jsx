import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe will call when component unmount.
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black sm:px-8 py-1 sm:py-2 z-50 flex justify-between">
      <img className="w-28 sm:w-44" src={LOGO} alt="netflix-logo"></img>

      {user && (
        <div className="flex justify-center items-center">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white mx-2 sm:m-4 p-1 rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-xs md:text-lg"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className={`${
              showGptSearch
                ? "bg-gray-700 hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                : "bg-gradient-to-r from-yellow-400 to-amber-500 animate-bounce"
            } text-white font-semibold px-4 py-1 mt-2 sm:mt-0 mr-3 sm:mr-0 rounded-full cursor-pointer`}
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT"}
          </button>

          <img
            className="w-0 sm:w-10 h-12 sm:mx-4 pt-2"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="cursor-pointer text-white">
            <img
              className="pt-1 pr-2 w-11 mr-2 sm:mr-0"
              src="https://cdn-icons-png.flaticon.com/128/4034/4034229.png"
              alt="logout logo"
            />
          </button>
        </div>
      )}
    </div>
  );
};
