import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import RecentMoviesSlider from "../../Components/Slider/RecentMoviesSlider";
import { Footer } from "../../Components/Shared/Footer";
import SingleMoviePage from "../../Components/SingleMoviePage/SingleMoviePage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// let slides = [
//   "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
//   "https://picsum.photos/800/300/?random",
//   "https://picsum.photos/800/301/?random",
//   "https://picsum.photos/800/302/?random",
//   "https://picsum.photos/800/303/?random",
//   "https://picsum.photos/800/304/?random",
// ];

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/movies/?limit=20"
      )
      .then((res) => {
        setMovies(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className=" ">
      <NavigationBarPc></NavigationBarPc>
      <Banner></Banner>
      <RecentMoviesSlider></RecentMoviesSlider>

      <div class=" grid grid-cols-3 md:gap-5 gap-2 md:p-10 px-5 py-10  md:gap-y-10 gap-y-2 max-w-[1450px] mx-auto">
        {movies.map((a) => (
          <div
            onClick={() => {
              navigate(`/movie/${a._id}`);
            }}
            class="rounded-md bg-gray-800 shadow-lg group cursor-pointer py-3"
          >
            <div class="md:flex md:px-4 px-2 leading-none max-w-4xl">
              <div class="flex-none ">
                <img
                  src={a.poster}
                  alt="pic"
                  class="md:h-60 h-[100px] w-full md:w-44 md:rounded-md rounded shadow-2xl transform md:-translate-y-6 group-hover:translate-y-6 border-4 border-gray-300 shadow-lg"
                />
              </div>

              <div class="flex-col md:pt-4 pt-[-15px] text-gray-300">
                <p class=" md:text-2xl text-sm font-bold">{a.title}</p>
                <hr class="hr-text" data-content="" />
                <div class="text-md flex justify-between md:px-4 px-1 my-2">
                  <span class="font-bold md:text-sm text-[10px]">
                    {a.runtime} |{" "}
                    {a.genres.map((a) => (
                      <span>{a}, </span>
                    ))}
                  </span>
                </div>
                <p class="hidden md:block px-4 my-4 text-sm text-left">
                  {a.overview.slice(0, 120)}
                </p>

                <p class="flex md:text-md md:px-4 px-[2px] text-[10px] my-2">
                  Rating: {a.average_rating}
                  <span class="font-bold px-2 ">|</span>
                  Mood: Dark
                </p>

                <div class="text-xs">
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div class="min-h-screen grid place-items-center font-mono bg-gray-900"></div> */}
      <Footer />
    </div>
  );
};

export default Home;
