import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-12 text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/4 py-6">{overview}</p>

      <div>
        <button className="cursor-pointer bg-white text-black px-10 py-2 rounded-lg hover:bg-white/80">
           ▶︎ Play
        </button>
        <button className="cursor-pointer bg-gray-400/30 px-6 py-2 rounded-lg mx-2 hover:bg-gray-400">
         <span className="text-xl"> ⓘ </span> More Info
        </button>
      </div>
    </div>
  );
};
