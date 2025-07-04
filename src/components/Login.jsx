import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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

      <form className="w-3/12 absolute bg-black/80  text-white my-24 mx-auto right-0 left-0 p-8 rounded-lg ">
        <h1 className=" text-2xl font-semibold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 my-4 bg-gray-800 w-full rounded-xs"
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
          ></input>
        )}
        <input
          className="p-2 my-4 bg-gray-800 w-full rounded-xs"
          type="text"
          placeholder="Email"
          id="email"
          name="email"
        ></input>
        <input
          className="p-2 my-4 bg-gray-800 w-full rounded-xs"
          type="password"
          placeholder="password"
          id="password"
          name="password"
        ></input>
        <button className="bg-red-700 px-4 py-2 my-4 rounded-lg w-full cursor-pointer">
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
