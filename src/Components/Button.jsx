import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Button({ text }) {
  return (
    <div
      className={`w-fit px-6 py-2 flex items-center gap-2 rounded bg-blue-500 text-white text-sm font-semibold`}
    >
      <button>{text}</button>
      <BsArrowRight className={`text-sm text-white`}/>
    </div>
  );
}
