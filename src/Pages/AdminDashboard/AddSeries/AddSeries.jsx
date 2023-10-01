import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import NavigationBarPc from "../../../Components/Shared/NavigationBarPc";
import AutoComplete from "../../../Components/Shared/AutoComplete";
import { datalist } from "../Data/Data";
import { Footer } from "../../../Components/Shared/Footer";
import { AiFillPlusCircle, AiOutlineEdit } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import Modal from "../../../Components/Shared/Modal";

const AddSeries = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState("");
  // const [thumb, setThumb] = useState(null);
  const [cost, setCost] = useState("");
  const [details, setDetails] = useState("");
  const [castNames, setCastNames] = useState([]);
  const [director, setDirector] = useState([]);
  const [driveLink, setDriveLink] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [ssLinks, setSSLinks] = useState([]);
  const [rating, setRating] = useState(0);

  const [date, setDate] = useState(0);
  const [runtime, setRuntime] = useState(0);

  const [productionCompanies, setProductionCompanies] = useState([]);
  const [productionCountry, setProductionCountry] = useState([]);

  const handleSeries = () => {
    console.log(date, new Date(date).getFullYear());

    const formData = {
      title: title,
      overview: details,
      release_date: date,
      release_year: new Date(date).getFullYear().toString(),
      genres: genres,
      categories: category,
      runtime: runtime,
      poster: posterLink,
      cast: castNames,
      screenshots: ssLinks,
      director: director,
      average_rating: parseFloat(rating),
      trailer: trailerLink,
      seasons: seasons,
      production_companies: productionCompanies,
      production_countries: productionCountry,
    };

    console.log(formData);
    try {
      axios
        .post(
          "https://triangle-movies-backend.vercel.app/api/v1/series/add-series",
          {
            series: formData,
          }
        )
        .then((res) => {
          toast.success("Series uploaded succesfully");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setOpenModal] = useState(false);
  const [openEpisodeModal, setOpenEpisodeModal] = useState(false);
  const [openZipModal, setOpenZipModal] = useState(false);
  const [openEditEpisodeModal, setOpenEditEpisodeModal] = useState(false);
  const [openEditZipModal, setOpenEditZipModal] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState(null);
  const [episodeNumber, setEpisodeNumber] = useState();
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [episodeLink, setEpisodeLink] = useState("");
  const [episodeOverview, setEpisodeOverview] = useState("");
  const [episodeAirDate, setEpisodeAirDate] = useState("");

  const [episodeEditIndex, setEpisodeEditIndex] = useState();
  const [episodeEditNumber, setEpisodeEditNumber] = useState();
  const [episodeEditTitle, setEpisodeEditTitle] = useState("");
  const [episodeEditLink, setEpisodeEditLink] = useState("");
  const [episodeEditOverview, setEpisodeEditOverview] = useState("");
  const [episodeEditAirDate, setEpisodeEditAirDate] = useState("");

  const [seasons, setSeasons] = useState([]);

  // {
  //     number: 1,
  //     episodes: [
  //       {
  //         title: "Chapter One: MadMax",
  //         overview:
  //           "A new girl arrives in town, causing excitement and suspicion.",
  //         air_date: "2017-10-27",
  //         episode_number: 1,
  //         episode_link:
  //           "The group continues their search for their missing friend.",
  //       },
  //       {
  //         title: "Chapter Two: Trick or Treat, Freak",
  //         overview: "The kids go trick-or-treating, and strange events unfold.",
  //         air_date: "2017-10-27",
  //         episode_number: 2,
  //         episode_link:
  //           "The group continues their search for their missing friend.",
  //       },
  //     ],
  //     zipfile: [
  //       {
  //         caption: "Here is Link of zip file from 1-10 episodes",
  //         links: ["link1", "link2"],
  //       },
  //       {
  //         caption: "Here is Link of zip file from 10-20 episodes",
  //         links: ["link1", "link2"],
  //       },
  //     ],
  //   },

  console.log(seasons, "season");

  const handleAddMoreSeason = (seasonnumber) => {
    console.log(
      seasonnumber,
      seasons,
      seasons.filter((season) => season.number === seasonnumber)
    );
    if (
      seasons.filter((season) => season.number === parseInt(seasonnumber))
        .length
    ) {
      toast.error("You already added that season");
    } else {
      setSeasons([
        ...seasons,
        {
          number: parseInt(seasonnumber),
          episodes: [],
          zipfile: [],
        },
      ]);
      setOpenModal(false);
    }
  };

  const handleRemoveSeason = (seasonnumber) => {
    const otherseason = seasons.filter(
      (season) => season.number !== parseInt(seasonnumber)
    );
    setSeasons(otherseason);
  };

  const [addEpisodeSeason, setAddEpisodeSeason] = useState();
  const [episodes, setEpisodes] = useState([]);

  const handleAddMoreEpisode = (seasonnumber, episodenumber) => {
    if (
      seasons
        .find((season) => season.number === parseInt(seasonnumber))
        .episodes.filter((a) => a.episode_number == episodenumber).length
    ) {
      toast.error("You already added that episode");
    } else {
      seasons
        .find((season) => season.number === parseInt(seasonnumber))
        .episodes.push({
          title: episodeTitle,
          overview: episodeOverview,
          air_date: episodeAirDate,
          episode_number: parseInt(episodeNumber),
          episode_link: episodeLink,
        });

      setOpenEpisodeModal(false);
    }
  };

  const handleAddMoreZip = (seasonnumber, zipCaption) => {
    if (
      seasons
        .find((season) => season.number === parseInt(seasonnumber))
        .zipfile.filter((a) => a.caption == zipCaption).length
    ) {
      toast.error("You already added that episode");
    } else {
      seasons
        .find((season) => season.number === parseInt(seasonnumber))
        .zipfile.push({
          caption: zipCaption,
          link: link,
        });

      setOpenZipModal(false);
    }
  };

  const handleEditEpisode = (seasonnumber, episodenumber) => {
    const editEpisode = seasons.find(
      (season) => season.number === parseInt(seasonnumber)
    ).episodes[episodenumber];
    console.log(
      seasonnumber,
      episodenumber,
      editEpisode,
      seasons.find((season) => season.number === parseInt(seasonnumber))
    );

    editEpisode.title = episodeEditTitle;
    editEpisode.episode_number = episodeEditNumber;
    editEpisode.overview = episodeEditOverview;
    editEpisode.episode_link = episodeEditLink;
    editEpisode.air_date = episodeEditAirDate;

    setOpenEditEpisodeModal(false);
  };

  const handleEditZip = (seasonnumber, zipEditCaption) => {
    const editEpisode = seasons
      .find((season) => season.number === seasonnumber)
      .zipfile.find((episode) => episode.caption === zipEditCaption);

    editEpisode.caption = zipEditCaption;
    editEpisode.link = editLinks;

    setOpenEditZipModal(false);
  };

  const handleRemoveEpisode = (seasonnumber, episodenumber) => {
    const otherEpisodes = seasons
      .find((season) => season.number === seasonnumber)
      .episodes.filter((episode) => episode.episode_number !== episodenumber);
    seasons.find((season) => season.number === seasonnumber).episodes =
      otherEpisodes;

    setSeasons(seasons);
    setConfirm(false);
  };

  const handleRemoveZip = (seasonnumber, index) => {
    const otherZipEpisodes = seasons
      .find((season) => season.number === seasonnumber)
      .zipfile.filter((zip, i) => i !== index);

    console.log(seasonnumber, index, otherZipEpisodes);

    seasons.find((season) => season.number === seasonnumber).zipfile =
      otherZipEpisodes;
    setSeasons(seasons);
    setConfirm(false);
  };

  const [confirm, setConfirm] = useState(false);
  const [number, setNumber] = useState();
  const [numberEpisode, setNumberEpisode] = useState();
  const [numberZipEpisode, setNumberZipEpisode] = useState();
  const [link, setLink] = useState([]);
  const [zipCaption, setZipCaption] = useState("");
  const [editLinks, setEditLinks] = useState([]);
  const [zipEditCaption, setZipEditCaption] = useState("");

  console.log(episodes, seasons, numberEpisode);
  return (
    <div>
      <NavigationBarPc />
      <div className="py-5 max-w-[1450px] mx-auto bg-white p-2">
        <div className="heading mb-5">
          <h1 className="text-[25px]  font-bold add-movie">
            Add New Series From Here 🎥{" "}
          </h1>
        </div>
        <div>
          <div>
            <div>
              <input
                className="border border-2 mb-2 p-2 w-full"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter Series Name"
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

            <div className="my-2 ">
              <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold"></p>
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="p-2 py-1 bg-gray-700 rounded text-white flex items-center"
                >
                  <p className="mr-1 ">Add</p> <AiFillPlusCircle />
                </div>
              </div>

              {seasons
                .sort((a, b) => a.number - b.number)
                .map((season, seasonIndex) => (
                  <div className=" my-2 border-2 p-3">
                    <div className="flex items-center justify-between">
                      <div></div>
                      {confirm && number === season.number ? (
                        <div className="flex">
                          {" "}
                          <div
                            onClick={() => {
                              handleRemoveSeason(season.number);
                            }}
                            className="p-2 py-1 bg-red-700 rounded mr-2 text-white flex cursor-pointer items-center"
                          >
                            <p className="mr-1 ">Confirm</p> <CiCircleRemove />
                          </div>
                          <div
                            onClick={() => {
                              setConfirm(false);
                            }}
                            className="p-2 py-1 bg-green-700 rounded text-white flex cursor-pointer items-center"
                          >
                            <p className="mr-1 ">Cancel</p> <CiCircleRemove />
                          </div>
                        </div>
                      ) : (
                        <div>
                          {seasons.length > 1 ? (
                            <div
                              onClick={() => {
                                setConfirm(true);
                                setNumber(season.number);
                              }}
                              className="p-2 py-1 bg-red-700 rounded text-white flex cursor-pointer items-center"
                            >
                              <p className="mr-1 ">Remove</p> <CiCircleRemove />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex ">
                      <p className="text-[20px] font-bold w-[20%]">
                        Season Number :{" "}
                      </p>
                      <input
                        className="border border-2 mb-2 p-2 ml-2 w-[20%]"
                        type="text"
                        onChange={(e) => {
                          seasons[seasonIndex].number = parseInt(
                            e.target.value
                          );
                          console.log(seasons, "check");
                        }}
                        defaultValue={season.number}
                        placeholder="Season Number"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div></div>
                      <div
                        onClick={() => {
                          setOpenEpisodeModal(true);
                          setAddEpisodeSeason(season.number);
                        }}
                        className="p-2 py-1 bg-gray-700 rounded text-white h-fit flex items-center"
                      >
                        <p className="mr-1 ">Add Episodes</p>{" "}
                        <AiFillPlusCircle />
                      </div>
                    </div>
                    <div className="flex my-2">
                      <div className="w-[20%]">
                        <p className="text-[20px] font-bold md: mr-3">
                          Episodes:{" "}
                        </p>
                      </div>

                      <div className="w-[80%]">
                        {season?.episodes?.map((episode, index) => (
                          <div className="md:min-w-[200px]">
                            <div className="my-2 border-2 p-2">
                              <div className="flex justify-between">
                                <p>{episode?.episode_number}</p>
                                <div className="flex">
                                  <div
                                    onClick={() => {
                                      setOpenEditEpisodeModal(true);
                                      setAddEpisodeSeason(season?.number);
                                      setEpisodeEditTitle(episode?.title);
                                      setEpisodeEditNumber(
                                        episode?.episode_number
                                      );
                                      setEpisodeEditIndex(index);
                                      setEpisodeEditAirDate(episode?.air_date);
                                      setEpisodeEditOverview(episode?.overview);
                                      setEpisodeEditLink(episode?.episode_link);
                                    }}
                                    className="p-2 rounded-full bg-green-600 cursor-pointer mr-2"
                                  >
                                    <AiOutlineEdit className=" text-white " />
                                  </div>

                                  <div>
                                    {confirm &&
                                    numberEpisode === episode.episode_number ? (
                                      <div className="flex">
                                        {" "}
                                        <div
                                          onClick={() => {
                                            handleRemoveEpisode(
                                              season.number,
                                              episode.episode_number
                                            );
                                          }}
                                          className="p-2 py-1 bg-red-700 rounded mr-2 text-white flex cursor-pointer items-center"
                                        >
                                          <p className="mr-1 ">Confirm</p>{" "}
                                          <CiCircleRemove />
                                        </div>
                                        <div
                                          onClick={() => {
                                            setConfirm(false);
                                          }}
                                          className="p-2 py-1 bg-green-700 rounded text-white flex cursor-pointer items-center"
                                        >
                                          <p className="mr-1 ">Cancel</p>{" "}
                                          <CiCircleRemove />
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        {season?.episodes?.length > 1 ? (
                                          <div
                                            onClick={() => {
                                              setConfirm(true);
                                              setNumberEpisode(
                                                episode.episode_number
                                              );
                                            }}
                                            className="p-2 py-1 bg-red-700 rounded text-white flex cursor-pointer items-center"
                                          >
                                            <p className="mr-1 ">Remove</p>{" "}
                                            <CiCircleRemove />
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <p>{episode?.title}</p>
                              <p>{episode?.overview}</p>
                              <p>{episode?.episode_link}</p>
                              <p>{episode?.air_date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div></div>
                      <div
                        onClick={() => {
                          setOpenZipModal(true);
                          setAddEpisodeSeason(season.number);
                        }}
                        className="p-2 py-1 bg-gray-700 rounded text-white h-fit flex items-center"
                      >
                        <p className="mr-1 ">Add Zipfile</p>{" "}
                        <AiFillPlusCircle />
                      </div>
                    </div>
                    <div className="flex my-2">
                      <div className="w-[20%]">
                        <p className="text-[20px] font-bold md: mr-3">
                          Episodes ZipFile:{" "}
                        </p>
                      </div>

                      <div className="w-[80%]">
                        {season?.zipfile?.map((episode, index) => (
                          <div className="md:min-w-[200px]">
                            <div className="my-2 border-2 p-2">
                              <div className="flex justify-between">
                                <div className="flex ">
                                  {" "}
                                  <p className="font-bold mr-2">
                                    Caption:
                                  </p>{" "}
                                  {episode?.caption}
                                </div>
                                <div className="flex">
                                  <div
                                    onClick={() => {
                                      setOpenEditZipModal(true);
                                      setAddEpisodeSeason(season?.number);
                                      setZipEditCaption(episode?.caption);
                                      setEditLinks(episode?.link);
                                    }}
                                    className="p-2 rounded-full bg-green-600 cursor-pointer mr-2"
                                  >
                                    <AiOutlineEdit className=" text-white " />
                                  </div>

                                  <div>
                                    {confirm && numberZipEpisode === index ? (
                                      <div className="flex">
                                        {" "}
                                        <div
                                          onClick={() => {
                                            handleRemoveZip(
                                              season.number,
                                              index
                                            );
                                          }}
                                          className="p-2 py-1 bg-red-700 rounded mr-2 text-white flex cursor-pointer items-center"
                                        >
                                          <p className="mr-1 ">Confirm</p>{" "}
                                          <CiCircleRemove />
                                        </div>
                                        <div
                                          onClick={() => {
                                            setConfirm(false);
                                          }}
                                          className="p-2 py-1 bg-green-700 rounded text-white flex cursor-pointer items-center"
                                        >
                                          <p className="mr-1 ">Cancel</p>{" "}
                                          <CiCircleRemove />
                                        </div>
                                      </div>
                                    ) : (
                                      <div>
                                        {season?.zipfile?.length > 1 ? (
                                          <div
                                            onClick={() => {
                                              setConfirm(true);
                                              setNumberZipEpisode(index);
                                            }}
                                            className="p-2 py-1 bg-red-700 rounded text-white flex cursor-pointer items-center"
                                          >
                                            <p className="mr-1 ">Remove</p>{" "}
                                            <CiCircleRemove />
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <p className="font-bold mr-2">Links:</p>
                              <p>{episode?.link}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
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
            </div>
            <AutoComplete
              className={"w-full"}
              setSelectData={setDirector}
              placeholder="Directors  Name"
            />
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
                handleSeries();
              }}
            >
              Add Movie
            </button>
          </div>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className=" flex flex-col space-y-5  p-5  sm:w-[400px] max-w-[400px]  bg-white  rounded-lg text-light-black ">
          <input
            className="border border-2  p-2 "
            onChange={(e) => setSeasonNumber(e.target.value)}
            type="number"
            placeholder="Season Number"
          />
          <button
            style={{ background: "#032541" }}
            className="px-2 py-2 text-white "
            onClick={() => {
              handleAddMoreSeason(seasonNumber);
            }}
          >
            Proceeed
          </button>
        </div>
      </Modal>

      <Modal open={openEpisodeModal} onClose={() => setOpenEpisodeModal(false)}>
        <div className=" flex flex-col space-y-2  p-5  sm:w-[400px] max-w-[400px]  bg-white  rounded-lg text-light-black ">
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeNumber(e.target.value)}
            type="number"
            defaultValue={episodeNumber}
            placeholder="Episode Number"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeTitle(e.target.value)}
            type="text"
            defaultValue={episodeTitle}
            placeholder="Episode Title"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeLink(e.target.value)}
            type="text"
            defaultValue={episodeLink}
            placeholder="Episode Link"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeAirDate(e.target.value)}
            type="date"
            defaultValue={episodeAirDate}
            placeholder="Episode Air Date"
          />
          <textarea
            className="border border-2  p-2 "
            rows={3}
            defaultValue={episodeOverview}
            onChange={(e) => setEpisodeOverview(e.target.value)}
            placeholder="Episode Overview"
          />
          <button
            style={{ background: "#032541" }}
            className="px-2 py-2 text-white "
            onClick={() => {
              handleAddMoreEpisode(addEpisodeSeason, episodeNumber);
            }}
          >
            Proceeed
          </button>
        </div>
      </Modal>

      <Modal
        open={openEditEpisodeModal}
        onClose={() => setOpenEditEpisodeModal(false)}
      >
        <div className=" flex flex-col space-y-2  p-5  sm:w-[400px] max-w-[400px]  bg-white  rounded-lg text-light-black ">
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeEditNumber(e.target.value)}
            type="number"
            defaultValue={episodeEditNumber}
            placeholder="Episode Number"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeEditTitle(e.target.value)}
            type="text"
            defaultValue={episodeEditTitle}
            placeholder="Episode Title"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeEditLink(e.target.value)}
            type="text"
            defaultValue={episodeEditLink}
            placeholder="Episode Link"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setEpisodeEditAirDate(e.target.value)}
            type="date"
            defaultValue={episodeEditAirDate}
            placeholder="Episode Air Date"
          />
          <textarea
            className="border border-2  p-2 "
            rows={3}
            defaultValue={episodeEditOverview}
            onChange={(e) => setEpisodeEditOverview(e.target.value)}
            placeholder="Episode Overview"
          />
          <button
            style={{ background: "#032541" }}
            className="px-2 py-2 text-white "
            onClick={() => {
              handleEditEpisode(addEpisodeSeason, episodeEditIndex);
            }}
          >
            Proceeed
          </button>
        </div>
      </Modal>

      <Modal open={openZipModal} onClose={() => setOpenZipModal(false)}>
        <div className=" flex flex-col space-y-2  p-5  sm:w-[400px] max-w-[400px]  bg-white  rounded-lg text-light-black ">
          <input
            className="border border-2  p-2 "
            onChange={(e) => setZipCaption(e.target.value)}
            type="text"
            defaultValue={zipCaption}
            placeholder="Zip Caption"
          />
          <input
            className="border border-2  p-2 "
            onChange={(e) => setLink(e.target.value)}
            type="text"
            defaultValue={link}
          />

          <button
            style={{ background: "#032541" }}
            className="px-2 py-2 text-white "
            onClick={() => {
              handleAddMoreZip(addEpisodeSeason, zipCaption);
            }}
          >
            Proceeed
          </button>
        </div>
      </Modal>

      <Modal open={openEditZipModal} onClose={() => setOpenEditZipModal(false)}>
        <div className=" flex flex-col space-y-2  p-5  sm:w-[400px] max-w-[400px]  bg-white  rounded-lg text-light-black ">
          <input
            className="border border-2  p-2 "
            onChange={(e) => setZipEditCaption(e.target.value)}
            type="text"
            defaultValue={zipEditCaption}
            placeholder="Zip Caption"
          />
          <AutoComplete
            placeholder="Add Links"
            setSelectData={setEditLinks}
            className={"w-full"}
            selectedData={editLinks}
          />
          <button
            style={{ background: "#032541" }}
            className="px-2 py-2 text-white "
            onClick={() => {
              handleEditZip(addEpisodeSeason, zipEditCaption);
            }}
          >
            Proceeed
          </button>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default AddSeries;
