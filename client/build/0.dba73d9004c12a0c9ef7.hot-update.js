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
/* harmony import */ var _contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../contexts/DesignTool/CardHeaderActions */ "./src/contexts/DesignTool/CardHeaderActions.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\MainStage\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const MainStage = ({
  cardData,
  setCardData,
  selectedId,
  setSelectedId
}) => {
  var _cardData$elements;

  const {
    emptyCardHeader
  } = Object(_contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_11__["default"])(); // snapping distance

  const GUIDELINE_OFFSET = 10;
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // if no elements are selected, empty card header 
    if (!nodesArray.length) {
      emptyCardHeader();
    }
  }, [nodesArray.length]);

  const getLineGuideStops = skipShape => {
    const vertical = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].width];
    const horizontal = [0, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height / 2, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"].height]; // we snap over edges and center of each object on the canvas

    $stage.current.find(".object").forEach(guideItem => {
      if (guideItem === skipShape) {
        return;
      }

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
      emptyCardHeader();
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


  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], _extends({
    ref: $stage,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove // onTouchStart={checkDeselect}

  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_9__["stageDimensions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 9
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    ref: $layer,
    onDragMove: _onDragMove,
    onDragEnd: _onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
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
          $tr.current.getLayer().batchDraw();
        }

        if (elem.id !== "shapes_background") {
          setSelectedId(elem.id);
        }
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
        lineNumber: 423,
        columnNumber: 25
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
        lineNumber: 451,
        columnNumber: 25
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
        lineNumber: 467,
        columnNumber: 25
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
        lineNumber: 483,
        columnNumber: 25
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
        lineNumber: 499,
        columnNumber: 25
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
        lineNumber: 516,
        columnNumber: 25
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
        lineNumber: 533,
        columnNumber: 25
      }
    });
  }), __jsx(_UTransformer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: `tr${selectedId}`,
    $tr: $tr,
    selectedShapeName: selectedId,
    setSelectedId: setSelectedId,
    cardData: cardData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 17
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    fill: "rgba(0,0,255,0.5)",
    ref: selectionRectRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainStage);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UTransformer.tsx ***!
  \********************************************************************************************************/
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
/* harmony import */ var _tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx");
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-konva-utils */ "./node_modules/react-konva-utils/es/index.js");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UTransformer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const MIN_WIDTH = 50;
const MIN_HEIGHT = 30;

const TransformerComponent = ({
  id,
  $tr,
  selectedShapeName,
  setSelectedId,
  cardData
}) => {
  const {
    0: isOpenFallbackModal,
    1: setIsOpenFallbackModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const selectedshape = cardData.elements.find(item => item.id === selectedShapeName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkNode();
  }, [selectedShapeName]);

  const checkNode = () => {
    const trNodes = $tr.current.nodes();
    const stage = $tr.current.getStage();
    const selectedNode = stage.findOne("#" + selectedShapeName);

    if (selectedNode) {
      $tr.current.nodes([selectedNode]);
    } else {
      !trNodes.length && $tr.current.detach();
      setSelectedId(null);
    }

    $tr.current.getLayer().batchDraw();
  };

  const handleOpenFallbackModal = () => {
    var _nodes$, _nodes$$attrs;

    const nodes = $tr.current.nodes();

    if (!!nodes.length && ((_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : (_nodes$$attrs = _nodes$.attrs) === null || _nodes$$attrs === void 0 ? void 0 : _nodes$$attrs.id.split("_")[0]) === "shapes") {
      setIsOpenFallbackModal(!isOpenFallbackModal);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Transformer"], {
    id: id,
    ref: $tr,
    padding: 5,
    ignoreStroke: true,
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_3__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: !!(selectedshape !== null && selectedshape !== void 0 && selectedshape.isFrame) ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleOpenFallbackModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: !!isOpenFallbackModal ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx(_tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    closeModal: () => {// setIsOpenFallbackModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/index.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "webfontloader");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainStage */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/MainStage/index.tsx");
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../contexts/DesignTool/CardHeaderActions */ "./src/contexts/DesignTool/CardHeaderActions.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const DesignTool = () => {
  const {
    selectShapeCardHeader,
    selectTextCardHeader,
    emptyCardHeader
  } = Object(_contexts_DesignTool_CardHeaderActions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    selectedId,
    setSelectedId,
    cardData,
    setCardData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_3__["DesignToolContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!!selectedId) {
      const shape = cardData.elements.find((item, index) => selectedId === item.id);

      if ((shape === null || shape === void 0 ? void 0 : shape.type) === 'text') {
        selectTextCardHeader();
      }

      if ((shape === null || shape === void 0 ? void 0 : shape.type) === 'rectangle' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'svg' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'circle' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'polygon' || (shape === null || shape === void 0 ? void 0 : shape.type) === 'line') {
        selectShapeCardHeader();
      }
    }
  }, [selectedId]);

  const handleEscape = e => {
    if (e.key === "Escape") {
      setSelectedId(null);
      emptyCardHeader();
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleEscape, false);
    webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({
      google: {
        families: ['Comfortaa', 'Josefin Sans', 'Euphoria Script', 'Oswald', 'Alfa Slab One', 'Bangers', 'Caveat', 'DM Sans', 'East Sea Dokdo', 'Homemade Apple', 'Kristi', 'Lobster Two', 'Maven Pro', 'Monoton', 'Montserrat', 'Playfair Display', 'Press Start 2P', 'Raleway', 'Roboto Slab', 'Shadows Into Light', 'Swanky and Moo Moo']
      }
    });
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);
  return __jsx("div", {
    className: "min-w-max  flex justify-center flex-col h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex justify-center mt-5 h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_MainStage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cardData: cardData,
    setCardData: setCardData,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DesignTool);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ElementHeader/ElementHeader.tsx ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-range */ "react-range");
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignTool/SubnavbarActions */ "./src/contexts/DesignTool/SubnavbarActions.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\ElementHeader\\ElementHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const ElementHeader = () => {
  // const [openstyle, setOpenstyle] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const [openstyle, setOpenstyle] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([100]); // !!state?false:true;

  const [showeModal, seteShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const {
    handleBorderWidthChange,
    handleStrokeColor,
    handleDeleteSelectedItem,
    handleTextOpacity
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])(); // !!state?false:true;

  const {
    selectShapeColorSubNav
  } = Object(_contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: "flex  justify-between ",
    style: {
      width: '110.5vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex pl-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia",
    onClick: selectShapeColorSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-10 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "relative w-full text-left flex flex-row border-2  items-center rounded-lg shadow-sm h-9  px-4 border-bordercolor   focus:ring-2  focus:ring-border focus:ring-indigo600 focus:border-gray300 sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: "mr-3 text-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, " Select Stroke"), __jsx("svg", {
    className: "",
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.234315 0.834352C0.546734 0.521932 1.05327 0.521932 1.36569 0.834352L4 3.46867L6.63431 0.834352C6.94673 0.521932 7.45327 0.521932 7.76568 0.834352C8.0781 1.14677 8.0781 1.6533 7.76568 1.96572L4.56569 5.16573C4.25327 5.47815 3.74673 5.47815 3.43431 5.16573L0.234315 1.96572C-0.0781049 1.6533 -0.0781049 1.14677 0.234315 0.834352Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }))), __jsx("ul", {
    className: "absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg w-52  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "relative w-full py-2 text-gray-900 cursor-default select-none ",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "flex mt-2 mb-3 px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full border border-bordercolor  rounded justify-center hover:bg-lightindigo",
    onClick: () => handleBorderWidthChange(0),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, "No Stroke")), __jsx("div", {
    className: "border-b border-bordercolor w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "flex mb-1 px-2 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full hover:ring-2  ring-indigo600 items-center",
    onClick: () => handleBorderWidthChange(15),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-4 font-normal truncate  mx-1  bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 41
    }
  })), __jsx("p", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 46
    }
  }, "4")), __jsx("div", {
    className: "flex px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full hover:ring-2  ring-indigo600 items-center",
    onClick: () => handleBorderWidthChange(10),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-2 font-normal truncate  mx-1  bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 41
    }
  })), __jsx("p", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 46
    }
  }, "2")), __jsx("div", {
    className: "flex px-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full hover:ring-2  ring-indigo600 items-center",
    onClick: () => handleBorderWidthChange(5),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "block w-full h-1 font-normal truncate  mx-1  bg-elementColor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  })), __jsx("p", {
    className: "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 46
    }
  }, "1")), __jsx("div", {
    className: "border-b border-bordercolor w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "grid grid-cols-4  mt-4 mx-3 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 37
    }
  }, __jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 62
    }
  }, __jsx("path", {
    d: "M20 13V27M27 20L13 20",
    stroke: "#4338CA",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 41
    }
  }), __jsx("rect", {
    x: "1",
    y: "1",
    width: "38",
    height: "38",
    rx: "5",
    stroke: "url(#paint0_linear)",
    "stroke-width": "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 41
    }
  }, __jsx("linearGradient", {
    id: "paint0_linear",
    x1: "20",
    y1: "0",
    x2: "20",
    y2: "40",
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 45
    }
  }, __jsx("stop", {
    "stop-color": "#FA7D7D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 49
    }
  }), __jsx("stop", {
    offset: "0.5",
    "stop-color": "#B7EF6F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 49
    }
  }), __jsx("stop", {
    offset: "1",
    "stop-color": "#BE6FEF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 49
    }
  }))))), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600 hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#4F46E5"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-fuschia hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#EF5DA8"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-greenish hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#5DEFC3"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-yellowish hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#EEA146"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-redish hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#EE4646"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-gray900 hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#111827"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }), __jsx("button", {
    className: "w-10 h-10 rounded-md bg-indigo600 hover:ring-2 ring-bluish",
    onClick: () => handleStrokeColor("#4F46E5"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }))))))), __jsx("div", {
    className: "flex flex-row  items-center  justify-between mt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-6  hover:bg-lightindigo h-10 w-10 pl-2 rounded-md focus:ring-indigo600 ring-2 ",
    onClick: () => {
      seteShowModal(true);
      setopenDropDown(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, showeModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: " z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => seteShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "border border-bordercolor  inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 right-0 mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 45
    }
  }, __jsx(react_range__WEBPACK_IMPORTED_MODULE_1__["Range"], {
    step: 1,
    min: 1,
    max: 100,
    values: values,
    onChange: values => {
      setValues(values);
      handleTextOpacity(values / 100);
    },
    renderTrack: ({
      props,
      children
    }) => __jsx("div", _extends({}, props, {
      className: "w-4/6 h-3 pr-2 my-4 bg-gray-200 rounded-md",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 57
      }
    }), children),
    renderThumb: ({
      props
    }) => __jsx("div", _extends({}, props, {
      className: "w-4 h-4 transform translate-x-10 bg-indigo600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 57
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 49
    }
  }), __jsx("input", {
    className: "ml-3 w-9 focus:outline-none",
    min: "0",
    max: "100",
    value: values,
    onChange: e => {
      if (!(parseFloat(e.target.value) > 100)) {
        setValues([e.target.value]);
        handleTextOpacity(parseFloat(e.target.value) / 100);
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 49
    }
  })))))) : null)), __jsx("div", {
    className: "py-4  ml-4 mr-2 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center",
    onClick: () => handleDeleteSelectedItem(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "20",
    height: "23",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14",
    stroke: "#B91C1C",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ElementHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/TextHeader/TextHeader.tsx ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-range */ "react-range");
/* harmony import */ var react_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignTool/DesignToolContext */ "./src/contexts/DesignTool/DesignToolContext.tsx");
/* harmony import */ var _contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../contexts/DesignTool/SubnavbarActions */ "./src/contexts/DesignTool/SubnavbarActions.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\tailwindComponents\\CardHeader\\components\\TextHeader\\TextHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/opacity.png */ "./src/assets/images/opacity.png");

const TextHeader = () => {
  var _fontSizeArray$find;

  const [showModal, setShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [showeModal, seteShowModal] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([0.01]);
  const {
    handleFontStyle,
    handleTextAlign,
    handleTextOpacity,
    handleDeleteSelectedItem,
    handleChangeFontSize
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    selectTextToolSubNav,
    selectEffectToolSubNav,
    selectFontColorToolSubNav
  } = Object(_contexts_DesignTool_SubnavbarActions__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    0: openDropDown,
    1: setopenDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    cardData,
    selectedId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_DesignTool_DesignToolContext__WEBPACK_IMPORTED_MODULE_2__["DesignToolContext"]);
  const selectedText = cardData.elements.find(item => item.id === selectedId);
  return __jsx("div", {
    className: "flex flex-row items-center justify-center gap-4 px-6 h-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative inline-block text-left  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    type: "button",
    className: "inline-flex  w-full px-4 py-2 text-sm font-medium bg-white border rounded-md shadow-sm border-bordercolor text-gray900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",
    id: "menu-button",
    "aria-expanded": "true",
    "aria-haspopup": "true",
    onClick: selectTextToolSubNav,
    style: {
      fontFamily: selectedText === null || selectedText === void 0 ? void 0 : selectedText.fontFamily
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, selectedText === null || selectedText === void 0 ? void 0 : selectedText.fontFamily)))), __jsx("div", {
    className: "z-50 flex items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "relative mt-1",
    onClick: () => setopenDropDown(!!openDropDown ? false : true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "relative flex flex-row  items-center  py-2 px-4 text-left border-2 rounded-lg shadow-sm  h-10 border-bordercolor hover:bg-lightindigo focus:outline-none focus:ring-border  sm:text-sm",
    "aria-haspopup": "listbox",
    "aria-expanded": "true",
    "aria-labelledby": "listbox-label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, !!selectedText ? (_fontSizeArray$find = _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["fontSizeArray"].find(item => item.size === selectedText.fontSize)) === null || _fontSizeArray$find === void 0 ? void 0 : _fontSizeArray$find.name : "Heading"), __jsx("ul", {
    className: "absolute z-10 py-1 mt-1 overflow-auto w-32 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
    role: "listbox",
    "aria-labelledby": "listbox-label",
    "aria-activedescendant": "listbox-option-3",
    style: {
      display: openDropDown ? "" : "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "relative  py-2  mr-8 text-gray-900  w-32 cursor-default select-none ",
    id: "listbox-option-0",
    role: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, _utils_defaults__WEBPACK_IMPORTED_MODULE_5__["fontSizeArray"].map((item, index) => __jsx("div", {
    key: index,
    className: "flex mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("button", {
    className: "flex w-full mx-1 px-4 py-1 rounded-md hover:bg-lightindigo",
    onClick: () => handleChangeFontSize(item.name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, item.name)))))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "ml-10 text-lg font-bold text-black",
    onClick: selectFontColorToolSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("svg", {
    className: "mt-2",
    width: "30",
    height: "30",
    viewBox: "0 0 36 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, __jsx("path", {
    d: "M12.392 27L13.9943 22.3807H20.8125L22.4062 27H25.2017L18.9205 9.54545H15.8778L9.59659 27H12.392ZM14.7614 20.1648L17.3352 12.7159H17.4716L20.0455 20.1648H14.7614Z",
    fill: "black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }), __jsx("g", {
    filter: "url(#filter0_dd)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  }, __jsx("rect", {
    x: "3",
    y: "30",
    width: "30",
    height: "4",
    rx: "2",
    fill: "#F9FAFB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  })), __jsx("rect", {
    x: "3",
    y: "30",
    width: "17",
    height: "4",
    rx: "2",
    fill: "#6366F1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx("filter", {
    id: "filter0_dd",
    x: "0",
    y: "28",
    width: "36",
    height: "10",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 37
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 41
    }
  }), __jsx("feOffset", {
    dy: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 41
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "effect1_dropShadow",
    result: "effect2_dropShadow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect2_dropShadow",
    result: "shape",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }))))))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-4 text-lg font-bold text-black w-10 h-10 hover:bg-lightindigo rounded-md",
    onClick: () => handleFontStyle("bold"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, "B")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-4 text-lg italic font-bold text-black w-10 h-10 hover:bg-lightindigo rounded-md",
    onClick: () => handleFontStyle("italic"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, "I")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-6  rounded-md hover:bg-lightindigo h-10 w-10 pl-2 ",
    onClick: () => setShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "23",
    height: "18",
    viewBox: "0 0 23 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M1 1H22M1 9H11.5M1 17H22",
    stroke: "#4B5563",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, showModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-end justify-center min-h-screen px-4 pb-20  text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => setShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: " border-2 border-bordercolor inline-block align-bottom w-40 bg-white rounded-lg px-4 justify-center overflow-hidden shadow-md transform transition-all top-0 mt-2 self-end right-0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 45
    }
  }, __jsx("button", {
    className: "hover:bg-lightindigo h-10 rounded-md w-10 flex items-center justify-center",
    onClick: () => handleTextAlign("left"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 49
    }
  }, __jsx("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 184
    }
  }, __jsx("path", {
    d: "M1 1H17M1 7H17M1 13H8",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 53
    }
  }))), __jsx("button", {
    className: "hover:bg-lightindigo h-10 rounded-md w-10 flex items-center justify-center",
    onClick: () => handleTextAlign("center"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 49
    }
  }, __jsx("svg", {
    width: "18",
    height: "10",
    viewBox: "0 0 18 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 186
    }
  }, __jsx("path", {
    d: "M1 1H17M1 9H17",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 53
    }
  }))), __jsx("button", {
    className: "hover:bg-lightindigo h-10 rounded-md w-10 flex items-center justify-center",
    onClick: () => handleTextAlign("right"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 49
    }
  }, __jsx("svg", {
    width: "18",
    height: "14",
    viewBox: "0 0 18 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 53
    }
  }, __jsx("path", {
    d: "M1 1H17M1 7H17M10 13H17",
    stroke: "#111827",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 57
    }
  })))))))) : null)), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ml-6 text-lg italic font-bold text-black ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: selectEffectToolSubNav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 21
    }
  }, "Effects")), __jsx("div", {
    className: "py-4 ml-6 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: " relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "ml-6  hover:bg-lightindigo h-10 w-10 pl-2 rounded-md",
    onClick: () => seteShowModal(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " absolute",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }, showeModal ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: " z-10 inset-0 overflow-y-auto",
    "aria-labelledby": "modal-title",
    role: "dialog",
    "aria-modal": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: " flex items-end justify-center  min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 37
    }
  }, __jsx("div", {
    onClick: () => seteShowModal(false),
    className: "fixed inset-0  transition-opacity",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "  inline-block align-bottom w-40  items-center bg-white rounded-lg px-4 justify-center overflow-hidden shadow-xl transform transition-all top-0 right-0 mt-2 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "w-full flex gap-4 justify-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 45
    }
  }, __jsx(react_range__WEBPACK_IMPORTED_MODULE_1__["Range"], {
    step: 0.01,
    min: 0.01,
    max: 1,
    values: values,
    onChange: values => {
      setValues(values);
      handleTextOpacity(values);
    },
    renderTrack: ({
      props,
      children
    }) => __jsx("div", _extends({}, props, {
      className: "w-full h-3 pr-2 my-4 bg-gray-400 rounded-md",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 57
      }
    }), children),
    renderThumb: ({
      props
    }) => __jsx("div", _extends({}, props, {
      className: "w-5 h-5 transform translate-x-10 bg-indigo600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 57
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 49
    }
  })))))) : null)), __jsx("div", {
    className: "py-4 ml-4 border-r-2 border-bordercolor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: " flex bg-transparent hover:bg-deletecolor rounded-md w-10 h-9 items-center justify-center ml-3",
    onClick: () => handleDeleteSelectedItem(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }, __jsx("svg", {
    width: "20",
    height: "23",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 25
    }
  }, __jsx("path", {
    d: "M13.1875 4.56858L12.4828 12.9017C12.4221 13.6199 11.7145 14.1764 10.8619 14.1764H4.13807C3.28553 14.1764 2.57794 13.6199 2.5172 12.9017L1.8125 4.56858M5.875 7.31368V11.4313M9.125 7.31368V11.4313M9.9375 4.56858V2.50976C9.9375 2.13074 9.57373 1.82349 9.125 1.82349H5.875C5.42627 1.82349 5.0625 2.13074 5.0625 2.50976V4.56858M1 4.56858H14",
    stroke: "#B91C1C",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ElementSelector/components/Shapes/Shapes.tsx ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/razzle/config/babel-loader/razzle-babel-loader.js):\nSyntaxError: C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ElementSelector\\components\\Shapes\\Shapes.tsx: Unexpected token (4:1)\n\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mCardElementsFunctions\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'../../../../../../../../../../Hooks/CardElementsFunctions'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m { defaultCircle\u001b[33m,\u001b[39m defaultPolygon\u001b[33m,\u001b[39m defaultRect\u001b[33m,\u001b[39m defaultTriangle } \u001b[36mfrom\u001b[39m \u001b[32m'../../../../../../../../../../utils/defaults'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m \u001b[36mimport\u001b[39m generatesvgUrl \u001b[36mfrom\u001b[39m \u001b[32m'../../../../../../../../../../utils/generatesvgUrl'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m \u001b[36minterface\u001b[39m \u001b[33mProps\u001b[39m {\u001b[0m\n    at Object._raise (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:788:17)\n    at Object.raiseWithData (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:781:17)\n    at Object.raise (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Object.unexpected (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:9929:16)\n    at Object.jsxParseIdentifier (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:4995:12)\n    at Object.jsxParseNamespacedName (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5005:23)\n    at Object.jsxParseElementName (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5016:21)\n    at Object.jsxParseOpeningElementAt (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5103:22)\n    at Object.jsxParseElementAt (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5136:33)\n    at Object.jsxParseElement (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5210:17)\n    at Object.parseExprAtom (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:5217:19)\n    at Object.parseExprSubscripts (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10914:23)\n    at Object.parseUpdate (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10894:21)\n    at Object.parseMaybeUnary (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10872:23)\n    at Object.parseMaybeUnary (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:7624:20)\n    at Object.parseExprOps (C:\\Users\\HP\\cardclan-backend\\client\\node_modules\\@babel\\parser\\lib\\index.js:10733:23)");

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx":
/*!***************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/ImageSelector/components/Frames/Frames.tsx ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../utils/defaults */ "./src/utils/defaults.ts");
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\ImageSelector\\components\\Frames\\Frames.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const image1 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/polygon.png */ "./src/assets/images/polygon.png");

const image2 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/circle.png */ "./src/assets/images/circle.png");

const image3 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/square.png */ "./src/assets/images/square.png");

const image4 = __webpack_require__(/*! ./../../../../../../../../../../assets/images/triangle.png */ "./src/assets/images/triangle.png");

const Frames = () => {
  const {
    handleAddNewRect,
    handleAddNewCircle,
    handleAddNewTrianlge,
    handleAddNewPolygon
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: "flex flex-col w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex flex-col w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-xl font-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Frames"), __jsx("div", {
    className: "grid w-full grid-cols-4 gap-4 mt-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      isFrame: true,
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewCircle(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultCircle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image2,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewRect(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultRect"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image3,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewPolygon(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPolygon"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image1,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 29
    }
  }))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => handleAddNewTrianlge(_objectSpread(_objectSpread({}, _utils_defaults__WEBPACK_IMPORTED_MODULE_1__["defaultTriangle"]), {}, {
      fill: undefined,
      patternImageUrl: "https://ca.slack-edge.com/T0100HQFETG-U01PVA68RDE-90fc2d0a43dd-72"
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: image4,
    className: "w-16 h-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Frames);

/***/ }),

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/FontColortool/FontColortool.tsx ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../Hooks/CardElementsFunctions */ "./src/Hooks/CardElementsFunctions/index.tsx");
var _jsxFileName = "C:\\Users\\HP\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\SubNavBar\\components\\TextSelector\\components\\FontColortool\\FontColortool.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const image = __webpack_require__(/*! ./../../../../../../../../../../assets/images/custom.png */ "./src/assets/images/custom.png");

const FontStyletool = () => {
  const {
    0: colorQuery,
    1: setColorQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: colorsArray,
    1: setColorsArray
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const handleColorQueryChange = e => {
    setColorQuery(e.target.value);
  };

  const {
    handleFill
  } = Object(_Hooks_CardElementsFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!colorQuery) return;
    const fetchURl = colorQuery.charAt(0) !== "#" ? `https://api.color.pizza/v1/names/?name=${colorQuery}&goodnamesonly=true` : `https://api.color.pizza/v1/?values=${colorQuery.substring(1)}&goodnamesonly=true`;
    fetch(fetchURl).then(response => response.json()).then(data => {
      const newColors = data.colors.map(item => item.hex);
      newColors.splice(5);
      setColorsArray(newColors);
    }).catch(error => console.log("No colors found!"));
  }, [colorQuery]);
  return __jsx("div", {
    className: "h-full flex flex-col w-full px-6 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: " flex justify-center items-center  w-full mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex h-14 rounded-md border-bordercolor border justify-center items-center w-full z-50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "w-auto flex justify-end items-center text-grey text-sm p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2ZM0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29583 11.5892 8.49572 10.8907 9.47653L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L9.47653 10.8907C8.49572 11.5892 7.29583 12 6 12C2.68629 12 0 9.31371 0 6Z",
    fill: "#9CA3AF",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  })))), __jsx("input", {
    onChange: handleColorQueryChange,
    className: "w-full rounded text-sm text-gray95 outline-none h-10 z-0 ",
    type: "text",
    placeholder: "Try \u201Cblue\u201D or \u201C#43345\u201D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: !!colorsArray.length ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Search results"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, console.log(colorsArray), colorsArray.map(item => __jsx("button", {
    style: {
      backgroundColor: item
    },
    className: "h-10 w-10 rounded-md",
    onClick: () => handleFill(item),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Document Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image,
    className: "w-10 h-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: " bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("button", {
    className: "text-md text-black mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "text-2xl mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 62
    }
  }, "+"), "Add your brand colors in Brand Kit")), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Shape Colors"), __jsx("div", {
    className: " mt-4 flex flex-row items-center gap-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "border-b-2 border-bordercolor mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "text-md text-gray40 mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Default Colors"), __jsx("div", {
    className: " mt-4 flex flex-col items-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-indigo600 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-redish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: " mt-4 flex flex-row items-center justify-between  w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-canvasbgcolor h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-gray95 h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-lightindigo h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-fuschia h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-greenish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }), __jsx("button", {
    className: "bg-yellowish h-10 w-10 rounded-md",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (FontStyletool);

/***/ })

};
//# sourceMappingURL=0.dba73d9004c12a0c9ef7.hot-update.js.map