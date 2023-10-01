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

  const containerStyle = "fixed bottom-5 right-5";
  const buttonStyle = `bg-[#28822C] text-white border-none px-2.5 py-5 text-lg cursor-pointer rounded-md flex justify-center items-center gap-2`;
  const textContainerStyle =
    "absolute bottom-12 right-2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300";
  const textInnerStyle =
    "bg-gray-100 text-gray-800 rounded-lg py-1 px-3 text-sm";

  return (
    <div
      className={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={buttonStyle}
        onClick={props.onClick}
        style={{
          width: isHovered ? "150px" : "50px",
        }}
      >
        <props.Icon size={30} />
        {isHovered && <p className="text-lg">{props.text}</p>}
      </button>
      {isHovered && (
        <div className={textContainerStyle}>
          <div className={textInnerStyle}>{props.text}</div>
        </div>
      )}
      {props.children}
    </div>
  );
}

export default FloatingButton;
