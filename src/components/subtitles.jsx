// Subtitles.jsx
import React from 'react';

const Subtitles = ({ subtitle, className }) => {
  return (
    <div className="flex items-center">
      <hr className="border-1 border-black w-10" />
      <h2 className={`pl-2 text-[0.60rem] font-normal tracking-widest ${className}`}>{subtitle}</h2>
    </div>
  );
}

export default Subtitles;