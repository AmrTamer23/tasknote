import React from "react";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";

interface FloatingButtonProps {
  text: string;
  onClick: () => void;
}

function FloatingButton(props: FloatingButtonProps) {
  const containerStyle =
    "bg-[#28822C] text-white px-2.5 py-5 text-lg cursor-pointer rounded-xl flex justify-center items-center gap-2 opacity-70 hover:opacity-100 transition-all ease-in-out duration-300";

  return (
    <div className="fixed bottom-5 right-5">
      <button className={containerStyle} onClick={props.onClick}>
        <FaPlus size={30} />
        <p className="text-lg">{props.text}</p>
      </button>
    </div>
  );
}

export default FloatingButton;
