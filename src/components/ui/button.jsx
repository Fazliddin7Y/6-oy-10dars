import React from "react";

const Button = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
