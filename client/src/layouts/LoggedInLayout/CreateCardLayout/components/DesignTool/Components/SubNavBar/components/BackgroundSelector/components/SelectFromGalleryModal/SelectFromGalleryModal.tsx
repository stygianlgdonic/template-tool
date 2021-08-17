import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
const image1 = require("./../../../../../../../../../../assets/images/image.png");
const image2 = require("./../../../../../../../../../../assets/images/image1.png");
const image3 = require("./../../../../../../../../../../assets/images/image3.png");
const image4 = require("./../../../../../../../../../../assets/images/image4.png");
const image5 = require("./../../../../../../../../../../assets/images/image5.png");
const plusimage = require("../../../../../../../../../../assets/images/plus.png");

interface Prop {
  closeModal: () => void;
}
const SelectFromGallleryModal: React.FC<Prop> = React.forwardRef(
  ({ closeModal }): JSX.Element => {
    const [showModal, setShowModal] = React.useState(false);
    const [ShowToolTip, setShowToolTip] = React.useState(false);
    const [openDropDown, setopenDropDown] = useState(false);
    const [openMergeDropdown, setopenMergeDropdown] = useState(false);
    const myRef = useRef(null);

    const handleClickOutside = (e) => {
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
        <div className="fixed z-50 top-14 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div ref={myRef} className="relative w-auto max-w-3xl mx-auto my-6">
            {/*content*/}
            <div className="relative flex flex-col w-full pt-2 pb-2 pl-2 pr-2 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between mt-1 ml-6 rounded-t border-blueGray-200 ">
                <div className="z-50 flex items-center justify-center w-11/12 border rounded-md h-14 border-bordercolor">
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z"
                          fill="#9CA3AF"
                        />
                      </svg>
                    </span>
                  </button>
                  <input
                    className="z-0 w-full h-12 text-sm rounded outline-none text-gray95"
                    type="text"
                    placeholder="Search anything from elements"
                  />
                </div>
              </div>
              {/*body*/}
              <div className="flex p-2">
                <div className="flex flex-col w-full ">
                  <div className="flex flex-col w-full">
                    <button>
                      <h1 className="flex justify-end mt-4 text-xs text-sm not-italic font-medium leading-5 font-inter text-gray95 ">
                        See all
                      </h1>
                    </button>
                    <div className="grid w-full grid-cols-2 gap-4 mt-6 ">
                      <div>
                        <button>
                          <div className="h-20 border-2 border-dashed rounded-md w-36 border-bordercolor">
                            <img
                              className="w-6 h-6 mt-4 ml-14"
                              src={plusimage}
                              alt=""
                            />
                            <p className="text-xs not-italic font-medium leading-6 text-center text-gradientColor font-inter">
                              Upload new image
                            </p>
                          </div>
                        </button>
                      </div>
                      <div>
                        <button>
                          <img src={image3} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                      <div>
                        <button>
                          <img src={image1} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                      <div>
                        <button>
                          <img src={image4} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                      <div>
                        <button>
                          <img src={image2} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                      <div>
                        <button>
                          <img src={image3} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex p-2 mb-3">
                <div className="flex flex-col w-full ">
                  <div className="flex flex-col w-full">
                    <button>
                      <h1 className="flex justify-end mt-4 text-xs text-sm not-italic font-medium leading-5 font-inter text-gray95 ">
                        See all
                      </h1>
                    </button>
                    <div className="grid w-full grid-cols-2 gap-4 mt-10 ">
                      <div>
                        <button>
                          <img src={image3} className="h-20 rounded-md w-34" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed  inset-0 z-40 bg-black opacity-25"></div>
      </>
    );
  }
);
export default SelectFromGallleryModal;
