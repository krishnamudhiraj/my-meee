webpackHotUpdate(10,{

/***/ "./redux/reducers/admin/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adminAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/admin/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admins__ = __webpack_require__("./services/admins.js");


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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_admins__["searchEmail"])(auth);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authCheck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");


var db = __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].firestore();
var authCheck = function authCheck(auth) {
  return new Promise(function (resolve, reject) {
    console.log('search email', auth.email);
    __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].auth().signInAndRetrieveDataWithEmailAndPassword(auth.email, auth.password).then(function (data) {
      console.log('###################', data);
    }).catch(function (error) {
      errorCode = error.code;

      if (error.code !== 'auth/user-not-found') {
        Alert.alert('Sign in failed', 'Username or Password is incorrect');
        throw new Error('Authentcation Failed');
      }
    }); // db.collection('/admins')
    //   .where('email', '==', auth.email)
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(doc => {
    //       if (doc.data().password === auth.password) {
    //         resolve({ response: true, message: 'Authorised Email' });
    //       } else {
    //         resolve({ response: false, message: 'Wrong Password' });
    //       }
    //     });
    //     resolve({
    //       response: false,
    //       message: 'This Email ID is not Authorised to generate codes.'
    //     });
    //   })
    //   .catch(err => {
    //     console.log('Error: ', err);
    //     reject(err);
    //   });
  });
};

/***/ })

})
//# sourceMappingURL=10.533b69b5b8ac8e3eb518.hot-update.js.map