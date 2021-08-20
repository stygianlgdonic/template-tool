exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx":
/*!****************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/Card/MainCanvas/UText.tsx ***!
  \****************************************************************************************************************/
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
var _jsxFileName = "D:\\dev\\cardclan-backend\\client\\src\\layouts\\LoggedInLayout\\CreateCardLayout\\components\\DesignTool\\Components\\Card\\MainCanvas\\UText.tsx";
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
  var _textNode$current, _textNode$current$get, _textNode$current2, _textNode$current2$ge;

  const textNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [newTextObj, setNewTextObj] = Object(_shrugsy_use_immer_state__WEBPACK_IMPORTED_MODULE_3__["useImmerState"])(initial_textArea);
  const textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleSelectText = () => {
    setNewTextObj(initial_textArea);
    onSelect();
  };

  const handleTextDblClick = e => {
    // textNode.current.hide()
    textNode.current.visible(false); // $tr.current.detach()
    // $tr.current.visible(false)
    // console.log("$tr.current.visible()", $tr.current.visible())

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
      }); // $tr.current.visible(true)
      // console.log("$tr.current.visible()", $tr.current.visible())

      textNode.current.visible(true); // $tr.current.attachTo(textNode.current)
      // $tr.current.forceUpdate()
    }
  };

  const {
    fill: color,
    fontFamily,
    fontSize
  } = textProps;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_konva__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    ref: textNode,
    onClick: handleSelectText,
    onTap: handleSelectText,
    onDblClick: e => handleTextDblClick(e),
    onDblTap: e => handleTextDblClick(e),
    onTransform: e => {
      let SX = textNode.current.scaleX();
      let W = textNode.current.width(); // textAreaRef.current.style.transform = `rotateZ(${e.target.attrs?.rotation}deg)`
      // textAreaRef.current.style.transformOrigin = "50% 50%"

      textNode.current.setAttrs({
        // ...textNode.current.getAttrs(),
        // fontSize: isWordWrapping ? textNode.current.fontSize() : textNode.current.fontSize() * textNode.current.scaleX(),
        width: W * SX,
        scaleX: 1,
        scaleY: 1
      });
    } // opacity={!(isSelected && newTextObj.textEditVisible) ? textProps?.opacity : 0}
    // style={{
    //     display:  ? "none" : "block",
    // }}
    // onTransformEnd={onChange}
    ,
    onDragEnd: onChange
  }, textProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx(react_konva_utils__WEBPACK_IMPORTED_MODULE_2__["Html"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    onInput: e => {
      e.target.style.height = "5px";
      e.target.style.height = e.target.scrollHeight + "px";
    },
    ref: textAreaRef,
    value: textProps.text,
    style: {
      display: isSelected && newTextObj.textEditVisible ? "block" : "none",
      position: "absolute",
      top: newTextObj.textY + "px",
      left: newTextObj.textX + "px",
      outline: "none",
      // border: "2px solid blue",
      // opacity: 0,
      resize: 'none',
      overflow: 'hidden',
      minHeight: '50px',
      color,
      fontFamily,
      fontSize,
      width: (_textNode$current = textNode.current) === null || _textNode$current === void 0 ? void 0 : (_textNode$current$get = _textNode$current.getClientRect()) === null || _textNode$current$get === void 0 ? void 0 : _textNode$current$get.width,
      height: (_textNode$current2 = textNode.current) === null || _textNode$current2 === void 0 ? void 0 : (_textNode$current2$ge = _textNode$current2.getClientRect()) === null || _textNode$current2$ge === void 0 ? void 0 : _textNode$current2$ge.height,
      lineHeight: 1,
      background: 'transparent' // transform: `rotateZ(${textNode.current?.attrs?.rotation}deg)`,
      // transformOrigin: 'top left'

    },
    onChange: handleTextChange,
    onKeyDown: handleTextareaKeyDown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (UText);

/***/ })

};
//# sourceMappingURL=0.f683a0214bca732e02cc.hot-update.js.map