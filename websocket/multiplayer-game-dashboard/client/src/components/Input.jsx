import React from "react";

const Input = ({ name, placeholder, handleInput }) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={handleInput}
      className="p-4 w-full rounded-xl border-[1px]"
    />
  );
};

export default Input;
