webpackHotUpdate(6,{

/***/ "./redux/reducers/getStarted/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onSignupRequested */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onSchoolSignupRequested; });
/* unused harmony export onUpdatingDeatils */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
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

/***/ })

})
//# sourceMappingURL=6.5d3b3ac5740d0122f53e.hot-update.js.map