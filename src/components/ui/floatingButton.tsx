import React, { useState } from "react";
import { IconType } from "react-icons";

interface FloatingButtonProps {
  Icon: IconType;
  text: string;
  onClick: () => void;
  children?: React.ReactNode;
}

function FloatingButton(props: FloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle =
    "bg-[#28822C] text-white border-none px-2.5 py-5 text-lg cursor-pointer rounded-xl flex justify-center items-center gap-2 ease-linear transition-all duration-75";

  return (
    <div
      className={"fixed bottom-5 right-5"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={containerStyle}
        onClick={props.onClick}
        style={{
          width: isHovered ? "150px" : "50px",
          height: isHovered ? "70px" : "70px",
          overflow: "hidden",
        }}
      >
        <props.Icon size={30} />
        {isHovered && <p className="text-lg">{props.text}</p>}
      </button>
      {isHovered && (
        <div
          className={
            "absolute bottom-12 right-2  opacity-0 transition-opacity duration-100"
          }
        >
          <div
            className={"bg-gray-100 text-gray-800 rounded-lg py-1 px-3 text-sm"}
          >
            {props.text}
          </div>
        </div>
      )}
      {props.children}
    </div>
  );
}

export default FloatingButton;
