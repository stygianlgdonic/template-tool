exports.ids = [3];
exports.modules = {

/***/ "./src/ErrorFallacks/EditingToolsFallback.tsx":
/*!****************************************************!*\
  !*** ./src/ErrorFallacks/EditingToolsFallback.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\EditingToolsFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const EditingToolsFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with editing tools, try reloading the page.", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (EditingToolsFallback);

/***/ }),

/***/ "./src/ErrorFallacks/MainStageFallBack.tsx":
/*!*************************************************!*\
  !*** ./src/ErrorFallacks/MainStageFallBack.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\MainStageFallBack.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MainStageFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "The template you selected might be corrupted", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    style: {
      width: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].width,
      height: _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["stageDimensions"].height
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (MainStageFallback);

/***/ }),

/***/ "./src/ErrorFallacks/SaveTemplateFallback.tsx":
/*!****************************************************!*\
  !*** ./src/ErrorFallacks/SaveTemplateFallback.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SaveTemplateFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SaveTemplateFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with save template modal, try refreshing the page.", "error");
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplateFallback);

/***/ }),

/***/ "./src/ErrorFallacks/SaveVariationFallback.tsx":
/*!*****************************************************!*\
  !*** ./src/ErrorFallacks/SaveVariationFallback.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SaveVariationFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SaveVariationFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with sidebar, try reloading the page.", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SaveVariationFallback);

/***/ }),

/***/ "./src/ErrorFallacks/SelectVariationFallback.tsx":
/*!*******************************************************!*\
  !*** ./src/ErrorFallacks/SelectVariationFallback.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SelectVariationFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SelectVariationFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong, try reloading the page.", "error").then(resetErrorBoundary);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SelectVariationFallback);

/***/ }),

/***/ "./src/ErrorFallacks/SideBarFallback.tsx":
/*!***********************************************!*\
  !*** ./src/ErrorFallacks/SideBarFallback.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\SideBarFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SideBarFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with sidebar, try reloading the page.", "error");
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (SideBarFallback);

/***/ }),

/***/ "./src/ErrorFallacks/TopToolBarFallback.tsx":
/*!**************************************************!*\
  !*** ./src/ErrorFallacks/TopToolBarFallback.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\ErrorFallacks\\TopToolBarFallback.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TopToolBarFallback = ({
  error,
  resetErrorBoundary
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sweetalert__WEBPACK_IMPORTED_MODULE_1___default()("Oops!", "Something is wrong with toolbar, try reloading the page.", "error");
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, error.message);
};

/* harmony default export */ __webpack_exports__["default"] = (TopToolBarFallback);

/***/ }),

/***/ "./src/assets/svgs/chevron-down.svg":
/*!******************************************!*\
  !*** ./src/assets/svgs/chevron-down.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chevron-down.c16040f3.svg";

/***/ }),

/***/ "./src/components/DesignTool/EditingTools/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/DesignTool/EditingTools/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tailwindComponents_EditTextBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tailwindComponents/EditTextBox */ "./src/components/tailwindComponents/EditTextBox.tsx");
/* harmony import */ var _tailwindComponents_ShapeColorSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tailwindComponents/ShapeColorSelector */ "./src/components/tailwindComponents/ShapeColorSelector.tsx");
/* harmony import */ var _tailwindComponents_SvgColorSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tailwindComponents/SvgColorSelector */ "./src/components/tailwindComponents/SvgColorSelector.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\EditingTools\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const EditingTools = ({
  selectedId,
  unSelectAll,
  isOpenColorPicker,
  isEditTextBox,
  templateData,
  setTemplateData,
  variationIndex,
  handleEditSelectedItem,
  handleDeleteSelectedItem,
  handleCloseEditTextModal
}) => {
  return __jsx("div", {
    className: "h-screen overflow-y-scroll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleEditSelectedItem,
    className: (selectedId === null || selectedId === void 0 ? void 0 : selectedId.split("_")[0]) === "images" ? "hidden" : "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Edit")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleDeleteSelectedItem,
    className: selectedId === "shapes_background" ? "hidden" : "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Delete")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: unSelectAll,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Close")), isOpenColorPicker && (selectedId === null || selectedId === void 0 ? void 0 : selectedId.split('_')[0]) === "shapes" && __jsx(_tailwindComponents_ShapeColorSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedId: selectedId,
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    currentPalette: templateData.palette,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), isOpenColorPicker && (selectedId === null || selectedId === void 0 ? void 0 : selectedId.split('_')[0]) === "svgs" && __jsx(_tailwindComponents_SvgColorSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedId: selectedId,
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), isEditTextBox && __jsx(_tailwindComponents_EditTextBox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedId: selectedId,
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    handleCloseEditTextModal: handleCloseEditTextModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 31
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditingTools);

/***/ }),

/***/ "./src/components/DesignTool/MainStage/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/DesignTool/MainStage/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Rectangle */ "./src/components/DesignTool/Rectangle.tsx");
/* harmony import */ var _UCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UCircle */ "./src/components/DesignTool/UCircle.tsx");
/* harmony import */ var _UPolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UPolygon */ "./src/components/DesignTool/UPolygon.tsx");
/* harmony import */ var _ULine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ULine */ "./src/components/DesignTool/ULine.tsx");
/* harmony import */ var _USvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../USvg */ "./src/components/DesignTool/USvg.tsx");
/* harmony import */ var _UText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UText */ "./src/components/DesignTool/UText.tsx");
/* harmony import */ var _UTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UTransformer */ "./src/components/DesignTool/UTransformer.tsx");
/* harmony import */ var _UImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../UImage */ "./src/components/DesignTool/UImage.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\MainStage\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const MainStage = ({
  templateData,
  setTemplateData,
  variationIndex,
  selectedId,
  setSelectedId,
  unSelectAll,
  handleEditSelectedItem
}) => {
  var _templateData$variati;

  const $stage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $layer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $tr = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // snapping distance

  const GUIDELINE_OFFSET = 10;
  const selectionRectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const selection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  });
  const {
    0: nodesArray,
    1: setNodes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const Konva = window.Konva;

  const getLineGuideStops = skipShape => {
    // guidelines for stage center and edges
    const vertical = [0, templateData.dimensions.width / 2, templateData.dimensions.width];
    const horizontal = [0, templateData.dimensions.height / 2, templateData.dimensions.height]; // we snap over edges and center of each object on the canvas

    $stage.current.find(".object").forEach(guideItem => {
      if (guideItem === skipShape) {
        return;
      } // const isWrapped = $tr.current?.nodes()?.some(node => node.attrs.id === guideItem.attrs.id)
      // if (isWrapped) return
      // console.log({ skipShape, guideItem, isWrapped })


      const box = guideItem.getClientRect(); // we can snap to all edges of shapes

      vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
      horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
    });
    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat()
    };
  }; // getting snapping edges for elements on the Stage


  const getObjectSnappingEdges = node => {
    const box = node.getClientRect();
    return {
      vertical: [{
        guide: Math.round(box.x),
        offset: Math.round(node.x() - box.x),
        snap: "start"
      }, {
        guide: Math.round(box.x + box.width / 2),
        offset: Math.round(node.x() - box.x - box.width / 2),
        snap: "center"
      }, {
        guide: Math.round(box.x + box.width),
        offset: Math.round(node.x() - box.x - box.width),
        snap: "end"
      }],
      horizontal: [{
        guide: Math.round(box.y),
        offset: Math.round(node.y() - box.y),
        snap: "start"
      }, {
        guide: Math.round(box.y + box.height / 2),
        offset: Math.round(node.y() - box.y - box.height / 2),
        snap: "center"
      }, {
        guide: Math.round(box.y + box.height),
        offset: Math.round(node.y() - box.y - box.height),
        snap: "end"
      }]
    };
  }; // getting all guidelines for snapping by calculating if the item bounds are close to the guidlinestop


  const getGuides = (lineGuideStops, itemBounds) => {
    const resultV = [];
    const resultH = [];
    lineGuideStops.vertical.forEach(lineGuide => {
      itemBounds.vertical.forEach(itemBound => {
        const diff = Math.abs(lineGuide - itemBound.guide); // if the distance between guild line and object snap point is close we can consider this for snapping

        if (diff < GUIDELINE_OFFSET) {
          resultV.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });
    lineGuideStops.horizontal.forEach(lineGuide => {
      itemBounds.horizontal.forEach(itemBound => {
        const diff = Math.abs(lineGuide - itemBound.guide); // if the distance between guild line and object snap point is close we can consider this for snapping

        if (diff < GUIDELINE_OFFSET) {
          resultH.push({
            lineGuide: lineGuide,
            diff: diff,
            snap: itemBound.snap,
            offset: itemBound.offset
          });
        }
      });
    });
    const guides = []; // find closest snap

    const minV = resultV === null || resultV === void 0 ? void 0 : resultV.sort((a, b) => a.diff - b.diff)[0];
    const minH = resultH === null || resultH === void 0 ? void 0 : resultH.sort((a, b) => a.diff - b.diff)[0];

    if (minV) {
      guides.push({
        lineGuide: minV.lineGuide,
        offset: minV.offset,
        orientation: "V",
        snap: minV.snap
      });
    }

    if (minH) {
      guides.push({
        lineGuide: minH.lineGuide,
        offset: minH.offset,
        orientation: "H",
        snap: minH.snap
      });
    }

    return guides;
  }; // drawing guidelines on stage


  const drawGuides = guides => {
    guides.forEach(lg => {
      if (lg.orientation === "H") {
        const lines = new Konva.Line({
          points: [-6000, lg.lineGuide, 6000, lg.lineGuide],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        $layer.current.add(lines);
        $layer.current.batchDraw();
      } else if (lg.orientation === "V") {
        const lines = new Konva.Line({
          points: [lg.lineGuide, -6000, lg.lineGuide, 6000],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6]
        });
        $layer.current.add(lines);
        $layer.current.batchDraw();
      }
    });
  }; // when dragging any element snap element if its close to snap guideline


  const _onDragMove = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    const lineGuideStops = getLineGuideStops(e.target); // Need to snap transformer not shape

    const itemBounds = getObjectSnappingEdges(e.target);
    const guides = getGuides(lineGuideStops, itemBounds);

    if (!guides.length) {
      return;
    } // const isWrapped = $tr.current?.nodes()?.some(node => node.attrs.id === e.target.attrs.id)
    // if (isWrapped) return


    drawGuides(guides);
    guides.forEach(lg => {
      switch (lg.snap) {
        case "start":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        case "center":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        case "end":
          {
            switch (lg.orientation) {
              case "V":
                {
                  e.target.x(lg.lineGuide + lg.offset);
                  break;
                }

              case "H":
                {
                  e.target.y(lg.lineGuide + lg.offset);
                  break;
                }

              default:
                return;
            }

            break;
          }

        default:
          return;
      }
    });
  }; // on drag end remove all guidelines from the stage


  const _onDragEnd = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    $layer.current.batchDraw();
  }; // const checkDeselect = (e) => {
  //     // deselect when clicked on empty area
  //     const clickedOnEmpty = e.target === e.target.getStage();
  //     if (clickedOnEmpty) {
  //         setSelectedId(null);
  //         $tr.current.nodes([]);
  //         setNodes([]);
  //         // layerRef.current.remove(selectionRectangle);
  //     }
  // };


  const updateSelectionRect = () => {
    const node = selectionRectRef.current; // while mouseDrag update the selection rect accordingly 

    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2),
      fill: "rgba(0, 161, 255, 0.3)"
    });
    node.getLayer().batchDraw();
  };

  const oldPos = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const onMouseDown = e => {
    const isElement = e.target.attrs.id !== "shapes_background";
    const isTransformer = e.target.findAncestor("Transformer"); // If clicked thing is Element or Transformer then don't detach the transformer from the element(s)

    if (isElement || isTransformer) {
      return;
    } // Draw selection box


    const pos = e.target.getStage().getPointerPosition();
    selection.current.visible = true;
    selection.current.x1 = pos.x;
    selection.current.y1 = pos.y;
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseMove = e => {
    if (!selection.current.visible) {
      return;
    }

    const pos = e.target.getStage().getPointerPosition();
    selection.current.x2 = pos.x;
    selection.current.y2 = pos.y;
    updateSelectionRect();
  };

  const onMouseUp = () => {
    oldPos.current = null;

    if (!selection.current.visible) {
      return;
    }

    const selBox = selectionRectRef.current.getClientRect(); // selecting all elements which have intersection with the selection box

    const elements = [];
    $layer.current.find(".object").forEach(elementNode => {
      const elBox = elementNode.getClientRect();

      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    }); // passing all selected elements to transformer

    $tr.current.nodes(elements);
    setNodes(elements); // NOTE - if only one node is within group setSelectedId for that element

    if ((elements === null || elements === void 0 ? void 0 : elements.length) === 1) {
      setSelectedId(elements[0].attrs.id);
    } else {
      setSelectedId(null);
    }

    selection.current.visible = false; // disable click event

    Konva.listenClickTap = false;
    updateSelectionRect();
  }; // 
  // const onClickTap = (e) => {
  //     // if we are selecting with rect, do nothing
  //     if (selectionRectRef.current.visible()) {
  //         return;
  //     }
  //     let stage = e.target.getStage();
  //     let layer = $layer.current;
  //     let tr = $tr.current;
  //     // if click on empty area - remove all selections
  //     if (e.target.attrs.id === stage) {
  //         setSelectedId(null);
  //         setNodes([]);
  //         tr.nodes([]);
  //         layer.draw();
  //         return;
  //     }
  //     // do nothing if clicked NOT on our rectangles
  //     if (!e.target.hasName(".object")) {
  //         return;
  //     }
  //     // do we pressed shift or ctrl?
  //     const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
  //     const isSelected = tr.nodes().indexOf(e.target) >= 0;
  //     if (!metaPressed && !isSelected) {
  //         // if no key pressed and the node is not selected
  //         // select just one
  //         tr.nodes([e.target]);
  //     } else if (metaPressed && isSelected) {
  //         // if we pressed keys and node was selected
  //         // we need to remove it from selection:
  //         const nodes = tr.nodes().slice(); // use slice to have new copy of array
  //         // remove node from array
  //         nodes.splice(nodes.indexOf(e.target), 1);
  //         tr.nodes(nodes);
  //     } else if (metaPressed && !isSelected) {
  //         // add the node into selection
  //         const nodes = tr.nodes().concat([e.target]);
  //         tr.nodes(nodes);
  //     }
  //     layer.draw();
  // };


  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    ref: $stage,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove // onTouchStart={checkDeselect}
    // onClick={onClickTap}
    ,
    width: templateData.dimensions.width,
    height: templateData.dimensions.height,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    ref: $layer,
    onDragMove: _onDragMove,
    onDragEnd: _onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, (_templateData$variati = templateData.variations[variationIndex].elements) === null || _templateData$variati === void 0 ? void 0 : _templateData$variati.map((elem, i) => {
    if (elem.type === "rectangle") return __jsx(_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: e => {
        if (e.current !== undefined) {
          let temp = nodesArray;
          if (!nodesArray.includes(e.current)) temp.push(e.current);
          setNodes(temp);
          $tr.current.nodes(nodesArray);
          $tr.current.nodes(nodesArray);
          $tr.current.getLayer().batchDraw();
        }

        if (elem.id !== "shapes_background") setSelectedId(elem.id);
      } // onSelect={() => {
      //     setSelectedId(rect.id)
      // }}
      ,
      onEditClick: handleEditSelectedItem,
      onChange: newAttrs => {
        setTemplateData(prev => {
          const index = prev.variations[variationIndex].elements.findIndex(item => item.id === elem.id);
          prev.variations[variationIndex].elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 25
      }
    });
    if (elem.type === "circle") return __jsx(_UCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onEditClick: handleEditSelectedItem,
      onChange: newAttrs => {
        setTemplateData(prev => {
          const index = prev.variations[variationIndex].elements.findIndex(item => item.id === elem.id);
          prev.variations[variationIndex].elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 25
      }
    });
    if (elem.type === "line") return __jsx(_ULine__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onEditClick: handleEditSelectedItem,
      onChange: newAttrs => {
        setTemplateData(prev => {
          const index = prev.variations[variationIndex].elements.findIndex(item => item.id === elem.id);
          prev.variations[variationIndex].elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 25
      }
    });
    if (elem.type === "polygon") return __jsx(_UPolygon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onEditClick: handleEditSelectedItem,
      onChange: newAttrs => {
        setTemplateData(prev => {
          const index = prev.variations[variationIndex].elements.findIndex(item => item.id === elem.id);
          prev.variations[variationIndex].elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 25
      }
    });
    if (elem.type === "svg") return __jsx(_USvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      svgProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onEditClick: handleEditSelectedItem,
      onChange: event => setTemplateData(prev => {
        const svgIndex = prev.variations[variationIndex].elements.findIndex(svgItem => svgItem.id === elem.id);
        prev.variations[variationIndex].elements[svgIndex] = _objectSpread(_objectSpread({}, prev.variations[variationIndex].elements[svgIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 25
      }
    });
    if (elem.type === "image") return __jsx(_UImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: i,
      imageProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setTemplateData(prev => {
        const imageIndex = prev.variations[variationIndex].elements.findIndex(img => img.id === elem.id);
        prev.variations[variationIndex].elements[imageIndex] = _objectSpread(_objectSpread({}, prev.variations[variationIndex].elements[imageIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 25
      }
    });
    if (elem.type === "text") return __jsx(_UText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      textProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onEditClick: handleEditSelectedItem,
      onChange: event => setTemplateData(prev => {
        const txtIndex = prev.variations[variationIndex].elements.findIndex(txt => txt.id === elem.id);
        prev.variations[variationIndex].elements[txtIndex] = _objectSpread({}, event.target.attrs);
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 25
      }
    });
  }), __jsx(_UTransformer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: `tr${selectedId}`,
    $tr: $tr,
    selectedShapeName: selectedId,
    templateData: templateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 17
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    fill: "rgba(0,0,255,0.5)",
    ref: selectionRectRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainStage);

/***/ }),

/***/ "./src/components/DesignTool/Rectangle.tsx":
/*!*************************************************!*\
  !*** ./src/components/DesignTool/Rectangle.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\Rectangle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Rectangle = ({
  shapeProps,
  onSelect,
  onChange,
  onEditClick
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  const rectWidth = restProps.width;
  const rectHeight = restProps.height;
  const imageWidth = image ? image.width : 10;
  const imageHeight = image ? image.height : 10;
  const patternScale = restProps.patternScale || Math.max(rectWidth / imageWidth, rectHeight / imageHeight);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      // transformer is changing scale of the node
      // and NOT its width or height
      // but in the store we have only width and height
      // to match the data better we will reset scale on transform end
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY(); // we will reset it back

      node.scaleX(1);
      node.scaleY(1);
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: node.x(),
        y: node.y(),
        width: Math.max(node.width() * scaleX),
        height: Math.max(node.height() * scaleY)
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    },
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: patternScale,
    fillPatternScaleY: patternScale,
    fillPatternRepeat: "no-repeat"
  }, restProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Rectangle);

/***/ }),

/***/ "./src/components/DesignTool/SideBar/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/DesignTool/SideBar/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/svg */ "./src/utils/svg.ts");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-file-upload */ "use-file-upload");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_file_upload__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\SideBar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const SideBar = ({
  variationIndex,
  setTemplateData
}) => {
  const [file, selectFile] = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_3__["useFileUpload"])();

  const handleAddNewRect = () => {
    setTemplateData(prev => {
      let shapeID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewCircle = () => {
    setTemplateData(prev => {
      let shapeID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewTrianlge = () => {
    setTemplateData(prev => {
      let shapeID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewPolygon = () => {
    setTemplateData(prev => {
      let shapeID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleAddNewRoundedRect = () => {
    setTemplateData(prev => {
      let shapeID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRoundedRect"]), {}, {
        id: `shapes_${shapeID.toString()}`
      }));
    });
  };

  const handleSvgUpload = e => {
    _utils_svg__WEBPACK_IMPORTED_MODULE_2__["getSvgStringFromUpload"](e.target.files).then(SVG_STRING => {
      setTemplateData(prev => {
        let svgId = new Date().getTime();
        prev.variations[variationIndex].elements.push(_objectSpread({
          id: `svgs_${svgId.toString()}`,
          svgString: SVG_STRING
        }, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultSvg"]));
      });
    });
  };

  const handleImageUpload = () => {
    selectFile({
      accept: "image/png, image/jpg, image/jpeg",
      multiple: false
    }, ({
      file
    }) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        //base64encoded string
        setTemplateData(prev => {
          let imageID = new Date().getTime();
          prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultImage"]), {}, {
            src: reader.result,
            id: `images_${imageID.toString()}`
          }));
        });
      };
    });
  };

  const handleAddNewText = () => {
    setTemplateData(prev => {
      let textID = new Date().getTime();
      prev.variations[variationIndex].elements.push(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTextBox"]), {}, {
        id: `textBoxes_${textID.toString()}`
      }));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewRect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Add new Square")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewCircle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Add new Circle")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewTrianlge,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Add new Triangle")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewPolygon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Add new Pentagon")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewRoundedRect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "Add new Rounded Square")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddNewText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "Add new Text")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "upload svg"), __jsx("input", {
    className: "",
    type: "file",
    accept: ".svg",
    onChange: handleSvgUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleImageUpload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Upload image")));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/components/DesignTool/TopToolBar/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/DesignTool/TopToolBar/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\TopToolBar\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopToolBar = ({
  onUndo,
  onRedo,
  setTemplateData,
  variationIndex,
  selectedId,
  setSelectedId
}) => {
  const onBringtoFront = () => {
    if (!selectedId || selectedId === "shapes_background") return;
    setTemplateData(prev => {
      const shapeIndex = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId);

      if (shapeIndex < prev.variations[variationIndex].elements.length - 1) {
        const temp = prev.variations[variationIndex].elements[shapeIndex + 1];
        prev.variations[variationIndex].elements[shapeIndex + 1] = prev.variations[variationIndex].elements[shapeIndex];
        prev.variations[variationIndex].elements[shapeIndex] = temp;
      }
    });
  };

  const onBringtoBack = () => {
    if (!selectedId || selectedId === "shapes_background") return;
    setTemplateData(prev => {
      const shapeIndex = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId); // NOTE - shapeIndex > 1 because index 0 is for background

      if (shapeIndex > 1) {
        const temp = prev.variations[variationIndex].elements[shapeIndex - 1];
        prev.variations[variationIndex].elements[shapeIndex - 1] = prev.variations[variationIndex].elements[shapeIndex];
        prev.variations[variationIndex].elements[shapeIndex] = temp;
      }
    });
  };

  return __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => setSelectedId("shapes_background"),
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Edit Background")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onBringtoFront,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Bring to front")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onBringtoBack,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Bring to Back")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onUndo,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "Undo")), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: onRedo,
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Redo")));
};

/* harmony default export */ __webpack_exports__["default"] = (TopToolBar);

/***/ }),

/***/ "./src/components/DesignTool/UCircle.tsx":
/*!***********************************************!*\
  !*** ./src/components/DesignTool/UCircle.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\UCircle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UCircle = ({
  shapeProps,
  onSelect,
  onChange,
  onEditClick
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Circle"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    },
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat"
  }, restProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UCircle);

/***/ }),

/***/ "./src/components/DesignTool/UImage.tsx":
/*!**********************************************!*\
  !*** ./src/components/DesignTool/UImage.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["src"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\UImage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UImage = ({
  imageProps,
  onChange,
  onSelect
}) => {
  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(imageProps.src);

  const {
    src
  } = imageProps,
        rest = _objectWithoutProperties(imageProps, _excluded);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({}, rest, {
    image: image,
    onClick: () => onSelect(imageProps.id),
    onTap: () => onSelect(imageProps.id),
    onDragEnd: onChange,
    onTransformEnd: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UImage);

/***/ }),

/***/ "./src/components/DesignTool/ULine.tsx":
/*!*********************************************!*\
  !*** ./src/components/DesignTool/ULine.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\ULine.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ULine = ({
  shapeProps,
  onSelect,
  onChange,
  onEditClick
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Line"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    draggable: true,
    strokeScaleEnabled: false,
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    },
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    },
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat"
  }, restProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ULine);

/***/ }),

/***/ "./src/components/DesignTool/UPolygon.tsx":
/*!************************************************!*\
  !*** ./src/components/DesignTool/UPolygon.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["patternImageUrl"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\UPolygon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const UPolygon = ({
  shapeProps,
  onSelect,
  onChange,
  onEditClick
}) => {
  const shapeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const {
    patternImageUrl
  } = shapeProps,
        restProps = _objectWithoutProperties(shapeProps, _excluded);

  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(patternImageUrl || null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["RegularPolygon"], _extends({
    ref: shapeRef,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    draggable: true,
    strokeScaleEnabled: false,
    onDragEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        x: e.target.x(),
        y: e.target.y()
      }));
    },
    onTransformEnd: e => {
      onChange(_objectSpread(_objectSpread({}, shapeProps), {}, {
        scaleX: e.target.attrs.scaleX,
        scaleY: e.target.attrs.scaleY
      }));
    },
    fillPatternImage: image,
    fillPatternOffsetX: 0,
    fillPatternOffsetY: 0,
    fillPatternScaleX: 0.1,
    fillPatternScaleY: 0.1,
    fillPatternRepeat: "no-repeat"
  }, restProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UPolygon);

/***/ }),

/***/ "./src/components/DesignTool/USvg.tsx":
/*!********************************************!*\
  !*** ./src/components/DesignTool/USvg.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/svg */ "./src/utils/svg.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\USvg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const USvg = ({
  svgProps,
  onChange,
  onSelect,
  onEditClick
}) => {
  const [image] = use_image__WEBPACK_IMPORTED_MODULE_2___default()(_utils_svg__WEBPACK_IMPORTED_MODULE_3__["svgToURL"](_utils_svg__WEBPACK_IMPORTED_MODULE_3__["replaceColors"](svgProps.svgString, svgProps.colorMap)));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({}, svgProps, {
    image: image,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    onDragEnd: onChange,
    onTransformEnd: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (USvg);

/***/ }),

/***/ "./src/components/DesignTool/UText.tsx":
/*!*********************************************!*\
  !*** ./src/components/DesignTool/UText.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\UText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const UText = ({
  textProps,
  onChange,
  onSelect,
  onEditClick
}) => {
  const textNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: textNode,
    draggable: true,
    onClick: onSelect,
    onTap: onSelect,
    onDblClick: onEditClick,
    onDblTap: onEditClick,
    onTransform: e => {
      let SX = textNode.current.scaleX();
      let W = textNode.current.width();
      textNode.current.setAttrs({
        // ...textNode.current.getAttrs(),
        // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
        width: W * SX,
        scaleX: 1,
        scaleY: 1
      });
    } // onTransformEnd={onChange}
    ,
    onDragEnd: onChange
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UText);

/***/ }),

/***/ "./src/components/DesignTool/UTransformer.tsx":
/*!****************************************************!*\
  !*** ./src/components/DesignTool/UTransformer.tsx ***!
  \****************************************************/
/*! exports provided: MIN_WIDTH, MIN_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_WIDTH", function() { return MIN_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_HEIGHT", function() { return MIN_HEIGHT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\UTransformer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MIN_WIDTH = 50;
const MIN_HEIGHT = 30;

const TransformerComponent = ({
  id,
  selectedShapeName,
  templateData,
  $tr
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkNode();
  }, [selectedShapeName, templateData.variations]);

  const checkNode = () => {
    const stage = $tr.current.getStage();
    const selectedNode = stage.findOne("#" + selectedShapeName);

    if (selectedNode) {
      $tr.current.nodes([selectedNode]);
    } else {
      $tr.current.detach();
    }

    $tr.current.getLayer().batchDraw();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Transformer"], {
    id: id,
    ref: $tr,
    ignoreStroke: true,
    rotationSnaps: [0, 90, 180, 270],
    boundBoxFunc: (oldBox, newBox) => {
      if (selectedShapeName === "shapes_background") return oldBox;

      if (newBox.width < MIN_WIDTH) {
        return _objectSpread(_objectSpread({}, oldBox), {}, {
          width: MIN_WIDTH
        });
      }

      return newBox;
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ }),

/***/ "./src/components/DesignTool/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/DesignTool/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/TemplateContext */ "./src/contexts/TemplateContext.tsx");
/* harmony import */ var _tailwindComponents_SelectVariation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tailwindComponents/SelectVariation */ "./src/components/tailwindComponents/SelectVariation.tsx");
/* harmony import */ var _tailwindComponents_SaveVariation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tailwindComponents/SaveVariation */ "./src/components/tailwindComponents/SaveVariation.tsx");
/* harmony import */ var _tailwindComponents_SaveTemplate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tailwindComponents/SaveTemplate */ "./src/components/tailwindComponents/SaveTemplate.tsx");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideBar */ "./src/components/DesignTool/SideBar/index.tsx");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TopToolBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TopToolBar */ "./src/components/DesignTool/TopToolBar/index.tsx");
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MainStage */ "./src/components/DesignTool/MainStage/index.tsx");
/* harmony import */ var _EditingTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditingTools */ "./src/components/DesignTool/EditingTools/index.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _routes_route_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../routes/route_names */ "./src/routes/route_names.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_templateService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/templateService */ "./src/services/templateService.ts");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ErrorFallacks_MainStageFallBack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ErrorFallacks/MainStageFallBack */ "./src/ErrorFallacks/MainStageFallBack.tsx");
/* harmony import */ var _ErrorFallacks_TopToolBarFallback__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ErrorFallacks/TopToolBarFallback */ "./src/ErrorFallacks/TopToolBarFallback.tsx");
/* harmony import */ var _ErrorFallacks_SideBarFallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ErrorFallacks/SideBarFallback */ "./src/ErrorFallacks/SideBarFallback.tsx");
/* harmony import */ var _ErrorFallacks_SaveVariationFallback__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ErrorFallacks/SaveVariationFallback */ "./src/ErrorFallacks/SaveVariationFallback.tsx");
/* harmony import */ var _ErrorFallacks_SaveTemplateFallback__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ErrorFallacks/SaveTemplateFallback */ "./src/ErrorFallacks/SaveTemplateFallback.tsx");
/* harmony import */ var _ErrorFallacks_SelectVariationFallback__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../ErrorFallacks/SelectVariationFallback */ "./src/ErrorFallacks/SelectVariationFallback.tsx");
/* harmony import */ var _ErrorFallacks_EditingToolsFallback__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ErrorFallacks/EditingToolsFallback */ "./src/ErrorFallacks/EditingToolsFallback.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\DesignTool\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const DesignTool = () => {
  const browserHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useHistory"])();
  const {
    0: templateData,
    1: setTemplateData,
    2: {
      goForward,
      goBack,
      stepNum,
      history
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["TemplateContext"]);
  const {
    0: justUpdated,
    1: setJustUpdated
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    templateID
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useParams"])();
  const {
    data,
    error,
    isLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_13__["useQuery"])(["currentTemplate", templateID], () => _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].getTemplateByID(templateID));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!!justUpdated) return;

    if (!!data && !error) {
      setTemplateData(data);
      setJustUpdated(true);
    }
  }, [data]);
  const {
    0: variationIndex,
    1: setVariationIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: showSaveVariationModal,
    1: setShowSaveVariationModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectedId,
    1: setSelectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isOpenColorPicker,
    1: setIsOpenColorPicker
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isEditTextBox,
    1: setIsEditTextBox
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isOpenSaveTemplateModal,
    1: setIsOpenSaveTemplateModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsOpenColorPicker(false);
    setIsEditTextBox(false);
  }, [selectedId]);

  const unSelectAll = () => {
    setIsOpenColorPicker(false);
    setIsEditTextBox(false);
    setSelectedId(null);
  };

  const handleEscape = e => {
    if (e.key === "Escape") {
      unSelectAll();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleEscape, false);
    webfontloader__WEBPACK_IMPORTED_MODULE_7___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);

  const onUndo = () => {
    !!setSelectedId && unSelectAll();

    if (stepNum > 0) {
      if (variationIndex > 0 && history[stepNum].variations.length > history[stepNum - 1].variations.length) {
        setVariationIndex(variationIndex - 1);
      }

      goBack();
    }
  };

  const onRedo = () => {
    !!setSelectedId && unSelectAll();

    if (stepNum > 0) {
      if (variationIndex > 0 && history[stepNum].variations.length > history[stepNum + 1].variations.length) {
        setVariationIndex(variationIndex - 1);
      }
    }

    stepNum < history.length - 1 && goForward();
  };

  const handleSaveVariation = variationData => {
    setTemplateData(prev => {
      prev.variations[variationIndex].name = variationData.name;
      prev.variations[variationIndex].face = variationData.face;
    });
    setShowSaveVariationModal(false);
  };

  const handleAddVariation = () => {
    if (templateData.variations.length < 3) {
      setTemplateData(prev => {
        prev.variations.push(templateData.variations[variationIndex]);
      });
      setVariationIndex(prev => prev + 1);
    } else {
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Cannot create more than 3 variations!");
    }
  };

  const handleDeleteVariation = () => {
    const variationsLength = templateData.variations.length;
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: "Are you sure?",
      text: "Do you want to delete this variation?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        if (variationsLength > 1) {
          setTemplateData(prev => {
            prev.variations.splice(variationIndex, 1);
            if (variationIndex === variationsLength - 1) setVariationIndex(variationIndex - 1);
          });
        } else {
          setTemplateData(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"]);
        }
      }
    });
  };

  const handleEditSelectedItem = () => {
    if (selectedId.split("_")[0] === "textBoxes") {
      setIsEditTextBox(true);
      return;
    }

    setIsOpenColorPicker(true);
  };

  const handleDeleteSelectedItem = () => {
    setTemplateData(prev => {
      prev.variations[variationIndex].elements = prev.variations[variationIndex].elements.filter(item => item.id !== selectedId);
      unSelectAll();
    });
  };

  const handleCloseEditTextModal = () => {
    setIsEditTextBox(false);
  };

  const openSaveTemplateModal = () => {
    setIsOpenSaveTemplateModal(true);
  };

  const handleSaveTemplate = async (name, tags, categoryId) => {
    console.log({
      LOL: JSON.stringify(_objectSpread(_objectSpread({}, templateData), {}, {
        name,
        tags,
        categoryId
      }))
    });

    if (!!templateID) {
      await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].updateTemplateByID(templateID, _objectSpread(_objectSpread({}, templateData), {}, {
        name,
        tags,
        categoryId
      }));
    } else {
      await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].addNewTemplate(_objectSpread(_objectSpread({}, templateData), {}, {
        name,
        tags,
        categoryId
      }));
      browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home);
    }

    setIsOpenSaveTemplateModal(false);
  };

  const handleDeleteTemplate = () => {
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: "Are you sure?",
      text: "Do you want to delete this Template?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        if (!!templateID) {
          await _services_templateService__WEBPACK_IMPORTED_MODULE_14__["template_service"].deleteTemplateByID(templateID);
        } else {
          setTemplateData(_contexts_TemplateContext__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"]);
        }

        browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home);
      }
    });
  };

  return __jsx("div", {
    className: "min-w-max bg-gray300 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, "Back to Home"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
    to: _routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].select_palette,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, "Select Palette")), __jsx("p", {
    className: "text-xl text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 17
    }
  }, "Tempalte Design"), __jsx("div", {
    className: "flex gap-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: openSaveTemplateModal,
    className: "text-white font-semibold py-2 px-4 border border-white-500 rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Save Template"), __jsx("button", {
    onClick: handleDeleteTemplate,
    className: "text-white font-semibold py-2 px-4 border border-red rounded",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "Delete Template"))), showSaveVariationModal && __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SaveVariationFallback__WEBPACK_IMPORTED_MODULE_19__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, __jsx(_tailwindComponents_SaveVariation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    templateData: templateData,
    handleSaveVariation: handleSaveVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  })), isOpenSaveTemplateModal && __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SaveTemplateFallback__WEBPACK_IMPORTED_MODULE_20__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx(_tailwindComponents_SaveTemplate__WEBPACK_IMPORTED_MODULE_4__["default"], {
    templateData: templateData,
    handleSaveTemplate: handleSaveTemplate,
    closeModal: () => setIsOpenSaveTemplateModal(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "grid grid-cols-3 gap-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SideBarFallback__WEBPACK_IMPORTED_MODULE_18__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variationIndex: variationIndex,
    setTemplateData: setTemplateData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_TopToolBarFallback__WEBPACK_IMPORTED_MODULE_17__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx(_TopToolBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onUndo: onUndo,
    onRedo: onRedo,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 21
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_MainStageFallBack__WEBPACK_IMPORTED_MODULE_16__["default"],
    onReset: () => browserHistory.push(_routes_route_names__WEBPACK_IMPORTED_MODULE_12__["ROUTE_NAMES"].home),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    unSelectAll: unSelectAll,
    handleEditSelectedItem: handleEditSelectedItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "flex justify-center mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_SelectVariationFallback__WEBPACK_IMPORTED_MODULE_21__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 25
    }
  }, __jsx(_tailwindComponents_SelectVariation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variations: templateData.variations,
    variationIndex: variationIndex,
    setVariationIndex: setVariationIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: () => setShowSaveVariationModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 25
    }
  }, "Save Variation"), __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleAddVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 25
    }
  }, "Add New Variation"), __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleDeleteVariation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 25
    }
  }, "Delete variation"))), __jsx("div", {
    className: selectedId ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 17
    }
  }, __jsx(react_error_boundary__WEBPACK_IMPORTED_MODULE_15__["ErrorBoundary"], {
    FallbackComponent: _ErrorFallacks_EditingToolsFallback__WEBPACK_IMPORTED_MODULE_22__["default"],
    onReset: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }, __jsx(_EditingTools__WEBPACK_IMPORTED_MODULE_10__["default"], {
    selectedId: selectedId,
    unSelectAll: unSelectAll,
    isOpenColorPicker: isOpenColorPicker,
    isEditTextBox: isEditTextBox,
    templateData: templateData,
    setTemplateData: setTemplateData,
    variationIndex: variationIndex,
    handleEditSelectedItem: handleEditSelectedItem,
    handleDeleteSelectedItem: handleDeleteSelectedItem,
    handleCloseEditTextModal: handleCloseEditTextModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ }),

/***/ "./src/components/tailwindComponents/CustomSelect.tsx":
/*!************************************************************!*\
  !*** ./src/components/tailwindComponents/CustomSelect.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/svgs/chevron-down.svg */ "./src/assets/svgs/chevron-down.svg");
/* harmony import */ var _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useComponentVisible */ "./src/hooks/useComponentVisible.tsx");
/* harmony import */ var _utils_titleCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/titleCase */ "./src/utils/titleCase.ts");
const _excluded = ["label", "value", "onChange", "dataArray", "width"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\CustomSelect.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomSelect = _ref => {
  let {
    label,
    value,
    onChange,
    dataArray,
    width
  } = _ref,
      res = _objectWithoutProperties(_ref, _excluded);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = Object(_hooks_useComponentVisible__WEBPACK_IMPORTED_MODULE_2__["default"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `flex flex-col bg-gray94  w-60 `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "text-base text-left text-grey top-16  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, label), __jsx("div", {
    className: " w-full relative",
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setIsComponentVisible(!isComponentVisible),
    className: "relative bg-white text-left pl-5 w-full border py-2 border-gray95 rounded-md shadow-sm cursor-pointer focus:outline-none text-jacksonsPurple focus:ring-1 focus:ring-radicalRed focus:border-radicalRed text-base",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_3__["titleCase"])(value)), __jsx("div", {
    className: "absolute inset-y-0 right-0 pr-2 flex items-center  pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_svgs_chevron_down_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "w-4 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }))), __jsx("ul", {
    className: isComponentVisible ? "w-full absolute z-20 mt-1  bg-white shadow-lg  rounded-md py-1 text-base ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, (dataArray === null || dataArray === void 0 ? void 0 : dataArray.length) && dataArray.map((val, ind) => __jsx("li", {
    key: ind,
    className: "text-mineShaft select-none cursor-pointer relative py-2 pl-3 pr-9 hover:bg-gray94  ",
    value: val.name,
    onClick: () => {
      onChange(val);
      setIsComponentVisible(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, __jsx("h2", {
    className: "text-jacksonsPurple font-normal ml-3 block truncate ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, Object(_utils_titleCase__WEBPACK_IMPORTED_MODULE_3__["titleCase"])(val.name)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(CustomSelect));

/***/ }),

/***/ "./src/components/tailwindComponents/EditTextBox.tsx":
/*!***********************************************************!*\
  !*** ./src/components/tailwindComponents/EditTextBox.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\EditTextBox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EditTextBox = ({
  selectedId,
  variationIndex,
  templateData,
  setTemplateData,
  handleCloseEditTextModal
}) => {
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: fontSize,
    1: setFontSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(20);
  const {
    0: fontStyle,
    1: setFontStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("normal");
  const {
    0: fontFamily,
    1: setFontFamily
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_utils_defaults__WEBPACK_IMPORTED_MODULE_2__["googleFontsList"][0]);
  const {
    0: textAlign,
    1: setTextAlign
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("left");
  const {
    0: fontColor,
    1: setFontColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#000000");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if ((selectedId === null || selectedId === void 0 ? void 0 : selectedId.split("_")[0]) === "textBoxes") {
      const index = templateData.variations[variationIndex].elements.findIndex(item => item.id === selectedId);
      setInputValue(templateData.variations[variationIndex].elements[index].text);
      setFontSize(templateData.variations[variationIndex].elements[index].fontSize);
      setFontStyle(templateData.variations[variationIndex].elements[index].fontStyle);
      setFontFamily(templateData.variations[variationIndex].elements[index].fontFamily);
      setTextAlign(templateData.variations[variationIndex].elements[index].align);
      setFontColor(templateData.variations[variationIndex].elements[index].fill);
    }
  }, [selectedId]);

  const handleSave = () => {
    setTemplateData(prev => {
      const index = prev.variations[variationIndex].elements.findIndex(item => item.id === selectedId);
      prev.variations[variationIndex].elements[index].text = inputValue;
      prev.variations[variationIndex].elements[index].fontSize = fontSize;
      prev.variations[variationIndex].elements[index].fontStyle = fontStyle;
      prev.variations[variationIndex].elements[index].fontFamily = fontFamily;
      prev.variations[variationIndex].elements[index].align = textAlign;
      prev.variations[variationIndex].elements[index].fill = fontColor;
    });
    handleCloseEditTextModal();
  };

  return __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "Font Size:"), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: fontSize,
    onChange: e => setFontSize(parseInt(e.target.value)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Select Font style:"), __jsx("select", {
    className: "border mb-5",
    name: "font-style",
    onChange: e => setFontStyle(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "normal"), __jsx("option", {
    value: "bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "bold"), __jsx("option", {
    value: "italic",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "italic"), __jsx("option", {
    value: "italic bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, "italic bold")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Select Text Alignment:"), __jsx("select", {
    className: "border mb-5",
    name: "text-align",
    onChange: e => setTextAlign(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "left"), __jsx("option", {
    value: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "center"), __jsx("option", {
    value: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, "right")), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Select font family:"), __jsx("select", {
    value: fontFamily,
    style: {
      fontFamily: fontFamily
    },
    onChange: e => setFontFamily(e.target.value),
    className: "border mb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_2__["googleFontsList"].map((val, index) => {
    return __jsx("option", {
      className: "bg-white text-black",
      style: {
        fontFamily: val
      },
      key: index,
      selected: val === fontFamily,
      value: val,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }, val);
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, "Text color:"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: fontColor,
    onChange: color => setFontColor(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "mt-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("textarea", {
    className: "border h-40 w-full",
    style: {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontStyle: fontStyle,
      textAlign: textAlign,
      color: fontColor
    },
    value: inputValue,
    onChange: e => setInputValue(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: handleSave,
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Done")));
};

/* harmony default export */ __webpack_exports__["default"] = (EditTextBox);

/***/ }),

/***/ "./src/components/tailwindComponents/LoadingButton.tsx":
/*!*************************************************************!*\
  !*** ./src/components/tailwindComponents/LoadingButton.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const _excluded = ["isLoading", "loadingProps", "startIcon", "endIcon", "className", "style", "children"];
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\LoadingButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const LoadingButton = _ref => {
  let {
    isLoading,
    loadingProps,
    startIcon,
    endIcon,
    className,
    style,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("button", _extends({
    className: className ? className : 'w-full  justify-center place-items-center flex focus:outline-none relative ',
    style: {
      paddingLeft: startIcon ? '30px' : ''
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), isLoading ? __jsx("svg", _extends({
    className: "animate-spin w-6 ",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "white"
  }, loadingProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }), __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  })) : children), __jsx("img", {
    src: startIcon,
    alt: "error",
    width: "20",
    className: startIcon ? 'absolute    ml-2 ' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: endIcon,
    alt: "error",
    width: "20",
    className: endIcon ? 'absolute right-0 top-0 mt-3.5 mr-4  cursor-pointer ' : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LoadingButton));

/***/ }),

/***/ "./src/components/tailwindComponents/SaveTemplate.tsx":
/*!************************************************************!*\
  !*** ./src/components/tailwindComponents/SaveTemplate.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svgs/plus.svg */ "./src/assets/svgs/plus.svg");
/* harmony import */ var _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTextField */ "./src/components/tailwindComponents/CustomTextField.tsx");
/* harmony import */ var _LoadingButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingButton */ "./src/components/tailwindComponents/LoadingButton.tsx");
/* harmony import */ var _utils_useSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/useSvg */ "./src/utils/useSvg.tsx");
/* harmony import */ var _CustomSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomSelect */ "./src/components/tailwindComponents/CustomSelect.tsx");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/categoryService */ "./src/services/categoryService.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\SaveTemplate.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const svgPath = `  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;

const SaveTemplate = ({
  templateData,
  handleSaveTemplate,
  closeModal
}) => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: tagsList,
    1: setTagsList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: isFirstTag,
    1: setIsFirstTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: tag,
    1: setTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    data: categoriesList,
    error: categoryError,
    isLoading: categoryLoading
  } = Object(react_query__WEBPACK_IMPORTED_MODULE_7__["useQuery"])("categories", _services_categoryService__WEBPACK_IMPORTED_MODULE_8__["category_service"].getAllCategories);
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!categoriesList ? categoriesList[0] : null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _templateData$tags;

    if (!!((_templateData$tags = templateData.tags) !== null && _templateData$tags !== void 0 && _templateData$tags.length)) {
      setTagsList(templateData.tags);
    }
  }, []);
  const closeIcon = Object(_utils_useSvg__WEBPACK_IMPORTED_MODULE_5__["default"])("http://www.w3.org/2000/svg", "0 0 24 24", "white", "#FF3C69", svgPath);

  const pushTagToTagsList = tagName => {
    if (!tagName) {
      return;
    }

    let checkExisting = tagsList.filter(currentTag => currentTag == tagName);

    if (checkExisting.length && !isFirstTag) {
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
        title: "Tag already added",
        icon: "error"
      });
    } else {
      setTagsList([...tagsList, tagName]);
      setIsFirstTag(false);
    }
  };

  const removeFromTagsList = index => {
    let newTagsList = [...tagsList];
    newTagsList.splice(index, 1);
    setTagsList(newTagsList);
  };

  const handleChangeTag = e => {
    setTag(e.target.value);
  };

  const handlePushTag = () => {
    pushTagToTagsList(tag);
    setTag("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      pushTagToTagsList(tag);
      setTag("");
    }
  };

  const onCategoryChange = val => {
    console.log({
      val
    });
    setSelectedCategory(val);
  };

  const onSubmit = () => {
    handleSaveTemplate(name, tagsList, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id);
  };

  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("input", {
    value: name,
    onChange: e => setName(e.target.value),
    className: "relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }), __jsx(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Enter Tag",
    id: "tagName",
    name: "tagName",
    value: tag,
    onChange: handleChangeTag,
    placeholder: "Enter tag",
    onKeyDown: handleKeyDown,
    onClick: handlePushTag,
    endIcon: _assets_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    className: "relative  border border-grey appearance-none rounded w-full p-2 mt-0 focus:outline-none cursor-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "flex flex-grow flex-wrap flex-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, tagsList.map((item, index) => __jsx("div", {
    key: index,
    className: "flex justify-between rounded-3xl px-5 py-1 border-radicalRed border-2 mt-1 text-radicalRed ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 41
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 45
    }
  }, item), __jsx("img", {
    onClick: () => removeFromTagsList(index),
    src: closeIcon,
    alt: "error",
    className: "w-4  cursor-pointer ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  })))), __jsx("div", {
    className: "z-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, __jsx(_CustomSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Select Category",
    value: (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.name) || "none",
    onChange: onCategoryChange,
    dataArray: categoriesList,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 flex justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx(_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadingProps: {
      size: 24,
      style: {
        color: "white"
      }
    },
    disableElevation: true,
    onClick: closeModal,
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    className: "red-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, "Close")), __jsx("div", {
    className: "mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }, __jsx(_LoadingButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadingProps: {
      size: 24,
      style: {
        color: "white"
      }
    },
    disableElevation: true,
    onClick: onSubmit,
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "secondary",
    className: "red-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 29
    }
  }, "Save Template"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveTemplate);

/***/ }),

/***/ "./src/components/tailwindComponents/SaveVariation.tsx":
/*!*************************************************************!*\
  !*** ./src/components/tailwindComponents/SaveVariation.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\SaveVariation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SaveVariation = ({
  handleSaveVariation,
  templateData
}) => {
  const [variationData, setVariationData] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_0__["useImmerState"])({
    name: "untitled",
    face: "#FF0000"
  });
  return __jsx("div", {
    className: "fixed z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "\u200B"), __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Name: "), __jsx("input", {
    type: "text",
    placeholder: "Variation name",
    onChange: e => setVariationData(prev => {
      prev.name = e.target.value;
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 50
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Current face: ", __jsx("div", {
    className: "w-10 h-10 m-5 border border-black",
    style: {
      backgroundColor: variationData.face
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 48
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Select face: "), templateData.palette.map((item, index) => __jsx("div", {
    key: index,
    className: "inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "w-10 h-10 m-5 border border-black",
    style: {
      backgroundColor: item.color
    },
    onClick: () => setVariationData(prev => {
      prev.face = item.color;
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }))))), __jsx("div", {
    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleSaveVariation(variationData),
    type: "button",
    className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Save")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SaveVariation);

/***/ }),

/***/ "./src/components/tailwindComponents/SelectVariation.tsx":
/*!***************************************************************!*\
  !*** ./src/components/tailwindComponents/SelectVariation.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\SelectVariation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SelectVariation = ({
  variations,
  variationIndex,
  setVariationIndex
}) => {
  return __jsx("div", {
    className: "flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, variations.map((item, index) => __jsx("p", {
    key: index,
    className: `${variationIndex === index ? "text-red-100" : "text-red-800"} block px-4 py-2 mr-1 ml-1 text-sm cursor-pointer rounded border border-gray-900 ${variationIndex === index ? "bg-red-700 hover:bg-red-800" : ""}`,
    onClick: () => setVariationIndex(index),
    role: "menuitem",
    tabIndex: -1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, item.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectVariation);

/***/ }),

/***/ "./src/components/tailwindComponents/ShapeColorSelector.tsx":
/*!******************************************************************!*\
  !*** ./src/components/tailwindComponents/ShapeColorSelector.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-file-upload */ "use-file-upload");
/* harmony import */ var use_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\ShapeColorSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ShapeColorSelector = ({
  selectedId,
  templateData,
  setTemplateData,
  variationIndex,
  currentPalette
}) => {
  const [file, selectFile] = Object(use_file_upload__WEBPACK_IMPORTED_MODULE_2__["useFileUpload"])();

  const handleFillImagePattern = () => {
    selectFile({
      accept: "image/png, image/jpg, image/jpeg",
      multiple: false
    }, ({
      file
    }) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        //base64encoded string => reader.result
        setTemplateData(prev => {
          const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
          selectedShape.fill = "";
          selectedShape.patternImageUrl = reader.result;
        });
      };
    });
  };

  const handleStrokeWidthChange = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.strokeWidth = parseInt(e.target.value);
    });
  };

  const handleCornerRadius = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.cornerRadius = parseInt(e.target.value);
    });
  };

  const handleOpacity = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.opacity = parseFloat(e.target.value);
    });
  };

  const handleStrokeColor = color => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.stroke = color.hex;
    });
  };

  const handleShapeFill = color => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fill = color;
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleGradientColor = (color1, color2) => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fill = "";
      selectedShape.fillLinearGradientColorStops = [0, color1, 1, color2];
      selectedShape.fillLinearGradientStartPoint = {
        x: 0,
        y: 0
      };
      selectedShape.fillLinearGradientEndPoint = {
        x: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].width : 100,
        y: selectedId === "shapes_background" ? _utils_defaults__WEBPACK_IMPORTED_MODULE_3__["stageDimensions"].height : 100
      };
      selectedShape.patternImageUrl = undefined;
    });
  };

  const handleFillPatternScaleX = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleX = parseFloat(e.target.value);
    });
  };

  const handleFillPatternScaleY = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternScaleY = parseFloat(e.target.value);
    });
  };

  const handleFillPatternOffsetX = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetX = parseInt(e.target.value);
    });
  };

  const handleFillPatternOffsetY = e => {
    setTemplateData(prev => {
      const selectedShape = prev.variations[variationIndex].elements.find(item => item.id === selectedId);
      selectedShape.fillPatternOffsetY = parseInt(e.target.value);
    });
  };

  const selectedShapeData = templateData.variations[variationIndex].elements.find(item => item.id === selectedId);
  return __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Border width: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    min: 0,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.strokeWidth,
    onChange: handleStrokeWidthChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "Corner radius:"), __jsx("input", {
    className: "border mb-5",
    type: "number",
    min: 0,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.cornerRadius,
    onChange: handleCornerRadius,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, "Opacity: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.opacity,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleOpacity,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, "Image Scale X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 0.1,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleX,
    onChange: handleFillPatternScaleX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, "Image Scale Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 0.1,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleY,
    onChange: handleFillPatternScaleY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "Image offset X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 10,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetX,
    onChange: handleFillPatternOffsetX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, "Image offset Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    step: 10,
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetY,
    onChange: handleFillPatternOffsetY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, "Borer color:"), __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.stroke,
    onChange: handleStrokeColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: !!(selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillPatternImage) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 21
    }
  }, "Image Offset X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetX,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternOffsetX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "Image Offset Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternOffsetY,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternOffsetY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, "Image Scale X: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleX,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternScaleX,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, "Image Scale Y: "), __jsx("input", {
    className: "border mb-5",
    type: "number",
    value: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillPatternScaleY,
    step: 0.1,
    min: 0.1,
    max: 1.0,
    onChange: handleFillPatternScaleY,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, currentPalette.map((item, index) => __jsx("div", {
    key: index,
    className: "h-10 mt-5 mb-5 flex flex-wrap justify-center content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "w-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "Select ", item.name), " ", __jsx("div", {
    className: "w-10 h-10 border border-black",
    style: {
      backgroundColor: item.color
    },
    onClick: () => handleShapeFill(item.color),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 72
    }
  })))), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "100%",
    color: selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill,
    onChange: color => handleShapeFill(color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex justify-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "inline-flex items-center h-8 px-4 m-2 text-sm text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800",
    onClick: handleFillImagePattern,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }, "Insert image"))), __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, "Gradient:"), __jsx("div", {
    className: "grid grid-cols-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, "Color 1"), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[1] : "#171717",
    onChange: color => handleGradientColor(color.hex, selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[3] : "#171717"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 25
    }
  }, "Color 2"), __jsx("div", {
    className: "sm:flex sm:items-start",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "150px",
    color: selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[3] : selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill,
    onChange: color => handleGradientColor(selectedShapeData !== null && selectedShapeData !== void 0 && selectedShapeData.fillLinearGradientColorStops ? selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fillLinearGradientColorStops[1] : selectedShapeData === null || selectedShapeData === void 0 ? void 0 : selectedShapeData.fill, color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ShapeColorSelector);

/***/ }),

/***/ "./src/components/tailwindComponents/SvgColorSelector.tsx":
/*!****************************************************************!*\
  !*** ./src/components/tailwindComponents/SvgColorSelector.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "react-color");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/svg */ "./src/utils/svg.ts");
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\tailwindComponents\\SvgColorSelector.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SvgColorSelector = ({
  selectedId,
  templateData,
  setTemplateData,
  variationIndex
}) => {
  const {
    0: currentColor,
    1: setCurrentColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#171717");
  const svgData = templateData.variations[variationIndex].elements.find(item => item.id === selectedId);
  const colors = _utils_svg__WEBPACK_IMPORTED_MODULE_2__["getColors"](svgData.svgString);
  const colorMap = svgData.colorMap;

  const handleSvgElementColorChange = (oldColor, newColor) => {
    setTemplateData(prev => {
      prev.variations[variationIndex].elements.find(item => item.id === selectedId).colorMap[oldColor] = newColor;
    });
  };

  return __jsx("div", {
    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Select a color to edit"), colors.map((item, index) => __jsx("div", {
    key: index,
    className: "h-10 m-5 inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "w-10 h-10 border border-black",
    style: {
      backgroundColor: svgData.colorMap[item] || item
    },
    onClick: () => setCurrentColor(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: !!currentColor ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, templateData.palette.map((item, index) => __jsx("div", {
    key: index,
    className: "h-10 mt-5 mb-5 flex flex-wrap justify-center content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "w-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "Select ", item.name), " ", __jsx("div", {
    className: "w-10 h-10 border border-black " + (currentColor === item.color && "opacity-50"),
    style: {
      backgroundColor: item.color
    },
    onClick: () => handleSvgElementColorChange(currentColor, item.color),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 72
    }
  })))), __jsx("div", {
    className: !!currentColor ? "sm:flex sm:items-start" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"], {
    width: "100%",
    color: colorMap[currentColor] || "#000000",
    onChange: color => handleSvgElementColorChange(currentColor, color.hex),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgColorSelector);

/***/ }),

/***/ "./src/hooks/useComponentVisible.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useComponentVisible.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useComponentVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useComponentVisible(initialIsVisible) {
  const {
    0: isComponentVisible,
    1: setIsComponentVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialIsVisible);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return {
    ref,
    isComponentVisible,
    setIsComponentVisible
  };
}

/***/ })

};;
//# sourceMappingURL=3.chunk.js.map