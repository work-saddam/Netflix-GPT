const Shimmer = () => {
  return (
    <div className="animate-pulse text-white bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[500px] bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-10">
          <div className="w-2/4 h-6 md:h-10 bg-gray-700 rounded mb-4"></div>
          <div className="w-1/3  h-4 md:h-6 bg-gray-700 rounded mb-2"></div>
          <div className="w-1/3 h-4 md:h-6 bg-gray-700 rounded mb-6"></div>
          <div className="flex space-x-4">
            <div className="w-24 h-6 md:h-8 bg-gray-600 rounded"></div>
            <div className="w-24 h-6 md:h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* 4 Movie Rows */}
      {[1, 2, 3, 4].map((_, index) => (
        <div className="mt-8 px-10" key={index}>
          {/* Section Title */}
          <div className="w-48 h-8 bg-gray-600 rounded mb-6"></div>

          {/* Poster Row */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hidden ">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="min-w-[150px] h-[225px] bg-gray-800 rounded-lg"
                ></div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
