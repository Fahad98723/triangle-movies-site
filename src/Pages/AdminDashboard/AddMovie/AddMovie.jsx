import axios from "axios";
import React, { useState } from "react";
import NavigationBarPc from "../../../Components/Shared/NavigationBarPc";
import { Footer } from "../../../Components/Shared/Footer";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  // const [thumb, setThumb] = useState(null);
  const [cost, setCost] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [traveler, setTraveler] = useState("");
  const [rating, setRating] = useState(0);
  const [spentDay, setSpentDay] = useState(0);
  const [date, setDate] = useState(0);

  const handleAddBlog = (e) => {
    e.preventDefault();

    const formData = {
      title,
      category,
      image,
      cost,
      details,
      address,
      traveler,
      rating,
      status: "Approved",
      spentDay,
      date,
    };

    console.log(formData);
    axios
      .post("https://travel-guro-server.onrender.com/blogs", formData)
      .then((res) => {
        if (res.data.insertedId) {
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <NavigationBarPc />
      <div className="py-5 max-w-[1450px] mx-auto">
        <div className="heading mb-5">
          <h1 className="">Add New Movie From Here </h1>
        </div>
        <div>
          <div>
            <form onSubmit={handleAddBlog}>
              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Blog Title"
                  required
                />
              </div>

              <select
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Default select example"
                required
                className="mb-2 p-2 "
              >
                <option>Select Travel Category</option>
                <option value="Family">Family</option>
                <option value="Single">Single</option>
                <option value="Friends">Friends</option>
              </select>
              <br />

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Address  Name"
                  required
                />
              </div>

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  type="date"
                  name="date_of_birth"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              {/* 

              
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Enter Image Link"
                  required
                />
              

              {/* <input
                className="border border-2 mb-2 p-2" min='0' max='5' onBlur={handleOnBlur} type='number' className= 'py-1 mb-3 w-100' name="rating" step=".5" id="" placeholder='Rate Number' /> */}

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  min="0"
                  max="5"
                  onChange={(e) => setRating(e.target.value)}
                  type="number"
                  step=".5"
                  placeholder="Rating"
                  required
                />
              </div>

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setSpentDay(e.target.value)}
                  type="number"
                  placeholder="Enter Spent Days"
                  required
                />
              </div>

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setCost(e.target.value)}
                  type="number"
                  placeholder="Enter Travel Cost"
                  required
                />
              </div>

              <div>
                <textarea
                  className="border border-2 mb-2 p-2"
                  rows={5}
                  placeholder="Travel Details"
                  onChange={(e) => setDetails(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  className="border border-2 mb-2 p-2"
                  onChange={(e) => setTraveler(e.target.value)}
                  type="text"
                  placeholder="Traveler  Name"
                  required
                />
              </div>

              <button
                style={{ background: "#032541" }}
                className="px-2 py-3 text-white "
                type="submit"
              >
                Add Movie
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddMovie;
