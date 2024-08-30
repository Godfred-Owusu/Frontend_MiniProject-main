import { useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Adjust the path as necessary
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBookModal = ({ open, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-mini-project-main.vercel.app/api/books",
        formData
      );
      toast.success("Book added successfully!");
      onAdd(response.data); // Update the parent component state
      onClose(); // Close the modal after adding the book
    } catch (error) {
      toast.error("Error adding book: " + error.message);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="p-4">
          <h2 className="text-xl mb-4">Add New Book</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="outline-none p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label>Author:</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="outline-none p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label>Genre:</label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="outline-none p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="outline-none p-2 border border-gray-300 rounded w-full"
                  required
                  placeholder="Enter the number of books"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AddBookModal;
