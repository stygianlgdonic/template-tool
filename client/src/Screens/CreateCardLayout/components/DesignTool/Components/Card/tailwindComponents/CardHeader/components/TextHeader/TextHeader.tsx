import React from "react";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const TextHeader: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const [openstyle, setOpenstyle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  //   const [showTransformModal, setShowTransformModal] = React.useState(false);

  return (
    <div className="flex flex-row items-center justify-center gap-4 px-6 ">
      <div className="flex items-center">
        <div className="relative inline-block text-left ">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            // onClick={() => setOpen(!open)}
          >
            <button
              //   onClick={() => setOpen(true)}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Poppins thin
            </button>
          </div>
        </div>
      </div>
      <div className="z-50 flex items-center">
        <div className="relative inline-block text-left ">
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            onClick={() => setOpen(!open)}
          >
            <button
              onClick={() => setOpen(true)}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Heading 1
            </button>
          </div>
        </div>
        {/* modal for transform */}
        {open ? (
          <>
            <div className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none top-56 focus:outline-none">
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                    <div>
                      <label
                        id="listbox-label"
                        className="block text-sm font-medium text-gray-700"
                      >
                        FallBack
                      </label>
                      <div className="relative mt-1">
                        <button
                          type="button"
                          className="relative py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default h-7 w-28 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                            id="listbox-option-0"
                            role="option"
                          >
                            <span className="block font-normal truncate">
                              Wade Cooper
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
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
                    {/* second select */}
                    <div className="ml-2">
                      <label
                        id="listbox-label"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Merge Tag
                      </label>
                      <div className="relative mt-1">
                        <button
                          type="button"
                          className="relative py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default h-7 w-28 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                            className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
                            id="listbox-option-0"
                            role="option"
                          >
                            <span className="block font-normal truncate">
                              Wade Cooper
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
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
                    <div className="mt-6 ml-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm h-7 w-36 bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

                    {/* <h3 className="text-3xl font-semibold">Modal Title</h3> */}
                    {/* <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setOpen(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button> */}
                  </div>
                  {/*body*/}
                  {/* <div className="relative flex-auto p-6">
                    <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by! Thoughts- their perception
                      of themselves! They're slowed down by their perception of
                      themselves. If you're taught you can’t do anything, you
                      won’t do anything. I was taught I could do everything.
                    </p>
                  </div> */}
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b ">
                    {/* <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button> */}
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-indigo active:bg-indigo700 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 opacity-25"></div>
          </>
        ) : null}
        {/* modal for transform end */}

        <div>
          <div>
            <button className="ml-10 text-lg font-bold text-black">A</button>
          </div>
        </div>
        <div>
          <button className="ml-10 text-lg font-bold text-black">B</button>
        </div>
        <div>
          <button className="ml-10 text-lg italic font-bold text-black">
            I
          </button>
        </div>
        <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
        <div className="ml-6">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H22M1 9H11.5M1 17H22"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
        <div className="ml-6 text-lg italic font-bold text-black">
          <button>Effects</button>
        </div>
        <div className="py-4 ml-6 border-r-2 border-bordercolor"></div>
        <div className="ml-6">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};
export default TextHeader;
