webpackHotUpdate(10,{

/***/ "./services/admins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__("./node_modules/firebase/auth/dist/index.esm.js");


 // const db = firebaseApp.firestore();

var authCheck = function authCheck(auth) {
  return new Promise(function (resolve, reject) {
    console.log('search email', auth.email);
    __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].auth().signInWithEmailAndPassword(auth.email, auth.password).then(function (data) {
      console.log('###################', data);
    }).catch(function (error) {
      var errorCode = error.code;

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
//# sourceMappingURL=10.7d0c0df9f758883c2ef7.hot-update.js.map