exports.id = 0;
exports.modules = {

/***/ "./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/Screens/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-konva */ "react-konva");
/* harmony import */ var react_konva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_konva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_konva_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-konva-utils */ "./node_modules/react-konva-utils/es/index.js");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shrugsy/use-immer-state */ "@shrugsy/use-immer-state");
/* harmony import */ var _shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\Screens\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UText.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const initial_textArea = {
  textEditVisible: false,
  textX: 0,
  textY: 0
};

const UText = ({
  textProps,
  onChange,
  onSelect,
  handleTextEdit,
  isSelected,
  $tr
}) => {
  var _textNode$current, _textNode$current$att, _textNode$current2, _textNode$current2$ge, _textNode$current3, _textNode$current3$ge, _textNode$current4, _textNode$current4$at;

  const textNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [newTextObj, setNewTextObj] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__["useImmerState"])(initial_textArea);

  const handleSelectText = () => {
    setNewTextObj(initial_textArea);
    onSelect();
  };

  const handleTextDblClick = e => {
    // textNode.current.hide()
    // $tr.current.hide()
    const absPos = e.target.getAbsolutePosition();
    setNewTextObj(prev => {
      prev.textEditVisible = true;
      prev.textX = absPos.x;
      prev.textY = absPos.y;
    });
  };

  const handleTextChange = e => {
    handleTextEdit(e.target.value);
  };

  const handleTextareaKeyDown = e => {
    if (e.keyCode === "Escape") {
      setNewTextObj(prev => {
        prev.textEditVisible = false;
      }); // textNode.current.show()
      // $tr.current.show()
      // $tr.current.forceUpdate()
    }
  };

  const {
    fill: color,
    fontFamily,
    fontSize
  } = textProps;
  console.log("Aaaaaaa:", (_textNode$current = textNode.current) === null || _textNode$current === void 0 ? void 0 : (_textNode$current$att = _textNode$current.attrs) === null || _textNode$current$att === void 0 ? void 0 : _textNode$current$att.rotation);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: textNode,
    draggable: true,
    onClick: handleSelectText,
    onTap: handleSelectText,
    onDblClick: e => handleTextDblClick(e),
    onDblTap: e => handleTextDblClick(e),
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
    },
    visible: !(isSelected && newTextObj.textEditVisible) // style={{
    //     display:  ? "none" : "block",
    // }}
    // onTransformEnd={onChange}
    ,
    onDragEnd: onChange
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_2__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    onInput: e => {
      e.target.style.height = "5px";
      e.target.style.height = e.target.scrollHeight + "px";
    },
    value: textProps.text,
    style: {
      display: "none",
      position: "absolute",
      top: newTextObj.textY + "px",
      left: newTextObj.textX + "px",
      outline: "none",
      // border: "2px solid blue",
      resize: 'none',
      overflow: 'hidden',
      minHeight: '50px',
      color,
      fontFamily,
      fontSize,
      width: (_textNode$current2 = textNode.current) === null || _textNode$current2 === void 0 ? void 0 : (_textNode$current2$ge = _textNode$current2.getClientRect()) === null || _textNode$current2$ge === void 0 ? void 0 : _textNode$current2$ge.width,
      height: (_textNode$current3 = textNode.current) === null || _textNode$current3 === void 0 ? void 0 : (_textNode$current3$ge = _textNode$current3.getClientRect()) === null || _textNode$current3$ge === void 0 ? void 0 : _textNode$current3$ge.height,
      lineHeight: 1,
      background: 'transparent',
      transform: `rotateZ(${(_textNode$current4 = textNode.current) === null || _textNode$current4 === void 0 ? void 0 : (_textNode$current4$at = _textNode$current4.attrs) === null || _textNode$current4$at === void 0 ? void 0 : _textNode$current4$at.rotation}deg)`,
      transformOrigin: 'top left'
    },
    onChange: handleTextChange,
    onKeyDown: handleTextareaKeyDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UText);

/***/ })

};
//# sourceMappingURL=0.ba588a42281dcdf4d378.hot-update.js.map