module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("firebase/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore__ = __webpack_require__("firebase/firestore");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_firestore__);


var config = {
  apiKey: 'AIzaSyANBHpcxOVpHfxDkbOAlxasmkxeu7Q_5mw',
  authDomain: 'meee-cards.firebaseapp.com',
  databaseURL: 'https://meee-cards.firebaseio.com',
  projectId: 'meee-cards',
  storageBucket: 'meee-cards.appspot.com',
  messagingSenderId: '372631265496'
};

if (!__WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.apps.length) {
  __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a.initializeApp(config);
}

var firebaseApp = __WEBPACK_IMPORTED_MODULE_0_firebase_app___default.a;

/***/ }),

/***/ "./pages/SelectSchool/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__("react-bootstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_reducers_code_actions__ = __webpack_require__("./redux/reducers/code/actions.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/SelectSchool/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var SelectSchool =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectSchool, _Component);

  function SelectSchool() {
    var _this;

    _classCallCheck(this, SelectSchool);

    _this = _possibleConstructorReturn(this, (SelectSchool.__proto__ || Object.getPrototypeOf(SelectSchool)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "loginUser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var onSchoolLogin = _this.props.onSchoolLogin;
        onSchoolLogin().then(function (flag) {
          if (flag) {
            __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/UserDetails');
          } else {
            _this.setState({
              showError: true
            });

            setTimeout(function () {
              _this.setState({
                showError: false
              });
            }, 5000);
          }
        });
      }
    });
    _this.state = {
      showError: false
    };
    _this.loginUser = _this.loginUser.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectSchool, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          schoolName = _props.schoolName,
          message = _props.message;
      var showError = this.state.showError;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "select-school",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "select-school-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Image"], {
        className: "meee-image hidden-xs",
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "visible-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "whichschool",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Are you from"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "schoolname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, schoolName, "?")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "back-button",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/GetStartedSchool');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-up-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Image"], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/leftArrowBlack.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "No, I", '\'', "m not")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "btm-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Re-enter your code")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "forward-button",
        onClick: this.loginUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-up-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Yes, I am!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["Image"], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/rightArrow.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "btm-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Get going"))), showError && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        style: {
          color: 'red',
          position: 'absolute',
          bottom: -40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, message)));
    }
  }]);

  return SelectSchool;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onSchoolLogin: function onSchoolLogin() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__redux_reducers_code_actions__["a" /* onSchoolLogin */])());
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var getStarted = _ref.getStarted,
      code = _ref.code;
  return {
    isLoading: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'isLoading'),
    schoolName: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'schoolName'),
    message: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(code, 'message')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(SelectSchool));

/***/ }),

/***/ "./redux/reducers/code/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onSchoolLogin; });
/* unused harmony export onLogout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/code/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_code__ = __webpack_require__("./services/code.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var onLogin = function onLogin() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_LOGIN_REQUESTED */]
                });
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_LOGIN_COMPLETED */],
                  isLoggedIn: true
                });

              case 2:
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
var onSchoolLogin = function onSchoolLogin() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, getState) {
        var _getState$getStarted, schoolKey, schoolName, fetchAllowedUserAndCodeData, checkTimesCodeAlreadyUsedData, _ref3, response, message, schoolUserKey;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_LOGIN_REQUESTED */]
                });
                _getState$getStarted = getState().getStarted, schoolKey = _getState$getStarted.schoolKey, schoolName = _getState$getStarted.schoolName;
                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["c" /* fetchAllowedUserAndCode */])(schoolKey);

              case 4:
                fetchAllowedUserAndCodeData = _context2.sent;
                _context2.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["b" /* checkTimesCodeAlreadyUsed */])(fetchAllowedUserAndCodeData.code);

              case 7:
                checkTimesCodeAlreadyUsedData = _context2.sent;

                if (!(fetchAllowedUserAndCodeData.allowedUser === checkTimesCodeAlreadyUsedData.timeCodeAlreadyUsed + 1)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["f" /* setCodeUsed */])(schoolKey);

              case 11:
                if (!(fetchAllowedUserAndCodeData.allowedUser > checkTimesCodeAlreadyUsedData.timeCodeAlreadyUsed)) {
                  _context2.next = 27;
                  break;
                }

                _context2.next = 14;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["a" /* addSchoolUser */])(fetchAllowedUserAndCodeData.code, schoolName);

              case 14:
                _ref3 = _context2.sent;
                response = _ref3.response;
                message = _ref3.message;
                schoolUserKey = _ref3.schoolUserKey;

                if (!response) {
                  _context2.next = 23;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["e" /* ON_SCHOOL_LOGIN_COMPLETED */],
                  isLoggedInSchool: true,
                  message: message,
                  schoolUserKey: schoolUserKey
                });
                return _context2.abrupt("return", true);

              case 23:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_SCHOOL_LOGIN_FAILED */],
                  message: 'Error while adding user.'
                });
                return _context2.abrupt("return", false);

              case 25:
                _context2.next = 29;
                break;

              case 27:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_SCHOOL_LOGIN_FAILED */],
                  message: 'Sorry, maximum number of users for this code reached.'
                });
                return _context2.abrupt("return", false);

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var onLogout = function onLogout() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, getState) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_LOGOUT_REQUESTED */]
                });
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_LOGOUT_COMPLETED */],
                  isLoggedIn: false,
                  isLoggedInSchool: false
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./redux/reducers/code/types.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ON_LOGIN_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ON_LOGIN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ON_SCHOOL_LOGIN_COMPLETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ON_SCHOOL_LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ON_LOGOUT_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ON_LOGOUT_COMPLETED; });
var ON_LOGIN_REQUESTED = 'ON_LOGIN_REQUESTED';
var ON_LOGIN_COMPLETED = 'ON_LOGIN_COMPLETED';
var ON_SCHOOL_LOGIN_COMPLETED = 'ON_SCHOOL_LOGIN_COMPLETED';
var ON_SCHOOL_LOGIN_FAILED = 'ON_SCHOOL_LOGIN_FAILED';
var ON_LOGOUT_REQUESTED = 'ON_LOGOUT_REQUESTED';
var ON_LOGOUT_COMPLETED = 'ON_LOGOUT_COMPLETED';

/***/ }),

/***/ "./services/code.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCode */
/* unused harmony export fetchCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return searchCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return searchSchoolCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCodeUsed; });
/* unused harmony export addCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchAllowedUserAndCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkTimesCodeAlreadyUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCodeUsed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSchoolUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");


var db = __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].firestore();
var getCode = function getCode() {
  var codes = fetchCodes();
  var flag = true;
  var randomNumber = null;

  while (flag) {
    randomNumber = Math.floor(1000 + Math.random() * 9000);

    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["has"])(codes, randomNumber)) {
      flag = false;
    }
  }

  return randomNumber;
};
var fetchCodes = function fetchCodes() {
  var codes = [];
  db.collection('/codes').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      var data = doc.data();
      !data.is_code_used && codes.push(data.code);
    });
  }).catch(function (err) {
    console.log('Error getting codes data: ', err);
  });
  return codes;
};
var searchCode = function searchCode(code) {
  return new Promise(function (resolve, reject) {
    db.collection('/codes').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        if (doc.data().is_code_used) {
          resolve({
            response: false,
            message: 'Code already used.'
          });
        } else resolve({
          id: doc.id,
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Code not found.'
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var searchSchoolCode = function searchSchoolCode(code) {
  return new Promise(function (resolve, reject) {
    db.collection('/schools').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        if (doc.data().is_code_used) {
          resolve({
            response: false,
            message: 'Code already used.'
          });
        } else resolve({
          id: doc.id,
          response: true,
          message: 'success',
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Code not found.'
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var updateCodeUsed = function updateCodeUsed(key, code) {
  return new Promise(function (resolve, reject) {
    db.collection('/codes').doc(key).update({
      is_code_used: true
    }).then(function () {
      resolve(true);
    }).catch(function (err) {
      reject(err);
    });
  });
};
var addCode = function addCode(item) {
  var code = getCode();
  var codeData = {
    customer_id: item.customer_id,
    code: code,
    is_code_used: false
  };
  db.collection('/codes').add(codeData).catch(function (err) {
    console.log('Error adding Code: ', err);
    return false;
  });
  return code;
};
var fetchAllowedUserAndCode = function fetchAllowedUserAndCode(key) {
  return new Promise(function (resolve, reject) {
    // fetch allowed user and code
    db.collection('/schools').doc(key).get().then(function (snapshot) {
      resolve({
        response: true,
        code: snapshot.data().code,
        allowedUser: snapshot.data().allowed_users
      });
    }).catch(function (err) {
      console.log('Error whil fetching allowed users: ', err);
      reject({
        response: false
      });
    });
  });
};
var checkTimesCodeAlreadyUsed = function checkTimesCodeAlreadyUsed(code) {
  return new Promise(function (resolve, reject) {
    var timeCodeAlreadyUsed = 0;
    db.collection('/schoolsUsers').where('code', '==', code).get().then(function (snapshot) {
      snapshot.forEach(function () {
        timeCodeAlreadyUsed = timeCodeAlreadyUsed + 1;
      });
      resolve({
        response: true,
        timeCodeAlreadyUsed: timeCodeAlreadyUsed
      });
    }).catch(function (err) {
      console.log('Error whil fetching no. of times code already used: ', err);
      reject({
        response: false
      });
    });
  });
};
var setCodeUsed = function setCodeUsed(key) {
  return new Promise(function (resolve, reject) {
    db.collection('/schools').doc(key).update({
      is_code_used: true
    }).then(function () {
      resolve({
        response: true,
        message: 'scuccessfully updated is_code_used'
      });
    }).catch(function (err) {
      reject({
        response: false,
        message: err
      });
    });
  });
};
var addSchoolUser = function addSchoolUser(code, schoolName) {
  return new Promise(function (resolve, reject) {
    db.collection('/schoolsUsers').add({
      code: code,
      school_name: schoolName
    }).then(function (res) {
      resolve({
        response: true,
        message: 'Login Success',
        schoolUserKey: res.id
      });
    }).catch(function (err) {
      console.log('Error while adding school user: ', err);
      reject({
        response: false,
        message: 'Error while adding school user'
      });
    });
  });
};

/***/ }),

/***/ "./utils/assets/leftArrowBlack.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAAXZJREFUOBGNkz1Lw1AUhnPzAUrokNkh+QU2JeDiT6iCVPBjkoQQHMUfUOIPkOBoCQkI4iB1UkGXYnFUEneXODo6VAi28b1tDem1H7lwkvee856np5cbwk1ZrusuJUlyidKqJEnVVqvVm2LLU3yuxsJxHAmA6yzLGkhVZFnOWA+7n4BgAj5N0wsANmD8EgSh7nneN9vE7sViAhOcY79HCOkh6r7vvxbrs3Q+iWVZp5jAhjFFNIIgeJ7VxOaHEADcwWBwjGIfsR+G4QNrnLcnABwB4FET/sIbXvfzGtgapu+IADT/CkhUoWmUXvjhAxEPF81ntItOgrgrTRgZO4S+TdNsAnQC2ed5fheH2h7Vyz0Faovj+KlWq1Ug1wHbMgzjJYqi93IIjhtCxqBHXddXoNcA2obuAv5RBpTfE2rWNO0QZ3IFuYy4tW3boPlFa3gmRROuvoibe4NpNpH/VBRFW3T1JyahMEB+VFXdgWxjKvr9/PNQX3H9Att1hEf2Ecn6AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./utils/assets/meeLogo2.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meeLogo2-6b83fcf2ab36760a20fcebd891dda391.png";

/***/ }),

/***/ "./utils/assets/rightArrow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAANtJREFUOBGdk80KAWEUhofI3x24CBa2LBRRdlyI3AA3wA2wZ8OGy7FWrGRBKTWeo5nS6UxnOPU0c773fc83zcwXBE6FYViGI+yg6NhtmWAJziB1gLztdFYJNuAGUhvIOhFbJtiEO0itbFeKVcI9eMoUapEiYlsID+ElU6iZuDLcdLm27Uji6gClFqkTGXKiqSbafeEqQzr4/nmSejR/7O+jHGw6gvidTJXst4T7EH+duZ9QDsIteIDUUsl+S+j7j13T//bHEpCzcwGpPeT8bZWDUAXkFG+hoORP+wYLrcgLXjxErQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/SelectSchool/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "firebase/app":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=SelectSchool.js.map