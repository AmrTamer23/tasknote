import React from 'react';


function NoteItem() {

    const noteHeading = 'text-3xl font-normal self-start py-2 px-3 text-gray-100';

    return (
        <div className='bg-emerald-800 w-2/5 h-auto rounded-lg disable-text-selection overflow-hidden'>
            <h2 className={noteHeading}>Graphs</h2>
            <p className='text-base px-3 text-gray-300 pb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nostrum labitiis cum ex aut, enim a, facere earum esse molestias eum impedit laudantium. Aliquid repellat autem architecto. Quasi nostrum labore vero at blanditiis cum ex aut, enim a, facere ea
            </p>
        </div>


    );
}

export default NoteItem;