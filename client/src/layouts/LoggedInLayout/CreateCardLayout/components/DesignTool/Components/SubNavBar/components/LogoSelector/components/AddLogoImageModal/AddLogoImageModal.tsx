import React, { useEffect, useRef, useState } from "react";
interface Prop {
  closeModal: () => void;
}
const AddLogoImageModal: React.FC<Prop> = React.forwardRef(
  ({ closeModal }): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [ShowToolTip, setShowToolTip] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    const [openMergeDropdown, setopenMergeDropdown] = useState(false);
    const myRef = useRef(null);

    const handleClickOutside = (e) => {
      //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
      if (!myRef.current.contains(e.target)) {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center m-auto overflow-x-hidden overflow-y-hidden outline-none focus:outline-none">
          <div
            className="relative items-center flex-1 max-w-sm mx-auto h-96"
          >
            {/*content*/}
            <div
              ref={myRef}
              className="relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg border-bordercolor focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-4 rounded-t border-gray300">
                <div className="flex gap-4">
                  {/* select 1 */}
                  <div
                    onClick={() =>
                      setopenDropDown(!!openDropDown ? false : true)
                    }
                    className="ml-4"
                  >
                    <label
                      id="listbox-label"
                      className="block text-xs not-italic font-medium leading-5 font-inter text-grey "
                    >
                      Fallback
                    </label>
                    <div className="relative mt-1">
                      <button
                        type="button"
                        className="relative w-32 px-2 py-1 pl-5 pr-5 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                      >
                        <span className="block text-sm font-normal leading-5 truncate font-inter">
                          Image.png
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-darkgray"
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
                        className="absolute z-auto py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3"
                        style={{ display: openDropDown ? "" : "none" }}
                      >
                        <li
                          className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                          id="listbox-option-0"
                          role="option"
                        >
                          <span className="block font-normal truncate">
                            image.png
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* select 1 end */}
                  {/* select 2 */}
                  <div
                    onClick={() =>
                      setopenMergeDropdown(!!openMergeDropdown ? false : true)
                    }
                  >
                    <label
                      id="listbox-label"
                      className="block text-xs not-italic font-medium leading-5 font-inter text-grey "
                    >
                      Merge Tag
                    </label>
                    <div className="mt-1">
                      <button
                        type="button"
                        className="relative px-2 py-1 pl-1 pr-8 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 w-36 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                      >
                        <span className="block text-sm font-normal leading-5 text-center truncate font-inter">
                          Logo_Recp
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-darkgray"
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
                        className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg z-999 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        role="listbox"
                        aria-labelledby="listbox-label"
                        aria-activedescendant="listbox-option-3"
                        style={{ display: openMergeDropdown ? "" : "none" }}
                      >
                        <li
                          className="py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                          id="listbox-option-0"
                          role="option"
                        >
                          <span className="block font-normal truncate">
                            Logo.png
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* select 2 end */}
                  <div className="mt-2 ">
                    {/* tool tip start */}
                    <div
                      className="relative flex items-center justify-end "
                      onClick={() => setShowToolTip(!ShowToolTip)}
                    >
                      <button
                        onClick={() => setShowToolTip(true)}
                        className="mt-5 "
                      >
                        <svg
                          className=""
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z"
                            fill="#4338CA"
                          />
                        </svg>
                      </button>
                      {ShowToolTip ? (
                        <>
                          <div className="absolute bottom-0 flex flex-col mb-6 ">
                            <span className="relative z-auto w-full h-24 p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 bg-indigo500">
                              Cardclan will fetch logo of your receipent from
                              his <b>website URL</b>
                              <div className="mt-5 mb-2 text-sm font-inter">
                                <button>Got it</button>
                              </div>
                            </span>
                            <div
                              className="z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500"
                              style={{ marginLeft: "350px" }}
                            ></div>
                          </div>
                        </>
                      ) : null}
                    </div>

                    {/* tool tip end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-transparent opacity-25"></div>
      </>
    );
  }
);
export default AddLogoImageModal;
