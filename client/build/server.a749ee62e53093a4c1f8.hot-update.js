exports.id = "server";
exports.modules = {

/***/ "./src/contexts/DesignTool/DesingToolReducers.ts":
/*!*******************************************************!*\
  !*** ./src/contexts/DesignTool/DesingToolReducers.ts ***!
  \*******************************************************/
/*! exports provided: designToolInit, designToolReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolInit", function() { return designToolInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designToolReducer", function() { return designToolReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const designToolInit = {
  navbar_selection: "element",
  sub_navbar_selection: "element",
  card_header_state: ""
};
const designToolReducer = (designToolState, action) => {
  switch (action.type) {
    case 'Select_Element_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "element",
          sub_navbar_selection: "element"
        });
      }

    case 'Select_Text_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "text"
        });
      }

    case 'Select_Images_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "images",
          sub_navbar_selection: "images"
        });
      }

    case 'Select_Background_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "background",
          sub_navbar_selection: "background"
        });
      }

    case 'Select_Logo_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "logo",
          sub_navbar_selection: "logo"
        });
      }

    case 'Select_Shape_Color_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "element",
          sub_navbar_selection: "shapeColor"
        });
      }

    case 'Select_Texttool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "texttool"
        });
      }

    case 'Select_Font_Color_Tool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "fontColorTool"
        });
      }

    case 'Select_Effecttool_Nav':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          navbar_selection: "text",
          sub_navbar_selection: "effecttool"
        });
      }

    case 'Select_Shape_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: "shape"
        });
      }

    case 'Select_Text_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: "text"
        });
      }

    case 'Empty_Card_Header':
      {
        return _objectSpread(_objectSpread({}, designToolState), {}, {
          card_header_state: ""
        });
      }

    default:
      throw new Error("cannot update reducer");
  }
};

/***/ })

};
//# sourceMappingURL=server.a749ee62e53093a4c1f8.hot-update.js.map