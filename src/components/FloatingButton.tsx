import React, { useState } from 'react';
import { IconType } from 'react-icons';

interface FloatingButtonProps {
    Icon: IconType;
    onClick: () => void;
    children?: React.ReactNode;
}

function FloatingButton(props: FloatingButtonProps) {

    const containerStyle = "fixed bottom-5 right-5";
    const buttonStyle = "bg-green-800 text-white border-none px-2.5 py-5 text-lg cursor-pointer";

    const [showContainer, setShowContainer] = useState(false);

    const handleClick = () => {
        setShowContainer(!showContainer);
    }

    return (
        <div className={containerStyle}>
            <button className={`${buttonStyle} rounded-full `}
                onClick={handleClick}
            >
                <props.Icon size={'20'} />
            </button>
            {showContainer && (
                <div className="modal-overlay">
                    <div className='modal-container show flex flex-col gap-5 bg-[#183D3D]'>
                        {props.children}
                        <button
                            className={`${buttonStyle} rounded-2xl `}
                        >Submit</button>
                        <span className='cursor-pointer self-center text-gray-400'
                            onClick={handleClick}
                        >Cancel</span>
                    </div>
                </div>
            )}
        </div>


    );
}

export default FloatingButton;