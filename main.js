/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/stylesheets/main.scss */ "./src/assets/stylesheets/main.scss");
/* harmony import */ var _assets_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/App */ "./src/modules/App.js");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favicon.ico */ "./src/favicon.ico");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_favicon_ico__WEBPACK_IMPORTED_MODULE_2__);



var VirtualKeyboard = new _modules_App__WEBPACK_IMPORTED_MODULE_1__["default"]();
VirtualKeyboard.init('ENGLISH');
VirtualKeyboard.render(document.body);
VirtualKeyboard.activate();
document.body.querySelector('main').insertAdjacentHTML('beforeend', "<br><p>\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 Linux</p>\n  <br><p>\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u0430 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F: alt + shift \n  \u0438\u043B\u0438 \u043A\u043D\u043E\u043F\u043A\u0430 <i class=\"material-icons\">language</i> \u043D\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435</p>");

/***/ }),

/***/ "./src/assets/stylesheets/main.scss":
/*!******************************************!*\
  !*** ./src/assets/stylesheets/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttons = [{
  type: 'CHAR',
  ENGLISH: {
    "default": '`',
    shift: '~'
  },
  RUSSIAN: {
    "default": 'ё',
    shift: 'Ё'
  },
  code: 'Backquote'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '1',
    shift: '!'
  },
  RUSSIAN: {
    "default": '1',
    shift: '!'
  },
  code: 'Digit1'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '2',
    shift: '@'
  },
  RUSSIAN: {
    "default": '2',
    shift: '"'
  },
  code: 'Digit2'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '3',
    shift: '#'
  },
  RUSSIAN: {
    "default": '3',
    shift: '№'
  },
  code: 'Digit3'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '4',
    shift: '$'
  },
  RUSSIAN: {
    "default": '4',
    shift: ';'
  },
  code: 'Digit4'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '5',
    shift: '%'
  },
  RUSSIAN: {
    "default": '5',
    shift: '%'
  },
  code: 'Digit5'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '6',
    shift: '^'
  },
  RUSSIAN: {
    "default": '6',
    shift: ':'
  },
  code: 'Digit6'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '7',
    shift: '&'
  },
  RUSSIAN: {
    "default": '7',
    shift: '?'
  },
  code: 'Digit7'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '8',
    shift: '*'
  },
  RUSSIAN: {
    "default": '8',
    shift: '*'
  },
  code: 'Digit8'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '9',
    shift: '('
  },
  RUSSIAN: {
    "default": '9',
    shift: '('
  },
  code: 'Digit9'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '0',
    shift: ')'
  },
  RUSSIAN: {
    "default": '0',
    shift: ')'
  },
  code: 'Digit0'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '-',
    shift: '_'
  },
  RUSSIAN: {
    "default": '-',
    shift: '_'
  },
  code: 'Minus'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '=',
    shift: '+'
  },
  RUSSIAN: {
    "default": '=',
    shift: '+'
  },
  code: 'Equal'
}, {
  type: 'NAVIGATION',
  code: 'Backspace',
  title: 'Backspace'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '\t',
    shift: '\t'
  },
  RUSSIAN: {
    "default": '\t',
    shift: '\t'
  },
  title: 'Tab',
  code: 'Tab'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'q',
    shift: 'Q'
  },
  RUSSIAN: {
    "default": 'й',
    shift: 'Й'
  },
  code: 'KeyQ'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'w',
    shift: 'W'
  },
  RUSSIAN: {
    "default": 'ц',
    shift: 'Ц'
  },
  code: 'KeyW'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'e',
    shift: 'E'
  },
  RUSSIAN: {
    "default": 'у',
    shift: 'У'
  },
  code: 'KeyE'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'r',
    shift: 'R'
  },
  RUSSIAN: {
    "default": 'к',
    shift: 'К'
  },
  code: 'KeyR'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 't',
    shift: 'T'
  },
  RUSSIAN: {
    "default": 'е',
    shift: 'Е'
  },
  code: 'KeyT'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'y',
    shift: 'Y'
  },
  RUSSIAN: {
    "default": 'н',
    shift: 'Н'
  },
  code: 'KeyY'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'u',
    shift: 'U'
  },
  RUSSIAN: {
    "default": 'г',
    shift: 'Г'
  },
  code: 'KeyU'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'i',
    shift: 'I'
  },
  RUSSIAN: {
    "default": 'ш',
    shift: 'Ш'
  },
  code: 'KeyI'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'o',
    shift: 'O'
  },
  RUSSIAN: {
    "default": 'щ',
    shift: 'Щ'
  },
  code: 'KeyO'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'p',
    shift: 'P'
  },
  RUSSIAN: {
    "default": 'з',
    shift: 'З'
  },
  code: 'KeyP'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '[',
    shift: '{'
  },
  RUSSIAN: {
    "default": 'х',
    shift: 'Х'
  },
  code: 'BracketLeft'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": ']',
    shift: '}'
  },
  RUSSIAN: {
    "default": 'ъ',
    shift: 'Ъ'
  },
  code: 'BracketRight'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '\\',
    shift: '|'
  },
  RUSSIAN: {
    "default": '\\',
    shift: '/'
  },
  code: 'Backslash'
}, {
  type: 'NAVIGATION',
  code: 'Delete',
  title: 'Del'
}, {
  type: 'CONTROL',
  code: 'CapsLock',
  title: 'Caps lock'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'a',
    shift: 'A'
  },
  RUSSIAN: {
    "default": 'ф',
    shift: 'Ф'
  },
  code: 'KeyA'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 's',
    shift: 'S'
  },
  RUSSIAN: {
    "default": 'ы',
    shift: 'Ы'
  },
  code: 'KeyS'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'd',
    shift: 'D'
  },
  RUSSIAN: {
    "default": 'в',
    shift: 'В'
  },
  code: 'KeyD'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'f',
    shift: 'F'
  },
  RUSSIAN: {
    "default": 'а',
    shift: 'А'
  },
  code: 'KeyF'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'g',
    shift: 'G'
  },
  RUSSIAN: {
    "default": 'п',
    shift: 'П'
  },
  code: 'KeyG'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'h',
    shift: 'H'
  },
  RUSSIAN: {
    "default": 'р',
    shift: 'Р'
  },
  code: 'KeyH'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'j',
    shift: 'J'
  },
  RUSSIAN: {
    "default": 'о',
    shift: 'О'
  },
  code: 'KeyJ'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'k',
    shift: 'K'
  },
  RUSSIAN: {
    "default": 'л',
    shift: 'Л'
  },
  code: 'KeyK'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'l',
    shift: 'L'
  },
  RUSSIAN: {
    "default": 'д',
    shift: 'Д'
  },
  code: 'KeyL'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": ';',
    shift: ':'
  },
  RUSSIAN: {
    "default": 'ж',
    shift: 'Ж'
  },
  code: 'Semicolon'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": "'",
    shift: '"'
  },
  RUSSIAN: {
    "default": 'э',
    shift: 'Э'
  },
  code: 'Quote'
}, {
  type: 'NAVIGATION',
  code: 'Enter',
  title: 'Enter'
}, {
  type: 'CONTROL',
  code: 'ShiftLeft',
  title: 'Shift'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'z',
    shift: 'Z'
  },
  RUSSIAN: {
    "default": 'я',
    shift: 'Я'
  },
  code: 'KeyZ'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'x',
    shift: 'X'
  },
  RUSSIAN: {
    "default": 'ч',
    shift: 'Ч'
  },
  code: 'KeyX'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'c',
    shift: 'C'
  },
  RUSSIAN: {
    "default": 'с',
    shift: 'С'
  },
  code: 'KeyC'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'v',
    shift: 'V'
  },
  RUSSIAN: {
    "default": 'м',
    shift: 'М'
  },
  code: 'KeyV'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'b',
    shift: 'B'
  },
  RUSSIAN: {
    "default": 'и',
    shift: 'И'
  },
  code: 'KeyB'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'n',
    shift: 'N'
  },
  RUSSIAN: {
    "default": 'т',
    shift: 'Т'
  },
  code: 'KeyN'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": 'm',
    shift: 'M'
  },
  RUSSIAN: {
    "default": 'ь',
    shift: 'Ь'
  },
  code: 'KeyM'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": ',',
    shift: '<'
  },
  RUSSIAN: {
    "default": 'б',
    shift: 'Б'
  },
  code: 'Comma'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '.',
    shift: '>'
  },
  RUSSIAN: {
    "default": 'ю',
    shift: 'Ю'
  },
  code: 'Period'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": '/',
    shift: '?'
  },
  RUSSIAN: {
    "default": '.',
    shift: ','
  },
  code: 'Slash'
}, {
  type: 'CONTROL',
  code: 'ShiftRight',
  title: 'Shift'
}, {
  type: 'CONTROL',
  code: 'ControlLeft',
  title: 'Ctrl'
}, {
  type: 'CONTROL',
  title: 'Language'
}, {
  type: 'CONTROL',
  code: 'AltLeft',
  title: 'Alt'
}, {
  type: 'CHAR',
  ENGLISH: {
    "default": ' ',
    shift: ' '
  },
  RUSSIAN: {
    "default": ' ',
    shift: ' '
  },
  title: 'Space',
  code: 'Space'
}, {
  type: 'CONTROL',
  code: 'AltRight',
  title: 'Alt'
}, {
  type: 'CONTROL',
  code: 'ControlRight',
  title: 'Ctrl'
}, {
  type: 'NAVIGATION',
  code: 'ArrowLeft',
  title: 'Left'
}, {
  type: 'NAVIGATION',
  code: 'ArrowUp',
  title: 'Up'
}, {
  type: 'NAVIGATION',
  code: 'ArrowDown',
  title: 'Down'
}, {
  type: 'NAVIGATION',
  code: 'ArrowRight',
  title: 'Right'
}];
exports.buttons = buttons;

/***/ }),

/***/ "./src/favicon.ico":
/*!*************************!*\
  !*** ./src/favicon.ico ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "favicon.ico";

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard */ "./src/modules/Keyboard.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Textarea */ "./src/modules/Textarea.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "init",
    value: function init(language) {
      if (window.localStorage.getItem('keyboardLocalData')) {
        this.localData = JSON.parse(window.localStorage.getItem('keyboardLocalData'));
      } else {
        this.localData = {
          language: language,
          textareaValue: ''
        };
      }

      this.TEXTAREA = new _Textarea__WEBPACK_IMPORTED_MODULE_2__["default"](this.localData.textareaValue);
      this.KEYBOARD = new _Keyboard__WEBPACK_IMPORTED_MODULE_1__["default"](this.localData.language);
    }
  }, {
    key: "render",
    value: function render(node) {
      this.MAIN = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('main', 'main');
      this.MAIN.append(this.TEXTAREA.render(10), this.KEYBOARD.render());
      node.appendChild(this.MAIN);
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function () {
        _this.TEXTAREA.node.focus();

        document.addEventListener('keydown', function (event) {
          event.preventDefault();

          switch (_this.KEYBOARD.keyDown(event)) {
            case 'Backspace':
              _this.TEXTAREA.backspace();

              break;

            case 'Delete':
              _this.TEXTAREA["delete"]();

              break;

            case 'Tab':
              _this.TEXTAREA.addChar('\t');

              break;

            case 'Enter':
              _this.TEXTAREA.addChar('\n');

              break;

            case 'ArrowRight':
              _this.TEXTAREA.addChar('→');

              break;

            case 'ArrowLeft':
              _this.TEXTAREA.addChar('←');

              break;

            case 'ArrowUp':
              _this.TEXTAREA.addChar('↑');

              break;

            case 'ArrowDown':
              _this.TEXTAREA.addChar('↓');

              break;

            case 'ControlLeft':
            case 'ControlRight':
            case 'CapsLock':
              break;

            default:
              if (_this.KEYBOARD.elements.keyPressed) {
                _this.TEXTAREA.addChar(_this.KEYBOARD.elements.keyPressed);

                _this.KEYBOARD.elements.keyPressed = '';
              }

              break;
          }

          _this.TEXTAREA.value = _this.TEXTAREA.node.value;
          _this.TEXTAREA.node.selectionEnd = _this.TEXTAREA.selectionStart;
        });
        document.addEventListener('keyup', function (event) {
          _this.KEYBOARD.keyUp(event);
        });
        var removePressedClass = true;

        _this.KEYBOARD.elements.keysContainer.addEventListener('mousedown', function (event) {
          var ancestorKey = event.target.closest('.keyboard__key');

          if (event.target.classList.contains('keyboard__key') || ancestorKey) {
            if (ancestorKey) {
              ancestorKey.classList.add('keyboard__key-pressed');
              _this.pressedButton = ancestorKey;
            } else {
              event.target.classList.add('keyboard__key-pressed');
              _this.pressedButton = event.target;
            }

            var keyText = event.target.textContent;

            switch (keyText) {
              case 'Backspace':
                _this.TEXTAREA.backspace();

                break;

              case 'Del':
                _this.TEXTAREA["delete"]();

                break;

              case 'Caps lock':
                removePressedClass = !_this.KEYBOARD.capsToggle();
                break;

              case 'language':
                _this.KEYBOARD.changeLanguage();

                break;

              case 'Enter':
                _this.TEXTAREA.addChar('\n');

                break;

              case 'Tab':
                _this.TEXTAREA.addChar('\t');

                break;

              case 'arrow_right':
                _this.TEXTAREA.addChar('→');

                break;

              case 'arrow_left':
                _this.TEXTAREA.addChar('←');

                break;

              case 'arrow_drop_up':
                _this.TEXTAREA.addChar('↑');

                break;

              case 'arrow_drop_down':
                _this.TEXTAREA.addChar('↓');

                break;

              case 'Alt':
              case 'Ctrl':
              case 'Shift':
                break;

              default:
                _this.TEXTAREA.addChar(keyText);

                break;
            }
          }
        });

        _this.KEYBOARD.elements.keysContainer.addEventListener('mouseup', function () {
          if (!(_this.pressedButton.textContent === 'Caps lock') || removePressedClass) {
            _this.pressedButton.classList.remove('keyboard__key-pressed');
          }
        });

        _this.TEXTAREA.node.addEventListener('mouseup', function () {
          _this.TEXTAREA.selectionStart = _this.TEXTAREA.node.selectionStart;
          _this.TEXTAREA.value = _this.TEXTAREA.node.value;
        });

        _this.TEXTAREA.node.addEventListener('blur', function () {
          _this.TEXTAREA.node.focus();

          _this.TEXTAREA.node.selectionEnd = _this.TEXTAREA.selectionStart;
          _this.TEXTAREA.value = _this.TEXTAREA.node.value;
        });
      });
      window.addEventListener('beforeunload', function () {
        _this.localData.textareaValue = _this.TEXTAREA.node.value;
        _this.localData.language = _this.KEYBOARD.properties.language;
        window.localStorage.setItem('keyboardLocalData', JSON.stringify(_this.localData));
      });
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/modules/Keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/Keyboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons */ "./src/buttons.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard() {
    var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ENGLISH';

    _classCallCheck(this, Keyboard);

    this.elements = {
      keysContainer: null,
      keys: _buttons__WEBPACK_IMPORTED_MODULE_1___default.a.buttons,
      keysNodes: [],
      keyPressed: null
    };
    this.properties = {
      language: language,
      capsLock: false,
      altKey: false,
      shiftKey: false
    };
  }

  _createClass(Keyboard, [{
    key: "render",
    value: function render() {
      var _this$elements$keysCo;

      var keyboardFragment = document.createDocumentFragment();
      this.elements.keysContainer = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', 'keyboard');

      (_this$elements$keysCo = this.elements.keysContainer).append.apply(_this$elements$keysCo, _toConsumableArray(this._createKeys()));

      keyboardFragment.append(this.elements.keysContainer);
      return keyboardFragment;
    }
  }, {
    key: "_createKeys",
    value: function _createKeys() {
      var _this = this;

      var nodeRows = [];
      var language = this.properties.language;
      nodeRows.push(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', 'keyboard__row'));
      this.elements.keys.forEach(function (element) {
        var button = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('button', 'keyboard__key');

        _this.elements.keysNodes.push(button);

        var currentRow = nodeRows[nodeRows.length - 1];

        switch (element.type) {
          case 'CONTROL':
            button.innerHTML = element.title === 'Language' ? '<i class="material-icons">language</i>' : element.title;
            currentRow.append(button);

            if (element.code === 'ShiftRight') {
              button.classList.add('keyboard__key-medium');
              nodeRows.push(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', 'keyboard__row'));
            } else if (element.code === 'ShiftLeft' || element.code === 'CapsLock') {
              button.classList.add('keyboard__key-medium');
            } else {
              button.classList.add('keyboard__key-small');
            }

            break;

          case 'NAVIGATION':
            if (element.code === 'Backspace' || element.code === 'Enter' || element.code === 'Delete') {
              currentRow.append(button);
              button.classList.add(element.code === 'Delete' ? 'keyboard__key-small' : 'keyboard__key-large');
              button.innerHTML = element.title;
              nodeRows.push(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', 'keyboard__row'));
            } else {
              button.classList.add('keyboard__key-small');
              var arrow;

              if (element.code === 'ArrowLeft') {
                arrow = 'arrow_left';
                currentRow.append(button);
              } else if (element.code === 'ArrowRight') {
                arrow = 'arrow_right';
                currentRow.append(button);
              } else if (element.code === 'ArrowUp') {
                arrow = 'arrow_drop_up';
                var keyBlock = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', 'keyboard__key-block');
                keyBlock.append(button);
                currentRow.append(keyBlock);
              } else if (element.code === 'ArrowDown') {
                arrow = 'arrow_drop_down';
                currentRow.lastChild.append(button);
              }

              var icon = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('i', 'material-icons');
              icon.innerHTML = arrow;
              button.append(icon);
            }

            break;

          case 'CHAR':
            currentRow.append(button);

            if (element.code === 'Space') {
              button.classList.add('keyboard__key-space');
            } else {
              button.classList.add('keyboard__key-small');
            }

            if (element.code === 'Tab') {
              button.innerHTML = element.title;
            } else {
              button.innerHTML = element[language]["default"];
            }

            break;

          default:
            break;
        }
      });
      return nodeRows;
    } // eslint-disable-next-line consistent-return

  }, {
    key: "keyDown",
    value: function keyDown(event) {
      var _this2 = this;

      var _this$properties = this.properties,
          altKey = _this$properties.altKey,
          shiftKey = _this$properties.shiftKey;
      this.elements.keys.forEach(function (element, index) {
        if (element.code === event.code) {
          _this2.elements.keysNodes[index].classList.toggle('keyboard__key-pressed');

          if (element.type === 'CHAR') {
            var _char = _this2.elements.keysNodes[index].innerHTML;

            switch (_char) {
              case '&amp;':
                _this2.elements.keyPressed = '&';
                break;

              case '&lt;':
                _this2.elements.keyPressed = '<';
                break;

              case '&gt;':
                _this2.elements.keyPressed = '>';
                break;

              default:
                _this2.elements.keyPressed = _char;
                break;
            }
          }
        }
      });

      if (event.code === 'Backspace' || event.code === 'Enter' || event.code === 'Delete' || event.code === 'CapsLock' || event.code === 'Tab' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code.substring(0, 5) === 'Arrow') {
        return event.code;
      }

      var isCurrentShift = !!(event.code === 'ShiftLeft' || event.code === 'ShiftRight');
      var isCurrentAlt = !!(event.code === 'AltLeft' || event.code === 'AltRight');

      if (altKey && !shiftKey && isCurrentShift && event.key === 'GroupNext') {
        this.properties.shiftKey = true;
        this.changeLanguage();
      } else if (shiftKey && !altKey && isCurrentAlt && event.key === 'GroupNext') {
        this.properties.altKey = true;
        this.changeLanguage();
      } else if (isCurrentAlt && !altKey) {
        this.properties.altKey = true;
      } else if (isCurrentShift && !shiftKey) {
        this.properties.shiftKey = true;
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(event) {
      var _this3 = this;

      var _this$properties2 = this.properties,
          altKey = _this$properties2.altKey,
          shiftKey = _this$properties2.shiftKey;
      var _this$elements = this.elements,
          keysNodes = _this$elements.keysNodes,
          keys = _this$elements.keys;
      var keyPressed = this.elements.keyPressed;

      if (keyPressed) {
        keyPressed = '';
      }

      keys.forEach(function (element, index) {
        if (element.code === event.code) {
          var currentNode = keysNodes[index];

          if (event.code === 'CapsLock') {
            _this3.capsToggle();
          } else {
            currentNode.classList.remove('keyboard__key-pressed');
          }
        }
      });

      if ((event.code === 'AltLeft' || event.code === 'AltRight') && altKey) {
        this.properties.altKey = false;
      } else if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && shiftKey) {
        this.properties.shiftKey = false;
      }
    }
  }, {
    key: "capsToggle",
    value: function capsToggle() {
      var _this4 = this;

      var language = this.properties.language;
      var keys = this.elements.keys;
      this.properties.capsLock = !this.properties.capsLock;
      keys.forEach(function (element, index) {
        if (element[language] && element.code !== 'Tab') {
          var keysNode = _this4.elements.keysNodes[index];
          keysNode.innerHTML = _this4.properties.capsLock ? element[language].shift : element[language]["default"];
        }
      });
      return this.properties.capsLock;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage() {
      this.properties.language = this.properties.language === 'ENGLISH' ? 'RUSSIAN' : 'ENGLISH';
      var _this$properties3 = this.properties,
          language = _this$properties3.language,
          capsLock = _this$properties3.capsLock;
      var _this$elements2 = this.elements,
          keys = _this$elements2.keys,
          keysNodes = _this$elements2.keysNodes;
      keys.forEach(function (element, index) {
        if (element[language] && element.code !== 'Tab') {
          keysNodes[index].innerHTML = capsLock ? element[language].shift : element[language]["default"];
        }
      });
    }
  }]);

  return Keyboard;
}();

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);

/***/ }),

/***/ "./src/modules/Textarea.js":
/*!*********************************!*\
  !*** ./src/modules/Textarea.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textarea; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Textarea =
/*#__PURE__*/
function () {
  function Textarea() {
    var textareaValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Textarea);

    this.focus = false;
    this.value = textareaValue;
    this.selectionStart = textareaValue.length;
    this.node = null;
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render(rows) {
      this.node = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('textarea', 'keyboard-input');
      this.node.setAttribute('rows', rows);
      this.node.innerHTML = this.value;
      this.node.selectionStart = this.selectionStart;
      return this.node;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.node.value = this.value.substring(0, this.selectionStart) + this.value.substring(this.selectionStart + 1, this.value.length);
    }
  }, {
    key: "backspace",
    value: function backspace() {
      this.node.value = this.value.substring(0, this.selectionStart - 1) + this.value.substring(this.selectionStart, this.value.length);
      this.selectionStart -= 1;
    }
  }, {
    key: "addChar",
    value: function addChar(symbol) {
      this.node.value = this.value.substring(0, this.selectionStart) + symbol + this.value.substring(this.selectionStart, this.value.length);
      this.selectionStart += 1;
    }
  }]);

  return Textarea;
}();



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
function createElement(tag) {
  var _element$classList;

  var element = document.createElement(tag);

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  (_element$classList = element.classList).add.apply(_element$classList, classes);

  return element;
} // eslint-disable-next-line import/prefer-default-export




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlc2hlZXRzL21haW4uc2Nzcz85YzIwIiwid2VicGFjazovLy8uL3NyYy9idXR0b25zLmpzIiwid2VicGFjazovLy8uL3NyYy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvS2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvVGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbIlZpcnR1YWxLZXlib2FyZCIsIkFwcCIsImluaXQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJhY3RpdmF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJidXR0b25zIiwidHlwZSIsIkVOR0xJU0giLCJzaGlmdCIsIlJVU1NJQU4iLCJjb2RlIiwidGl0bGUiLCJleHBvcnRzIiwibGFuZ3VhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxEYXRhIiwiSlNPTiIsInBhcnNlIiwidGV4dGFyZWFWYWx1ZSIsIlRFWFRBUkVBIiwiVGV4dGFyZWEiLCJLRVlCT0FSRCIsIktleWJvYXJkIiwibm9kZSIsIk1BSU4iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9jdXMiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwia2V5RG93biIsImJhY2tzcGFjZSIsImFkZENoYXIiLCJlbGVtZW50cyIsImtleVByZXNzZWQiLCJ2YWx1ZSIsInNlbGVjdGlvbkVuZCIsInNlbGVjdGlvblN0YXJ0Iiwia2V5VXAiLCJyZW1vdmVQcmVzc2VkQ2xhc3MiLCJrZXlzQ29udGFpbmVyIiwiYW5jZXN0b3JLZXkiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJwcmVzc2VkQnV0dG9uIiwia2V5VGV4dCIsInRleHRDb250ZW50IiwiY2Fwc1RvZ2dsZSIsImNoYW5nZUxhbmd1YWdlIiwicmVtb3ZlIiwicHJvcGVydGllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJrZXlzIiwiZGF0YWJhc2UiLCJrZXlzTm9kZXMiLCJjYXBzTG9jayIsImFsdEtleSIsInNoaWZ0S2V5Iiwia2V5Ym9hcmRGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJfY3JlYXRlS2V5cyIsIm5vZGVSb3dzIiwicHVzaCIsImZvckVhY2giLCJlbGVtZW50IiwiYnV0dG9uIiwiY3VycmVudFJvdyIsImxlbmd0aCIsImlubmVySFRNTCIsImFycm93Iiwia2V5QmxvY2siLCJsYXN0Q2hpbGQiLCJpY29uIiwiaW5kZXgiLCJ0b2dnbGUiLCJjaGFyIiwic3Vic3RyaW5nIiwiaXNDdXJyZW50U2hpZnQiLCJpc0N1cnJlbnRBbHQiLCJrZXkiLCJjdXJyZW50Tm9kZSIsImtleXNOb2RlIiwicm93cyIsInNldEF0dHJpYnV0ZSIsInN5bWJvbCIsInRhZyIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hB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QXJCLEVBQXdCLEtBQUszQyxjQUFMLEdBQXNCLENBQTlDLElBQ2hCLEtBQUtGLEtBQUwsQ0FBVzZDLFNBQVgsQ0FBcUIsS0FBSzNDLGNBQTFCLEVBQTBDLEtBQUtGLEtBQUwsQ0FBV29DLE1BQXJELENBREY7QUFFQSxXQUFLbEMsY0FBTCxJQUF1QixDQUF2QjtBQUNEOzs7NEJBRU9tRCxNLEVBQVE7QUFDZCxXQUFLbkUsSUFBTCxDQUFVYyxLQUFWLEdBQWtCLEtBQUtBLEtBQUwsQ0FBVzZDLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsS0FBSzNDLGNBQTdCLElBQ2hCbUQsTUFEZ0IsR0FFaEIsS0FBS3JELEtBQUwsQ0FBVzZDLFNBQVgsQ0FBcUIsS0FBSzNDLGNBQTFCLEVBQTBDLEtBQUtGLEtBQUwsQ0FBV29DLE1BQXJELENBRkY7QUFHQSxXQUFLbEMsY0FBTCxJQUF1QixDQUF2QjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0g7QUFBQTtBQUFBLFNBQVNkLGFBQVQsQ0FBdUJrRSxHQUF2QixFQUF3QztBQUFBOztBQUN0QyxNQUFNckIsT0FBTyxHQUFHeEUsUUFBUSxDQUFDMkIsYUFBVCxDQUF1QmtFLEdBQXZCLENBQWhCOztBQURzQyxvQ0FBVEMsT0FBUztBQUFUQSxXQUFTO0FBQUE7O0FBRXRDLHdCQUFBdEIsT0FBTyxDQUFDeEIsU0FBUixFQUFrQkUsR0FBbEIsMkJBQXlCNEMsT0FBekI7O0FBQ0EsU0FBT3RCLE9BQVA7QUFDRCxDLENBR0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCAnLi9hc3NldHMvc3R5bGVzaGVldHMvbWFpbi5zY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnLi9tb2R1bGVzL0FwcCc7XG5pbXBvcnQgJy4vZmF2aWNvbi5pY28nO1xuXG5jb25zdCBWaXJ0dWFsS2V5Ym9hcmQgPSBuZXcgQXBwKCk7XG5WaXJ0dWFsS2V5Ym9hcmQuaW5pdCgnRU5HTElTSCcpO1xuVmlydHVhbEtleWJvYXJkLnJlbmRlcihkb2N1bWVudC5ib2R5KTtcblZpcnR1YWxLZXlib2FyZC5hY3RpdmF0ZSgpO1xuZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdtYWluJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICBgPGJyPjxwPtCa0LvQsNCy0LjQsNGC0YPRgNCwINGB0L7Qt9C00LDQvdCwINCyINC+0L/QtdGA0LDRhtC40L7QvdC90L7QuSDRgdC40YHRgtC10LzQtSBMaW51eDwvcD5cbiAgPGJyPjxwPtCU0LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsCDQutC+0LzQsdC40L3QsNGG0LjRjzogYWx0ICsgc2hpZnQgXG4gINC40LvQuCDQutC90L7Qv9C60LAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxhbmd1YWdlPC9pPiDQvdCwINC60LvQsNCy0LjQsNGC0YPRgNC1PC9wPmApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgYnV0dG9ucyA9IFtcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdgJywgc2hpZnQ6ICd+JyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GRJywgc2hpZnQ6ICfQgScgfSxcbiAgICBjb2RlOiAnQmFja3F1b3RlJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICcxJywgc2hpZnQ6ICchJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJzEnLCBzaGlmdDogJyEnIH0sXG4gICAgY29kZTogJ0RpZ2l0MScsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnMicsIHNoaWZ0OiAnQCcgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICcyJywgc2hpZnQ6ICdcIicgfSxcbiAgICBjb2RlOiAnRGlnaXQyJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICczJywgc2hpZnQ6ICcjJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJzMnLCBzaGlmdDogJ+KElicgfSxcbiAgICBjb2RlOiAnRGlnaXQzJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICc0Jywgc2hpZnQ6ICckJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJzQnLCBzaGlmdDogJzsnIH0sXG4gICAgY29kZTogJ0RpZ2l0NCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnNScsIHNoaWZ0OiAnJScgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICc1Jywgc2hpZnQ6ICclJyB9LFxuICAgIGNvZGU6ICdEaWdpdDUnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJzYnLCBzaGlmdDogJ14nIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAnNicsIHNoaWZ0OiAnOicgfSxcbiAgICBjb2RlOiAnRGlnaXQ2JyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICc3Jywgc2hpZnQ6ICcmJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJzcnLCBzaGlmdDogJz8nIH0sXG4gICAgY29kZTogJ0RpZ2l0NycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnOCcsIHNoaWZ0OiAnKicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICc4Jywgc2hpZnQ6ICcqJyB9LFxuICAgIGNvZGU6ICdEaWdpdDgnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJzknLCBzaGlmdDogJygnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAnOScsIHNoaWZ0OiAnKCcgfSxcbiAgICBjb2RlOiAnRGlnaXQ5JyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICcwJywgc2hpZnQ6ICcpJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJzAnLCBzaGlmdDogJyknIH0sXG4gICAgY29kZTogJ0RpZ2l0MCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnLScsIHNoaWZ0OiAnXycgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICctJywgc2hpZnQ6ICdfJyB9LFxuICAgIGNvZGU6ICdNaW51cycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnPScsIHNoaWZ0OiAnKycgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICc9Jywgc2hpZnQ6ICcrJyB9LFxuICAgIGNvZGU6ICdFcXVhbCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnTkFWSUdBVElPTicsXG4gICAgY29kZTogJ0JhY2tzcGFjZScsXG4gICAgdGl0bGU6ICdCYWNrc3BhY2UnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ1xcdCcsIHNoaWZ0OiAnXFx0JyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ1xcdCcsIHNoaWZ0OiAnXFx0JyB9LFxuICAgIHRpdGxlOiAnVGFiJyxcbiAgICBjb2RlOiAnVGFiJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdxJywgc2hpZnQ6ICdRJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9C5Jywgc2hpZnQ6ICfQmScgfSxcbiAgICBjb2RlOiAnS2V5UScsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAndycsIHNoaWZ0OiAnVycgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRhicsIHNoaWZ0OiAn0KYnIH0sXG4gICAgY29kZTogJ0tleVcnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ2UnLCBzaGlmdDogJ0UnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0YMnLCBzaGlmdDogJ9CjJyB9LFxuICAgIGNvZGU6ICdLZXlFJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdyJywgc2hpZnQ6ICdSJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9C6Jywgc2hpZnQ6ICfQmicgfSxcbiAgICBjb2RlOiAnS2V5UicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAndCcsIHNoaWZ0OiAnVCcgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQtScsIHNoaWZ0OiAn0JUnIH0sXG4gICAgY29kZTogJ0tleVQnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ3knLCBzaGlmdDogJ1knIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0L0nLCBzaGlmdDogJ9CdJyB9LFxuICAgIGNvZGU6ICdLZXlZJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICd1Jywgc2hpZnQ6ICdVJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9CzJywgc2hpZnQ6ICfQkycgfSxcbiAgICBjb2RlOiAnS2V5VScsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnaScsIHNoaWZ0OiAnSScgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRiCcsIHNoaWZ0OiAn0KgnIH0sXG4gICAgY29kZTogJ0tleUknLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ28nLCBzaGlmdDogJ08nIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0YknLCBzaGlmdDogJ9CpJyB9LFxuICAgIGNvZGU6ICdLZXlPJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdwJywgc2hpZnQ6ICdQJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9C3Jywgc2hpZnQ6ICfQlycgfSxcbiAgICBjb2RlOiAnS2V5UCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnWycsIHNoaWZ0OiAneycgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRhScsIHNoaWZ0OiAn0KUnIH0sXG4gICAgY29kZTogJ0JyYWNrZXRMZWZ0JyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICddJywgc2hpZnQ6ICd9JyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GKJywgc2hpZnQ6ICfQqicgfSxcbiAgICBjb2RlOiAnQnJhY2tldFJpZ2h0JyxcbiAgfSxcblxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ1xcXFwnLCBzaGlmdDogJ3wnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAnXFxcXCcsIHNoaWZ0OiAnLycgfSxcbiAgICBjb2RlOiAnQmFja3NsYXNoJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdOQVZJR0FUSU9OJyxcbiAgICBjb2RlOiAnRGVsZXRlJyxcbiAgICB0aXRsZTogJ0RlbCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ09OVFJPTCcsXG4gICAgY29kZTogJ0NhcHNMb2NrJyxcbiAgICB0aXRsZTogJ0NhcHMgbG9jaycsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnYScsIHNoaWZ0OiAnQScgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRhCcsIHNoaWZ0OiAn0KQnIH0sXG4gICAgY29kZTogJ0tleUEnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ3MnLCBzaGlmdDogJ1MnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0YsnLCBzaGlmdDogJ9CrJyB9LFxuICAgIGNvZGU6ICdLZXlTJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdkJywgc2hpZnQ6ICdEJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9CyJywgc2hpZnQ6ICfQkicgfSxcbiAgICBjb2RlOiAnS2V5RCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnZicsIHNoaWZ0OiAnRicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQsCcsIHNoaWZ0OiAn0JAnIH0sXG4gICAgY29kZTogJ0tleUYnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ2cnLCBzaGlmdDogJ0cnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0L8nLCBzaGlmdDogJ9CfJyB9LFxuICAgIGNvZGU6ICdLZXlHJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdoJywgc2hpZnQ6ICdIJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GAJywgc2hpZnQ6ICfQoCcgfSxcbiAgICBjb2RlOiAnS2V5SCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnaicsIHNoaWZ0OiAnSicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQvicsIHNoaWZ0OiAn0J4nIH0sXG4gICAgY29kZTogJ0tleUonLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ2snLCBzaGlmdDogJ0snIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0LsnLCBzaGlmdDogJ9CbJyB9LFxuICAgIGNvZGU6ICdLZXlLJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdsJywgc2hpZnQ6ICdMJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9C0Jywgc2hpZnQ6ICfQlCcgfSxcbiAgICBjb2RlOiAnS2V5TCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnOycsIHNoaWZ0OiAnOicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQticsIHNoaWZ0OiAn0JYnIH0sXG4gICAgY29kZTogJ1NlbWljb2xvbicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiBcIidcIiwgc2hpZnQ6ICdcIicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRjScsIHNoaWZ0OiAn0K0nIH0sXG4gICAgY29kZTogJ1F1b3RlJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdOQVZJR0FUSU9OJyxcbiAgICBjb2RlOiAnRW50ZXInLFxuICAgIHRpdGxlOiAnRW50ZXInLFxuICB9LFxuXG4gIHtcbiAgICB0eXBlOiAnQ09OVFJPTCcsXG4gICAgY29kZTogJ1NoaWZ0TGVmdCcsXG4gICAgdGl0bGU6ICdTaGlmdCcsXG4gIH0sXG5cbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICd6Jywgc2hpZnQ6ICdaJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GPJywgc2hpZnQ6ICfQrycgfSxcbiAgICBjb2RlOiAnS2V5WicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAneCcsIHNoaWZ0OiAnWCcgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfRhycsIHNoaWZ0OiAn0KcnIH0sXG4gICAgY29kZTogJ0tleVgnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ2MnLCBzaGlmdDogJ0MnIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0YEnLCBzaGlmdDogJ9ChJyB9LFxuICAgIGNvZGU6ICdLZXlDJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICd2Jywgc2hpZnQ6ICdWJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9C8Jywgc2hpZnQ6ICfQnCcgfSxcbiAgICBjb2RlOiAnS2V5VicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnYicsIHNoaWZ0OiAnQicgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQuCcsIHNoaWZ0OiAn0JgnIH0sXG4gICAgY29kZTogJ0tleUInLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NIQVInLFxuICAgIEVOR0xJU0g6IHsgZGVmYXVsdDogJ24nLCBzaGlmdDogJ04nIH0sXG4gICAgUlVTU0lBTjogeyBkZWZhdWx0OiAn0YInLCBzaGlmdDogJ9CiJyB9LFxuICAgIGNvZGU6ICdLZXlOJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICdtJywgc2hpZnQ6ICdNJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GMJywgc2hpZnQ6ICfQrCcgfSxcbiAgICBjb2RlOiAnS2V5TScsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ0hBUicsXG4gICAgRU5HTElTSDogeyBkZWZhdWx0OiAnLCcsIHNoaWZ0OiAnPCcgfSxcbiAgICBSVVNTSUFOOiB7IGRlZmF1bHQ6ICfQsScsIHNoaWZ0OiAn0JEnIH0sXG4gICAgY29kZTogJ0NvbW1hJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICcuJywgc2hpZnQ6ICc+JyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJ9GOJywgc2hpZnQ6ICfQricgfSxcbiAgICBjb2RlOiAnUGVyaW9kJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICcvJywgc2hpZnQ6ICc/JyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJy4nLCBzaGlmdDogJywnIH0sXG4gICAgY29kZTogJ1NsYXNoJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDT05UUk9MJyxcbiAgICBjb2RlOiAnU2hpZnRSaWdodCcsXG4gICAgdGl0bGU6ICdTaGlmdCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnQ09OVFJPTCcsXG4gICAgY29kZTogJ0NvbnRyb2xMZWZ0JyxcbiAgICB0aXRsZTogJ0N0cmwnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NPTlRST0wnLFxuICAgIHRpdGxlOiAnTGFuZ3VhZ2UnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ0NPTlRST0wnLFxuICAgIGNvZGU6ICdBbHRMZWZ0JyxcbiAgICB0aXRsZTogJ0FsdCcsXG4gIH0sXG5cbiAge1xuICAgIHR5cGU6ICdDSEFSJyxcbiAgICBFTkdMSVNIOiB7IGRlZmF1bHQ6ICcgJywgc2hpZnQ6ICcgJyB9LFxuICAgIFJVU1NJQU46IHsgZGVmYXVsdDogJyAnLCBzaGlmdDogJyAnIH0sXG4gICAgdGl0bGU6ICdTcGFjZScsXG4gICAgY29kZTogJ1NwYWNlJyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDT05UUk9MJyxcbiAgICBjb2RlOiAnQWx0UmlnaHQnLFxuICAgIHRpdGxlOiAnQWx0JyxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdDT05UUk9MJyxcbiAgICBjb2RlOiAnQ29udHJvbFJpZ2h0JyxcbiAgICB0aXRsZTogJ0N0cmwnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ05BVklHQVRJT04nLFxuICAgIGNvZGU6ICdBcnJvd0xlZnQnLFxuICAgIHRpdGxlOiAnTGVmdCcsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnTkFWSUdBVElPTicsXG4gICAgY29kZTogJ0Fycm93VXAnLFxuICAgIHRpdGxlOiAnVXAnLFxuICB9LFxuICB7XG4gICAgdHlwZTogJ05BVklHQVRJT04nLFxuICAgIGNvZGU6ICdBcnJvd0Rvd24nLFxuICAgIHRpdGxlOiAnRG93bicsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnTkFWSUdBVElPTicsXG4gICAgY29kZTogJ0Fycm93UmlnaHQnLFxuICAgIHRpdGxlOiAnUmlnaHQnLFxuICB9LFxuXTtcblxuZXhwb3J0cy5idXR0b25zID0gYnV0dG9ucztcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCI7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL0tleWJvYXJkJztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL1RleHRhcmVhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgaW5pdChsYW5ndWFnZSkge1xuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleWJvYXJkTG9jYWxEYXRhJykpIHtcbiAgICAgIHRoaXMubG9jYWxEYXRhID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleWJvYXJkTG9jYWxEYXRhJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YSA9IHtcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIHRleHRhcmVhVmFsdWU6ICcnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLlRFWFRBUkVBID0gbmV3IFRleHRhcmVhKHRoaXMubG9jYWxEYXRhLnRleHRhcmVhVmFsdWUpO1xuICAgIHRoaXMuS0VZQk9BUkQgPSBuZXcgS2V5Ym9hcmQodGhpcy5sb2NhbERhdGEubGFuZ3VhZ2UpO1xuICB9XG5cbiAgcmVuZGVyKG5vZGUpIHtcbiAgICB0aGlzLk1BSU4gPSBjcmVhdGVFbGVtZW50KCdtYWluJywgJ21haW4nKTtcbiAgICB0aGlzLk1BSU4uYXBwZW5kKHRoaXMuVEVYVEFSRUEucmVuZGVyKDEwKSwgdGhpcy5LRVlCT0FSRC5yZW5kZXIoKSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLk1BSU4pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgIHRoaXMuVEVYVEFSRUEubm9kZS5mb2N1cygpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuS0VZQk9BUkQua2V5RG93bihldmVudCkpIHtcbiAgICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5iYWNrc3BhY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICBjYXNlICdEZWxldGUnOlxuICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5kZWxldGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ1xcdCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5hZGRDaGFyKCdcXG4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5hZGRDaGFyKCfihpInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ+KGkCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIHRoaXMuVEVYVEFSRUEuYWRkQ2hhcign4oaRJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5hZGRDaGFyKCfihpMnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NvbnRyb2xMZWZ0JzpcbiAgICAgICAgICBjYXNlICdDb250cm9sUmlnaHQnOlxuICAgICAgICAgIGNhc2UgJ0NhcHNMb2NrJzpcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmICh0aGlzLktFWUJPQVJELmVsZW1lbnRzLmtleVByZXNzZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5hZGRDaGFyKHRoaXMuS0VZQk9BUkQuZWxlbWVudHMua2V5UHJlc3NlZCk7XG4gICAgICAgICAgICAgIHRoaXMuS0VZQk9BUkQuZWxlbWVudHMua2V5UHJlc3NlZCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5URVhUQVJFQS52YWx1ZSA9IHRoaXMuVEVYVEFSRUEubm9kZS52YWx1ZTtcbiAgICAgICAgdGhpcy5URVhUQVJFQS5ub2RlLnNlbGVjdGlvbkVuZCA9IHRoaXMuVEVYVEFSRUEuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5LRVlCT0FSRC5rZXlVcChldmVudCk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHJlbW92ZVByZXNzZWRDbGFzcyA9IHRydWU7XG4gICAgICB0aGlzLktFWUJPQVJELmVsZW1lbnRzLmtleXNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFuY2VzdG9yS2V5ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5rZXlib2FyZF9fa2V5Jyk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdrZXlib2FyZF9fa2V5JylcbiAgICAgICAgfHwgYW5jZXN0b3JLZXkpIHtcbiAgICAgICAgICBpZiAoYW5jZXN0b3JLZXkpIHtcbiAgICAgICAgICAgIGFuY2VzdG9yS2V5LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19rZXktcHJlc3NlZCcpO1xuICAgICAgICAgICAgdGhpcy5wcmVzc2VkQnV0dG9uID0gYW5jZXN0b3JLZXk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5LXByZXNzZWQnKTtcbiAgICAgICAgICAgIHRoaXMucHJlc3NlZEJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qga2V5VGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICBzd2l0Y2ggKGtleVRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICAgICAgICAgIHRoaXMuVEVYVEFSRUEuYmFja3NwYWNlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRGVsJzpcbiAgICAgICAgICAgICAgdGhpcy5URVhUQVJFQS5kZWxldGUoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDYXBzIGxvY2snOlxuICAgICAgICAgICAgICByZW1vdmVQcmVzc2VkQ2xhc3MgPSAhdGhpcy5LRVlCT0FSRC5jYXBzVG9nZ2xlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgICAgICAgICB0aGlzLktFWUJPQVJELmNoYW5nZUxhbmd1YWdlKCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ1xcbicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgICAgIHRoaXMuVEVYVEFSRUEuYWRkQ2hhcignXFx0Jyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYXJyb3dfcmlnaHQnOlxuICAgICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ+KGkicpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93X2xlZnQnOlxuICAgICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ+KGkCcpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93X2Ryb3BfdXAnOlxuICAgICAgICAgICAgICB0aGlzLlRFWFRBUkVBLmFkZENoYXIoJ+KGkScpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Fycm93X2Ryb3BfZG93bic6XG4gICAgICAgICAgICAgIHRoaXMuVEVYVEFSRUEuYWRkQ2hhcign4oaTJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgIGNhc2UgJ0FsdCc6XG4gICAgICAgICAgICBjYXNlICdDdHJsJzpcbiAgICAgICAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuVEVYVEFSRUEuYWRkQ2hhcihrZXlUZXh0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5LRVlCT0FSRC5lbGVtZW50cy5rZXlzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlmICghKHRoaXMucHJlc3NlZEJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0NhcHMgbG9jaycpIHx8IHJlbW92ZVByZXNzZWRDbGFzcykge1xuICAgICAgICAgIHRoaXMucHJlc3NlZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdrZXlib2FyZF9fa2V5LXByZXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuVEVYVEFSRUEubm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICB0aGlzLlRFWFRBUkVBLnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5URVhUQVJFQS5ub2RlLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLlRFWFRBUkVBLnZhbHVlID0gdGhpcy5URVhUQVJFQS5ub2RlLnZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuVEVYVEFSRUEubm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLlRFWFRBUkVBLm5vZGUuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5URVhUQVJFQS5ub2RlLnNlbGVjdGlvbkVuZCA9IHRoaXMuVEVYVEFSRUEuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMuVEVYVEFSRUEudmFsdWUgPSB0aGlzLlRFWFRBUkVBLm5vZGUudmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnRleHRhcmVhVmFsdWUgPSB0aGlzLlRFWFRBUkVBLm5vZGUudmFsdWU7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5sYW5ndWFnZSA9IHRoaXMuS0VZQk9BUkQucHJvcGVydGllcy5sYW5ndWFnZTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2V5Ym9hcmRMb2NhbERhdGEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2FsRGF0YSkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gJy4uL2J1dHRvbnMnO1xuXG5jbGFzcyBLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGxhbmd1YWdlID0gJ0VOR0xJU0gnKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IHtcbiAgICAgIGtleXNDb250YWluZXI6IG51bGwsXG4gICAgICBrZXlzOiBkYXRhYmFzZS5idXR0b25zLFxuICAgICAga2V5c05vZGVzOiBbXSxcbiAgICAgIGtleVByZXNzZWQ6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMucHJvcGVydGllcyA9IHtcbiAgICAgIGxhbmd1YWdlLFxuICAgICAgY2Fwc0xvY2s6IGZhbHNlLFxuICAgICAgYWx0S2V5OiBmYWxzZSxcbiAgICAgIHNoaWZ0S2V5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qga2V5Ym9hcmRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB0aGlzLmVsZW1lbnRzLmtleXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAna2V5Ym9hcmQnKTtcbiAgICB0aGlzLmVsZW1lbnRzLmtleXNDb250YWluZXIuYXBwZW5kKC4uLnRoaXMuX2NyZWF0ZUtleXMoKSk7XG4gICAga2V5Ym9hcmRGcmFnbWVudC5hcHBlbmQodGhpcy5lbGVtZW50cy5rZXlzQ29udGFpbmVyKTtcbiAgICByZXR1cm4ga2V5Ym9hcmRGcmFnbWVudDtcbiAgfVxuXG4gIF9jcmVhdGVLZXlzKCkge1xuICAgIGNvbnN0IG5vZGVSb3dzID0gW107XG4gICAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuXG4gICAgbm9kZVJvd3MucHVzaChjcmVhdGVFbGVtZW50KCdkaXYnLCAna2V5Ym9hcmRfX3JvdycpKTtcblxuICAgIHRoaXMuZWxlbWVudHMua2V5cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBidXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAna2V5Ym9hcmRfX2tleScpO1xuICAgICAgdGhpcy5lbGVtZW50cy5rZXlzTm9kZXMucHVzaChidXR0b24pO1xuICAgICAgY29uc3QgY3VycmVudFJvdyA9IG5vZGVSb3dzW25vZGVSb3dzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICBjYXNlICdDT05UUk9MJzpcbiAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gZWxlbWVudC50aXRsZSA9PT0gJ0xhbmd1YWdlJ1xuICAgICAgICAgICAgPyAnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmxhbmd1YWdlPC9pPicgOiBlbGVtZW50LnRpdGxlO1xuXG4gICAgICAgICAgY3VycmVudFJvdy5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jb2RlID09PSAnU2hpZnRSaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZF9fa2V5LW1lZGl1bScpO1xuICAgICAgICAgICAgbm9kZVJvd3MucHVzaChjcmVhdGVFbGVtZW50KCdkaXYnLCAna2V5Ym9hcmRfX3JvdycpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY29kZSA9PT0gJ1NoaWZ0TGVmdCcgfHwgZWxlbWVudC5jb2RlID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleS1tZWRpdW0nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19rZXktc21hbGwnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTkFWSUdBVElPTic6XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY29kZSA9PT0gJ0JhY2tzcGFjZScgfHwgZWxlbWVudC5jb2RlID09PSAnRW50ZXInIHx8IGVsZW1lbnQuY29kZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSb3cuYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChlbGVtZW50LmNvZGUgPT09ICdEZWxldGUnID8gJ2tleWJvYXJkX19rZXktc21hbGwnIDogJ2tleWJvYXJkX19rZXktbGFyZ2UnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICAgICAgICAgICAgbm9kZVJvd3MucHVzaChjcmVhdGVFbGVtZW50KCdkaXYnLCAna2V5Ym9hcmRfX3JvdycpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkX19rZXktc21hbGwnKTtcbiAgICAgICAgICAgIGxldCBhcnJvdztcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICAgIGFycm93ID0gJ2Fycm93X2xlZnQnO1xuICAgICAgICAgICAgICBjdXJyZW50Um93LmFwcGVuZChidXR0b24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgICBhcnJvdyA9ICdhcnJvd19yaWdodCc7XG4gICAgICAgICAgICAgIGN1cnJlbnRSb3cuYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgIGFycm93ID0gJ2Fycm93X2Ryb3BfdXAnO1xuICAgICAgICAgICAgICBjb25zdCBrZXlCbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdrZXlib2FyZF9fa2V5LWJsb2NrJyk7XG4gICAgICAgICAgICAgIGtleUJsb2NrLmFwcGVuZChidXR0b24pO1xuICAgICAgICAgICAgICBjdXJyZW50Um93LmFwcGVuZChrZXlCbG9jayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgYXJyb3cgPSAnYXJyb3dfZHJvcF9kb3duJztcbiAgICAgICAgICAgICAgY3VycmVudFJvdy5sYXN0Q2hpbGQuYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlRWxlbWVudCgnaScsICdtYXRlcmlhbC1pY29ucycpO1xuICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBhcnJvdztcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmQoaWNvbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQ0hBUic6XG4gICAgICAgICAgY3VycmVudFJvdy5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgICBpZiAoZWxlbWVudC5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleS1zcGFjZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleS1zbWFsbCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWxlbWVudC5jb2RlID09PSAnVGFiJykge1xuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBlbGVtZW50W2xhbmd1YWdlXS5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub2RlUm93cztcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBrZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgeyBhbHRLZXksIHNoaWZ0S2V5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmVsZW1lbnRzLmtleXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmNvZGUgPT09IGV2ZW50LmNvZGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5rZXlzTm9kZXNbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2tleWJvYXJkX19rZXktcHJlc3NlZCcpO1xuXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdDSEFSJykge1xuICAgICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmVsZW1lbnRzLmtleXNOb2Rlc1tpbmRleF0uaW5uZXJIVE1MO1xuICAgICAgICAgIHN3aXRjaCAoY2hhcikge1xuICAgICAgICAgICAgY2FzZSAnJmFtcDsnOlxuICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmtleVByZXNzZWQgPSAnJic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJmx0Oyc6XG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMua2V5UHJlc3NlZCA9ICc8JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcmZ3Q7JzpcbiAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5rZXlQcmVzc2VkID0gJz4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMua2V5UHJlc3NlZCA9IGNoYXI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdCYWNrc3BhY2UnXG4gICAgfHwgZXZlbnQuY29kZSA9PT0gJ0VudGVyJ1xuICAgIHx8IGV2ZW50LmNvZGUgPT09ICdEZWxldGUnXG4gICAgfHwgZXZlbnQuY29kZSA9PT0gJ0NhcHNMb2NrJ1xuICAgIHx8IGV2ZW50LmNvZGUgPT09ICdUYWInXG4gICAgfHwgZXZlbnQuY29kZSA9PT0gJ0NvbnRyb2xMZWZ0J1xuICAgIHx8IGV2ZW50LmNvZGUgPT09ICdDb250cm9sUmlnaHQnXG4gICAgfHwgZXZlbnQuY29kZS5zdWJzdHJpbmcoMCwgNSkgPT09ICdBcnJvdycpIHtcbiAgICAgIHJldHVybiBldmVudC5jb2RlO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQ3VycmVudFNoaWZ0ID0gISEoZXZlbnQuY29kZSA9PT0gJ1NoaWZ0TGVmdCcgfHwgZXZlbnQuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnKTtcbiAgICBjb25zdCBpc0N1cnJlbnRBbHQgPSAhIShldmVudC5jb2RlID09PSAnQWx0TGVmdCcgfHwgZXZlbnQuY29kZSA9PT0gJ0FsdFJpZ2h0Jyk7XG4gICAgaWYgKGFsdEtleSAmJiAhc2hpZnRLZXkgJiYgaXNDdXJyZW50U2hpZnQgJiYgZXZlbnQua2V5ID09PSAnR3JvdXBOZXh0Jykge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNoaWZ0S2V5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5ICYmICFhbHRLZXkgJiYgaXNDdXJyZW50QWx0ICYmIGV2ZW50LmtleSA9PT0gJ0dyb3VwTmV4dCcpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5hbHRLZXkgPSB0cnVlO1xuICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNDdXJyZW50QWx0ICYmICFhbHRLZXkpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5hbHRLZXkgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaXNDdXJyZW50U2hpZnQgJiYgIXNoaWZ0S2V5KSB7XG4gICAgICB0aGlzLnByb3BlcnRpZXMuc2hpZnRLZXkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGtleVVwKGV2ZW50KSB7XG4gICAgY29uc3QgeyBhbHRLZXksIHNoaWZ0S2V5IH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgY29uc3QgeyBrZXlzTm9kZXMsIGtleXMgfSA9IHRoaXMuZWxlbWVudHM7XG4gICAgbGV0IHsga2V5UHJlc3NlZCB9ID0gdGhpcy5lbGVtZW50cztcblxuICAgIGlmIChrZXlQcmVzc2VkKSB7IGtleVByZXNzZWQgPSAnJzsgfVxuXG4gICAga2V5cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuY29kZSA9PT0gZXZlbnQuY29kZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IGtleXNOb2Rlc1tpbmRleF07XG4gICAgICAgIGlmIChldmVudC5jb2RlID09PSAnQ2Fwc0xvY2snKSB7XG4gICAgICAgICAgdGhpcy5jYXBzVG9nZ2xlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmRfX2tleS1wcmVzc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICgoZXZlbnQuY29kZSA9PT0gJ0FsdExlZnQnIHx8IGV2ZW50LmNvZGUgPT09ICdBbHRSaWdodCcpICYmIGFsdEtleSkge1xuICAgICAgdGhpcy5wcm9wZXJ0aWVzLmFsdEtleSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoKGV2ZW50LmNvZGUgPT09ICdTaGlmdExlZnQnIHx8IGV2ZW50LmNvZGUgPT09ICdTaGlmdFJpZ2h0JykgJiYgc2hpZnRLZXkpIHtcbiAgICAgIHRoaXMucHJvcGVydGllcy5zaGlmdEtleSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNhcHNUb2dnbGUoKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZSB9ID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgIGNvbnN0IHsga2V5cyB9ID0gdGhpcy5lbGVtZW50cztcbiAgICB0aGlzLnByb3BlcnRpZXMuY2Fwc0xvY2sgPSAhdGhpcy5wcm9wZXJ0aWVzLmNhcHNMb2NrO1xuICAgIGtleXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50W2xhbmd1YWdlXSAmJiAoZWxlbWVudC5jb2RlICE9PSAnVGFiJykpIHtcbiAgICAgICAgY29uc3Qga2V5c05vZGUgPSB0aGlzLmVsZW1lbnRzLmtleXNOb2Rlc1tpbmRleF07XG4gICAgICAgIGtleXNOb2RlLmlubmVySFRNTCA9IHRoaXMucHJvcGVydGllcy5jYXBzTG9ja1xuICAgICAgICAgID8gZWxlbWVudFtsYW5ndWFnZV0uc2hpZnQgOiBlbGVtZW50W2xhbmd1YWdlXS5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuY2Fwc0xvY2s7XG4gIH1cblxuICBjaGFuZ2VMYW5ndWFnZSgpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMubGFuZ3VhZ2UgPSB0aGlzLnByb3BlcnRpZXMubGFuZ3VhZ2UgPT09ICdFTkdMSVNIJyA/ICdSVVNTSUFOJyA6ICdFTkdMSVNIJztcblxuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIGNhcHNMb2NrIH0gPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgY29uc3QgeyBrZXlzLCBrZXlzTm9kZXMgfSA9IHRoaXMuZWxlbWVudHM7XG5cbiAgICBrZXlzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudFtsYW5ndWFnZV0gJiYgZWxlbWVudC5jb2RlICE9PSAnVGFiJykge1xuICAgICAgICBrZXlzTm9kZXNbaW5kZXhdLmlubmVySFRNTCA9IGNhcHNMb2NrID8gZWxlbWVudFtsYW5ndWFnZV0uc2hpZnQgOiBlbGVtZW50W2xhbmd1YWdlXS5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEge1xuICBjb25zdHJ1Y3Rvcih0ZXh0YXJlYVZhbHVlID0gJycpIHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHRleHRhcmVhVmFsdWU7XG4gICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRleHRhcmVhVmFsdWUubGVuZ3RoO1xuICAgIHRoaXMubm9kZSA9IG51bGw7XG4gIH1cblxuICByZW5kZXIocm93cykge1xuICAgIHRoaXMubm9kZSA9IGNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgJ2tleWJvYXJkLWlucHV0Jyk7XG4gICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIHJvd3MpO1xuICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMubm9kZS5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLm5vZGUudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cmluZygwLCB0aGlzLnNlbGVjdGlvblN0YXJ0KVxuICAgICsgdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zZWxlY3Rpb25TdGFydCArIDEsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIGJhY2tzcGFjZSgpIHtcbiAgICB0aGlzLm5vZGUudmFsdWUgPSB0aGlzLnZhbHVlLnN1YnN0cmluZygwLCB0aGlzLnNlbGVjdGlvblN0YXJ0IC0gMSlcbiAgICArIHRoaXMudmFsdWUuc3Vic3RyaW5nKHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICB0aGlzLnNlbGVjdGlvblN0YXJ0IC09IDE7XG4gIH1cblxuICBhZGRDaGFyKHN5bWJvbCkge1xuICAgIHRoaXMubm9kZS52YWx1ZSA9IHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc2VsZWN0aW9uU3RhcnQpXG4gICAgKyBzeW1ib2xcbiAgICArIHRoaXMudmFsdWUuc3Vic3RyaW5nKHRoaXMuc2VsZWN0aW9uU3RhcnQsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ICs9IDE7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCAuLi5jbGFzc2VzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=