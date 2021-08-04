import React from "react";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const ElementHeader: React.FC = (): JSX.Element => {
  const [openstyle, setOpenstyle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex justify-around w-full mr-96">
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
          <div
            className="relative w-32 mt-1 h-9 "
            onClick={() => setOpen(open)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="relative w-full py-2 pl-3 pr-10 text-left rounded-lg shadow-sm cursor-default border- focus:outline-none focus:ring-border focus:ring-indigo500 focus:border-indigo500 sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
            >
              <span className="block truncate border-4 border-elementColor bg-elementColor"></span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray400"
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
              className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <li
                className="relative py-2 pl-8 pr-4 text-gray-900 cursor-default select-none"
                id="listbox-option-0"
                role="option"
              >
                {/* borders selection */}
                <div className="flex mb-2">
                  <span className="block w-full h-4 truncate border-4 border-elementColor bg-elementColor"></span>
                  <span className="ml-2">4</span>
                </div>
                <div className="flex mb-2 ">
                  <span className="block w-full h-2 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                  <span className="ml-2">2</span>
                </div>
                <div className="flex ">
                  <span className="block w-full h-1 font-normal truncate border-2 border-elementColor bg-elementColor"></span>
                  <span className="ml-2">1</span>
                </div>
                {/* border selection end */}
                <div className=""></div>
                {/* color grid start */}
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3 ">
                  <button className="w-10 h-10 rounded-md bg-indigo600"></button>
                  <button className="w-10 h-10 rounded-md bg-fuschia"></button>
                  <button className="w-10 h-10 rounded-md bg-greenish"></button>
                  <button className="w-10 h-10 rounded-md bg-yellowish"></button>
                  <button className="w-10 h-10 rounded-md bg-redish"></button>
                  <button className="w-10 h-10 rounded-md bg-gray900"></button>
                </div>
                {/* color grid end */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* this is the differnce */}

      <div className="w-6 h-full mt-4">
        <img src={image} />
      </div>
      {/* <div className="ml-6">
      </div> */}
    </div>
  );
};
export default ElementHeader;
