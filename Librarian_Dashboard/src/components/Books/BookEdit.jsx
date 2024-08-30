import { useState } from "react";
import Modal from "../Modal";
const BookEdit = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          {/* <MdDeleteForever size={20} className="mx-auto text-red-300" /> */}
          <div className="mx-auto w-48">
            {/* heading */}
            <h3 className="text-lg font-bold text-gray-500">Add Book</h3>
            {/* Conent */}
            <p className="text-sm text-gray-500"></p>
          </div>
          {/* button */}
          <div className="flex gap-4">
            <button className="w-full">Delete</button>
            <button className="w-full">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookEdit;
