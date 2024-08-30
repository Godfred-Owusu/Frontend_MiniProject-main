// // DeleteModal.js

// import { MdDeleteForever } from "react-icons/md";
// import Modal from "./Modal"; // Adjust the path as necessary

// const DeleteModal = ({ open, onClose, onDelete }) => {
//   return (
//     <Modal open={open} onClose={onClose}>
//       <div className="text-center w-56">
//         <MdDeleteForever size={20} className="mx-auto text-red-600" />
//         <div className="mx-auto w-48">
//           <h3 className="text-lg font-bold text-gray-500">Delete Book</h3>
//           <p className="text-sm text-gray-500 py-1 pb-4">
//             Are you sure you want to delete this book?
//           </p>
//         </div>
//         <div className="flex gap-4">
//           <button
//             // onClick={onDelete}
//             className="w-full bg-red-500 text-white rounded py-1"
//           >
//             Delete
//           </button>
//           <button
//             onClick={onClose}
//             className="w-full bg-gray-200 text-gray-700 rounded py-1"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default DeleteModal;

import { useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Adjust the path as necessary
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteModal = ({ open, onClose, bookId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(
        `https://backend-mini-project-main.vercel.app/api/books/${bookId}`
      );
      toast.success("Book deleted successfully!");
      onDelete(bookId); // Call the onDelete prop to update the parent component state
      onClose(); // Close the modal after deletion
    } catch (err) {
      setError("Failed to delete book");
      toast.error("Error deleting book: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <div className="text-center w-56">
          <div className="mx-auto w-48">
            <h3 className="text-lg font-bold text-gray-500">Delete Book</h3>
            <p>Are you sure you want to delete this book?</p>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDelete}
              className={`w-full bg-red-500 text-white rounded py-1 ${
                loading && "opacity-50"
              }`}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete"}
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

export default DeleteModal;
