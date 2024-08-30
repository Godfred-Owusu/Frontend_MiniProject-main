// import React, { useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddStudentForm = () => {
//   const [name, setName] = useState('');
//   const [studentClass, setStudentClass] = useState('');
//   const [book, setBook] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     try {
//       const response = await axios.post('http://localhost:3000/api/students', {
//         name,
//         class: studentClass,
//         book: book ? [book] : [], // If book is empty, send an empty array
//       });

//       console.log('Student added:', response.data);
//       toast.success('Student added successfully!');

//       // Clear form fields
//       setName('');
//       setStudentClass('');
//       setBook('');
//     } catch (error) {
//       console.error('Error adding student:', error);
//       toast.error('Failed to add student');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-xl mb-4">Add New Student</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Class</label>
//           <input
//             type="text"
//             value={studentClass}
//             onChange={(e) => setStudentClass(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Book (Optional)</label>
//           <input
//             type="text"
//             value={book}
//             onChange={(e) => setBook(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Add Student
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudentForm = ({ open, onClose, bookId }) => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  //   const [book, setBook] = useState(bookId || "");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await axios.post(
        "https://backend-mini-project-main.vercel.app/api/students",
        {
          name,
          class: studentClass,
          book: [bookId], // If book is empty, send an empty array
        }
      );

      console.log("Student added:", response.data);
      toast.success("Student added successfully!");

      // Clear form fields
      setName("");
      setStudentClass("");

      onClose(); // Close the modal after submission
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("Failed to add student");
    }
  };

  if (!open) return null; // If modal is not open, return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">Borrow Book</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Class</label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Borrow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;

// const AddStudentForm = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBookId, setSelectedBookId] = useState(null);

//   const openModal = (bookId) => {
//     setSelectedBookId(bookId); // Set the selected book ID
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedBookId(null);
//   };

//   return (
//     <div className="App">
//       <button
//         onClick={() => openModal("60d21b4667d0d8992e610c85")} // Example book ID
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Borrow Book
//       </button>

//       {/* Borrow Book Modal */}
//       <BorrowBookModal
//         open={isModalOpen}
//         onClose={closeModal}
//         bookId={selectedBookId}
//       />
//     </div>
//   );
// };

// export default AddStudentForm;
