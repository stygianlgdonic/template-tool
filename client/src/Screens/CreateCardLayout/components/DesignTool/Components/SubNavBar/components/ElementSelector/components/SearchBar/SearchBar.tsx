import React from "react";

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="z-0 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor">
        <button>
          <span className="flex items-center justify-end w-auto p-3 text-sm text-grey">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z"
                fill="#9CA3AF"
              />
            </svg>
          </span>
        </button>
        <input
          className="z-0 w-full h-12 text-sm rounded outline-none text-gray95 "
          type="text"
          placeholder="What would you like to search"
        />
      </div>
    </div>
  );
};
export default SearchBar;
