webpackHotUpdate(10,{

/***/ "./services/admins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__("./node_modules/firebase/auth/dist/index.esm.js");



var authCheck = function authCheck(auth) {
  return new Promise(function (resolve, reject) {
    console.log('search email', auth.email);
    __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].auth().signInWithEmailAndPassword(auth.email, auth.password).then(function (data) {
      resolve({
        response: true,
        message: 'Authorised Email'
      });
    }).catch(function (error) {
      if (error.code !== 'auth/user-not-found') {
        resolve({
          response: false,
          message: 'Wrong Password or This Email ID is not Authorised to generate codes'
        });
      }
    });
  });
};

/***/ })

})
//# sourceMappingURL=10.f3d57a78196070a9c02c.hot-update.js.map