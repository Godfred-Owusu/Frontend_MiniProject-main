import { MdDeleteForever } from "react-icons/md";
import Modal from "./Modals/Modal";
import { useState } from "react";

const Borrows = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      Borrows
      <div>
        <div
          onClick={() => setOpen(true)}
          className=" flex justify-start items-center bg-red-600 w-fit text-white rounded py-1 px-2 gap-1 cursor-pointer"
        >
          <div>
            <MdDeleteForever size={20} />
          </div>
          <div>Delete</div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            <MdDeleteForever size={20} className="mx-auto text-red-300" />
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
    </div>
  );
};

export default Borrows;
