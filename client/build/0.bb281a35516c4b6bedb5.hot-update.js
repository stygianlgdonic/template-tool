exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Rectangle */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/Rectangle.tsx");
/* harmony import */ var _UCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UCircle */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UCircle.tsx");
/* harmony import */ var _UPolygon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UPolygon */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UPolygon.tsx");
/* harmony import */ var _ULine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ULine */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/ULine.tsx");
/* harmony import */ var _USvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../USvg */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/USvg.tsx");
/* harmony import */ var _UText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UText */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx");
/* harmony import */ var _UTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UTransformer */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _UImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UImage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UImage.tsx");
/* harmony import */ var _tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\MainStage\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const MainStage = ({
  cardData,
  setCardData,
  selectedId,
  setSelectedId,
  unSelectAll
}) => {
  var _cardData$elements;

  const GUIDELINE_OFFSET = 5;
  const $stage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $layer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const $tr = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
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
    const vertical = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width];
    const horizontal = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height]; // and we snap over edges and center of each object on the canvas

    $stage.current.find(".object").forEach(guideItem => {
      if (guideItem === skipShape) {
        return;
      }

      const box = guideItem.getClientRect(); // and we can snap to all edges of shapes

      vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
      horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
    });
    return {
      vertical: vertical.flat(),
      horizontal: horizontal.flat()
    };
  };

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
  };

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
        const diff = Math.abs(lineGuide - itemBound.guide);

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
  };

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
  };

  const _onDragMove = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    const lineGuideStops = getLineGuideStops(e.target);
    const itemBounds = getObjectSnappingEdges(e.target);
    const guides = getGuides(lineGuideStops, itemBounds);

    if (!guides.length) {
      return;
    }

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
  };

  const _onDragEnd = e => {
    const linesArray = $layer.current.find(".guid-line");

    if (!!linesArray.length) {
      linesArray.forEach(item => item.destroy());
    }

    $layer.current.batchDraw();
  };

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();

    if (clickedOnEmpty) {
      unSelectAll();
      $tr.current.nodes([]);
      setNodes([]); // layerRef.current.remove(selectionRectangle);
    }
  };

  const updateSelectionRect = () => {
    const node = selectionRectRef.current;
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
    const isElement = e.target.findAncestor(".elements-container");
    const isTransformer = e.target.findAncestor("Transformer");

    if (isElement || isTransformer) {
      return;
    }

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

    const selBox = selectionRectRef.current.getClientRect();
    const elements = [];
    $layer.current.find(".object").forEach(elementNode => {
      const elBox = elementNode.getClientRect();

      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode);
      }
    });
    $tr.current.nodes(elements);
    selection.current.visible = false; // disable click event

    Konva.listenClickTap = false;
    updateSelectionRect();
  };

  const onClickTap = e => {
    // if we are selecting with rect, do nothing
    if (selectionRectRef.current.visible()) {
      return;
    }

    let stage = e.target.getStage();
    let layer = $layer.current;
    let tr = $tr.current; // if click on empty area - remove all selections

    if (e.target === stage) {
      unSelectAll();
      setNodes([]);
      tr.nodes([]);
      layer.draw();
      return;
    } // do nothing if clicked NOT on our rectangles


    if (!e.target.hasName(".object")) {
      return;
    } // do we pressed shift or ctrl?


    const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
    const isSelected = tr.nodes().indexOf(e.target) >= 0;

    if (!metaPressed && !isSelected) {
      // if no key pressed and the node is not selected
      // select just one
      tr.nodes([e.target]);
    } else if (metaPressed && isSelected) {
      // if we pressed keys and node was selected
      // we need to remove it from selection:
      const nodes = tr.nodes().slice(); // use slice to have new copy of array
      // remove node from array

      nodes.splice(nodes.indexOf(e.target), 1);
      tr.nodes(nodes);
    } else if (metaPressed && !isSelected) {
      // add the node into selection
      const nodes = tr.nodes().concat([e.target]);
      tr.nodes(nodes);
    }

    layer.draw();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const nodes = $tr.current.nodes();

    if (!!nodes.length) {
      console.log({
        nodeAAs: nodes[0].getClientRect()
      });
    }
  }, [selectedId]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, __jsx(_tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    closeModal: () => {// setOpen(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 17
    }
  })), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], _extends({
    ref: $stage,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove,
    onTouchStart: checkDeselect,
    onClick: onClickTap
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 13
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    ref: $layer,
    onDragMove: _onDragMove,
    onDragEnd: _onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 17
    }
  }, (_cardData$elements = cardData.elements) === null || _cardData$elements === void 0 ? void 0 : _cardData$elements.map((elem, i) => {
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
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 29
      }
    });
    if (elem.type === "circle") return __jsx(_UCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 29
      }
    });
    if (elem.type === "line") return __jsx(_ULine__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 29
      }
    });
    if (elem.type === "polygon") return __jsx(_UPolygon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      shapeProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: newAttrs => {
        setCardData(prev => {
          const index = prev.elements.findIndex(item => item.id === elem.id);
          prev.elements[index] = newAttrs;
        });
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 29
      }
    });
    if (elem.type === "svg") return __jsx(_USvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: i,
      svgProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const svgIndex = prev.elements.findIndex(svgItem => svgItem.id === elem.id);
        prev.elements[svgIndex] = _objectSpread(_objectSpread({}, prev.elements[svgIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 29
      }
    });
    if (elem.type === "image") return __jsx(_UImage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      imageProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const imageIndex = prev.elements.findIndex(img => img.id === elem.id);
        prev.elements[imageIndex] = _objectSpread(_objectSpread({}, prev.elements[imageIndex]), JSON.parse(JSON.stringify(event.target.attrs)));
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 29
      }
    });
    if (elem.type === "text") return __jsx(_UText__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: i,
      textProps: elem,
      onSelect: () => {
        setSelectedId(elem.id);
      },
      onChange: event => setCardData(prev => {
        const txtIndex = prev.elements.findIndex(txt => txt.id === elem.id);
        prev.elements[txtIndex] = _objectSpread({}, event.target.attrs);
      }),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 29
      }
    });
  }), __jsx(_UTransformer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: `tr${selectedId}`,
    $tr: $tr,
    selectedShapeName: selectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 21
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    fill: "rgba(0,0,255,0.5)",
    ref: selectionRectRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainStage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubNavBar_components_ElementSelector_components_Stickers_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../SubNavBar/components/ElementSelector/components/Stickers/styles.css */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Stickers/styles.css");
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ImageFallbackModal\\ImageFallbackModal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImageFallbackModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  closeModal
}, ref) => {
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
    //   console.log({ LOL: reference.current.contains(e.target), ee: e.target });
    if (!myRef.current.contains(e.target)) {
      // setShowModal(false);
      closeModal();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    ref: myRef,
    className: " absolute z-10 flex items-center justify-center overflow-x-hidden outline-none focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative w-auto max-w-3xl h-96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "relative flex flex-col w-full bg-white border-2 rounded-lg shadow-lg outline-none border-gray300 focus:outline-none ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex items-start justify-between p-5 rounded-t border-blueGray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, __jsx("div", {
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, "FallBack"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-1 pl-3 pr-10 text-center bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-28 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, "avatar.jpg"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 53
    }
  })))), __jsx("ul", {
    className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "block font-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 49
    }
  }, "avatar"))))), __jsx("div", {
    className: "ml-2",
    onClick: () => setopenMergeDropdown(!!openMergeDropdown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("label", {
    id: "listbox-label",
    className: "block text-sm font-medium text-grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, "Merge Tag"), __jsx("div", {
    className: "relative mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, __jsx("button", {
    type: "button",
    className: "relative py-1 pl-3 pr-10 text-left bg-white border rounded-md shadow-sm cursor-default border-gray300 h-7 w-36 focus:outline-none focus:ring-1 focus:ring-gray300 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "block truncate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 45
    }
  }, "Image_custom"), __jsx("span", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 45
    }
  }, __jsx("svg", {
    className: "w-5 h-5 text-gray300",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 53
    }
  })))), __jsx("ul", {
    className: "absolute w-full py-1 mt-1 overflow-auto overflow-y-hidden text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openMergeDropdown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("li", {
    className: "relative w-full py-2 pl-3 text-gray-900 cursor-default select-none pr-9",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "block font-normal ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 49
    }
  }, "Image_custom.png"))))), __jsx("div", {
    className: "mt-6 ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }, __jsx("button", {
    type: "button",
    className: "inline-flex items-center w-32 px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm h-7 bg-indigo600 hover:bg-indigo700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, __jsx("svg", {
    className: "-ml-0.5 mr-2 h-4 w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  }, __jsx("path", {
    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 45
    }
  }), __jsx("path", {
    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 45
    }
  })), "Add Image")))))));
});
/* harmony default export */ __webpack_exports__["default"] = (ImageFallbackModal);

/***/ })

};
//# sourceMappingURL=0.bb281a35516c4b6bedb5.hot-update.js.map