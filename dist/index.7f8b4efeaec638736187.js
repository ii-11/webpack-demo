(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "J6RI":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "HeW1");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./roboto-v20-latin-regular.woff2 */ "qdO2");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./roboto-v20-latin-regular.woff */ "epWq");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@font-face {\n    font-family: 'Roboto';\n    src:  url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n          url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody {\n    background: blue;\n}\n\n.hello {\n    color: red;\n    font-family: 'Roboto';\n    /* background: url('./icon.png'); */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "J6RI");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
console.log('The print.js module has loaded! See the network tab in dev tools...');

function printMe() {
    console.log('Button Clicked: Here\'s "some text"!');
}


/***/ }),

/***/ "epWq":
/*!*******************************************!*\
  !*** ./src/roboto-v20-latin-regular.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "49ae34d4cc6b98c00c69ab4c41de3e0c.woff");

/***/ }),

/***/ "qdO2":
/*!********************************************!*\
  !*** ./src/roboto-v20-latin-regular.woff2 ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "176f8f5bd5f02b3abfcf894955d7e919.woff2");

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "OMi8");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print.js */ "dSPy");



// import Icon from './icon.png';
// import Data from './data.xml';

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  const br = document.createElement("br");

  // Lodash, now imported by this script
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;

  element.appendChild(br);
  element.appendChild(btn);

  // Add the image to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.style = 'width: 50px';

  // element.appendChild(myIcon);

  // console.log("READDATA:");
  // console.log(Data);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  btn.onclick = (e) =>
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./print */ "dSPy")).then((module) => {
      const print = module.default;

      print();
  });

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (false) {}


/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvYm90by12MjAtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9yb2JvdG8tdjIwLWxhdGluLXJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNERBQWdEO0FBQzFGLHNDQUFzQyxtQkFBTyxDQUFDLCtEQUFtRDtBQUNqRyxvQ0FBb0MsbUJBQU8sQ0FBQyw4Q0FBa0M7QUFDOUUsb0NBQW9DLG1CQUFPLENBQUMsNkNBQWlDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsNEJBQTRCLHVKQUF1Six1QkFBdUIseUJBQXlCLEdBQUcsVUFBVSx1QkFBdUIsR0FBRyxZQUFZLGlCQUFpQiw0QkFBNEIsdUNBQXVDLE1BQU07QUFDdFo7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsVUFBVSxtQkFBTyxDQUFDLG1GQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxpRUFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDRjtBQUNZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsNkNBQUM7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RkFBaUQ7QUFDckQ7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBLElBQUksS0FBVSxFQUFFLEVBUWYiLCJmaWxlIjoiaW5kZXguN2Y4YjRlZmVhZWM2Mzg3MzYxODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vcm9ib3RvLXYyMC1sYXRpbi1yZWd1bGFyLndvZmYyXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4vcm9ib3RvLXYyMC1sYXRpbi1yZWd1bGFyLndvZmZcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6ICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4vaWNvbi5wbmcnKTsgKi9cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnNvbGUubG9nKCdUaGUgcHJpbnQuanMgbW9kdWxlIGhhcyBsb2FkZWQhIFNlZSB0aGUgbmV0d29yayB0YWIgaW4gZGV2IHRvb2xzLi4uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gICAgY29uc29sZS5sb2coJ0J1dHRvbiBDbGlja2VkOiBIZXJlXFwncyBcInNvbWUgdGV4dFwiIScpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQ5YWUzNGQ0Y2M2Yjk4YzAwYzY5YWI0YzQxZGUzZTBjLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTc2ZjhmNWJkNWYwMmIzYWJmY2Y4OTQ5NTVkN2U5MTkud29mZjJcIjsiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHByaW50TWUgZnJvbSBcIi4vcHJpbnQuanNcIjtcbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuLy8gaW1wb3J0IERhdGEgZnJvbSAnLi9kYXRhLnhtbCc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xuXG4gIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFtcIkhlbGxvXCIsIFwid2VicGFja1wiXSwgXCIgXCIpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoZWxsb1wiKTtcblxuICBidG4uaW5uZXJIVE1MID0gXCJDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhXCI7XG4gIC8vIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbiAgLy8gY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuICAvLyBteUljb24uc3R5bGUgPSAnd2lkdGg6IDUwcHgnO1xuXG4gIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQobXlJY29uKTtcblxuICAvLyBjb25zb2xlLmxvZyhcIlJFQUREQVRBOlwiKTtcbiAgLy8gY29uc29sZS5sb2coRGF0YSk7XG5cbiAgLy8gTm90ZSB0aGF0IGJlY2F1c2UgYSBuZXR3b3JrIHJlcXVlc3QgaXMgaW52b2x2ZWQsIHNvbWUgaW5kaWNhdGlvblxuICAvLyBvZiBsb2FkaW5nIHdvdWxkIG5lZWQgdG8gYmUgc2hvd24gaW4gYSBwcm9kdWN0aW9uLWxldmVsIHNpdGUvYXBwLlxuICBidG4ub25jbGljayA9IChlKSA9PlxuICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInByaW50XCIgKi8gXCIuL3ByaW50XCIpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgY29uc3QgcHJpbnQgPSBtb2R1bGUuZGVmYXVsdDtcblxuICAgICAgcHJpbnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmxldCBlbGVtZW50ID0gY29tcG9uZW50KCk7IC8vIFN0b3JlIHRoZSBlbGVtZW50IHRvIHJlLXJlbmRlciBvbiBwcmludC5qcyBjaGFuZ2VzXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJpbnQuanNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQWNjZXB0aW5nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIVwiKTtcbiAgICAvLyBwcmludE1lKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50ID0gY29tcG9uZW50KCk7IC8vIFJlLXJlbmRlciB0aGUgXCJjb21wb25lbnRcIiB0byB1cGRhdGUgdGhlIGNsaWNrIGhhbmRsZXJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=