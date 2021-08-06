import React, { useEffect, useRef, useState } from "react";
import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";
interface Prop {
  closeModal: () => void;
}
const TransformModal: React.FC<Prop> = React.forwardRef(
  ({ closeModal }): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [ShowToolTip, setShowToolTip] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    const [openMergeDropdown, setopenMergeDropdown] = useState(false);
    const myRef = useRef(null);

    const handleClickOutside = (e) => {
      //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
      if (!myRef.current.contains(e.target)) {
        // setShowModal(false);
        closeModal();
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    });

    return (
      <>
        <div
          ref={myRef}
          className="fixed z-50 flex items-center justify-center overflow-x-hidden outline-none top-56 focus:outline-none"
        >
          <div className="relative w-auto max-w-3xl mx-auto my-6 h-96">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg outline-none border-gray300 focus:outline-none ">
              {/*header*/}
              <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                <div
                  onClick={() => setopenDropDown(!!openDropDown ? false : true)}
                >
                  <label
                    id="listbox-label"
                    className="block text-sm font-medium text-grey"
                  >
                    FallBack
                  </label>
                  <div className="relative mt-1">
                    <button
                      type="button"
                      className="relative py-1 pl-3 pr-10 text-center bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-28 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                    >
                      <span className="block truncate">avatar.jpg</span>
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
                      style={{ display: openDropDown ? "" : "none" }}
                    >
                      <li
                        className="relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                        id="listbox-option-0"
                        role="option"
                      >
                        <span className="block font-normal">avatar</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* second select */}
                <div
                  className="ml-2"
                  onClick={() =>
                    setopenMergeDropdown(!!openMergeDropdown ? false : true)
                  }
                >
                  <label
                    id="listbox-label"
                    className="block text-sm font-medium text-grey"
                  >
                    Merge Tag
                  </label>
                  <div className="relative mt-1">
                    <button
                      type="button"
                      className="relative py-1 pl-3 pr-10 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-36 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                    >
                      <span className="block truncate">Image_custom</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray300"
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
                      className="absolute z-10 w-full py-1 mt-1 overflow-auto overflow-y-hidden text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-option-3"
                      style={{ display: openMergeDropdown ? "" : "none" }}
                    >
                      <li
                        className="relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                        id="listbox-option-0"
                        role="option"
                      >
                        <span className="block font-normal ">
                          Image_custom.png
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 ml-2">
                  <button
                    type="button"
                    className="inline-flex items-center w-32 px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm h-7 bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      className="-ml-0.5 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Add Image
                  </button>
                </div>
                {/* second select end */}
              </div>
              {/* <div className="flex items-center justify-end p-6 rounded-b ">
                     <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-indigo active:bg-indigo700 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button> 
                  </div> */}
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 opacity-25"></div>
      </>
    );
  }
);
export default TransformModal;
