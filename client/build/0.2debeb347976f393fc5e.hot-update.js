exports.id = 0;
exports.modules = {

/***/ "./node_modules/react-konva-utils/es/html.js":
/*!***************************************************!*\
  !*** ./node_modules/react-konva-utils/es/html.js ***!
  \***************************************************/
/*! exports provided: Html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return Html; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const needForceStyle = (el) => {
    const pos = window.getComputedStyle(el).position;
    const ok = pos === 'absolute' || pos === 'relative';
    return !ok;
};
const Html = ({ children, groupProps, divProps, transform }) => {
    const groupRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const container = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    const shouldTransform = transform !== null && transform !== void 0 ? transform : true;
    const handleTransform = () => {
        const div = container.current;
        if (!div) {
            return;
        }
        if (shouldTransform && groupRef.current) {
            const tr = groupRef.current.getAbsoluteTransform();
            const attrs = tr.decompose();
            div.style.position = 'absolute';
            div.style.zIndex = '10';
            div.style.top = '0px';
            div.style.left = '0px';
            div.style.transform = `translate(${attrs.x}px, ${attrs.y}px) rotate(${attrs.rotation}deg) scaleX(${attrs.scaleX}) scaleY(${attrs.scaleY})`;
            div.style.transformOrigin = 'top left';
        }
        else {
            div.style.position = '';
            div.style.zIndex = '';
            div.style.top = '';
            div.style.left = '';
            div.style.transform = ``;
            div.style.transformOrigin = '';
        }
        const _a = divProps || {}, { style } = _a, restProps = __rest(_a, ["style"]);
        Object.assign(div.style, style);
        Object.assign(div, restProps);
    };
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(() => {
        var _a;
        const group = groupRef.current;
        if (!group) {
            return;
        }
        const parent = (_a = group.getStage()) === null || _a === void 0 ? void 0 : _a.container();
        if (!parent) {
            return;
        }
        let div = document.createElement('div');
        container.current = div;
        parent.appendChild(div);
        if (shouldTransform && needForceStyle(parent)) {
            parent.style.position = 'relative';
        }
        group.on('absoluteTransformChange', handleTransform);
        handleTransform();
        return () => {
            var _a;
            group.off('absoluteTransformChange', handleTransform);
            react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
            (_a = div.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(div);
        };
    }, [shouldTransform]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(() => {
        handleTransform();
    }, [divProps]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(() => {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(children, container.current);
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_konva__WEBPACK_IMPORTED_MODULE_2__["Group"], Object.assign({ ref: groupRef }, groupProps));
};


/***/ }),

/***/ "./node_modules/react-konva-utils/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-konva-utils/es/index.js ***!
  \****************************************************/
/*! exports provided: Html, Portal, useImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ "./node_modules/react-konva-utils/es/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html", function() { return _html__WEBPACK_IMPORTED_MODULE_0__["Html"]; });

/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal */ "./node_modules/react-konva-utils/es/portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return _portal__WEBPACK_IMPORTED_MODULE_1__["Portal"]; });

/* harmony import */ var _use_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-image */ "./node_modules/react-konva-utils/es/use-image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImage", function() { return _use_image__WEBPACK_IMPORTED_MODULE_2__["useImage"]; });






/***/ }),

/***/ "./node_modules/react-konva-utils/es/portal.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-konva-utils/es/portal.js ***!
  \*****************************************************/
/*! exports provided: Portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);


const Portal = ({ selector, enabled, children }) => {
    const outer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const inner = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
    const safeRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    const shouldMove = enabled !== null && enabled !== void 0 ? enabled : true;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(() => {
        if (!outer.current || !inner.current) {
            return;
        }
        safeRef.current = inner.current;
        const stage = outer.current.getStage();
        const newContainer = stage.findOne(selector);
        if (shouldMove && newContainer) {
            inner.current.moveTo(newContainer);
        }
        else {
            inner.current.moveTo(outer.current);
        }
        outer.current.getLayer().batchDraw();
        if (newContainer) {
            newContainer.getLayer().batchDraw();
        }
    }, [selector, shouldMove]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
        return () => {
            var _a;
            (_a = safeRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_konva__WEBPACK_IMPORTED_MODULE_1__["Group"], { name: "_outer_portal", ref: outer },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_konva__WEBPACK_IMPORTED_MODULE_1__["Group"], { name: "_inner_portal", ref: inner }, children)));
};


/***/ }),

/***/ "./node_modules/react-konva-utils/es/use-image.js":
/*!********************************************************!*\
  !*** ./node_modules/react-konva-utils/es/use-image.js ***!
  \********************************************************/
/*! exports provided: useImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-image */ "use-image");
/* harmony import */ var use_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(use_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "useImage", function() { return use_image__WEBPACK_IMPORTED_MODULE_0___default.a; });



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
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-konva-utils */ "./node_modules/react-konva-utils/es/index.js");
/* harmony import */ var _tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal */ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/tailwindComponents/CardHeader/components/ImageFallbackModal/ImageFallbackModal.tsx");
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
  setSelectedId
}) => {
  const {
    0: isOpenFallbackModal,
    1: setIsOpenFallbackModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkNode();
  }, [selectedShapeName]);

  const checkNode = () => {
    const stage = $tr.current.getStage();
    const selectedNode = stage.findOne("#" + selectedShapeName);

    if (selectedNode) {
      $tr.current.nodes([selectedNode]);
    } else {
      $tr.current.detach();
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
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_4__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: handleOpenFallbackModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 33
    }
  }))), __jsx("div", {
    className: !!isOpenFallbackModal ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx(_tailwindComponents_CardHeader_components_ImageFallbackModal_ImageFallbackModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    closeModal: () => {// setIsOpenFallbackModal(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TransformerComponent);

/***/ })

};
//# sourceMappingURL=0.2debeb347976f393fc5e.hot-update.js.map