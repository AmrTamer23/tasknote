import React from "react";

interface ModalProps {
    children?: React.ReactNode;
    onBackgroundClick: () => void; // Add onBackgroundClick prop to ModalProps
}

function Modal(props: ModalProps) {

    const buttonStyle = "bg-green-800 text-white border-none px-2.5 py-5 text-lg cursor-pointer";


    return <div className={"modal-overlay "} onClick={props.onBackgroundClick}>
        <div className={`modal-container show flex flex-col gap-5`} onClick={(e) => { e.stopPropagation() }}>
            {props.children}
        </div>
    </div>;
}

export default Modal;