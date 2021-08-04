import React from "react";
interface Prop {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const BackgroundColorModal: React.FC<Prop> = ({ closeModal }): JSX.Element => {
  //   const [showModal, setShowModal] = React.useState(false);
  //   const [backgroundmodal, setBackgroundModal] = React.useState(false);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg border-bordercolor focus:outline-none">
            {/*header*/}
            <label className="mt-4 ml-6 text-left">Fill type</label>
            <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200">
              <div className="flex gap-2">
                <div>
                  <button
                    type="button"
                    className="w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-SolidColor hover:bg-SolidColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-SolidColor"
                  >
                    Solid
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="w-24 font-inter h-9 inline-flex items-center px-3 py-1.5 border-1 border-bordercolor text-xs font-medium rounded-md shadow-sm text-gradientColor bg-jacksonsGray hover:bg-jacksonsGray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jacksonsGray"
                  >
                    Fill Gradient
                  </button>
                </div>
                <div className="mt-2 ml-2"></div>
              </div>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                onClick={() => closeModal(false)}
              >
                <span className="block w-6 h-6 text-2xl text-black outline-none bg-red focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="flex ml-1 text-left justify-evenly">
              {/* round checkbox */}
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="w-4 h-4 text-left text-indigo600 border-gray300 focus:ring-indigo500"
              />
              <p>Linear</p>
              {/* round cehckbox end */}

              {/* round checkbox 2 */}
              <input
                id="push-everything"
                name="push-notifications"
                type="radio"
                className="w-4 h-4 text-left text-indigo600 border-gray300 focus:ring-indigo500"
              />
              <p>Radial</p>
              {/* round cehckbox 2 end */}
            </div>
            <div className="p-8">
              <svg
                width="176"
                height="131"
                viewBox="0 0 176 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="176" height="131" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="88"
                    y1="0"
                    x2="88"
                    y2="131"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0683688" stop-color="#6366F1" />
                    <stop offset="1" stop-color="#2A2DB5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-transparent opacity-25"></div>
    </>
  );
};
export default BackgroundColorModal;
