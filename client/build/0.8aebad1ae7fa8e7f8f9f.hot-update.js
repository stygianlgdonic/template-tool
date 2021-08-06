exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/ReceipentsLogo/ReceipentsLogo.tsx":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/LogoSelector/components/ReceipentsLogo/ReceipentsLogo.tsx ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Hussnian.usman300\\Documents\\GitHub\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\LogoSelector\\components\\ReceipentsLogo\\ReceipentsLogo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReceipentsLogo = () => {
  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [ShowToolTip, setShowToolTip] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openMergeDropdown,
    1: setopenMergeDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = e => {
    console.log({
      LOL: myRef.current.contains(e.target),
      ee: e.target
    });

    if (!myRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx("div", {
    className: "flex flex-col w-full h-full px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "text-xl font-bold mt-14 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Receipents logo")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "mt-4 text-sm text-gray95",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Add a dynamic logo to your personalized image")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "h-10 mt-4 bg-white border-dashed rounded-md border-bordercolor w-60",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "242",
    height: "38",
    viewBox: "0 0 242 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("g", {
    "clip-path": "url(#clip0)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M19 19C19 12.9249 23.9249 8 30 8C36.0751 8 41 12.9249 41 19C41 25.0751 36.0751 30 30 30C23.9249 30 19 25.0751 19 19Z",
    fill: "#C7D2FE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("path", {
    d: "M30 13V19M30 19V25M30 19H36M30 19L24 19",
    stroke: "white",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }))), __jsx("path", {
    d: "M58.9787 24L59.9134 21.3054H63.8906L64.8203 24H66.451L62.7869 13.8182H61.0121L57.348 24H58.9787ZM60.3608 20.0128L61.8622 15.6676H61.9418L63.4432 20.0128H60.3608ZM70.5376 24.1491C71.9297 24.1491 72.4766 23.299 72.745 22.8118H72.8693V24H74.321V13.8182H72.8345V17.6016H72.745C72.4766 17.1293 71.9695 16.2642 70.5476 16.2642C68.7031 16.2642 67.3459 17.7209 67.3459 20.1967C67.3459 22.6676 68.6832 24.1491 70.5376 24.1491ZM70.8658 22.8814C69.5384 22.8814 68.8473 21.7131 68.8473 20.1818C68.8473 18.6655 69.5234 17.527 70.8658 17.527C72.1634 17.527 72.8594 18.5859 72.8594 20.1818C72.8594 21.7876 72.1484 22.8814 70.8658 22.8814ZM79.3013 24.1491C80.6934 24.1491 81.2402 23.299 81.5087 22.8118H81.633V24H83.0847V13.8182H81.5982V17.6016H81.5087C81.2402 17.1293 80.7331 16.2642 79.3113 16.2642C77.4668 16.2642 76.1096 17.7209 76.1096 20.1967C76.1096 22.6676 77.4469 24.1491 79.3013 24.1491ZM79.6294 22.8814C78.302 22.8814 77.611 21.7131 77.611 20.1818C77.611 18.6655 78.2871 17.527 79.6294 17.527C80.927 17.527 81.623 18.5859 81.623 20.1818C81.623 21.7876 80.9121 22.8814 79.6294 22.8814ZM90.3979 13.8182H88.9114V24H90.3979V13.8182ZM95.6143 24.1541C97.767 24.1541 99.174 22.5781 99.174 20.2166C99.174 17.8402 97.767 16.2642 95.6143 16.2642C93.4616 16.2642 92.0547 17.8402 92.0547 20.2166C92.0547 22.5781 93.4616 24.1541 95.6143 24.1541ZM95.6193 22.9062C94.2124 22.9062 93.5561 21.6783 93.5561 20.2116C93.5561 18.75 94.2124 17.5071 95.6193 17.5071C97.0163 17.5071 97.6726 18.75 97.6726 20.2116C97.6726 21.6783 97.0163 22.9062 95.6193 22.9062ZM104.035 27.0227C105.979 27.0227 107.48 26.1328 107.48 24.169V16.3636H106.024V17.6016H105.914C105.651 17.1293 105.124 16.2642 103.702 16.2642C101.857 16.2642 100.5 17.7209 100.5 20.152C100.5 22.5881 101.887 23.8857 103.692 23.8857C105.094 23.8857 105.636 23.0952 105.904 22.608H105.999V24.1094C105.999 25.3075 105.178 25.8246 104.05 25.8246C102.812 25.8246 102.33 25.2031 102.066 24.7656L100.789 25.2926C101.191 26.2273 102.21 27.0227 104.035 27.0227ZM104.02 22.6527C102.693 22.6527 102.002 21.6335 102.002 20.1321C102.002 18.6655 102.678 17.527 104.02 17.527C105.318 17.527 106.014 18.5859 106.014 20.1321C106.014 21.7081 105.303 22.6527 104.02 22.6527ZM112.691 24.1541C114.843 24.1541 116.25 22.5781 116.25 20.2166C116.25 17.8402 114.843 16.2642 112.691 16.2642C110.538 16.2642 109.131 17.8402 109.131 20.2166C109.131 22.5781 110.538 24.1541 112.691 24.1541ZM112.695 22.9062C111.289 22.9062 110.632 21.6783 110.632 20.2116C110.632 18.75 111.289 17.5071 112.695 17.5071C114.093 17.5071 114.749 18.75 114.749 20.2116C114.749 21.6783 114.093 22.9062 112.695 22.9062ZM124.831 24.1541C126.984 24.1541 128.391 22.5781 128.391 20.2166C128.391 17.8402 126.984 16.2642 124.831 16.2642C122.678 16.2642 121.271 17.8402 121.271 20.2166C121.271 22.5781 122.678 24.1541 124.831 24.1541ZM124.836 22.9062C123.429 22.9062 122.773 21.6783 122.773 20.2116C122.773 18.75 123.429 17.5071 124.836 17.5071C126.233 17.5071 126.889 18.75 126.889 20.2116C126.889 21.6783 126.233 22.9062 124.836 22.9062ZM131.537 19.4659C131.537 18.2479 132.282 17.5518 133.316 17.5518C134.326 17.5518 134.937 18.2131 134.937 19.3217V24H136.424V19.1428C136.424 17.2536 135.385 16.2642 133.824 16.2642C132.675 16.2642 131.924 16.7962 131.571 17.6065H131.477V16.3636H130.05V24H131.537V19.4659ZM143.778 13.8182H142.242V24H143.778V13.8182ZM145.896 24H147.382V19.2919C147.382 18.2628 148.103 17.5469 148.948 17.5469C149.774 17.5469 150.345 18.0938 150.345 18.924V24H151.827V19.1328C151.827 18.2131 152.389 17.5469 153.358 17.5469C154.144 17.5469 154.79 17.9844 154.79 19.0185V24H156.276V18.8793C156.276 17.1342 155.302 16.2642 153.92 16.2642C152.821 16.2642 151.996 16.7912 151.628 17.6065H151.548C151.215 16.7713 150.514 16.2642 149.495 16.2642C148.486 16.2642 147.735 16.7663 147.417 17.6065H147.323V16.3636H145.896V24ZM160.491 24.169C161.754 24.169 162.465 23.5277 162.748 22.956H162.808V24H164.26V18.929C164.26 16.7067 162.51 16.2642 161.297 16.2642C159.914 16.2642 158.642 16.821 158.145 18.2131L159.542 18.5312C159.76 17.9893 160.317 17.4673 161.316 17.4673C162.276 17.4673 162.768 17.9695 162.768 18.8345V18.8693C162.768 19.4112 162.211 19.4013 160.839 19.5604C159.392 19.7294 157.911 20.1072 157.911 21.8423C157.911 23.3438 159.039 24.169 160.491 24.169ZM160.814 22.9759C159.974 22.9759 159.368 22.598 159.368 21.8622C159.368 21.0668 160.074 20.7834 160.934 20.669C161.416 20.6044 162.559 20.4751 162.773 20.2614V21.2457C162.773 22.1506 162.052 22.9759 160.814 22.9759ZM169.441 27.0227C171.385 27.0227 172.887 26.1328 172.887 24.169V16.3636H171.43V17.6016H171.32C171.057 17.1293 170.53 16.2642 169.108 16.2642C167.264 16.2642 165.906 17.7209 165.906 20.152C165.906 22.5881 167.294 23.8857 169.098 23.8857C170.5 23.8857 171.042 23.0952 171.311 22.608H171.405V24.1094C171.405 25.3075 170.585 25.8246 169.456 25.8246C168.218 25.8246 167.736 25.2031 167.472 24.7656L166.195 25.2926C166.597 26.2273 167.617 27.0227 169.441 27.0227ZM169.426 22.6527C168.099 22.6527 167.408 21.6335 167.408 20.1321C167.408 18.6655 168.084 17.527 169.426 17.527C170.724 17.527 171.42 18.5859 171.42 20.1321C171.42 21.7081 170.709 22.6527 169.426 22.6527ZM178.171 24.1541C179.837 24.1541 181.015 23.3338 181.353 22.0909L179.946 21.8374C179.678 22.5582 179.031 22.9261 178.186 22.9261C176.914 22.9261 176.058 22.1009 176.019 20.6293H181.448V20.1023C181.448 17.343 179.797 16.2642 178.067 16.2642C175.939 16.2642 174.537 17.8849 174.537 20.2315C174.537 22.603 175.919 24.1541 178.171 24.1541ZM176.024 19.5156C176.083 18.4318 176.869 17.4922 178.077 17.4922C179.23 17.4922 179.986 18.3473 179.991 19.5156H176.024Z",
    fill: "#111827",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx("rect", {
    x: "0.5",
    y: "0.5",
    width: "241",
    height: "37",
    rx: "5.5",
    stroke: "#D1D5DB",
    "stroke-dasharray": "5 5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "17",
    y: "7",
    width: "26",
    height: "26",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  })), __jsx("clipPath", {
    id: "clip0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M19 19C19 12.9249 23.9249 8 30 8C36.0751 8 41 12.9249 41 19C41 25.0751 36.0751 30 30 30C23.9249 30 19 25.0751 19 19Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }))))), showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed z-50 flex items-center justify-center m-auto overflow-x-hidden overflow-y-auto outline-none focus:outline-none",
    ref: myRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl mx-auto ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full border-2 rounded-lg shadow-lg bg-red border-bordercolor focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-4 rounded-t border-gray300",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "flex gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("div", {
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block ml-2 text-sm font-medium text-createEmail2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "Fallback"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-32 px-2 py-1 pl-5 pr-5 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, "Image.png"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 29
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 31
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 33
    }
  })))), __jsx("ul", {
    className: "absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 27
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 31
    }
  }, "image.png"))))), __jsx("div", {
    onClick: () => setopenMergeDropdown(!!openMergeDropdown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 23
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-createEmail2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, "MergeTag"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 25
    }
  }, __jsx("button", {
    type: "button",
    className: "relative px-2 py-1 pl-1 pr-8 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 w-36 h-7 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "block text-center truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 29
    }
  }, "Logo_Recp"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-darkgray",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 31
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 33
    }
  })))), __jsx("ul", {
    className: "absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-red max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openMergeDropdown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 27
    }
  }, __jsx("li", {
    className: "relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "block font-normal truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 31
    }
  }, "Logo.png"))))), __jsx("div", {
    className: "mt-2 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "relative flex items-center justify-end w-full mx-auto mt-6 mb-1 ",
    onClick: () => setShowToolTip(!ShowToolTip),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 25
    }
  }, __jsx("button", {
    onClick: () => setShowToolTip(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 27
    }
  }, __jsx("svg", {
    className: "mr-8",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z",
    fill: "#4338CA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 31
    }
  }))), ShowToolTip ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute bottom-0 flex flex-col mb-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "relative z-auto p-3 text-xs leading-none text-white whitespace-no-wrap rounded-md shadow-lg ml-60 w-52 bg-indigo500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 33
    }
  }, "Cardclan will fetch logo of your receipent from his ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 44
    }
  }, "website URL"), __jsx("div", {
    className: "mt-5 mb-2 text-sm font-inter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 35
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 37
    }
  }, "Got it"))), __jsx("div", {
    className: "z-50 flex justify-end w-3 h-3 -mt-2 transform rotate-45 bg-indigo500",
    style: {
      marginLeft: "410px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 33
    }
  }))) : null))))))), __jsx("div", {
    className: "fixed inset-0 z-40 bg-transparent opacity-25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (ReceipentsLogo);

/***/ })

};
//# sourceMappingURL=0.8aebad1ae7fa8e7f8f9f.hot-update.js.map