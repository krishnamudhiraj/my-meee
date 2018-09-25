webpackHotUpdate(10,{

/***/ "./services/admins.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authCheck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
 // import { firebaseApp } from '../config/firebase';

 // const db = firebaseApp.firestore();

var authCheck = function authCheck(auth) {
  return new Promise(function (resolve, reject) {
    console.log('search email', auth.email);
    __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signInWithEmailAndPassword(auth.email, auth.password).then(function (data) {
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
//# sourceMappingURL=10.c9313ec15abac52a2b00.hot-update.js.map