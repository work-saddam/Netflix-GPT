import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // console.log(message)

    //Sign In / Sign Up
  };

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
          alt="background-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black/80  text-white my-24 mx-auto right-0 left-0 p-8 rounded-lg "
      >
        <h1 className=" text-2xl font-semibold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="p-2 my-4 bg-gray-800 w-full rounded-xs"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          ref={email}
          className="p-2 my-4 bg-gray-800 w-full rounded-xs"
          type="text"
          placeholder="Email"
        ></input>

        <input
          ref={password}
          className="p-2 my-4 bg-gray-800 w-full rounded-xs"
          type="password"
          placeholder="password"
        ></input>

        <p className="text-red-400">{errorMessage}</p>

        <button
          className="bg-red-700 px-4 py-2 my-4 rounded-lg w-full cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};
