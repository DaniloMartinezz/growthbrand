import React from 'react';

const talkButton = () => {
    return (
        <div className="flex">
            <button className="flex justify-center items-center border-2 border-black p-2">
                Let's talk
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    );
}

export default talkButton;
