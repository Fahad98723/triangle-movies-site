import axios from "axios";
import React, { useEffect, useState } from "react";
import { datalist } from "./Data";
import AutoComplete from "../../../Components/Shared/AutoComplete";
import { toast } from "react-hot-toast";

const EditMovie = ({ id, setOpenModal, setRefetch }) => {
  const [singleMovie, setSingleMovie] = useState({});

  useEffect(() => {
    const run = async () => {
      await axios
        .get(
          `https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/movies/${id}`
        )
        .then((res) => {
          setSingleMovie(res.data.data);
        });
    };
    run();
  }, [id]);

  useEffect(() => {
    if (singleMovie) {
      setTitle(singleMovie.title);
      setCategory(singleMovie.categories);
      setGenres(singleMovie?.genres);
      setImage(singleMovie.image);
      setCost(singleMovie.cost);
      setDetails(singleMovie.overview);
      setCastNames(singleMovie.cast);
      setDirector(singleMovie.director);
      setDriveLink(singleMovie.link);
      setPosterLink(singleMovie.poster);
      setTrailerLink(singleMovie.trailer);
      setSSLinks(singleMovie.screenshots);
      setRating(singleMovie.average_rating);
      setDate(singleMovie.release_date);
      setRuntime(singleMovie.runtime);
      setProductionCompanies(singleMovie.production_companies);
      setProductionCountry(singleMovie.production_countries);
    }
  }, [singleMovie]);
  const [title, setTitle] = useState(singleMovie.title);
  const [category, setCategory] = useState([]);
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState("");
  // const [thumb, setThumb] = useState(null);
  const [cost, setCost] = useState("");
  const [details, setDetails] = useState("");
  const [castNames, setCastNames] = useState([]);
  const [director, setDirector] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [ssLinks, setSSLinks] = useState([]);
  const [rating, setRating] = useState(0);

  const [date, setDate] = useState(0);
  const [runtime, setRuntime] = useState(0);

  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountry, setProductionCountry] = useState([]);

  const handleAddBlog = () => {
    const formData = {
      title: title,
      overview: details,
      release_date: date,
      release_year: new Date(date).getFullYear().toString(),
      link: driveLink,
      genres: genres,
      categories: category,
      runtime: runtime,
      poster: posterLink,
      cast: castNames,
      screenshots: ssLinks,
      director: director,
      average_rating: parseFloat(rating),
      trailer: trailerLink,
      production_companies: productionCompanies,
      production_countries: productionCountry,
    };
    try {
      axios
        .patch(
          `https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/movies/${id}`,
          { movie: formData }
        )
        .then((res) => {
          console.log(res);
          if (res.data.success === true) {
            toast.success("Movie updated succesfully");
            setRefetch(true);
            setOpenModal(false);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  console.log(productionCompanies, productionCountry, "cast names");

  return (
    <div>
      <div className="py-5 max-w-[1450px] mx-auto">
        <div className="heading mb-5">
          <h1 className="text-[25px]  font-bold add-movie">
            Edit Movie From Here 🎥{" "}
          </h1>
        </div>
        <div>
          <div>
            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={title}
                type="text"
                placeholder="Enter Movie Name"
              />
            </div>

            <AutoComplete
              options={datalist.genresList}
              placeholder="Select Genre"
              setSelectData={setGenres}
              className={"w-full"}
              selectedData={genres}
            />

            <AutoComplete
              placeholder="Cast Name"
              setSelectData={setCastNames}
              className={"w-full"}
              selectedData={castNames}
            />

            <AutoComplete
              options={datalist.categoryList}
              placeholder="Select Category"
              setSelectData={setCategory}
              className={"w-full"}
              selectedData={category}
            />

            <AutoComplete
              placeholder="Production Company"
              setSelectData={setProductionCompanies}
              className={"w-full"}
              selectedData={productionCompanies}
            />

            <AutoComplete
              placeholder="Production Country"
              setSelectData={setProductionCountry}
              className={"w-full"}
              selectedData={productionCountry}
            />

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setDriveLink(e.target.value)}
                type="text"
                defaultValue={driveLink}
                placeholder="Drive Link"
              />
            </div>

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setPosterLink(e.target.value)}
                type="text"
                defaultValue={posterLink}
                placeholder="Poster Link"
              />
            </div>

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setTrailerLink(e.target.value)}
                type="text"
                defaultValue={trailerLink}
                placeholder="Trailer Link"
              />
            </div>

            <div className="">
              <input
                className="border border-2 mb-2 p-2"
                type="date"
                name="release-date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />

              <input
                className="border border-2 mb-2 p-2 "
                min="0"
                max="10"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                type="number"
                step=".5"
                placeholder="Rating"
              />

              <input
                className="border border-2 mb-2 p-2 "
                onChange={(e) => setRuntime(e.target.value)}
                value={runtime}
                type="text"
                placeholder="Run Time"
              />

              <input
                className="border border-2 mb-2 p-2 "
                defaultValue={director}
                onChange={(e) => setDirector(e.target.value)}
                type="text"
                placeholder="Director  Name"
              />
            </div>

            <AutoComplete
              placeholder="Enter SS Links"
              setSelectData={setSSLinks}
              className={"w-full"}
              selectedData={ssLinks}
            />

            <div>
              <textarea
                className="border border-2 mb-2 p-2 w-full"
                rows={5}
                placeholder="Movies Overview"
                defaultValue={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <button
              style={{ background: "#032541" }}
              className="px-2 py-3 text-white "
              onClick={() => {
                handleAddBlog();
              }}
            >
              Update Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
