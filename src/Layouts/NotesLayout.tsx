import React from 'react';
import FloatingButton from '../components/FloatingButton';
import { FaPlus } from 'react-icons/fa';
import NoteItem from '../components/NoteItem';



function NotesLayout() {

    const noteHeading = 'text-3xl font-normal self-start py-2 px-3 text-gray-100';

    return (
        <div className='py-12 px-24'>
            <NoteItem />
            <FloatingButton
                Icon={FaPlus}
                onClick={() => console.log('clicked')}
                children={
                    <></>
                }
            />
        </div>
    );
}

export default NotesLayout;