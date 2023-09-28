import React from "react";

interface ModalProps {
  children?: React.ReactNode;
  onBackgroundClick: () => void; // Add onBackgroundClick prop to ModalProps
}

function Modal(props: ModalProps) {
  return (
    <div className={"modal-overlay "} onClick={props.onBackgroundClick}>
      <div
        className={`modal-container show flex flex-col gap-5 bg-[#222222] w-3/6`}
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
