import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          if (movie?.seriesid) {
            navigate(`/series/${movie.url}`);
          } else {
            navigate(`/movie/${movie.url}`);
          }
        }}
        class="rounded-md bg-gray-800 shadow-lg group cursor-pointer py-3 h-full"
      >
        <div class="md:flex md:px-4 px-2 leading-none max-w-4xl">
          <div class="flex-none ">
            <img
              src={movie.poster}
              alt="pic"
              class="md:h-60 h-[100px] w-full md:w-44 md:rounded-md rounded shadow-2xl transform md:-translate-y-6 md:group-hover:translate-y-6 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div class="flex-col md:pt-4 pt-[-15px] text-gray-300">
            <p class=" md:text-[20px] text-[12px] md:font-bold">
              {movie.title} {`(${movie?.release_year})`}
            </p>
            <hr class="hr-text md:my-0 my-1" data-content="" />
            <div class="text-md md:flex  md:px-4 px-1 md:my-2 my-1">
              <p class="md:font-bold md:text-sm text-[10px]">
                {movie.runtime} <span className="md:inline hidden">|</span>{" "}
              </p>
              <div className="md:ml-1">
                {movie.genres.slice(0, 2).map((a, i) => (
                  <span className="md:text-sm text-[10px]">
                    {a} {i < 1 ? "," : ""}{" "}
                  </span>
                ))}
              </div>
            </div>
            <p class="hidden md:block px-4 my-4 text-sm text-left">
              {movie.overview.slice(0, 130)}
            </p>

            <div class="md:flex items-center md:text-[12px] md:px-4 px-1 text-[10px] md:my-2 my-1">
              <p className="">Rating: {movie.average_rating}</p>
              <span class="font-bold px-2 md:inline hidden ">|</span>
              <p className="my-1"> {movie?.release_date}</p>
            </div>
            <p class="flex md:text-[12px] md:block hidden md:px-4 px-1 text-[10px] my-2">
              Director: {movie.director}
            </p>

            {/* <div class="text-xs md:block hidden">
              <button
                type="button"
                class="border border-gray-400 text-gray-400 md:rounded-md rounded md:px-2 px-1 md:py-2  md:m-2 m-[2px] text-[8px] transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                TRAILER
              </button>

              <button
                type="button"
                class="border border-gray-400 text-gray-400  md:rounded-md rounded md:px-2 px-1 md:py-2  md:m-2 m-[2px]  text-[8px] transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                IMDB
              </button>

              <button
                type="button"
                class="border border-gray-400 text-gray-400  md:rounded-md rounded md:px-2 px-1 md:py-2  md:m-2 m-[2px]  text-[8px] transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                AMAZON
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
