import React from "react";

interface ModalProps {
  children?: React.ReactNode;
  onBackgroundClick: () => void;
}

function Modal(props: ModalProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[#00000080] bg-opacity-50 z-10"
      onClick={props.onBackgroundClick}
    >
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg  flex flex-col gap-5 bg-[#222222] lg:w-3/6 w-5/6 h-3/4`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
