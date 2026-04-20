"use client"
import React from "react";

interface SubscribeInputProps {
  placeholder?: string;
  buttonText?: string;
}

const SubscribeInput: React.FC<SubscribeInputProps> = ({
  placeholder = "Enter email",
  buttonText = "Subscribe",
}) => {
  return (
    <div className="flex items-center h-[45px] p-[5px] rounded-[20px] bg-[#292524] w-fit active:[&>svg]:scale-110">
      {/* Icon */}
      <svg
        className="w-[30px] ml-2  fill-white  "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <g data-name="inbox">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            ></rect>
            <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"></path>
          </g>
        </g>
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="max-w-[170px] h-full pl-[15px] bg-[#292524] text-white text-base outline-none border-none autofill:bg-[#292524]"
      />

      {/* Button */}
      <button className="relative flex items-center justify-center w-[95px] h-full ml-2 rounded-[15px] bg-white text-black font-medium overflow-hidden transition-all duration-300 hover:text-white active:scale-90 group">
        {/* Arrow */}
        <span className="absolute -mr-[150px] transition-all duration-300 group-hover:mr-0 group-hover:animate-[bounceX_0.9s_both] group-hover:text-teal-600">
          ➜
        </span>

        {buttonText}
      </button>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes bounceX {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default SubscribeInput;
