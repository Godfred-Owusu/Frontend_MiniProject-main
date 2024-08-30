import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditModal = ({ open, onClose, bookId, book, onEdit }) => {
  const [editedBook, setEditedBook] = useState({
    title: "",
    author: "",
    genre: "",
    quantity: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (book) {
      setEditedBook({ ...book });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);

    try {
      const response = await axios.put(
        `https://backend-mini-project-45cj.vercel.app/api/books/${bookId}`,
        editedBook
      );
      onEdit(response.data);
      setLoading(false);
      toast.success("Book edited successfully!");
      onClose();
    } catch (err) {
      toast.error("Error adding book: " + err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="text-center w-56">
          <div className="mx-auto w-48">
            <h3 className="text-lg font-bold text-gray-500">Edit Book</h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="title"
                value={editedBook.title}
                onChange={handleChange}
                placeholder="Title"
                className="border rounded px-2 py-1"
              />
              <input
                type="text"
                name="author"
                value={editedBook.author}
                onChange={handleChange}
                placeholder="Author"
                className="border rounded px-2 py-1"
              />
              <input
                type="text"
                name="genre"
                value={editedBook.genre}
                onChange={handleChange}
                placeholder="Genre"
                className="border rounded px-2 py-1"
              />
              <input
                type="number"
                name="quantity"
                value={editedBook.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="border rounded px-2 py-1"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className={`w-full bg-blue-500 text-white rounded py-1 ${
                loading && "opacity-50"
              }`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-200 text-gray-700 rounded py-1"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default EditModal;
