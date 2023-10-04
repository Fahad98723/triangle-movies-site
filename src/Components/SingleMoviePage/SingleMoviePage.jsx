import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RiFocus2Fill } from "react-icons/ri";
import Breadcrumbs from "../Shared/Breadcrumbs";
import RecentMoviesSlider from "../Slider/RecentMoviesSlider";
import SocialButton from "../Shared/SocialButton";

import { generatedTextToUrl } from "../utils/utils";
import { datalist } from "../../Pages/AdminDashboard/Data/Data";
import toast from "react-hot-toast";

import PulokBhai from "./PulokBhai";
import useScreenWidth from "../utils/useScreenWidth";
const SingleMoviePage = () => {
  const [infoShow, setInfoShow] = useState(true);
  const [linkShow, setLinkShow] = useState(false);
  const [trailerShow, setTrailerShow] = useState(false);

  const { url } = useParams();
  console.log(url, "url");

  const [singleMovie, setSingleMovie] = useState({});

  useEffect(() => {
    const run = async () => {
      try {
        await axios
          .get(
            `https://triangle-movies-backend.vercel.app/api/v1/movies/url/${url}`
          )
          .then((res) => {
            console.log(res);
            setSingleMovie(res.data.data);
          });
      } catch (error) {
        toast.error(error.message);
      }
    };
    run();
  }, [url]);

  console.log(singleMovie);

  const location = useLocation();

  function parsePath(url) {
    const pathSegments = url.split("/").filter((segment) => segment !== "");

    if (pathSegments.length >= 2) {
      const firstSegment = pathSegments[0];
      const restOfPath = pathSegments.slice(1).join("/");
      return [firstSegment, `${firstSegment}/${restOfPath}`];
    } else {
      return ["Invalid path"];
    }
  }

  // Usage example:
  const routeSegments = parsePath(location.pathname);
  console.log(routeSegments);

  const [recentMovies, setRecentMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=10")
      .then((res) => {
        setRecentMovies(res.data.data);
        // console.log(res.data.data);
      });
  }, []);

  const navigate = useNavigate();
  const { screenWidth } = useScreenWidth();

  return (
    <div>
      <div class=" bg-gray-900 max-w-[1450px] mx-auto">
        <div class=" rounded-md bg-gray-800 shadow-lg p-4 md:flex">
          <div className="md:w-[70%]">
            <div class="md:flex  leading-none max-w-4xl">
              <div class="flex-none ">
                <img
                  src={singleMovie?.poster}
                  alt="pic"
                  class="h-72 w-56 rounded-md shadow-2xl  border-4 border-gray-300 shadow-lg"
                />
              </div>

              <div class="flex-col text-gray-300">
                <p class="pt-4 text-2xl md:px-4  font-bold">
                  {singleMovie?.title}{" "}
                  {singleMovie?.release_year
                    ? `(${singleMovie?.release_year})`
                    : ""}
                </p>

                <div class="text-md flex justify-between md:px-4 my-2">
                  <span class="font-bold">
                    {singleMovie?.runtime} |{" "}
                    <span class="font-bold md:text-sm text-[10px]">
                      {singleMovie?.genres?.map((item, key) => (
                        <span key={key}>
                          {key + 1 === singleMovie?.genres?.length ? (
                            <span className="text-[14px] font-normal  ">
                              {item.toUpperCase()}
                            </span>
                          ) : (
                            <span className="text-[14px] font-normal leading-[24px]">
                              {item.toUpperCase()},{" "}
                            </span>
                          )}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>

                <p class="flex text-md md:px-4 my-2">
                  Rating: {singleMovie?.average_rating}/10
                  <span class="font-bold px-2">|</span>
                  Mood: Dark
                </p>

                <span class=" text-md md:px-4 my-2">
                  Release Date : {singleMovie?.release_date}
                </span>

                <p class="font-bold md:text-sm md:px-4 mt-2 text-[10px]">
                  {singleMovie?.categories?.map((item, key) => (
                    <span key={key}>
                      {key + 1 === singleMovie?.categories?.length ? (
                        <span className="text-[14px] font-normal  ">
                          {item.toUpperCase()}
                        </span>
                      ) : (
                        <span className="text-[14px] font-normal leading-[24px]">
                          {item.toUpperCase()},{" "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>

                <p class="  md:px-4  text-[14px]">
                  Cast :{" "}
                  {singleMovie?.cast?.map((item, key) => (
                    <span key={key}>
                      {key + 1 === singleMovie?.cast?.length ? (
                        <span className="text-[14px] font-normal  ">
                          {item.toUpperCase()}
                        </span>
                      ) : (
                        <span className="text-[14px] font-normal leading-[24px]">
                          {item.toUpperCase()},{" "}
                        </span>
                      )}
                    </span>
                  ))}
                </p>

                <p class="  md:px-4  text-[10px]">
                  Director : {singleMovie?.director}
                </p>

                <div class="text-xs md:px-2 my-2">
                  <button
                    type="button"
                    class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                  >
                    IMDB
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
                <p className="text-white text-sm">{singleMovie?.overview}</p>
                {singleMovie?.screenshots?.slice(0, 3).map((a) => (
                  <img
                    className="my-2 md:w-[400px] md:h-[220px]"
                    src={a}
                    alt=""
                  />
                ))}

                <button
                  onClick={() => {
                    window.location.href = `${singleMovie?.link}`;
                  }}
                  class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
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
                width={`${screenWidth > 768 ? "500px" : "100%"}`}
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
                url={singleMovie?.trailer}
              />
            )}
            {linkShow && (
              <button
                onClick={() => {
                  window.location.href = `${singleMovie?.link}`;
                }}
                class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
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

            <SocialButton />

            <Breadcrumbs routeSegments={routeSegments} />
          </div>

          <div className="md:w-[30%] md:mx-5  p-2">
            <p className="text-white text-[20px]">Categories</p>

            {datalist.categoryList.map((item) => (
              <div
                onClick={() => {
                  navigate(`/categories/${generatedTextToUrl(item)}`);
                }}
                className="flex justify-between border-b-2 p-1 cursor-pointer"
              >
                <p className="text-white ">{item}</p>
                <RiFocus2Fill className="text-white" />
              </div>
            ))}
          </div>
        </div>
        {/* <PulokBhai /> */}
        <div className="my-5">
          <RecentMoviesSlider recentMovies={recentMovies} />
        </div>
      </div>
    </div>
  );
};

export default SingleMoviePage;
