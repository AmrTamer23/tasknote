import React from "react";
import { IconType } from "react-icons";

interface FloatingButtonProps {
  Icon: IconType;
  onClick: () => void;
  children?: React.ReactNode;
}

function FloatingButton(props: FloatingButtonProps) {
  const containerStyle = "fixed bottom-5 right-5";
  const buttonStyle =
    "bg-[#4CAF50] text-white border-none px-2.5 py-5 text-lg cursor-pointer";

  return (
    <div className={containerStyle}>
      <button
        className={`${buttonStyle} rounded-full `}
        onClick={props.onClick}
      >
        <props.Icon size={"20"} />
      </button>
      {props.children}
    </div>
  );
}

export default FloatingButton;
