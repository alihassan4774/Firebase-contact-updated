import React from "react";

const NotContactFound = () => {
  return (
    <div>
      <div className="flex h-[80vh] items-center justify-center gap-4">
        <div>
          <img src="NotContact.png" />
        </div>
        <h3 className="text-2xl font-semibold text-white">
          {" "}
          Contact Not Found
        </h3>
      </div>
    </div>
  );
};

export default NotContactFound;
