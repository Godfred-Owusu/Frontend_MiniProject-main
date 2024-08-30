import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    quantity: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // const response = await axios.post(
      //   "http://localhost:3000/api/books",
      //   formData
      // );
      // // alert("Book added successfully!");
      // toast.success("Book added successfully!");

      await axios.post("https://backend-mini-project-45cj.vercel.app/api/books", formData);
      toast.success("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        genre: "",
        quantity: 0,
      });
      onClose();
    } catch (error) {
      toast.error("Error adding book: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <center className="bg-white shadow my-10 rounded"> */}
      <form onSubmit={handleSubmit}>
        <div className="text-center w-56">
          <div className="mx-auto w-48">
            {/* <div className="flex flex-col gap-5 justify-center items-center w-[40%]"> */}
            <input
              type="text"
              className="outline-none"
              name="title"
              placeholder="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="outline-none py-4"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              required
            />

            <input
              className="outline-none"
              type="text"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              required
            />

            <input
              className="outline-none py-4"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className={`bg-green-500 text-white rounded py-2 px-4 mt-4 w-full ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </div>
      </form>
      {/* </center> */}
      <ToastContainer />
    </>
  );
};

export default AddBook;
