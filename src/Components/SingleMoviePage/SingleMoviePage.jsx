import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const SingleMoviePage = () => {
  const [infoShow, setInfoShow] = useState(true);
  const [linkShow, setLinkShow] = useState(false);
  const [trailerShow, setTrailerShow] = useState(false);

  let slides = [
    "https://picsum.photos/800/300/?random",
    "https://picsum.photos/800/301/?random",
    "https://picsum.photos/800/302/?random",
    "https://picsum.photos/800/303/?random",
    "https://picsum.photos/800/304/?random",
  ];

  return (
    <div>
      <div class=" bg-gray-900 max-w-[1450px] mx-auto">
        <div class=" rounded-md bg-gray-800 shadow-lg p-4">
          <div class="md:flex  leading-none max-w-4xl">
            <div class="flex-none ">
              <img
                src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                alt="pic"
                class="h-72 w-56 rounded-md shadow-2xl  border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div class="flex-col text-gray-300">
              <p class="pt-4 text-2xl px-4  font-bold">Joker (2020)</p>

              <div class="text-md flex justify-between px-4 my-2">
                <span class="font-bold">2h 2min | Crime, Drama, Thriller</span>
                <span class="font-bold"></span>
              </div>
              <p class="hidden md:block px-4 my-4 text-sm text-left">
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.{" "}
              </p>

              <p class="flex text-md px-4 my-2">
                Rating: 9.0/10
                <span class="font-bold px-2">|</span>
                Mood: Dark
              </p>

              <div class="text-xs">
                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  TRAILER
                </button>

                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  IMDB
                </button>

                <button
                  type="button"
                  class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                >
                  AMAZON
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 w-fit  rounded-md ">
            <div class="grid grid-cols-3  text-center text-gray-500  rounded-lg mb-3">
              {" "}
              <div
                onClick={() => {
                  setInfoShow(true);
                  setLinkShow(false);
                  setTrailerShow(false);
                }}
                class={`text-sm p-2 cursor-pointer ${
                  infoShow ? "bg-white rounded-md shadow text-indigo-900" : ""
                }`}
              >
                Info
              </div>{" "}
              <div
                onClick={() => {
                  setTrailerShow(true);
                  setInfoShow(false);
                  setLinkShow(false);
                }}
                class={`text-sm p-2 cursor-pointer ${
                  trailerShow
                    ? "bg-white rounded-md shadow text-indigo-900"
                    : ""
                }`}
              >
                Trailer
              </div>{" "}
              <div
                onClick={() => {
                  setLinkShow(true);
                  setInfoShow(false);
                  setTrailerShow(false);
                }}
                class={`text-sm p-2 cursor-pointer ${
                  linkShow ? "bg-white rounded-md shadow text-indigo-900" : ""
                }`}
              >
                Links
              </div>{" "}
            </div>
          </div>

          {infoShow && (
            <div>
              <p className="text-white text-sm">
                In Gotham City, mentally troubled comedian Arthur Fleck is
                disregarded and mistreated by society. He then embarks on a
                downward spiral of revolution and bloody crime. This path brings
                him face-to-face with his alter-ego: the Joker.{" "}
              </p>
              {slides.slice(0, 3).map((a) => (
                <img className="my-2" src={a} alt="" />
              ))}

              <button class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                <svg
                  class="inline-block w-4 h-4 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2.5L15 6v8l-6 3.5V2.5zM3 17h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                </svg>
                Download Now
              </button>
            </div>
          )}
          {trailerShow && (
            <ReactPlayer
              width="500px"
              height={"300px"}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    controls: 1,
                    // frameborder: 0,
                  },
                },
              }}
              url={"https://www.youtube.com/watch?v=zAGVQLHvwOY"}
            />
          )}
          {linkShow && (
            <button class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <svg
                class="inline-block w-4 h-4 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 2.5L15 6v8l-6 3.5V2.5zM3 17h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              Download Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
