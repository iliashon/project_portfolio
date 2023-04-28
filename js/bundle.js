/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/page-switching.js":
/*!**************************************!*\
  !*** ./js/modules/page-switching.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const nav = document.querySelectorAll('#nav'),
  photo = document.querySelector('#my-photo'),
  photoLeft = document.querySelector('#my-photo-left'),
  home = document.querySelector('#home');
function switchingPage() {
  nav.forEach(link => {
    link.addEventListener('click', () => {
      photo.style.right = '-300px';
      home.style.top = '100%';
      if (photo.style.right === '-300px') {
        photoLeft.style.left = '0';
      }
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (switchingPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-switching */ "./js/modules/page-switching.js");

document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_page_switching__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map