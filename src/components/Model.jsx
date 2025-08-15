import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fadeIn">
          <div
            className="
      relative z-50 w-[90%] max-w-lg rounded-2xl bg-white shadow-2xl 
      p-5 overflow-y-auto max-h-[90vh] 
      lg:p-6 lg:shadow-xl lg:max-w-xl lg:rounded-2xl
    "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full bg-gray-100 p-2 hover:bg-gray-200 transition"
            >
              <AiOutlineClose className="text-xl text-gray-700" />
            </button>

            {/* Modal Content */}
            <div className="mt-2">{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
