import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, onSave, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">{children}</div>

        {/* Modal Footer */}
        <div className="modal-footer gap-5">
          <button
            onClick={onSave}
            className="bg-green-500 text-white rounded-md px-3 py-1 text-sm gap-2 transition-colors hover:bg-green-800"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 text-white rounded-md px-3 py-1 text-sm gap-2 transition-colors hover:bg-red-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
