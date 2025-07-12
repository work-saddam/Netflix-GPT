import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-4 md:px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-3xl mt-4 md:mt-0 font-bold">{title}</h1>
      <p className="hidden md:inline-block w-1/4 max-h-1/2 overflow-hidden pt-6">{overview}</p>

      <div>
        <button className="my-4 cursor-pointer bg-white text-black px-3 md:px-10 py-1 md:py-2 rounded-lg hover:bg-white/80">
           ▶︎ Play
        </button>
        <button className="hidden md:inline-block cursor-pointer bg-gray-400/30 px-6 py-2 rounded-lg mx-2 hover:bg-gray-400">
         <span className="text-xl"> ⓘ </span> More Info
        </button>
      </div>
    </div>
  );
};
