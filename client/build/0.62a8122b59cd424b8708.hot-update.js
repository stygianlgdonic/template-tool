exports.id = 0;
exports.modules = {

/***/ "./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/style.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/style.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#example4{\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n\ttext-shadow: -1px 1px 2px #000,\r\n\t\t\t\t  1px 1px 2px #000,\r\n\t\t\t\t  1px -1px 0 #000,\r\n\t\t\t\t  -1px -1px 0 #000;\r\n}\r\n.glow {\r\n    font-size: 40px;\r\n    color: white;\r\n    text-align: center;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  @keyframes glow {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\r\n    }\r\n    \r\n    to {\r\n      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\r\n    }\r\n  }\r\n  \r\n  .glitch {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .glitch:after {\r\n    clip: rect(0, 9999px, 0, 0);\r\n    content: attr(data-text);\r\n    left: 0; /* Was 1px */\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-shadow: -1px 0 #ab77a9;\r\n    top: 0;\r\n    -webkit-animation: noise-anim 2s infinite linear alternate-reverse;\r\n    animation: noise-anim 2s infinite linear alternate-reverse;\r\n  }\r\n  \r\n  .glitch:before {\r\n    clip: rect(0, 9999px, 0, 0);\r\n    content: attr(data-text);\r\n    top: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-shadow: 2px 0 #05d003;\r\n    -webkit-animation: noise-anim-2 3s infinite linear alternate-reverse;\r\n    animation: noise-anim-2 3s infinite linear alternate-reverse;\r\n  }\r\n  .heading:before {\r\n    transform: translateX(-1px);\r\n    text-shadow: 1px 0 #a10897;\r\n  }\r\n  .heading:after {\r\n    transform: translateX(1px);\r\n    text-shadow: -1px 0 #05d003;\r\n  }\r\n  \r\n  \r\n  \r\n  @keyframes noise-anim {\r\n    0% {\r\n      clip: rect(21px, 9999px, 57px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(21px, 9999px, 80px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(55px, 9999px, 69px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(22px, 9999px, 55px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(38px, 9999px, 69px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(31px, 9999px, 84px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(15px, 9999px, 28px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(16px, 9999px, 100px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(25px, 9999px, 10px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(19px, 9999px, 19px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(71px, 9999px, 35px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(89px, 9999px, 21px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(20px, 9999px, 34px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(22px, 9999px, 61px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(65px, 9999px, 28px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(82px, 9999px, 47px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(64px, 9999px, 11px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(63px, 9999px, 28px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(60px, 9999px, 60px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(9px, 9999px, 90px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(40px, 9999px, 62px, 0);\r\n    }\r\n  }\r\n  @-webkit-keyframes noise-anim {\r\n    0% {\r\n      clip: rect(21px, 9999px, 57px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(21px, 9999px, 80px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(55px, 9999px, 69px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(22px, 9999px, 55px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(38px, 9999px, 69px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(31px, 9999px, 84px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(15px, 9999px, 28px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(16px, 9999px, 100px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(25px, 9999px, 10px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(19px, 9999px, 19px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(71px, 9999px, 35px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(89px, 9999px, 21px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(20px, 9999px, 34px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(22px, 9999px, 61px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(65px, 9999px, 28px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(82px, 9999px, 47px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(64px, 9999px, 11px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(63px, 9999px, 28px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(60px, 9999px, 60px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(9px, 9999px, 90px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(40px, 9999px, 62px, 0);\r\n    }\r\n  }\r\n  \r\n  @keyframes noise-anim-2 {\r\n    0% {\r\n      clip: rect(77px, 9999px, 63px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(7px, 9999px, 6px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(82px, 9999px, 78px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(85px, 9999px, 25px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(93px, 9999px, 38px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(70px, 9999px, 96px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(41px, 9999px, 72px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(39px, 9999px, 65px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(36px, 9999px, 34px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(84px, 9999px, 96px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(99px, 9999px, 45px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(37px, 9999px, 73px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(63px, 9999px, 20px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(55px, 9999px, 44px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(58px, 9999px, 11px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(61px, 9999px, 82px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(60px, 9999px, 9px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(37px, 9999px, 69px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(32px, 9999px, 64px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(63px, 9999px, 16px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(47px, 9999px, 34px, 0);\r\n    }\r\n  }\r\n  @-webkit-keyframes noise-anim-2 {\r\n    0% {\r\n      clip: rect(77px, 9999px, 63px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(7px, 9999px, 6px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(82px, 9999px, 78px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(85px, 9999px, 25px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(93px, 9999px, 38px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(70px, 9999px, 96px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(41px, 9999px, 72px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(39px, 9999px, 65px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(36px, 9999px, 34px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(84px, 9999px, 96px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(99px, 9999px, 45px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(37px, 9999px, 73px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(63px, 9999px, 20px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(55px, 9999px, 44px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(58px, 9999px, 11px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(61px, 9999px, 82px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(60px, 9999px, 9px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(37px, 9999px, 69px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(32px, 9999px, 64px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(63px, 9999px, 16px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(47px, 9999px, 34px, 0);\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/layouts/LoggedInLayout/CreateCardLayout/components/DesignTool/Components/SubNavBar/components/TextSelector/components/EffectStyletool/style.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,eAAe;CACf;;;sBAGqB;AACtB;AACA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,iDAAiD;EACnD;;EAEA;IACE;MACE,mIAAmI;IACrI;;IAEA;MACE,sIAAsI;IACxI;EACF;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;IACrB,yBAAyB;EAC3B;;EAEA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,OAAO,EAAE,YAAY;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,2BAA2B;IAC3B,MAAM;IACN,kEAAkE;IAClE,0DAA0D;EAC5D;;EAEA;IACE,2BAA2B;IAC3B,wBAAwB;IACxB,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,oEAAoE;IACpE,4DAA4D;EAC9D;EACA;IACE,2BAA2B;IAC3B,0BAA0B;EAC5B;EACA;IACE,0BAA0B;IAC1B,2BAA2B;EAC7B;;;;EAIA;IACE;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,kCAAkC;IACpC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,gCAAgC;IAClC;IACA;MACE,iCAAiC;IACnC;EACF;EACA;IACE;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,kCAAkC;IACpC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,gCAAgC;IAClC;IACA;MACE,iCAAiC;IACnC;EACF;;EAEA;IACE;MACE,iCAAiC;IACnC;IACA;MACE,+BAA+B;IACjC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,gCAAgC;IAClC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;EACF;EACA;IACE;MACE,iCAAiC;IACnC;IACA;MACE,+BAA+B;IACjC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,gCAAgC;IAClC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;IACA;MACE,iCAAiC;IACnC;EACF","sourcesContent":["#example4{\r\n\tcolor: white;\r\n\tfont-size: 40px;\r\n\ttext-shadow: -1px 1px 2px #000,\r\n\t\t\t\t  1px 1px 2px #000,\r\n\t\t\t\t  1px -1px 0 #000,\r\n\t\t\t\t  -1px -1px 0 #000;\r\n}\r\n.glow {\r\n    font-size: 40px;\r\n    color: white;\r\n    text-align: center;\r\n    animation: glow 1s ease-in-out infinite alternate;\r\n  }\r\n  \r\n  @keyframes glow {\r\n    from {\r\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\r\n    }\r\n    \r\n    to {\r\n      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\r\n    }\r\n  }\r\n  \r\n  .glitch {\r\n    position: relative;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .glitch:after {\r\n    clip: rect(0, 9999px, 0, 0);\r\n    content: attr(data-text);\r\n    left: 0; /* Was 1px */\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-shadow: -1px 0 #ab77a9;\r\n    top: 0;\r\n    -webkit-animation: noise-anim 2s infinite linear alternate-reverse;\r\n    animation: noise-anim 2s infinite linear alternate-reverse;\r\n  }\r\n  \r\n  .glitch:before {\r\n    clip: rect(0, 9999px, 0, 0);\r\n    content: attr(data-text);\r\n    top: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    text-shadow: 2px 0 #05d003;\r\n    -webkit-animation: noise-anim-2 3s infinite linear alternate-reverse;\r\n    animation: noise-anim-2 3s infinite linear alternate-reverse;\r\n  }\r\n  .heading:before {\r\n    transform: translateX(-1px);\r\n    text-shadow: 1px 0 #a10897;\r\n  }\r\n  .heading:after {\r\n    transform: translateX(1px);\r\n    text-shadow: -1px 0 #05d003;\r\n  }\r\n  \r\n  \r\n  \r\n  @keyframes noise-anim {\r\n    0% {\r\n      clip: rect(21px, 9999px, 57px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(21px, 9999px, 80px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(55px, 9999px, 69px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(22px, 9999px, 55px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(38px, 9999px, 69px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(31px, 9999px, 84px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(15px, 9999px, 28px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(16px, 9999px, 100px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(25px, 9999px, 10px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(19px, 9999px, 19px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(71px, 9999px, 35px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(89px, 9999px, 21px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(20px, 9999px, 34px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(22px, 9999px, 61px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(65px, 9999px, 28px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(82px, 9999px, 47px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(64px, 9999px, 11px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(63px, 9999px, 28px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(60px, 9999px, 60px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(9px, 9999px, 90px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(40px, 9999px, 62px, 0);\r\n    }\r\n  }\r\n  @-webkit-keyframes noise-anim {\r\n    0% {\r\n      clip: rect(21px, 9999px, 57px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(21px, 9999px, 80px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(55px, 9999px, 69px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(22px, 9999px, 55px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(38px, 9999px, 69px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(31px, 9999px, 84px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(15px, 9999px, 28px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(16px, 9999px, 100px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(25px, 9999px, 10px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(19px, 9999px, 19px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(71px, 9999px, 35px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(89px, 9999px, 21px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(20px, 9999px, 34px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(22px, 9999px, 61px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(65px, 9999px, 28px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(82px, 9999px, 47px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(64px, 9999px, 11px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(63px, 9999px, 28px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(60px, 9999px, 60px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(9px, 9999px, 90px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(40px, 9999px, 62px, 0);\r\n    }\r\n  }\r\n  \r\n  @keyframes noise-anim-2 {\r\n    0% {\r\n      clip: rect(77px, 9999px, 63px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(7px, 9999px, 6px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(82px, 9999px, 78px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(85px, 9999px, 25px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(93px, 9999px, 38px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(70px, 9999px, 96px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(41px, 9999px, 72px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(39px, 9999px, 65px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(36px, 9999px, 34px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(84px, 9999px, 96px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(99px, 9999px, 45px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(37px, 9999px, 73px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(63px, 9999px, 20px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(55px, 9999px, 44px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(58px, 9999px, 11px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(61px, 9999px, 82px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(60px, 9999px, 9px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(37px, 9999px, 69px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(32px, 9999px, 64px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(63px, 9999px, 16px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(47px, 9999px, 34px, 0);\r\n    }\r\n  }\r\n  @-webkit-keyframes noise-anim-2 {\r\n    0% {\r\n      clip: rect(77px, 9999px, 63px, 0);\r\n    }\r\n    5% {\r\n      clip: rect(7px, 9999px, 6px, 0);\r\n    }\r\n    10% {\r\n      clip: rect(82px, 9999px, 78px, 0);\r\n    }\r\n    15.0% {\r\n      clip: rect(85px, 9999px, 25px, 0);\r\n    }\r\n    20% {\r\n      clip: rect(93px, 9999px, 38px, 0);\r\n    }\r\n    25% {\r\n      clip: rect(70px, 9999px, 96px, 0);\r\n    }\r\n    30.0% {\r\n      clip: rect(41px, 9999px, 72px, 0);\r\n    }\r\n    35% {\r\n      clip: rect(39px, 9999px, 65px, 0);\r\n    }\r\n    40% {\r\n      clip: rect(36px, 9999px, 34px, 0);\r\n    }\r\n    45% {\r\n      clip: rect(84px, 9999px, 96px, 0);\r\n    }\r\n    50% {\r\n      clip: rect(99px, 9999px, 45px, 0);\r\n    }\r\n    55.0% {\r\n      clip: rect(37px, 9999px, 73px, 0);\r\n    }\r\n    60.0% {\r\n      clip: rect(63px, 9999px, 20px, 0);\r\n    }\r\n    65% {\r\n      clip: rect(55px, 9999px, 44px, 0);\r\n    }\r\n    70% {\r\n      clip: rect(58px, 9999px, 11px, 0);\r\n    }\r\n    75% {\r\n      clip: rect(61px, 9999px, 82px, 0);\r\n    }\r\n    80% {\r\n      clip: rect(60px, 9999px, 9px, 0);\r\n    }\r\n    85.0% {\r\n      clip: rect(37px, 9999px, 69px, 0);\r\n    }\r\n    90% {\r\n      clip: rect(32px, 9999px, 64px, 0);\r\n    }\r\n    95% {\r\n      clip: rect(63px, 9999px, 16px, 0);\r\n    }\r\n    100% {\r\n      clip: rect(47px, 9999px, 34px, 0);\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

};
//# sourceMappingURL=0.62a8122b59cd424b8708.hot-update.js.map