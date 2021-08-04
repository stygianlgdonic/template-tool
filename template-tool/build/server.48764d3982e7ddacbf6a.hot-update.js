exports.id = "server";
exports.modules = {

/***/ "./src/components/Home/components/TemplateList/Elements/index.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Home/components/TemplateList/Elements/index.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\template-tool\\src\\components\\Home\\components\\TemplateList\\Elements\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Elements = ({
  konvaItem,
  index
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, konvaItem.type === "rectangle" && __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Rect"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), "elem.type === \"circle\" && (", __jsx(UCircle, {
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
      lineNumber: 21,
      columnNumber: 13
    }
  }), ") if (elem.type === \"line\") return (", __jsx(ULine, {
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
      lineNumber: 38,
      columnNumber: 13
    }
  }), ") if (elem.type === \"polygon\") return (", __jsx(UPolygon, {
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
      lineNumber: 55,
      columnNumber: 13
    }
  }), ") if (elem.type === \"svg\") return (", __jsx(USvg, {
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
      lineNumber: 72,
      columnNumber: 13
    }
  }), ") if (elem.type === \"image\") return (", __jsx(UImage, {
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
      lineNumber: 90,
      columnNumber: 13
    }
  }), ") if (elem.type === \"text\") return (", __jsx(UText, {
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
      lineNumber: 107,
      columnNumber: 13
    }
  }), ") })}");
};

/* harmony default export */ __webpack_exports__["default"] = (Elements);

/***/ })

};
//# sourceMappingURL=server.48764d3982e7ddacbf6a.hot-update.js.map