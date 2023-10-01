import React, { useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="max-w-[1450px] mx-auto">
      <div
        style={{
          background: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/ecb13f5f-5d9c-4a84-ab3b-22a52394972e/d8rh7in-1d72ccba-8609-463c-80e1-abb12bf12704.jpg') no-repeat center center`,
          backgroundSize: "cover",
          padding: "100px 0px",
          backgroundColor: "rgba(0.5, 0, 0, 0.60)",
          backgroundBlendMode: "multiply",
        }}
        class=""
      >
        <div class="mx-auto lg:w-6/12 w-10/12">
          <div className="my-2 mb-16">
            <h1 className="text-6xl text-white mb-2">Welcome</h1>
            <p className="text-2xl text-white">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
          <div class="overflow-hidden  z-0 rounded-full relative p-3">
            <form
              onSubmit={() => console.log("hello")}
              class="relative flex z-50 bg-white rounded-full"
            >
              <input
                type="text"
                placeholder="Enter name search here"
                class="rounded-full flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  navigate(`/movies/search/${search}`);
                }}
                type="submit"
                class="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              >
                Search
              </button>
            </form>
            <div class="glow glow-1 z-10 bg-red-300 absolute"></div>
            <div class="glow glow-2 z-20 bg-yellow-300 absolute"></div>
            <div class="glow glow-3 z-30 bg-blue-300 absolute"></div>
            <div class="glow glow-4 z-40 bg-[#032541] absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
