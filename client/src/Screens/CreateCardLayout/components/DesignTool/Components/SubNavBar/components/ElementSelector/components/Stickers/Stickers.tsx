import React from "react";
import CardElementsFunctions from "../../../../../../../../../../Hooks/CardElementsFunctions";
import {
  defaultSvg,
  ORIGINAL_SVG_mailicon,
} from "../../../../../../../../../../utils/defaults";
import generatesvgUrl from "../../../../../../../../../../utils/generatesvgUrl";
import "./styles.css";

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};
const Stickers: React.FC = (): JSX.Element => {
  const { handleAddSvg } = CardElementsFunctions();
  const svg = generatesvgUrl(ORIGINAL_SVG_mailicon);

  const contentWrapper = React.useRef(null);
  return (
    <div className="flex flex-col h-full ">
      <div className="flex flex-row items-center justify-between w-full px-4">
        <h1 className="text-lg font-bold text-gray94">Stickers</h1>

        <button className="font-medium text-md text-gray95">See all</button>
      </div>

      <div className="z-0 flex flex-row items-center mt-4 overflow-hidden overflow-x-scroll  no-scrollbar">
        <div>
          <button
            className="pl-2 mt-3 "
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, -10);
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 20 20"
              fill="#D1D5DB"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 13L6 10M6 10L9 7M6 10L14 10M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="z-20 w-8 -mr-8 h-28 bg-gradient-to-r from-white bg-opacity-80 to-transparent"></div>
        <div
          className="relative z-10 flex flex-row flex-grow flex-shrink-0 w-56 gap-4 overflow-x-scroll h-28 no-scrollbar"
          ref={contentWrapper}
        >
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-grow flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
          <button
            className="flex-shrink-0"
            onClick={() => handleAddSvg(ORIGINAL_SVG_mailicon)}
          >
            {" "}
            <img src={svg} className="flex-shrink-0 w-12" />
          </button>
        </div>
        <div className="z-20 w-8 -ml-8 bg-opacity-50 h-28 bg-gradient-to-l from-white to-transparent"></div>
        <div className="">
          <button
            className="pr-2 mt-3"
            onClick={() => {
              sideScroll(contentWrapper.current, 25, 100, 10);
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 20 20"
              fill="#D1D5DB"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7L14 10M14 10L11 13M14 10L6 10M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Stickers;
