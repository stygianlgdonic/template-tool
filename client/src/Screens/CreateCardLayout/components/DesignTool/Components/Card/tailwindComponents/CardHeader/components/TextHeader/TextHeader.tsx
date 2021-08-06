import React, { useContext, useState } from "react";
import { DesignToolContext } from "../../../../../../../../../../contexts/DesignToolContext";
import TransformModal from "../TransformModal/TransformModal";
const image = require("./../../../../../../../../../../assets/images/opacity.png");
const TextHeader: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);
  const [openstyle, setOpenstyle] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDropDown, setopenDropDown] = useState(false);
  const [mergeDropDown, setmergeDropDown] = useState(false);
  //   const [showTransformModal, setShowTransformModal] = React.useState(false);
  const [designToolnavigator, setDesignToolnavigator] =
    useContext(DesignToolContext);
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
              onClick={() => setDesignToolnavigator("texttool")}
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
            // onClick={() => setOpen(!open)}
          >
            <button
              onClick={() => {
                setShowModal(true);
              }}
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
        <div style={{ display: showModal ? "" : "none" }}>
          <TransformModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        </div>

        <div>
          <div>
            <button
              className="ml-10 text-lg font-bold text-black"
              onClick={() => setDesignToolnavigator("fonttool")}
            >
              <svg
                className="mt-2"
                width="30"
                height="30"
                viewBox="0 0 36 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z"
                  fill="black"
                />
                <g filter="url(#filter0_dd)">
                  <rect
                    x="3"
                    y="30"
                    width="30"
                    height="4"
                    rx="2"
                    fill="#F9FAFB"
                  />
                </g>
                <rect
                  x="3"
                  y="30"
                  width="17"
                  height="4"
                  rx="2"
                  fill="#6366F1"
                />
                <defs>
                  <filter
                    id="filter0_dd"
                    x="0"
                    y="28"
                    width="36"
                    height="10"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
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
          <button onClick={() => setDesignToolnavigator("effecttool")}>
            Effects
          </button>
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
