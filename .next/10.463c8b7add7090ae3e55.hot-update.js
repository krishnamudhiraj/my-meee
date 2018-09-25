webpackHotUpdate(10,{

/***/ "./config/firebase.js":
false,

/***/ "./node_modules/@firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/polyfill/dist/index.esm.js":
false,

/***/ "./node_modules/@firebase/polyfill/node_modules/whatwg-fetch/fetch.js":
false,

/***/ "./node_modules/@firebase/util/dist/index.cjs.js":
false,

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.js":
false,

/***/ "./node_modules/firebase/app/dist/index.cjs.js":
false,

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
false,

/***/ "./node_modules/setimmediate/setImmediate.js":
false,

/***/ "./node_modules/timers-browserify/main.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./redux/reducers/admin/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/admin/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins__ = __webpack_require__("./services/admins.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__services_admins__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var adminAuth = function adminAuth(auth) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
        var _ref2, response, message;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_AUTHORISATION_REQUESTED */]
                });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_admins__["authCheck"])(auth);

              case 3:
                _ref2 = _context.sent;
                response = _ref2.response;
                message = _ref2.message;

                if (!response) {
                  _context.next = 11;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_AUTHORISATION_COMPLETED */],
                  email: auth.email
                });
                return _context.abrupt("return", true);

              case 11:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_AUTHORISATION_FAILED */],
                  message: message
                });
                setTimeout(function () {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_AUTHORISATION_FAILED */],
                    message: ''
                  });
                }, 5000);
                return _context.abrupt("return", false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./services/admins.js":
/***/ (function(module, exports) {



/***/ })

})
//# sourceMappingURL=10.463c8b7add7090ae3e55.hot-update.js.map