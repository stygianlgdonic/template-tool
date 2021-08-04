import React from "react";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const ElementHeader: React.FC = (): JSX.Element => {
  const [openstyle, setOpenstyle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex justify-around ">
      <div className="flex mt-2 ">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="6" fill="#FC7B7B" />
        </svg>
        {/* ////////////////////// */}
        <div className="ml-10 w-60">
          <div className="relative mt-1" onClick={() => setOpen(!open)}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
            >
              <span className="block truncate">Tom Cook</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <li
                className="relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none"
                id="listbox-option-0"
                role="option"
              >
                <span className="block font-normal truncate">Wade Cooper</span>
                <span className="text-indigo-600 absolute inset-y-0 left-0 flex items-center pl-1.5">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* this is the differnce */}

      <div className="w-6 h-full mt-4 ">
        <img src={image} />
      </div>
      {/* <div className="ml-6">
      </div> */}
    </div>
  );
};
export default ElementHeader;
