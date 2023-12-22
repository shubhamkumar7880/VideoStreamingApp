import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-2 my-2">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
