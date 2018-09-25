webpackHotUpdate(5,{

/***/ "./redux/reducers/schoolData/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchSchoolNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchSchoolData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__("./redux/reducers/schoolData/types.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schools__ = __webpack_require__("./services/schools.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var fetchSchoolNames = function fetchSchoolNames() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(dispatch, getState) {
        var schoolList, schoolArrayList;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["d" /* ON_SCHOOL_NAMES_REQUESTED */]
                });
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_schools__["b" /* fetchSchools */])();

              case 3:
                schoolList = _context.sent;
                schoolArrayList = [];
                schoolList.forEach(function (element) {
                  schoolArrayList.push({
                    label: element
                  });
                });
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["c" /* ON_SCHOOL_NAMES_FETCHED */],
                  schoolList: schoolArrayList
                });

              case 7:
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
var fetchSchoolData = function fetchSchoolData(schoolname) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(dispatch, getState) {
        var schoolData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["b" /* ON_SCHOOL_DATA_REQUESTED */]
                });
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_schools__["a" /* fetchSchoolDataService */])(schoolname);

              case 3:
                schoolData = _context2.sent;
                dispatch({
                  type: __WEBPACK_IMPORTED_MODULE_1__types__["a" /* ON_SCHOOL_DATA_FETCHED */],
                  schoolData: schoolData
                });

              case 5:
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

/***/ }),

/***/ "./services/schools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateUserData */
/* unused harmony export getCode */
/* unused harmony export fetchCodes */
/* unused harmony export generateSchoolCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchSchools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchSchoolDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_firebase__ = __webpack_require__("./config/firebase.js");


var db = __WEBPACK_IMPORTED_MODULE_1__config_firebase__["a" /* firebaseApp */].firestore();
var updateUserData = function updateUserData(key, data) {
  return new Promise(function (resolve, reject) {
    db.collection('/schoolsUsers').doc(key).update(data).then(function () {
      resolve(true);
    }).catch(function (err) {
      reject(err);
    });
  });
};
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
  db.collection('/schools').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      var data = doc.data();
      codes.push(data.code);
    });
  }).catch(function (err) {
    console.log('Error getting codes data: ', err);
  });
  return codes;
};
var generateSchoolCodes = function generateSchoolCodes(data) {
  return new Promise(function (resolve, reject) {
    var code = getCode();
    var item = {
      school_name: data.school,
      code: code,
      is_code_used: false,
      allowed_users: Number(data.numberOfCodes)
    };
    db.collection('/schools').add(item).catch(function (err) {
      reject({
        response: false,
        error: err
      });
      console.log('Error while generating codes: ', err);
    });
    resolve({
      response: true,
      codes: code
    });
  });
};
var fetchSchools = function fetchSchools() {
  return new Promise(function (resolve, reject) {
    var schools = [];
    db.collection('/schools').get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        var data = doc.data();
        schools.push(data.school_name);
      });
      schools = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["uniq"])(schools);
      resolve(schools);
    }).catch(function (err) {
      console.log('Error getting school names: ', err);
      reject(err);
    });
  });
};
var fetchSchoolDataService = function fetchSchoolDataService(schoolname) {
  return new Promise(function (resolve, reject) {
    var schoolData = [];
    db.collection('/schoolsUsers').where('school_name', '==', schoolname).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        var data = doc.data();
        schoolData.push(data);
      });
      resolve(schoolData);
    }).catch(function (err) {
      console.log('Error getting school data: ', err);
      reject(err);
    });
  });
};

/***/ })

})
//# sourceMappingURL=5.ea0d9bf50c270611e951.hot-update.js.map