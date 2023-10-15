import React, { useEffect, useState } from "react";
import NavigationBarPc from "../../../Components/Shared/NavigationBarPc";
import { Footer } from "../../../Components/Shared/Footer";
import { capitalizeFirst } from "../../../Components/utils/utils";
import axios from "axios";
import Modal from "../../../Components/Shared/Modal";
import EditMovie from "../EditMovie/EditMovie";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(
        `https://triangle-movies-backend.vercel.app/api/v1/movies/?limit=50&searchName=${search}`
      )
      .then((res) => {
        setMovies(res.data.data);
        setTotal(res.data.meta.total);
        setRefetch(false);
      });
  }, [refetch, search]);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://triangle-movies-backend.vercel.app/api/v1/movies/${id}`)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Removed successfully");
          setRefetch(true);
        }
      });
  };

  const [openModal, setOpenModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBarPc />
      <div className="py-5 max-w-[1450px] mx-auto">
        <div className="text-white text-[20px] my-2">
          <p>Total Movies {total}</p>
          <input
            type="text"
            placeholder="Search by name"
            className="border-2 border-white px-1 py-2 rounded"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div class="overflow-x-auto md:block hidden space-x-8">
          <table class="table-auto ">
            <thead class="border-b border-light-gray  uppercase text-gray bg-gray-50">
              <tr>
                <th class="px-6 py-4 whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB] ">
                    Name of Movie
                  </div>
                </th>
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">
                    Release Date
                  </div>
                </th>
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">
                    Runtime
                  </div>
                </th>
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">
                    Director
                  </div>
                </th>
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">
                    Rating
                  </div>
                </th>
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">Link</div>
                </th>
                {/* <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]">Url</div>
                </th> */}
                <th class="px-6 py-4  whitespace-nowrap">
                  <div class=" text-left font-medium text-[#ABABAB]"></div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {movies?.map((d, index) => (
                <tr
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/movie/${d.url}`);
                  }}
                  className="bg-white border-b border-light-gray cursor-pointer transition duration-300 ease-in-out hover:bg-light-gray items-center"
                >
                  <td
                    className={`px-6 py-4 pr-8    text-[#252733]
                  `}
                  >
                    <div className="flex items-center ">
                      <p className="mr-2">{index + 1}</p>
                      {d?.poster ? (
                        <img
                          className="mr-2 h-10 w-10 rounded-full"
                          src={d?.poster}
                          alt=""
                        />
                      ) : (
                        <div className="bg-primary mr-3  h-10 w-10 rounded-full flex items-center justify-center p-1 text-white cursor-pointer ">
                          {d?.title?.slice(0, 1).toUpperCase()}
                        </div>
                      )}
                      <div className="">
                        <p className={` w-[180px] `}>{d?.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#252733] px-6 py-4   ">
                    <div className="flex flex-col">
                      <p className=""> {d?.release_date}</p>
                      <p className="text-[11px] text-[#717171]">
                        {d?.release_year}
                      </p>
                    </div>
                  </td>
                  <td className="text-[#252733] px-6 py-4  whitespace-nowrap">
                    <div className="flex ">{d?.runtime}</div>
                  </td>
                  <td className="text-[#252733] px-6 py-4 ">
                    <p className=""> {capitalizeFirst(d?.director)}</p>
                  </td>
                  <td className="text-[#252733] px-6 py-4  whitespace-nowrap">
                    <p className=""> {d?.average_rating}</p>
                  </td>
                  {/* <td className="text-[#252733] px-6 py-4  whitespace-nowrap">
                    <p className=""> {d?.url}</p>
                  </td> */}
                  <td className="text-[#252733] px-6 py-4  ">
                    {d?.link?.slice(0, 50)}
                  </td>
                  <td className="text-[#252733] px-6 py-4   flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setId(d._id);
                        setOpenModal(true);
                      }}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    {confirm && id === d._id ? (
                      <>
                        <button
                          onClick={(e) => {
                            handleDelete(d._id);
                            e.stopPropagation();
                          }}
                          className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
                        >
                          Confirm
                        </button>

                        <button
                          onClick={(e) => {
                            setConfirm(false);
                            e.stopPropagation();
                          }}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setConfirm(true);
                          setId(d._id);
                        }}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className=" flex flex-col space-y-5  p-5  sm:w-[400px] max-w-[400px] overflow-y-scroll max-h-[400px] bg-white  rounded-lg text-light-black ">
          <EditMovie
            id={id}
            setOpenModal={setOpenModal}
            setRefetch={setRefetch}
          />
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default AllMovie;
