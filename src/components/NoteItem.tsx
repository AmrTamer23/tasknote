import React, { useState } from 'react';
import Modal from './Modal';


interface NoteCategory {
    Category: string;
    color: string;
}

interface NoteItemProps {
    noteName: string;
    noteDesc: string;
    noteCategory?: NoteCategory;
    color: string;
}


function NoteItem(props: NoteItemProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const noteHeading = 'text-3xl font-normal self-start py-1 text-[#E0E0E0] mt-2';
    const categoryItemStyle = `flex items-center py-1 gap-1 hover:opacity-80 hover:cursor-pointer disable-text-selection`;

    return (
        <>
            {/* <div
                className='bg-[#444444] w-4/5 min-h-[200px] rounded-lg disable-text-selection overflow-hidden pb'
                onClick={handleModal}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <h2 className={`${noteHeading} px-3 mb-1`}>{props.noteName}</h2>
                <div
                    className='text-base px-3 text-gray-300'
                    style={{
                        flex: 1,
                        maxHeight: '80%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum labitiis cum ex aut, enim a, facere earum esse molestias eum impedit laudantium. Aliquid repellat autem architecto. Quasi nostrum labore vero at blanditiis cum ex aut, enim a, facere ea
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum labitiis cum ex aut, enim a, facere earum esse molestias eum impedit laudantium. Aliquid repellat autem architecto. Quasi nostrum labore vero at blanditiis cum ex aut, enim a, facere ea
                    </p>
                </div>
            </div> */}

            {
                isModalOpen &&
                <Modal
                    onBackgroundClick={handleModal}
                    children={
                        <div className='bg-[#444444] w-full h-auto rounded-lg overflow-hidden p-5'>
                            <span className='flex justify-between items-center mb-5'>
                                <div>
                                    <h2 className={`${noteHeading}`}>{props.noteName}</h2>
                                    <span className={`${categoryItemStyle}`}>
                                        <span className={`h-3 w-3 bg-${props.noteCategory?.color}-700 rounded-xl`}></span>
                                        <p className='subMenuLabel disable-text-selection text-xs'>Software Dev.</p>
                                    </span>

                                </div>


                                <p className='text-gray-200'>
                                    Created on: <span className='text-gray-300'>12/12/2021</span>
                                </p>
                            </span>
                            <p className='text-base text-gray-300 pb-5 overflow-ellipsis'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum labitiis cum ex aut, enim a, facere earum esse molestias eum impedit laudantium. Aliquid repellat autem architecto. Quasi nostrum labore vero at blanditiis cum ex aut, enim a, facere ea
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum labitiis cum ex aut, enim a, facere earum esse molestias eum impedit laudantium. Aliquid repellat autem architecto. Quasi nostrum labore vero at blanditiis cum ex aut, enim a, facere ea
                            </p>
                        </div >
                    }
                />
            }
        </>

    );
}

export default NoteItem;