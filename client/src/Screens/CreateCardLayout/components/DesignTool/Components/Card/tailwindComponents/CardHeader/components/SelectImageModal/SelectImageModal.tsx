import React, { useEffect, useRef, useState } from "react";
import "../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css";
import SearchBar from "../../../../../SubNavBar/components/ElementSelector/components/SearchBar/SearchBar";
const svg1 = require("./../../../../../../../../../../assets/images/svg.png");
const image2 = require("./../../../../../../../../../../assets/images/image1.png");
const image3 = require("./../../../../../../../../../../assets/images/image3.png");
const image4 = require("./../../../../../../../../../../assets/images/image4.png");
const image5 = require("./../../../../../../../../../../assets/images/image5.png");
const plusimage = require("../../../../../../../../../../assets/images/plus.png");
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
        {" "}
        <div className="fixed inset-0 z-50 flex items-center justify-center h-full overflow-x-hidden overflow-y-scroll outline-none focus:outline-none">
          <div
            className="relative z-50 max-w-4xl mx-auto my-6 bg-white rounded-md"
            style={{ height: "90vh" }}
          >
            {" "}
            {/*content*/}
            <div className="relative flex flex-col w-full h-full border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="">
                <div className="top-0 ">
                  <button
                    className="flex items-center ml-auto mr-2 text-sm font-semibold leading-none text-black rounded-full outline-none opacity-30 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="top-0 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex items-start justify-between w-full px-5 pb-5 border-b border-solid rounded-t border-bordercolor">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray94">
                      Select Template
                    </h3>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row h-8 px-2 border-2 rounded-md text-gray900 w-36 border-bordercolor">
                      <button className="pr-2 text-sm font-medium leading-5 font-inter ">
                        Most Popular
                      </button>
                      <div className="mt-2">
                        <svg
                          width="8 "
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 0C4.26522 5.96046e-08 4.51957 0.105357 4.70711 0.292893L7.70711 3.29289C8.09763 3.68342 8.09763 4.31658 7.70711 4.70711C7.31658 5.09763 6.68342 5.09763 6.29289 4.70711L4 2.41421L1.70711 4.70711C1.31658 5.09763 0.683417 5.09763 0.292893 4.70711C-0.0976311 4.31658 -0.097631 3.68342 0.292893 3.29289L3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0ZM0.292893 9.29289C0.683417 8.90237 1.31658 8.90237 1.70711 9.29289L4 11.5858L6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289C8.09763 9.68342 8.09763 10.3166 7.70711 10.7071L4.70711 13.7071C4.31658 14.0976 3.68342 14.0976 3.29289 13.7071L0.292893 10.7071C-0.0976311 10.3166 -0.0976311 9.68342 0.292893 9.29289Z"
                            fill="#9CA3AF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="w-3/6 mt-3 ">
                  <SearchBar />
                </div>
              </div>
              <div className="flex gap-4 px-6 mt-3 ">
                <button className="h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700">
                  Pexels
                </button>
                <button className="h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700">
                  Unsplash
                </button>
                <button className="h-10 px-4 py-1 rounded-md bg-lightindigo text-indigo700">
                  Pixabay
                </button>
                <button className="h-10 px-3 py-1 rounded-md bg-lightindigo text-indigo700">
                  Property
                </button>
              </div>
              <div>
                <h1 className="px-6 mt-6 text-xl font-bold text-gray94">
                  Your Uploads
                </h1>
              </div>
              {/* first row */}
              <div className="relative flex-auto p-6">
                <div className="flex flex-row gap-4 ">
                  <div className=" h-28">
                    <button className="flex flex-col items-center justify-center py-6 border-2 border-dashed rounded-md w-52 border-bordercolor">
                      <img className="w-10 h-10" src={plusimage} alt="" />
                      <p className="mt-1 text-sm text-lightGray">
                        Upload new image
                      </p>
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image3}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image4}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image3}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* first row end */}

              <div>
                <h1 className="px-6 mt-2 text-xl font-bold text-gray94">
                  Pexels
                </h1>
              </div>
              <div className="relative flex-auto p-6">
                <div className="flex flex-row gap-4 ">
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image2}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image3}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image4}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                  <div>
                    <button className="flex flex-col items-center justify-center rounded-md border-bordercolor">
                      <img
                        src={image3}
                        className="rounded-md"
                        width="200"
                        height="110"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    );
  }
);
export default TransformModal;
