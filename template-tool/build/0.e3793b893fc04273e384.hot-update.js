exports.id = 0;
exports.modules = {

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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


  console.log({
    templateData
  });
  return __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Stage"], _extends({
    ref: $stage,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onMouseMove: onMouseMove // onTouchStart={checkDeselect}
    // onClick={onClickTap}

  }, templateData.dimensions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 9
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Layer"], {
    ref: $layer,
    onDragMove: _onDragMove,
    onDragEnd: _onDragEnd,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
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
        lineNumber: 428,
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
        lineNumber: 457,
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
        lineNumber: 474,
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
        lineNumber: 491,
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
        lineNumber: 508,
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
        lineNumber: 526,
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
        lineNumber: 543,
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
      lineNumber: 560,
      columnNumber: 17
    }
  }), __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    fill: "rgba(0,0,255,0.5)",
    ref: selectionRectRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MainStage);

/***/ })

};
//# sourceMappingURL=0.e3793b893fc04273e384.hot-update.js.map