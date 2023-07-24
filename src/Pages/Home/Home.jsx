import React from "react";
import Banner from "../../Components/Banner/Banner";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import RecentMoviesSlider from "../../Components/Slider/RecentMoviesSlider";
import { Footer } from "../../Components/Shared/Footer";
import SingleMoviePage from "../../Components/SingleMoviePage/SingleMoviePage";

let slides = [
  "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
  "https://picsum.photos/800/300/?random",
  "https://picsum.photos/800/301/?random",
  "https://picsum.photos/800/302/?random",
  "https://picsum.photos/800/303/?random",
  "https://picsum.photos/800/304/?random",
];

const Home = () => {
  return (
    <div className=" ">
      <NavigationBarPc></NavigationBarPc>
      <Banner></Banner>
      <RecentMoviesSlider></RecentMoviesSlider>

      <div class=" grid md:grid-cols-3 gap-5 md:p-10 px-5 py-10  gap-y-10 max-w-[1450px] mx-auto">
        {slides.map((a) => (
          // <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          //   <div
          //     class="bg-cover bg-bottom border w-full md:w-2/5 h-64 md:h-auto "
          //     style={{
          //       background: `url('${a}')`,
          //       backgroundRepeat: "no-repeat",
          //       backgroundSize: "cover",
          //     }}
          //   ></div>

          //   <div class="bg-white w-full md:w-3/5">
          //     <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 ">
          //       <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0  mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
          //         <div class="w-full lg:w-3/5 lg:px-3">
          //           <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
          //             The Cathedral of Vasily the Blessed (Russian: Собор
          //             Василия Блаженного, Sobor Vasiliya Blazhennogo), commonly
          //             known as Saint Basil's Cathedral, is a church in Red
          //             Square in Moscow, Russia. The building, now a museum, is
          //             officially known as the Cathedral of the Intercession of
          //             the Most Holy
          //           </p>
          //         </div>

          //         <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
          //           <button class="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
          //             Visit now
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div class="rounded-md bg-gray-800 shadow-lg group cursor-pointer py-3">
            <div class="md:flex px-4 leading-none max-w-4xl">
              <div class="flex-none ">
                <img
                  src={a}
                  alt="pic"
                  class="h-60 w-44 rounded-md shadow-2xl transform -translate-y-6 group-hover:translate-y-6 border-4 border-gray-300 shadow-lg"
                />
              </div>

              <div class="flex-col text-gray-300">
                <p class="pt-4 text-2xl font-bold">Joker (2020)</p>
                <hr class="hr-text" data-content="" />
                <div class="text-md flex justify-between px-4 my-2">
                  <span class="font-bold text-sm">
                    2h 2min | Crime, Drama, Thriller
                  </span>
                </div>
                <p class="hidden md:block px-4 my-4 text-sm text-left">
                  In Gotham City, mentally troubled comedian Arthur Fleck is
                  disregarded and mistreated by society. He then embarks on a
                </p>

                <p class="flex text-md px-4 text-sm my-2">
                  Rating: 9.0/10
                  <span class="font-bold px-2 ">|</span>
                  Mood: Dark
                </p>

                <div class="text-xs">
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    TRAILER
                  </button>

                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    IMDB
                  </button>

                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-2 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
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
