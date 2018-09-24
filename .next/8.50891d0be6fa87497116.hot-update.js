webpackHotUpdate(8,{

/***/ "./pages/Home/CardGetStarted.js":
false,

/***/ "./pages/Home/ValuesSetion.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/krishna/Sites/projects/clients/meee/pages/Home/ValuesSetion.js: Unexpected token (14:24)\n\n  12 |             <div className=\"col-sm-7\">\n  13 |               <TextSection\n> 14 |                 title=\"\"\"+What are your values?+\"\"\"\n     |                         ^\n  15 |               body=\"Values are incredibly important. If you can understand, nurture and connect with your values, you can start creating the kind of life you want to lead.\"\n  16 |             />\n  17 |               <div className=\"text-section-separator\" />\n    at _class.raise (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:2063:16)\n    at _class.jsxParseIdentifier (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:7874:14)\n    at _class.jsxParseNamespacedName (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:7884:23)\n    at _class.jsxParseAttribute (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:7967:24)\n    at _class.jsxParseOpeningElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:7984:35)\n    at _class.jsxParseElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8008:33)\n    at _class.jsxParseElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElement (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8077:19)\n    at _class.parseExprAtom (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:8084:21)\n    at _class.parseExprSubscripts (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/krishna/Sites/projects/clients/meee/node_modules/babylon/lib/index.js:2616:21)");

/***/ }),

/***/ "./pages/Home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll__ = __webpack_require__("./node_modules/react-scroll/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_WelcomeMee__ = __webpack_require__("./components/WelcomeMee.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TextSection__ = __webpack_require__("./components/TextSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ValuesSetion__ = __webpack_require__("./pages/Home/ValuesSetion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ValuesSetion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ValuesSetion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MakesMeSection__ = __webpack_require__("./pages/Home/MakesMeSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_QuoteSection__ = __webpack_require__("./components/QuoteSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__GetStartedWithCards__ = __webpack_require__("./pages/Home/GetStartedWithCards.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/Home/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "onPressLearnMore", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        // const scrollPx = (typeof window !== 'undefined') && (window.innerWidth > 767) ? 404 : 360;
        // scroll.scrollTo(scrollPx);
        __WEBPACK_IMPORTED_MODULE_1_react_scroll__["animateScroll"].scrollToBottom();
      }
    });
    _this.onPressLearnMore = _this.onPressLearnMore.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_WelcomeMee__["a" /* default */], {
        onPressLearnMore: this.onPressLearnMore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ValuesSetion__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__MakesMeSection__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_QuoteSection__["a" /* default */], {
        renderView: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TextSection__["a" /* default */], {
          quote: "\"Education is the most powerful weapon which you can use to change the world\"",
          quoteBy: "Nelson Mandela",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__GetStartedWithCards__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Home")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.50891d0be6fa87497116.hot-update.js.map