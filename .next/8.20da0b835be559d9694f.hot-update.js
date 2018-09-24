webpackHotUpdate(8,{

/***/ "./pages/UserDetails/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_select__ = __webpack_require__("./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Loader__ = __webpack_require__("./components/Loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_reducers_getStarted_actions__ = __webpack_require__("./redux/reducers/getStarted/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss__ = __webpack_require__("./styles/userDetails.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_userDetails_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_functions_withAuth__ = __webpack_require__("./utils/functions/withAuth.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/UserDetails/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var optionYear = [{
  value: 'year_1',
  label: 'Year 1'
}, {
  value: 'year_2',
  label: 'Year 2'
}, {
  value: 'year_3',
  label: 'Year 3'
}, {
  value: 'year_4',
  label: 'Year 4'
}, {
  value: 'year_5',
  label: 'Year 5'
}, {
  value: 'year_6',
  label: 'Year 6'
}, {
  value: 'year_7',
  label: 'Year 7'
}, {
  value: 'year_8',
  label: 'Year 8'
}, {
  value: 'year_9',
  label: 'Year 9'
}, {
  value: 'year_10',
  label: 'Year 10'
}, {
  value: 'year_11',
  label: 'Year 11'
}, {
  value: 'year_12',
  label: 'Year 12'
}];
var optionGender = [{
  value: 'male',
  label: 'Male'
}, {
  value: 'female',
  label: 'Female'
}, {
  value: 'other',
  label: 'Other'
}, {
  value: 'not_to_say',
  label: 'Prefer not to say'
}];
var optionType = [{
  value: 'teacher',
  label: 'Teacher'
}, {
  value: 'pupil',
  label: 'Pupil'
}, {
  value: 'member_of_staff',
  label: 'Member of staff'
}];

var UserDetails =
/*#__PURE__*/
function (_Component) {
  _inherits(UserDetails, _Component);

  function UserDetails() {
    var _this;

    _classCallCheck(this, UserDetails);

    _this = _possibleConstructorReturn(this, (UserDetails.__proto__ || Object.getPrototypeOf(UserDetails)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(type, _value) {
        if (type === 'selectedYear') _this.setState({
          selectedYear: _value
        });
        if (type === 'selectedGender') _this.setState({
          selectedGender: _value
        });
        if (type === 'selectedType') _this.setState({
          selectedType: _value
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateUserDetails", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var onUpdatingDeatils = _this.props.onUpdatingDeatils;
        var _this$state = _this.state,
            selectedYear = _this$state.selectedYear,
            selectedGender = _this$state.selectedGender,
            selectedType = _this$state.selectedType;
        onUpdatingDeatils({
          year: selectedYear.label,
          gender: selectedGender.label,
          member_type: selectedType.label
        }).then(function () {
          __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/WhatAreValues');
        });
      }
    });
    _this.state = {
      selectedYear: null,
      selectedGender: null,
      selectedType: null
    };
    _this.updateUserDetails = _this.updateUserDetails.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserDetails, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isLoading = this.props.isLoading;
      var _state = this.state,
          selectedYear = _state.selectedYear,
          selectedGender = _state.selectedGender,
          selectedType = _state.selectedType;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-deatils",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-deatils-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["a" /* Image */], {
        className: "meee-image",
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Which year are you in?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select__["a" /* default */], {
        value: selectedYear,
        placeholder: 'I am in...',
        onChange: function onChange(value) {
          return _this2.handleChange('selectedYear', value);
        },
        options: optionYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }))), selectedYear !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, "What", '\'', "s your gender?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select__["a" /* default */], {
        value: selectedGender,
        placeholder: 'Select from list',
        onChange: function onChange(value) {
          return _this2.handleChange('selectedGender', value);
        },
        options: optionGender,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), selectedYear !== null && selectedGender !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Are you a pupil, teacher, or member of staff?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select__["a" /* default */], {
        value: selectedType,
        placeholder: 'Select from list',
        onChange: function onChange(value) {
          return _this2.handleChange('selectedType', value);
        },
        options: optionType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }))))), selectedYear !== null && selectedGender !== null && selectedType !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "next-button",
        onClick: this.updateUserDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-up-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "All done!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["a" /* Image */], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/rightArrow.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "btm-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Start using the app"))));
    }
  }]);

  return UserDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onUpdatingDeatils: function onUpdatingDeatils(code) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_reducers_getStarted_actions__["a" /* onUpdatingDeatils */])(code));
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var getStarted = _ref.getStarted;
  return {
    isLoading: Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(getStarted, 'isLoading')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_9__utils_functions_withAuth__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(UserDetails)));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/UserDetails")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/reducers/getStarted/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onSignupRequested */
/* unused harmony export onSchoolSignupRequested */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onUpdatingDeatils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/getStarted/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_code__ = __webpack_require__("./services/code.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_schools__ = __webpack_require__("./services/schools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_users__ = __webpack_require__("./services/users.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }





var onSignupRequested = function onSignupRequested(code) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
        var codeData, fetchUserData, _fetchUserData$data, name, email;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const {} = getState();
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SIGNUP_REQUESTED */]
                });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["d" /* searchCode */])(Number(code));

              case 3:
                codeData = _context.sent;

                if (!(codeData.response === false)) {
                  _context.next = 9;
                  break;
                }

                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SIGNUP_FAILED */],
                  status: codeData.message
                });
                return _context.abrupt("return", false);

              case 9:
                _context.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_4__services_users__["a" /* fetchUser */])(codeData.data.customer_id);

              case 11:
                fetchUserData = _context.sent;
                _fetchUserData$data = fetchUserData.data, name = _fetchUserData$data.name, email = _fetchUserData$data.email;
                _context.next = 15;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["g" /* updateCodeUsed */])(codeData.id, code);

              case 15:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SIGNUP_COMPLETED */],
                  status: 'success',
                  name: name,
                  email: email
                });
                return _context.abrupt("return", true);

              case 17:
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
var onSchoolSignupRequested = function onSchoolSignupRequested(code) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, getState) {
        var _ref3, response, message, id, data;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // const {} = getState();
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SIGNUP_REQUESTED */]
                });
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["e" /* searchSchoolCode */])(Number(code));

              case 3:
                _ref3 = _context2.sent;
                response = _ref3.response;
                message = _ref3.message;
                id = _ref3.id;
                data = _ref3.data;

                if (response) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SIGNUP_COMPLETED */],
                    status: message,
                    schoolName: data.school_name,
                    schoolKey: id
                  });
                } else {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SIGNUP_FAILED */],
                    status: message
                  });
                }

              case 9:
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
var onUpdatingDeatils = function onUpdatingDeatils(userData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(dispatch, getState) {
        var schoolUserKey, codeData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // const {} = getState();
                schoolUserKey = getState().code.schoolUserKey;
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["f" /* ON_UPDATE_USER_REQUESTED */]
                });
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__services_schools__["a" /* updateUserData */])(schoolUserKey, userData);

              case 4:
                codeData = _context3.sent;

                if (codeData.response === false) {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_UPDATE_USER_COMPLETED */],
                    status: 'Failed to update user Data.'
                  });
                } else {
                  dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_UPDATE_USER_COMPLETED */],
                    status: 'success'
                  });
                }

              case 6:
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

/***/ })

})
//# sourceMappingURL=8.20da0b835be559d9694f.hot-update.js.map