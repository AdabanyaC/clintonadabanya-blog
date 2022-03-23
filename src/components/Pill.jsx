import React from "react";

const Pill = ({ pillTitle }) => {
  return (
    <div className="border text-gray-500 bg-gray-100 rounded-full text-center px-6 py-1 cursor-pointer text-xs hover:bg-gray-700 hover:text-white">
      {pillTitle}
    </div>
  );
};

export default Pill;
