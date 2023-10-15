import React, { useEffect, useState } from "react";
import NavigationBarPc from "../../Components/Shared/NavigationBarPc";
import { Footer } from "../../Components/Shared/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Card/Card";
import NoData from "../NoData/NoData";
import { ScrollToTop } from "../../Components/utils/ScrollToTop";

const SearchMovies = () => {
  const params = useParams();
  console.log(params);
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [paginationButtons, setPaginationButtons] = useState([]);
  const [limit, setLimit] = useState(21);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://triangle-movies-backend.vercel.app/api/v1/movies/?searchName=${params.search}&limit=${limit}&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.data);
        setTotalCount(res?.meta?.total);
        console.log(res?.data?.meta?.total, "data");
        setPaginationButtons(Math.round(res?.data?.meta?.count / limit));
      });
  }, [params.search, limit, page]);

  const handlePagination = (e) => {
    setPage(e + 1);
  };

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBarPc />
      <ScrollToTop />
      {movies.length ? (
        <div className="max-w-[1450px] mx-auto md:p-10 px-5 py-10">
          <div className=" grid grid-cols-3 md:gap-5 gap-2   md:gap-y-10 gap-y-2 ">
            {movies.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>

          <div>
            {paginationButtons > 0 ? (
              <div className="my-5 flex gap-2 ">
                {[...Array(paginationButtons)].map((elementInArray, index) => (
                  <p
                    onClick={(e) => {
                      e.preventDefault();
                      handlePagination(index);
                    }}
                    className={`px-2 py-1 rounded ${
                      index === page - 1
                        ? "text-black bg-white"
                        : "text-white border-white"
                    }  border-2 cursor-pointer w-fit text-[14px] `}
                  >
                    {index + 1}
                  </p>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <>
          <NoData />
          <div className="max-w-[1450px] mx-auto md:p-20 md:pt-0">
            <div className="overflow-hidden  z-0 rounded-full relative p-3">
              <form
                onSubmit={() => console.log("hello")}
                className="relative flex z-50 bg-white rounded-full"
              >
                <input
                  type="text"
                  placeholder="Enter name search here"
                  className="rounded-full flex-1 px-4 py-2 text-gray-700 focus:outline-none"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    navigate(`/movies/search/${search}`);
                  }}
                  type="submit"
                  className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                >
                  Search
                </button>
              </form>
              <div className="glow glow-1 z-10 bg-red-300 absolute"></div>
              <div className="glow glow-2 z-20 bg-yellow-300 absolute"></div>
              <div className="glow glow-3 z-30 bg-blue-300 absolute"></div>
              <div className="glow glow-4 z-40 bg-[#032541] absolute"></div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SearchMovies;
