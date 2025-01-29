import { CircleArrowRight } from 'lucide-react';
import React from 'react';

const CustomButton = ({title , icon , onClick}) => {
  return (
      <div className="relative group">
        <button className="relative inline-block p-px font-bold leading-6 text-black bg-gray-600 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" onClick={onClick}>
          <span className="absolute inset-0 rounded bg-gradient-to-r from-teal-400 via-white-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-800 group-hover:opacity-100" />
          <span className="relative z-10 block px-4 py-2 rounded bg-purple-400 hover:bg-purple-500">
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">{title || 'Default'}</span>
              <div className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1">
              {icon || <CircleArrowRight />}
              </div>
            </div>
          </span>
        </button>
      </div>
  );
}

export default CustomButton;
