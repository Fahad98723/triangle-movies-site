import axios from "axios";
import React, { useState } from "react";
import NavigationBarPc from "../../../Components/Shared/NavigationBarPc";
import { Footer } from "../../../Components/Shared/Footer";
import AutoComplete from "../../../Components/Shared/AutoComplete";
import toast from "react-hot-toast";
import { datalist } from "../Data/Data";

const AddMovie = () => {
  const [title, setTitle] = useState("");
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
    console.log(date, new Date(date).getFullYear());
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

    console.log(formData);
    axios
      .post(
        "https://triangle-movies-backend-1nfyntmhl-fahad98723.vercel.app/api/v1/movies/add-movie",
        {
          movie: formData,
        }
      )
      .then((res) => {
        toast.success("Movie uploaded succesfully");
      });
  };

  return (
    <div>
      <NavigationBarPc />
      <div className="py-5 max-w-[1450px] mx-auto bg-white p-2">
        <div className="heading mb-5">
          <h1 className="text-[25px]  font-bold add-movie">
            Add New Movie From Here 🎥{" "}
          </h1>
        </div>
        <div>
          <div>
            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Movie Name"
              />
            </div>

            <AutoComplete
              options={datalist.genresList}
              placeholder="Select Genre"
              setSelectData={setGenres}
              className={"w-full"}
            />

            <AutoComplete
              placeholder="Cast Name"
              setSelectData={setCastNames}
              className={"w-full"}
            />

            <AutoComplete
              options={datalist.categoryList}
              placeholder="Select Category"
              setSelectData={setCategory}
              className={"w-full"}
            />

            <AutoComplete
              placeholder="Production Company"
              setSelectData={setProductionCompanies}
              className={"w-full"}
            />

            <AutoComplete
              placeholder="Production Country"
              setSelectData={setProductionCountry}
              className={"w-full"}
            />

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setDriveLink(e.target.value)}
                type="text"
                placeholder="Drive Link"
              />
            </div>

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setPosterLink(e.target.value)}
                type="text"
                placeholder="Poster Link"
              />
            </div>

            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setTrailerLink(e.target.value)}
                type="text"
                placeholder="Trailer Link"
              />
            </div>

            <div className="md:flex">
              <input
                className="border border-2 mb-2 p-2"
                type="date"
                name="release-date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />

              <input
                className="border border-2 mb-2 p-2 md:mx-2"
                min="0"
                max="10"
                onChange={(e) => setRating(e.target.value)}
                type="number"
                step=".5"
                placeholder="Rating"
              />

              <input
                className="border border-2 mb-2 p-2 md:mx-2"
                onChange={(e) => setRuntime(e.target.value)}
                type="text"
                placeholder="Run Time"
              />

              <input
                className="border border-2 mb-2 p-2 "
                onChange={(e) => setDirector(e.target.value)}
                type="text"
                placeholder="Director  Name"
              />
            </div>

            <AutoComplete
              placeholder="Enter SS Links"
              setSelectData={setSSLinks}
              className={"w-full"}
            />

            <div>
              <textarea
                className="border border-2 mb-2 p-2 w-full"
                rows={5}
                placeholder="Movies Overview"
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
              Add Movie
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddMovie;
