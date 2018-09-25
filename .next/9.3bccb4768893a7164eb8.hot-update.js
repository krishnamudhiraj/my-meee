webpackHotUpdate(9,{

/***/ "./pages/SchoolValues/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/SchoolValues/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchoolValues =
/*#__PURE__*/
function (_Component) {
  _inherits(SchoolValues, _Component);

  function SchoolValues() {
    _classCallCheck(this, SchoolValues);

    return _possibleConstructorReturn(this, (SchoolValues.__proto__ || Object.getPrototypeOf(SchoolValues)).apply(this, arguments));
  }

  _createClass(SchoolValues, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "school-values",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "school-values-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Image */], {
        className: "meee-image",
        src: __webpack_require__("./utils/assets/meeLogo2White.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "What are your values?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Values are very important. If you can understand your values, you can make better decisions, take clear action and create the kind of life you want.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-title-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Why complete this exercise"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "All too often we live on autopilot. So this is your chance to stop and think about what really matters to you. In just a few minutes, you", "'", "ll begin to see yourself \u2013 and your future \u2013 in a new light.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card-get-started1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "What matters to you? Choose the values that resonate with you to begin your exciting new journey"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/LoginIntro');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Get started with the Meee Values Cards")))));
    }
  }]);

  return SchoolValues;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SchoolValues);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/SchoolValues")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.3bccb4768893a7164eb8.hot-update.js.map