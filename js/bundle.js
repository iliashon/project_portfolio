/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/page-switching.js":
/*!**************************************!*\
  !*** ./js/modules/page-switching.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const nav = document.querySelector("#nav"),
  linkSolid = nav.querySelectorAll(".nav__link-solid"),
  link = nav.querySelectorAll(".nav__link"),
  sectionMain = document.querySelectorAll(".info-block"),
  photoRight = document.querySelector("#my-photo"),
  photoLeft = document.querySelector("#my-photo-left"),
  homeTitle = document.querySelector("#home__title-next"),
  logo = document.querySelector("#logo");
function animateSwitching(attribute) {
  sectionMain.forEach(section => {
    if (section.classList.contains("ph-l") && section.id === attribute) {
      photoLeft.style.left = "0px";
      photoRight.style.right = "-300px";
    } else if (section.classList.contains("ph-r") && section.id === attribute) {
      photoLeft.style.left = "-300px";
      photoRight.style.right = "0px";
    }
    if (section.classList.contains("info_active")) {
      section.style.top = "-150%";
      section.classList.remove("info_active");
    }
  });
  sectionMain.forEach(section => {
    if (section.id === attribute) {
      section.style.top = "50%";
      section.classList.add("info_active");
    }
  });
}
function switchingPage() {
  homeTitle.addEventListener("click", clickLink => {
    linkSolid.forEach(activeLink => {
      if (activeLink.classList.contains("nav__link_active")) {
        activeLink.classList.remove("nav__link_active");
      }
    });
    animateSwitching(clickLink.target.getAttribute("data-name"));
    link.forEach(tabLink => {
      if (tabLink.getAttribute("data-name") === 'about') {
        tabLink.parentNode.classList.add("nav__link_active");
      }
    });
  });
  logo.addEventListener("click", clickLink => {
    linkSolid.forEach(activeLink => {
      if (activeLink.classList.contains("nav__link_active")) {
        activeLink.classList.remove("nav__link_active");
      }
    });
    console.log(clickLink.target.parentNode.getAttribute("data-name"));
    animateSwitching(clickLink.target.parentNode.getAttribute("data-name"));
    link.forEach(tabLink => {
      if (tabLink.getAttribute("data-name") === 'home') {
        tabLink.parentNode.classList.add("nav__link_active");
      }
    });
  });
  link.forEach(tabLink => {
    tabLink.addEventListener("click", clickLink => {
      linkSolid.forEach(activeLink => {
        if (activeLink.classList.contains("nav__link_active")) {
          activeLink.classList.remove("nav__link_active");
        }
      });
      animateSwitching(clickLink.target.getAttribute("data-name"));
      clickLink.target.parentNode.classList.add("nav__link_active");
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (switchingPage);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function() {



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page_switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-switching */ "./js/modules/page-switching.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_page_switching__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map