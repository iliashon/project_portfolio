/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/page-switching.js":
/*!**************************************!*\
  !*** ./js/modules/page-switching.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const nav = document.querySelector('#nav'),
  linkSolid = nav.querySelectorAll('.nav__link-solid'),
  link = nav.querySelectorAll('.nav__link'),
  active = document.querySelectorAll('.info-block'),
  photo = document.querySelector('#my-photo'),
  photoLeft = document.querySelector('#my-photo-left'),
  about = document.querySelector('#about'),
  home = document.querySelector('#home'),
  portfolio = document.querySelector('#portfolio'),
  skills = document.querySelector('#skills'),
  contacts = document.querySelector('#contacts');
function switchingPage() {
  link.forEach(link => {
    if (link.classList.contains('about')) {
      link.addEventListener('click', () => {
        linkSolid.forEach(e => {
          if (e.classList.contains('nav__link_active')) {
            e.classList.remove('nav__link_active');
          }
        });
        link.parentNode.classList.add('nav__link_active');
        active.forEach(elem => {
          if (elem.classList.contains('info_active')) {
            elem.style.top = '-100%';
            photo.style.right = '-300px';
            elem.classList.remove('info_active');
          }
        });
        about.style.top = '50%';
        about.classList.add('info_active');
        photoLeft.style.left = '0px';
      });
    }
    if (link.classList.contains('home')) {
      link.addEventListener('click', () => {
        linkSolid.forEach(e => {
          if (e.classList.contains('nav__link_active')) {
            e.classList.remove('nav__link_active');
          }
        });
        link.parentNode.classList.add('nav__link_active');
        active.forEach(elem => {
          if (elem.classList.contains('info_active')) {
            elem.style.top = '-100%';
            photoLeft.style.left = '-300px';
            elem.classList.remove('info_active');
          }
        });
        home.style.top = '25%';
        home.classList.add('info_active');
        photo.style.right = '0px';
      });
    }
    if (link.classList.contains('portfolio')) {
      link.addEventListener('click', () => {
        linkSolid.forEach(e => {
          if (e.classList.contains('nav__link_active')) {
            e.classList.remove('nav__link_active');
          }
        });
        link.parentNode.classList.add('nav__link_active');
        active.forEach(elem => {
          if (elem.classList.contains('info_active')) {
            elem.style.top = '-100%';
            photoLeft.style.left = '-300px';
            elem.classList.remove('info_active');
            portfolio.style.top = '25%';
            portfolio.classList.add('info_active');
            photo.style.right = '0px';
          }
        });
      });
    }
    if (link.classList.contains('skills')) {
      link.addEventListener('click', () => {
        linkSolid.forEach(e => {
          if (e.classList.contains('nav__link_active')) {
            e.classList.remove('nav__link_active');
          }
        });
        link.parentNode.classList.add('nav__link_active');
        active.forEach(elem => {
          if (elem.classList.contains('info_active')) {
            elem.style.top = '-100%';
            photo.style.right = '-300px';
            elem.classList.remove('info_active');
            skills.style.top = '25%';
            skills.classList.add('info_active');
            photoLeft.style.left = '0px';
          }
        });
      });
    }
    if (link.classList.contains('contacts')) {
      link.addEventListener('click', () => {
        linkSolid.forEach(e => {
          if (e.classList.contains('nav__link_active')) {
            e.classList.remove('nav__link_active');
          }
        });
        link.parentNode.classList.add('nav__link_active');
        active.forEach(elem => {
          if (elem.classList.contains('info_active')) {
            elem.style.top = '-100%';
            photoLeft.style.left = '-300px';
            elem.classList.remove('info_active');
            contacts.style.top = '25%';
            contacts.classList.add('info_active');
            photo.style.right = '0px';
          }
        });
      });
    }
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