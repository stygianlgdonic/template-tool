import React from "react";
const image1 = require("./../../../../../../../../../../assets/images/image.png");
const image2 = require("./../../../../../../../../../../assets/images/image1.png");
const image3 = require("./../../../../../../../../../../assets/images/image3.png");
const image4 = require("./../../../../../../../../../../assets/images/image4.png");
const image5 = require("./../../../../../../../../../../assets/images/image5.png");
const AddBackgroundImage: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="relative flex flex-col justify-center w-full p-6 ">
      <div className="w-full mt-2">
        <h1 className="text-xl font-bold text-gray95">Add background image</h1>
      </div>
      <button onClick={() => setShowModal(true)}>
        <div className="flex flex-row items-center justify-center w-full h-12 mt-4 rounded-md bg-bluish">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00300002 1.884L8 5.882L15.997 1.884C15.9674 1.37444 15.7441 0.895488 15.3728 0.545227C15.0016 0.194965 14.5104 -9.35847e-05 14 3.36834e-08H2C1.48958 -9.35847e-05 0.998447 0.194965 0.627178 0.545227C0.255908 0.895488 0.0326041 1.37444 0.00300002 1.884Z"
              fill="white"
            />
            <path
              d="M16 4.118L8 8.118L0 4.118V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V4.118Z"
              fill="white"
            />
          </svg>

          <p className="ml-2 text-white ">Select from gallery</p>
        </div>
      </button>
      <button>
        <div className="flex flex-row items-center justify-center w-full h-12 mt-4 border-2 rounded-md bg-jacksonsGray border-lightGray">
          <svg
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.503 1.884L8.5 5.882L16.497 1.884C16.4674 1.37444 16.2441 0.895488 15.8728 0.545227C15.5016 0.194965 15.0104 -9.35847e-05 14.5 3.36834e-08H2.5C1.98958 -9.35847e-05 1.49845 0.194965 1.12718 0.545227C0.755908 0.895488 0.532604 1.37444 0.503 1.884Z"
              fill="#4B5563"
            />
            <path
              d="M16.5 4.118L8.5 8.118L0.5 4.118V10C0.5 10.5304 0.710714 11.0391 1.08579 11.4142C1.46086 11.7893 1.96957 12 2.5 12H14.5C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 10V4.118Z"
              fill="#4B5563"
            />
          </svg>

          <p className="ml-2 text-lightGray">Design on Canva</p>
        </div>
      </button>
      {/* // modal start */}
      {showModal ? (
        <>
          <div className="absolute z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none top-1 focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
                  {/* <h3 className="text-3xl font-semibold">Modal Title</h3> */}
                  {/* adding search bar */}

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
                      placeholder="Search from element"
                    />
                  </div>
                  {/* search bar end */}

                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <div className="text-right">
                    <button>See All</button>
                  </div>
                  {/* grid start */}
                  <div className="grid w-full grid-cols-2 gap-2 mt-6">
                    <div>
                      <button>
                        <img src={image1} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src={image2} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src={image3} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src={image4} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src={image5} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                    <div>
                      <button>
                        <img src={image4} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                  </div>

                  {/* grid end */}
                  <div className="mt-2 text-right">
                    <button>See All</button>
                  </div>
                  <div className="p-10">
                    <div>
                      <button>
                        <img src={image1} className="rounded-lg w-18 h-18" />
                      </button>
                    </div>
                  </div>
                </div>

                {/*footer*/}
                {/* <div className="p-10">
                  <div>
                    <button>
                      <img src={image1} className="rounded-lg w-18 h-18" />
                    </button>
                  </div>
                </div> */}
                {/* <div className="flex items-center justify-end p-6 rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-black uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      {/* // modal end */}
    </div>
  );
};
export default AddBackgroundImage;
