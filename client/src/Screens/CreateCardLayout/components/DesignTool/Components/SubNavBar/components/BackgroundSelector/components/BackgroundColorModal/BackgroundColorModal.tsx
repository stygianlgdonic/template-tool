import React, { useEffect, useRef, useState } from "react";
interface Prop {
  closeModal: () => void;
}
const BackgroundColorModal: React.FC<Prop> = ({ closeModal }): JSX.Element => {
  const [fillType, setfillType] = useState(false);
  const [openModal, setopenModal] = useState();
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <div
        ref={myRef}
        className="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg border-bordercolor focus:outline-none">
            <label className="mt-4 ml-6 text-base font-medium leading-5 text-left text-black font-inter">
              Fill type
            </label>

            <div className="flex items-start justify-between p-5 rounded-t border-blueGray-200 ">
              <div className="flex gap-2">
                <div>
                  <button
                    onClick={() => setfillType(false)}
                    type="button"
                    className={
                      " w-14 font-inter h-10 inline-flex items-center px-3 py-1.5 border-2 border-gray300 text-xs font-medium rounded-md shadow-sm   " +
                      (fillType === false
                        ? "bg-SolidColor text-white"
                        : "text-gradientColor bg-jacksonsGray")
                    }
                  >
                    Solid
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setfillType(true)}
                    type="button"
                    className="w-28 font-inter h-10 inline-flex text-center items-center px-5 py-1.5 border-2 border-gray300 text-xs font-medium  rounded-md shadow-sm text-gradientColor bg-jacksonsGray  focus:bg-SolidColor focus:text-white"
                  >
                    Fill gradient
                  </button>
                </div>
                <div className="mt-2 ml-2"></div>
              </div>
            </div>
            <div className={fillType === false ? "hidden" : ""}>
              <div className="flex ml-1 text-left justify-evenly ">
                <div className="flex">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="w-4 h-4 mt-1 text-indigo600 border-gray300 focus:ring-indigo500"
                  />
                  <p className="ml-1 text-base font-medium leading-5 text-lightGray font-inter">
                    Linear
                  </p>
                </div>
                <div className="flex">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="w-4 h-4 mt-1 text-left text-indigo600 border-gray300 focus:ring-indigo500"
                  />
                  <p className="ml-1 text-base font-medium leading-5 text-lightGray font-inter">
                    Radial
                  </p>
                </div>
              </div>
              <div className="h-32 mt-3 mb-5 ml-7 w-44 bg-gradient-to-r from-yellow via-red to-indigo700 left-5 top-32 p-7"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-transparent opacity-25"></div>
    </>
  );
};
export default BackgroundColorModal;
