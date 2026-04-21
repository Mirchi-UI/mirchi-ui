import React from "react";

interface MessageInputProps {
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder = "Message...",
}) => {
  return (
    <div className="flex items-center h-10 px-4 rounded-lg border border-neutral-700 bg-[#2d2d2d] focus-within:border-neutral-500">
      {/* File Upload */}
      <div className="relative flex items-center justify-center">
        <label className="cursor-pointer flex items-center justify-center group">
          <svg
            viewBox="0 0 337 337"
            className="h-[18px] transition-all duration-300"
          >
            <circle
              cx="168.5"
              cy="168.5"
              r="158.5"
              strokeWidth="20"
              className="stroke-neutral-500 fill-none transition-all duration-300 group-hover:stroke-white group-hover:fill-[#3c3c3c]"
            />
            <path
              d="M167.759 79V259"
              strokeWidth="25"
              strokeLinecap="round"
              className="stroke-neutral-500 transition-all duration-300 group-hover:stroke-white"
            />
            <path
              d="M79 167.138H259"
              strokeWidth="25"
              strokeLinecap="round"
              className="stroke-neutral-500 transition-all duration-300 group-hover:stroke-white"
            />
          </svg>

          {/* Tooltip */}
          <span className="absolute -top-10 hidden group-hover:block opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-[10px] whitespace-nowrap bg-black px-2 py-1 rounded border border-neutral-700 shadow-md">
            Add an image
          </span>

          <input type="file" className="hidden" />
        </label>
      </div>

      {/* Input */}
      <input
        type="text"
        required
        placeholder={placeholder}
        className="w-[200px] h-full bg-transparent outline-none border-none pl-3 text-white"
      />

      {/* Send Button */}
      <button className="flex items-center justify-center h-full ml-2 group">
        <svg viewBox="0 0 664 663" className="h-[18px]">
          <path
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
            strokeWidth="33.67"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-neutral-500 fill-none transition-all duration-300 group-hover:stroke-white group-hover:fill-[#3c3c3c]"
          />
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;
