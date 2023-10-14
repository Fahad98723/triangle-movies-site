import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import toast from "react-hot-toast";
import { ScrollToTop } from "../utils/ScrollToTop";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [paginationButtons, setPaginationButtons] = useState([]);
  const [limit, setLimit] = useState(21);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      axios
        .get(
          `https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=${limit}&page=${page}&sortBy=release_date&sortOrder=desc`
        )
        .then((res) => {
          setMovies(res?.data?.data);
          setTotalCount(res?.meta?.total);
          console.log(res?.data?.meta?.total);
          setPaginationButtons(Math.round(res?.data?.meta?.total / limit));
          console.log(res);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }, [limit, page]);

  const handlePagination = (e) => {
    console.log(e + 1);
    setPage(e + 1);
  };

  console.log(page);

  return (
    <div className="md:p-10 px-5 py-10  max-w-[1450px] mx-auto">
      <ScrollToTop />
      <div class=" grid grid-cols-3 md:gap-5 gap-2  ">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>

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
  );
};

export default AllMoviesPage;
