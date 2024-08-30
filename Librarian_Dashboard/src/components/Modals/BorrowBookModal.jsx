import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BorrowBookModal = ({ open, onClose, bookId }) => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [error, setError] = useState("");

  // const handleBorrow = async () => {
  //   if (!name || !studentClass) {
  //     setError("Please fill in all fields");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post("http://localhost:3000/api/students", {
  //       name,
  //       class: studentClass,
  //       bookId,
  //     });
  //     console.log("Borrowed Book:", response.data);
  //     toast.success("Book borrowed successfully!");
  //     onClose();
  //   } catch (error) {
  //     console.error("Error borrowing book:", error);
  //     toast.error("Failed to borrow the book");
  //     setError("Failed to borrow the book");
  //   }
  // };

  const handleBorrow = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/students", {
        name,
        studentClass,
        bookId,
      });

      console.log("Borrowed Book:", response.data);
      toast.success("Book borrowed successfully!");
      onClose();
    } catch (error) {
      console.error("Error borrowing book:", error);
      toast.error("Failed to borrow the book");
    }
  };
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Borrow Book</h2>
        <div className="mb-2">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="w-full px-2 py-1 border rounded"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleBorrow}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowBookModal;
