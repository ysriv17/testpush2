import React from "react";

const Card = ({ title, body }) => {
  return (
    <div className="border border-gray-300 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out ">
      <h3 className="text-lg font-bold text-[#0496A5]">{title}</h3>
      <p className="text-gray-600 mt-2">{body}</p>
    </div>
  );
};

export default Card;
