import React from "react";

const Input = ({ type = "text", placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border px-4 py-2 rounded-lg w-full"
      {...props}
    />
  );
};

export default Input;
