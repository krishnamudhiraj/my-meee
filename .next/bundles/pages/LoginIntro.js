module.exports =
__NEXT_REGISTER_PAGE('/LoginIntro', function() {
          var comp =
      webpackJsonp([7],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/object/entries.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_assign__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__core_js_object_assign__);

function _extends() {
  _extends = __WEBPACK_IMPORTED_MODULE_0__core_js_object_assign___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_create__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__core_js_object_create__);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = __WEBPACK_IMPORTED_MODULE_0__core_js_object_create___default()(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_keys__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__core_js_object_keys__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = __WEBPACK_IMPORTED_MODULE_0__core_js_object_keys___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/entries.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__("./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__("./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__("./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__("./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__("./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__("./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__("./node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__("./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/dom-helpers/activeElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activeElement;

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activeElement() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();

  try {
    return doc.activeElement;
  } catch (e) {/* ie throws if no active element */}
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__("./node_modules/dom-helpers/class/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = exports.removeClass = exports.addClass = undefined;

var _addClass = __webpack_require__("./node_modules/dom-helpers/class/addClass.js");

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__("./node_modules/dom-helpers/class/removeClass.js");

var _removeClass2 = _interopRequireDefault(_removeClass);

var _hasClass = __webpack_require__("./node_modules/dom-helpers/class/hasClass.js");

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addClass = _addClass2.default;
exports.removeClass = _removeClass2.default;
exports.hasClass = _hasClass2.default;
exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/events/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filterEvents;

var _contains = __webpack_require__("./node_modules/dom-helpers/query/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _querySelectorAll = __webpack_require__("./node_modules/dom-helpers/query/querySelectorAll.js");

var _querySelectorAll2 = _interopRequireDefault(_querySelectorAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll2.default)(top, selector);

    if (matches.some(function (match) {
      return (0, _contains2.default)(match, target);
    })) handler.call(this, e);
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/events/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = exports.filter = exports.off = exports.on = undefined;

var _on = __webpack_require__("./node_modules/dom-helpers/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__("./node_modules/dom-helpers/events/off.js");

var _off2 = _interopRequireDefault(_off);

var _filter = __webpack_require__("./node_modules/dom-helpers/events/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _listen = __webpack_require__("./node_modules/dom-helpers/events/listen.js");

var _listen2 = _interopRequireDefault(_listen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.on = _on2.default;
exports.off = _off2.default;
exports.filter = _filter2.default;
exports.listen = _listen2.default;
exports.default = { on: _on2.default, off: _off2.default, filter: _filter2.default, listen: _listen2.default };

/***/ }),

/***/ "./node_modules/dom-helpers/events/listen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

var _on = __webpack_require__("./node_modules/dom-helpers/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__("./node_modules/dom-helpers/events/off.js");

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listen = function listen() {};

if (_inDOM2.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on2.default)(node, eventName, handler, capture);
    return function () {
      (0, _off2.default)(node, eventName, handler, capture);
    };
  };
}

exports.default = listen;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/events/off.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var off = function off() {};
if (_inDOM2.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

exports.default = off;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/events/on.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on() {};
if (_inDOM2.default) {
  on = function () {

    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

exports.default = on;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/ownerDocument.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ownerDocument;
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/contains.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM2.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);

  return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offset;

var _contains = __webpack_require__("./node_modules/dom-helpers/query/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _isWindow = __webpack_require__("./node_modules/dom-helpers/query/isWindow.js");

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function offset(node) {
  var doc = (0, _ownerDocument2.default)(node),
      win = (0, _isWindow2.default)(doc),
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

  if (!doc) return;

  // Make sure it's not a disconnected DOM node
  if (!(0, _contains2.default)(docElem, node)) return box;

  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();

  // IE8 getBoundingClientRect doesn't support width & height
  box = {
    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
    width: (box.width == null ? node.offsetWidth : box.width) || 0,
    height: (box.height == null ? node.offsetHeight : box.height) || 0
  };

  return box;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/offsetParent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = offsetParent;

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _style = __webpack_require__("./node_modules/dom-helpers/style/index.js");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function offsetParent(node) {
  var doc = (0, _ownerDocument2.default)(node),
      offsetParent = node && node.offsetParent;

  while (offsetParent && nodeName(node) !== 'html' && (0, _style2.default)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }

  return offsetParent || doc.documentElement;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = position;

var _offset = __webpack_require__("./node_modules/dom-helpers/query/offset.js");

var _offset2 = _interopRequireDefault(_offset);

var _offsetParent = __webpack_require__("./node_modules/dom-helpers/query/offsetParent.js");

var _offsetParent2 = _interopRequireDefault(_offsetParent);

var _scrollTop = __webpack_require__("./node_modules/dom-helpers/query/scrollTop.js");

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _scrollLeft = __webpack_require__("./node_modules/dom-helpers/query/scrollLeft.js");

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _style = __webpack_require__("./node_modules/dom-helpers/style/index.js");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
}

function position(node, offsetParent) {
  var parentOffset = { top: 0, left: 0 },
      offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if ((0, _style2.default)(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    offsetParent = offsetParent || (0, _offsetParent2.default)(node);
    offset = (0, _offset2.default)(node);

    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2.default)(offsetParent);

    parentOffset.top += parseInt((0, _style2.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2.default)(offsetParent) || 0;
    parentOffset.left += parseInt((0, _style2.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2.default)(offsetParent) || 0;
  }

  // Subtract parent offsets and node margins
  return _extends({}, offset, {
    top: offset.top - parentOffset.top - (parseInt((0, _style2.default)(node, 'marginTop'), 10) || 0),
    left: offset.left - parentOffset.left - (parseInt((0, _style2.default)(node, 'marginLeft'), 10) || 0)
  });
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/querySelectorAll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));

    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollLeft.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__("./node_modules/dom-helpers/query/isWindow.js");

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;

  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/query/scrollTop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;

var _isWindow = __webpack_require__("./node_modules/dom-helpers/query/isWindow.js");

var _isWindow2 = _interopRequireDefault(_isWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollTop(node, val) {
  var win = (0, _isWindow2.default)(node);

  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;

  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__("./node_modules/dom-helpers/util/hyphenateStyle.js");

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__("./node_modules/dom-helpers/style/getComputedStyle.js");

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__("./node_modules/dom-helpers/style/removeStyle.js");

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__("./node_modules/dom-helpers/transition/properties.js");

var _isTransform = __webpack_require__("./node_modules/dom-helpers/transition/isTransform.js");

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/end.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _properties = __webpack_require__("./node_modules/dom-helpers/transition/properties.js");

var _properties2 = _interopRequireDefault(_properties);

var _style = __webpack_require__("./node_modules/dom-helpers/style/index.js");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;

  if (!_properties2.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties2.default.end) {
    node.addEventListener(_properties2.default.end, done, false);

    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties2.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;

exports.default = onEnd;


function parseDuration(node) {
  var str = (0, _style2.default)(node, _properties2.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;

  return parseFloat(str) * mult;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.properties = exports.end = undefined;

var _end = __webpack_require__("./node_modules/dom-helpers/transition/end.js");

var _end2 = _interopRequireDefault(_end);

var _properties = __webpack_require__("./node_modules/dom-helpers/transition/properties.js");

var _properties2 = _interopRequireDefault(_properties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.end = _end2.default;
exports.properties = _properties2.default;
exports.default = { end: _end2.default, properties: _properties2.default };

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__("./node_modules/dom-helpers/util/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__("./node_modules/dom-helpers/util/hyphenate.js");

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/keycode/index.js":
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__("./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__("./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/deprecated.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecated;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function deprecated(validator, reason) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] != null) {
      var messageKey = componentName + '.' + propName;

      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

      warned[messageKey] = true;
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}

/* eslint-disable no-underscore-dangle */
function _resetWarned() {
  warned = {};
}

deprecated._resetWarned = _resetWarned;
/* eslint-enable no-underscore-dangle */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__("./node_modules/react-is/index.js");

var _createChainableTypeChecker = __webpack_require__("./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PanelGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelGroup.js");





var Accordion =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Accordion, _React$Component);

  function Accordion() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Accordion.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PanelGroup__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, this.props, {
      accordion: true
    }), this.props.children);
  };

  return Accordion;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Accordion);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Alert.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CloseButton__ = __webpack_require__("./node_modules/react-bootstrap/es/CloseButton.js");










var propTypes = {
  onDismiss: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  closeLabel: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
var defaultProps = {
  closeLabel: 'Close alert'
};

var Alert =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Alert, _React$Component);

  function Alert() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        onDismiss = _this$props.onDismiss,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["onDismiss", "closeLabel", "className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var dismissable = !!onDismiss;

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'dismissable')] = dismissable, _extends2));

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "alert",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }), dismissable && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__CloseButton__["a" /* default */], {
      onClick: onDismiss,
      label: closeLabel
    }), children);
  };

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["d" /* State */]), __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["d" /* State */].INFO, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('alert', Alert)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Badge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");






 // TODO: `pullRight` doesn't belong here. There's no special handling here.

var propTypes = {
  pullRight: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  pullRight: false
};

var Badge =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.hasContent = function hasContent(children) {
    var result = false;
    __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.forEach(children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });
    return result;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        pullRight = _this$props.pullRight,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["pullRight", "className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      'pull-right': pullRight,
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), children);
  };

  return Badge;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('badge', Badge));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Breadcrumb.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BreadcrumbItem__ = __webpack_require__("./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ol", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "navigation",
      "aria-label": "breadcrumbs",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Breadcrumb;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Breadcrumb.Item = __WEBPACK_IMPORTED_MODULE_5__BreadcrumbItem__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('breadcrumb', Breadcrumb));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/BreadcrumbItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");







var propTypes = {
  /**
   * If set to true, renders `span` instead of `a`
   */
  active: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * `href` attribute for the inner `a` element
   */
  href: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * `title` attribute for the inner `a` element
   */
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,

  /**
   * `target` attribute for the inner `a` element
   */
  target: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};
var defaultProps = {
  active: false
};

var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        href = _this$props.href,
        title = _this$props.title,
        target = _this$props.target,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["active", "href", "title", "target", "className"]); // Don't try to render these props on non-active <span>.


    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("li", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, {
        active: active
      })
    }, active ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", props) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__SafeAnchor__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, linkProps)));
  };

  return BreadcrumbItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");











var propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  block: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  componentClass: __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a,
  href: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['button', 'reset', 'submit'])
};
var defaultProps = {
  active: false,
  block: false,
  disabled: false
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.renderAnchor = function renderAnchor(elementProps, className) {
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SafeAnchor__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, elementProps.disabled && 'disabled')
    }));
  };

  _proto.renderButton = function renderButton(_ref, className) {
    var componentClass = _ref.componentClass,
        elementProps = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["componentClass"]);

    var Component = componentClass || 'button';
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      type: elementProps.type || 'button',
      className: className
    }));
  };

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        active = _this$props.active,
        block = _this$props.block,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["active", "block", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {
      active: active
    }, _extends2[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'block')] = block, _extends2));

    var fullClassName = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes);

    if (elementProps.href) {
      return this.renderAnchor(elementProps, fullClassName);
    }

    return this.renderButton(elementProps, fullClassName);
  };

  return Button;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('btn', Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["c" /* Size */].SMALL, __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["c" /* Size */].XSMALL], Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["d" /* State */]).concat([__WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["e" /* Style */].DEFAULT, __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["e" /* Style */].PRIMARY, __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["e" /* Style */].LINK]), __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["e" /* Style */].DEFAULT, Button))));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_all__ = __webpack_require__("./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");









var propTypes = {
  vertical: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  justified: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Display block buttons; only useful when used with the "vertical" prop.
   * @type {bool}
   */
  block: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_all___default()(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, function (_ref) {
    var block = _ref.block,
        vertical = _ref.vertical;
    return block && !vertical ? new Error('`block` requires `vertical` to be set to have any effect') : null;
  })
};
var defaultProps = {
  block: false,
  justified: false,
  vertical: false
};

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        block = _this$props.block,
        justified = _this$props.justified,
        vertical = _this$props.vertical,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["block", "justified", "vertical", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(bsProps)] = !vertical, _extends2[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'vertical')] = vertical, _extends2[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'justified')] = justified, _extends2[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(__WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */].defaultProps, 'block')] = block, _extends2));

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ButtonGroup;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('btn-group', ButtonGroup));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonToolbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "toolbar",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ButtonToolbar;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('btn-toolbar', ButtonToolbar));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CarouselCaption__ = __webpack_require__("./node_modules/react-bootstrap/es/CarouselCaption.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CarouselItem__ = __webpack_require__("./node_modules/react-bootstrap/es/CarouselItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Glyphicon__ = __webpack_require__("./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");












 // TODO: `slide` should be `animate`.
// TODO: Use uncontrollable.

var propTypes = {
  slide: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  indicators: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  controls: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  pauseOnHover: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  wrap: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, ?event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSlideEnd: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  activeIndex: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  defaultActiveIndex: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  direction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['prev', 'next']),
  prevIcon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  nextIcon: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
var defaultProps = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Glyphicon__["a" /* default */], {
    glyph: "chevron-left"
  }),
  prevLabel: 'Previous',
  nextIcon: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Glyphicon__["a" /* default */], {
    glyph: "chevron-right"
  }),
  nextLabel: 'Next'
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Carousel, _React$Component);

  function Carousel(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleMouseOver = _this.handleMouseOver.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleMouseOut = _this.handleMouseOut.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handlePrev = _this.handlePrev.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleNext = _this.handleNext.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleItemAnimateOutEnd = _this.handleItemAnimateOutEnd.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    var defaultActiveIndex = props.defaultActiveIndex;
    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }

    if (nextProps.activeIndex == null && this.state.activeIndex >= nextProps.children.length) {
      this.setState({
        activeIndex: 0,
        previousActiveIndex: null,
        direction: null
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };

  _proto.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  _proto.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function () {
      _this2.waitForNext();

      if (_this2.props.onSlideEnd) {
        _this2.props.onSlideEnd();
      }
    });
  };

  _proto.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };

  _proto.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  _proto.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].count(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }

      index = 0;
    }

    this.select(index, e, 'next');
  };

  _proto.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }

      index = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].count(this.props.children) - 1;
    }

    this.select(index, e, 'prev');
  }; // This might be a public API.


  _proto.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  }; // This might be a public API.


  _proto.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };

  _proto.select = function select(index, e, direction) {
    clearTimeout(this.timeout); // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.

    if (this.isUnmounted) {
      return;
    }

    var previousActiveIndex = this.props.slide ? this.getActiveIndex() : null;
    direction = direction || this.getDirection(previousActiveIndex, index);
    var onSelect = this.props.onSelect;

    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = {
            direction: direction
          };
        }

        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  };

  _proto.waitForNext = function waitForNext() {
    var _this$props = this.props,
        slide = _this$props.slide,
        interval = _this$props.interval,
        activeIndexProp = _this$props.activeIndex;

    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = setTimeout(this.handleNext, interval);
    }
  };

  _proto.renderControls = function renderControls(properties) {
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        bsProps = properties.bsProps,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var controlClassName = Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'control');
    var count = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].count(children);
    return [(wrap || activeIndex !== 0) && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SafeAnchor__["a" /* default */], {
      key: "prev",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(controlClassName, 'left'),
      onClick: this.handlePrev
    }, prevIcon, prevLabel && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
      className: "sr-only"
    }, prevLabel)), (wrap || activeIndex !== count - 1) && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SafeAnchor__["a" /* default */], {
      key: "next",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(controlClassName, 'right'),
      onClick: this.handleNext
    }, nextIcon, nextLabel && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
      className: "sr-only"
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex, bsProps) {
    var _this3 = this;

    var indicators = [];
    __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].forEach(children, function (child, index) {
      indicators.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this3.select(index, e);
        }
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ol", {
      className: Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'indicators')
    }, indicators);
  };

  _proto.render = function render() {
    var _this4 = this;

    var _this$props2 = this.props,
        slide = _this$props2.slide,
        indicators = _this$props2.indicators,
        controls = _this$props2.controls,
        wrap = _this$props2.wrap,
        prevIcon = _this$props2.prevIcon,
        prevLabel = _this$props2.prevLabel,
        nextIcon = _this$props2.nextIcon,
        nextLabel = _this$props2.nextLabel,
        className = _this$props2.className,
        children = _this$props2.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["slide", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]);

    var _this$state = this.state,
        previousActiveIndex = _this$state.previousActiveIndex,
        direction = _this$state.direction;

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['interval', 'pauseOnHover', 'onSelect', 'onSlideEnd', 'activeIndex', // Accessed via this.getActiveIndex().
    'defaultActiveIndex', 'direction']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var activeIndex = this.getActiveIndex();

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      slide: slide
    });

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes),
      onMouseOver: this.handleMouseOver,
      onMouseOut: this.handleMouseOut
    }), indicators && this.renderIndicators(children, activeIndex, bsProps), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'inner')
    }, __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].map(children, function (child, index) {
      var active = index === activeIndex;
      var previousActive = slide && index === previousActiveIndex;
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(child, {
        active: active,
        index: index,
        animateOut: previousActive,
        animateIn: active && previousActiveIndex != null && slide,
        direction: direction,
        onAnimateOutEnd: previousActive ? _this4.handleItemAnimateOutEnd : null
      });
    })), controls && this.renderControls({
      wrap: wrap,
      children: children,
      activeIndex: activeIndex,
      prevIcon: prevIcon,
      prevLabel: prevLabel,
      nextIcon: nextIcon,
      nextLabel: nextLabel,
      bsProps: bsProps
    }));
  };

  return Carousel;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = __WEBPACK_IMPORTED_MODULE_7__CarouselCaption__["a" /* default */];
Carousel.Item = __WEBPACK_IMPORTED_MODULE_8__CarouselItem__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["a" /* bsClass */])('carousel', Carousel));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselCaption.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return CarouselCaption;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

CarouselCaption.propTypes = propTypes;
CarouselCaption.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('carousel-caption', CarouselCaption));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_transition__ = __webpack_require__("./node_modules/dom-helpers/transition/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_dom_helpers_transition__);









var propTypes = {
  direction: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['prev', 'next']),
  onAnimateOutEnd: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  animateIn: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  animateOut: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  index: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number
};
var defaultProps = {
  active: false,
  animateIn: false,
  animateOut: false
};

var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(CarouselItem, _React$Component);

  function CarouselItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleAnimateOutEnd = _this.handleAnimateOutEnd.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.state = {
      direction: null
    };
    _this.isUnmounted = false;
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    var active = this.props.active;
    var prevActive = prevProps.active;

    if (!active && prevActive) {
      __WEBPACK_IMPORTED_MODULE_8_dom_helpers_transition___default.a.end(__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (active !== prevActive) {
      setTimeout(function () {
        return _this2.startAnimation();
      }, 20);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  _proto.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }

    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };

  _proto.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left'
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        direction = _this$props.direction,
        active = _this$props.active,
        animateIn = _this$props.animateIn,
        animateOut = _this$props.animateOut,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["direction", "active", "animateIn", "animateOut", "className"]);

    delete props.onAnimateOutEnd;
    delete props.index;
    var classes = {
      item: true,
      active: active && !animateIn || animateOut
    };

    if (direction && active && animateIn) {
      classes[direction] = true;
    }

    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }));
  };

  return CarouselItem;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

CarouselItem.propTypes = propTypes;
CarouselItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CarouselItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");




/* eslint-disable jsx-a11y/label-has-for */





var propTypes = {
  inline: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};
var defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Checkbox, _React$Component);

  function Checkbox() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Checkbox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      ref: inputRef,
      type: "checkbox",
      disabled: disabled
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


       true ? __WEBPACK_IMPORTED_MODULE_6_warning___default()(!validationState, '`validationState` is ignored on `<Checkbox inline>`. To display ' + 'validation state on an inline checkbox, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, _classes),
        style: style,
        title: title
      }, input, children);
    }

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes),
      style: style
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
      title: title
    }, input, children));
  };

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('checkbox', Checkbox));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Clearfix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_capitalize__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/capitalize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");










var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a,

  /**
   * Apply clearfix
   *
   * on Extra small devices Phones
   *
   * adds class `visible-xs-block`
   */
  visibleXsBlock: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Apply clearfix
   *
   * on Small devices Tablets
   *
   * adds class `visible-sm-block`
   */
  visibleSmBlock: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Apply clearfix
   *
   * on Medium devices Desktops
   *
   * adds class `visible-md-block`
   */
  visibleMdBlock: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Apply clearfix
   *
   * on Large devices Desktops
   *
   * adds class `visible-lg-block`
   */
  visibleLgBlock: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  componentClass: 'div'
};

var Clearfix =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Clearfix, _React$Component);

  function Clearfix() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Clearfix.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    __WEBPACK_IMPORTED_MODULE_9__utils_StyleConfig__["a" /* DEVICE_SIZES */].forEach(function (size) {
      var propName = "visible" + Object(__WEBPACK_IMPORTED_MODULE_8__utils_capitalize__["a" /* default */])(size) + "Block";

      if (elementProps[propName]) {
        classes["visible-" + size + "-block"] = true;
      }

      delete elementProps[propName];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Clearfix;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Clearfix.propTypes = propTypes;
Clearfix.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('clearfix', Clearfix));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CloseButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var propTypes = {
  label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(CloseButton, _React$Component);

  function CloseButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CloseButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        onClick = _this$props.onClick;
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
      type: "button",
      className: "close",
      onClick: onClick
    }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
      className: "sr-only"
    }, label));
  };

  return CloseButton;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CloseButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Col.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");









var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a,

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number
};
var defaultProps = {
  componentClass: 'div'
};

var Col =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];
    __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["a" /* DEVICE_SIZES */].forEach(function (size) {
      function popProp(propSuffix, modifier) {
        var propName = "" + size + propSuffix;
        var propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, "" + size + modifier + "-" + propValue));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');
      var hiddenPropName = size + "Hidden";

      if (elementProps[hiddenPropName]) {
        classes.push("hidden-" + size);
      }

      delete elementProps[hiddenPropName];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Col;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('col', Col));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Collapse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_parse_int__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_style__ = __webpack_require__("./node_modules/dom-helpers/style/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__ = __webpack_require__("./node_modules/react-transition-group/Transition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_capitalize__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/capitalize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");





var _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
}; // reading a dimension prop will cause the browser to recalculate,
// which will let our animations work

function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem["offset" + Object(__WEBPACK_IMPORTED_MODULE_9__utils_capitalize__["a" /* default */])(dimension)];
  var margins = MARGINS[dimension];
  return value + __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_parse_int___default()(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_style___default()(elem, margins[0]), 10) + __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_core_js_parse_int___default()(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_style___default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__["EXITED"]] = 'collapse', _collapseStyles[__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__["EXITING"]] = 'collapsing', _collapseStyles[__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__["ENTERING"]] = 'collapsing', _collapseStyles[__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition__["ENTERED"]] = 'collapse in', _collapseStyles);
var propTypes = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(['height', 'width']), __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * ARIA role of collapsible element
   */
  role: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      triggerBrowserReflow(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }; // for testing


  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    return elem["scroll" + Object(__WEBPACK_IMPORTED_MODULE_9__utils_capitalize__["a" /* default */])(dimension)] + "px";
  };
  /* -- Expanding -- */


  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleEnter, onEnter);
    var handleEntering = Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleEntering, onEntering);
    var handleEntered = Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleEntered, onEntered);
    var handleExit = Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleExit, onExit);
    var handleExiting = Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleExiting, onExiting);
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_transition_group_Transition___default.a, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }), function (state, innerProps) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(children, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, innerProps, {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ControlLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  srOnly: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  srOnly: false
};
var contextTypes = {
  $bs_formGroup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

var ControlLabel =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ControlLabel, _React$Component);

  function ControlLabel() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ControlLabel.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        _this$props$htmlFor = _this$props.htmlFor,
        htmlFor = _this$props$htmlFor === void 0 ? controlId : _this$props$htmlFor,
        srOnly = _this$props.srOnly,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["htmlFor", "srOnly", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     true ? __WEBPACK_IMPORTED_MODULE_6_warning___default()(controlId == null || htmlFor === controlId, '`controlId` is ignored on `<ControlLabel>` when `htmlFor` is specified.') : void 0;

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      'sr-only': srOnly
    });

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      htmlFor: htmlFor,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ControlLabel;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ControlLabel.propTypes = propTypes;
ControlLabel.defaultProps = defaultProps;
ControlLabel.contextTypes = contextTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('control-label', ControlLabel));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Dropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_activeElement__ = __webpack_require__("./node_modules/dom-helpers/activeElement.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_activeElement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_activeElement__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_query_contains__ = __webpack_require__("./node_modules/dom-helpers/query/contains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_query_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dom_helpers_query_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_keycode__ = __webpack_require__("./node_modules/keycode/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_keycode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_keycode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types_extra_lib_all__ = __webpack_require__("./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__("./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DropdownMenu__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DropdownToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_PropTypes__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/PropTypes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");























var TOGGLE_ROLE = __WEBPACK_IMPORTED_MODULE_18__DropdownToggle__["a" /* default */].defaultProps.bsRole;
var MENU_ROLE = __WEBPACK_IMPORTED_MODULE_17__DropdownMenu__["a" /* default */].defaultProps.bsRole;
var propTypes = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: __WEBPACK_IMPORTED_MODULE_13_prop_types_extra_lib_isRequiredForA11y___default()(__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number])),
  componentClass: __WEBPACK_IMPORTED_MODULE_12_prop_types_extra_lib_elementType___default.a,

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: __WEBPACK_IMPORTED_MODULE_11_prop_types_extra_lib_all___default()(Object(__WEBPACK_IMPORTED_MODULE_21__utils_PropTypes__["c" /* requiredRoles */])(TOGGLE_ROLE, MENU_ROLE), Object(__WEBPACK_IMPORTED_MODULE_21__utils_PropTypes__["a" /* exclusiveRoles */])(MENU_ROLE)),

  /**
   * Whether or not component is disabled.
   */
  disabled: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,
  defaultOpen: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(Boolean isOpen, Object event, { String source }) {}
   * ```
   * @controllable open
   */
  onToggle: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   * *Note: For custom dropdown components, you will have to pass the
   * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
   * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
   */
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['click', 'mousedown']),

  /**
   * @private
   */
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * @private
   */
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func
};
var defaultProps = {
  componentClass: __WEBPACK_IMPORTED_MODULE_16__ButtonGroup__["a" /* default */]
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Dropdown, _React$Component);

  function Dropdown(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleClose = _this.handleClose.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  _proto.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = __WEBPACK_IMPORTED_MODULE_6_dom_helpers_query_contains___default()(__WEBPACK_IMPORTED_MODULE_10_react_dom___default.a.findDOMNode(this.menu), __WEBPACK_IMPORTED_MODULE_5_dom_helpers_activeElement___default()(document));
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var open = this.props.open;
    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  _proto.focus = function focus() {
    var toggle = __WEBPACK_IMPORTED_MODULE_10_react_dom___default.a.findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  _proto.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu || !menu.focusNext) {
      return;
    }

    if (this.lastOpenEventType === 'keydown' || this.props.role === 'menuitem') {
      menu.focusNext();
    }
  };

  _proto.handleClick = function handleClick(event) {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen(event, {
      source: 'click'
    });
  };

  _proto.handleClose = function handleClose(event, eventDetails) {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(event, eventDetails);
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case __WEBPACK_IMPORTED_MODULE_7_keycode___default.a.codes.down:
        if (!this.props.open) {
          this.toggleOpen(event, {
            source: 'keydown'
          });
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }

        event.preventDefault();
        break;

      case __WEBPACK_IMPORTED_MODULE_7_keycode___default.a.codes.esc:
      case __WEBPACK_IMPORTED_MODULE_7_keycode___default.a.codes.tab:
        this.handleClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.toggleOpen = function toggleOpen(event, eventDetails) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventDetails.source;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
    }
  };

  _proto.renderMenu = function renderMenu(child, _ref) {
    var _this2 = this;

    var id = _ref.id,
        onSelect = _ref.onSelect,
        rootCloseEvent = _ref.rootCloseEvent,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["id", "onSelect", "rootCloseEvent"]);

    var ref = function ref(c) {
      _this2.menu = c;
    };

    if (typeof child.ref === 'string') {
       true ? __WEBPACK_IMPORTED_MODULE_15_warning___default()(false, 'String refs are not supported on `<Dropdown.Menu>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.ref, ref);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_8_react__["cloneElement"])(child, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      ref: ref,
      labelledBy: id,
      bsClass: Object(__WEBPACK_IMPORTED_MODULE_19__utils_bootstrapUtils__["e" /* prefix */])(props, 'menu'),
      onClose: Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.props.onClose, this.handleClose),
      onSelect: Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.props.onSelect, onSelect, function (key, event) {
        return _this2.handleClose(event, {
          source: 'select'
        });
      }),
      rootCloseEvent: rootCloseEvent
    }));
  };

  _proto.renderToggle = function renderToggle(child, props) {
    var _this3 = this;

    var ref = function ref(c) {
      _this3.toggle = c;
    };

    if (typeof child.ref === 'string') {
       true ? __WEBPACK_IMPORTED_MODULE_15_warning___default()(false, 'String refs are not supported on `<Dropdown.Toggle>` components. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute') : void 0;
    } else {
      ref = Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.ref, ref);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_8_react__["cloneElement"])(child, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      ref: ref,
      bsClass: Object(__WEBPACK_IMPORTED_MODULE_19__utils_bootstrapUtils__["e" /* prefix */])(props, 'toggle'),
      onClick: Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.props.onClick, this.handleClick),
      onKeyDown: Object(__WEBPACK_IMPORTED_MODULE_20__utils_createChainedFunction__["a" /* default */])(child.props.onKeyDown, this.handleKeyDown)
    }));
  };

  _proto.render = function render() {
    var _classes,
        _this4 = this;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        id = _this$props.id,
        dropup = _this$props.dropup,
        disabled = _this$props.disabled,
        pullRight = _this$props.pullRight,
        open = _this$props.open,
        onSelect = _this$props.onSelect,
        role = _this$props.role,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "id", "dropup", "disabled", "pullRight", "open", "onSelect", "role", "bsClass", "className", "rootCloseEvent", "children"]);

    delete props.onToggle;
    var classes = (_classes = {}, _classes[bsClass] = true, _classes.open = open, _classes.disabled = disabled, _classes);

    if (dropup) {
      classes[bsClass] = false;
      classes.dropup = true;
    } // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.


    return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_22__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      switch (child.props.bsRole) {
        case TOGGLE_ROLE:
          return _this4.renderToggle(child, {
            id: id,
            disabled: disabled,
            open: open,
            role: role,
            bsClass: bsClass
          });

        case MENU_ROLE:
          return _this4.renderMenu(child, {
            id: id,
            open: open,
            pullRight: pullRight,
            bsClass: bsClass,
            onSelect: onSelect,
            rootCloseEvent: rootCloseEvent
          });

        default:
          return child;
      }
    }));
  };

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Object(__WEBPACK_IMPORTED_MODULE_19__utils_bootstrapUtils__["a" /* bsClass */])('dropdown', Dropdown);
var UncontrolledDropdown = __WEBPACK_IMPORTED_MODULE_14_uncontrollable___default()(Dropdown, {
  open: 'onToggle'
});
UncontrolledDropdown.Toggle = __WEBPACK_IMPORTED_MODULE_18__DropdownToggle__["a" /* default */];
UncontrolledDropdown.Menu = __WEBPACK_IMPORTED_MODULE_17__DropdownMenu__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (UncontrolledDropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_splitComponentProps__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/splitComponentProps.js");








var propTypes = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].propTypes, {
  // Toggle props.
  bsStyle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  bsSize: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node.isRequired,
  noCaret: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node
});

var DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(DropdownButton, _React$Component);

  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["bsSize", "bsStyle", "title", "children"]);

    var _splitComponentProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_splitComponentProps__["a" /* default */])(props, __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1];

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle
    }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Toggle, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, toggleProps, {
      bsSize: bsSize,
      bsStyle: bsStyle
    }), title), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Menu, null, children));
  };

  return DropdownButton;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

DropdownButton.propTypes = propTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (DropdownButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_core_js_array_from__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_keycode__ = __webpack_require__("./node_modules/keycode/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_keycode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_keycode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_overlays_lib_RootCloseWrapper__ = __webpack_require__("./node_modules/react-overlays/lib/RootCloseWrapper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_overlays_lib_RootCloseWrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_overlays_lib_RootCloseWrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");














var propTypes = {
  open: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  pullRight: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  onClose: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  labelledBy: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number]),
  onSelect: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['click', 'mousedown'])
};
var defaultProps = {
  bsRole: 'menu',
  pullRight: false
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleRootClose = _this.handleRootClose.bind(Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = __WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.findDOMNode(this);

    if (!node) {
      return [];
    }

    return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_core_js_array_from___default()(node.querySelectorAll('[tabIndex="-1"]'));
  };

  _proto.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);
    return {
      items: items,
      activeIndex: activeIndex
    };
  };

  _proto.focusNext = function focusNext() {
    var _this$getItemsAndActi = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi.items,
        activeIndex = _this$getItemsAndActi.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  _proto.focusPrevious = function focusPrevious() {
    var _this$getItemsAndActi2 = this.getItemsAndActiveIndex(),
        items = _this$getItemsAndActi2.items,
        activeIndex = _this$getItemsAndActi2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case __WEBPACK_IMPORTED_MODULE_6_keycode___default.a.codes.down:
        this.focusNext();
        event.preventDefault();
        break;

      case __WEBPACK_IMPORTED_MODULE_6_keycode___default.a.codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;

      case __WEBPACK_IMPORTED_MODULE_6_keycode___default.a.codes.esc:
      case __WEBPACK_IMPORTED_MODULE_6_keycode___default.a.codes.tab:
        this.props.onClose(event, {
          source: 'keydown'
        });
        break;

      default:
    }
  };

  _proto.handleRootClose = function handleRootClose(event) {
    this.props.onClose(event, {
      source: 'rootClose'
    });
  };

  _proto.render = function render() {
    var _extends2,
        _this2 = this;

    var _this$props = this.props,
        open = _this$props.open,
        pullRight = _this$props.pullRight,
        labelledBy = _this$props.labelledBy,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        rootCloseEvent = _this$props.rootCloseEvent,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["open", "pullRight", "labelledBy", "onSelect", "className", "rootCloseEvent", "children"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['onClose']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'right')] = pullRight, _extends2));

    return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_overlays_lib_RootCloseWrapper___default.a, {
      disabled: !open,
      onRootClose: this.handleRootClose,
      event: rootCloseEvent
    }, __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("ul", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "menu",
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, classes),
      "aria-labelledby": labelledBy
    }), __WEBPACK_IMPORTED_MODULE_13__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.cloneElement(child, {
        onKeyDown: Object(__WEBPACK_IMPORTED_MODULE_12__utils_createChainedFunction__["a" /* default */])(child.props.onKeyDown, _this2.handleKeyDown),
        onSelect: Object(__WEBPACK_IMPORTED_MODULE_12__utils_createChainedFunction__["a" /* default */])(child.props.onSelect, onSelect)
      });
    })));
  };

  return DropdownMenu;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_11__utils_bootstrapUtils__["a" /* bsClass */])('dropdown-menu', DropdownMenu));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");









var propTypes = {
  noCaret: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  open: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  useAnchor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
};
var defaultProps = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle'
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        noCaret = _this$props.noCaret,
        open = _this$props.open,
        useAnchor = _this$props.useAnchor,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["noCaret", "open", "useAnchor", "bsClass", "className", "children"]);

    delete props.bsRole;
    var Component = useAnchor ? __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_6__Button__["a" /* default */];
    var useCaret = !noCaret; // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.
    // FIXME: Should this really fall back to `title` as children?

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      role: "button",
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, bsClass),
      "aria-haspopup": true,
      "aria-expanded": open
    }), children || props.title, useCaret && ' ', useCaret && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
      className: "caret"
    }));
  };

  return DropdownToggle;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('dropdown-toggle', DropdownToggle));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Fade.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition__ = __webpack_require__("./node_modules/react-transition-group/Transition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition__);




var _fadeStyles;





var propTypes = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the has component faded in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired before the component fades out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the component has faded out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[__WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition__["ENTERING"]] = 'in', _fadeStyles[__WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition__["ENTERED"]] = 'in', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Fade, _React$Component);

  function Fade() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_transition_group_Transition___default.a, props, function (status, innerProps) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(children, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, innerProps, {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Fade);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  horizontal: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  inline: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form'
};

var Form =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Form, _React$Component);

  function Form() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Form.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        horizontal = _this$props.horizontal,
        inline = _this$props.inline,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["horizontal", "inline", "componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = [];

    if (horizontal) {
      classes.push(Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'horizontal'));
    }

    if (inline) {
      classes.push(Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'inline'));
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Form;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('form', Form));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormControl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormControlFeedback__ = __webpack_require__("./node_modules/react-bootstrap/es/FormControlFeedback.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FormControlStatic__ = __webpack_require__("./node_modules/react-bootstrap/es/FormControlStatic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");












var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a,

  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};
var defaultProps = {
  componentClass: 'input'
};
var contextTypes = {
  $bs_formGroup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _this$props = this.props,
        Component = _this$props.componentClass,
        type = _this$props.type,
        _this$props$id = _this$props.id,
        id = _this$props$id === void 0 ? controlId : _this$props$id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        bsSize = _this$props.bsSize,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "type", "id", "inputRef", "className", "bsSize"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     true ? __WEBPACK_IMPORTED_MODULE_7_warning___default()(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0; // input[type="file"] should not have .form-control.

    var classes;

    if (type !== 'file') {
      classes = Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    } // If user provides a size, make sure to append it to classes as input-
    // e.g. if bsSize is small, it will append input-sm


    if (bsSize) {
      var size = __WEBPACK_IMPORTED_MODULE_11__utils_StyleConfig__["b" /* SIZE_MAP */][bsSize] || bsSize;
      classes[Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])({
        bsClass: 'input'
      }, size)] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      type: type,
      id: id,
      ref: inputRef,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return FormControl;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;
FormControl.Feedback = __WEBPACK_IMPORTED_MODULE_8__FormControlFeedback__["a" /* default */];
FormControl.Static = __WEBPACK_IMPORTED_MODULE_9__FormControlStatic__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["a" /* bsClass */])('form-control', Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_11__utils_StyleConfig__["c" /* Size */].SMALL, __WEBPACK_IMPORTED_MODULE_11__utils_StyleConfig__["c" /* Size */].LARGE], FormControl)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormControlFeedback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Glyphicon__ = __webpack_require__("./node_modules/react-bootstrap/es/Glyphicon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var defaultProps = {
  bsRole: 'feedback'
};
var contextTypes = {
  $bs_formGroup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object
};

var FormControlFeedback =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(FormControlFeedback, _React$Component);

  function FormControlFeedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControlFeedback.prototype;

  _proto.getGlyph = function getGlyph(validationState) {
    switch (validationState) {
      case 'success':
        return 'ok';

      case 'warning':
        return 'warning-sign';

      case 'error':
        return 'remove';

      default:
        return null;
    }
  };

  _proto.renderDefaultFeedback = function renderDefaultFeedback(formGroup, className, classes, elementProps) {
    var glyph = this.getGlyph(formGroup && formGroup.validationState);

    if (!glyph) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Glyphicon__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      glyph: glyph,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);

    if (!children) {
      return this.renderDefaultFeedback(this.context.$bs_formGroup, className, classes, elementProps);
    }

    var child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(children);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(child.props.className, className, classes)
    }));
  };

  return FormControlFeedback;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

FormControlFeedback.defaultProps = defaultProps;
FormControlFeedback.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('form-control-feedback', FormControlFeedback));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormControlStatic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'p'
};

var FormControlStatic =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(FormControlStatic, _React$Component);

  function FormControlStatic() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControlStatic.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return FormControlStatic;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

FormControlStatic.propTypes = propTypes;
FormControlStatic.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('form-control-static', FormControlStatic));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");









var propTypes = {
  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  validationState: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['success', 'warning', 'error', null])
};
var childContextTypes = {
  $bs_formGroup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired
};

var FormGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(FormGroup, _React$Component);

  function FormGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        controlId = _this$props.controlId,
        validationState = _this$props.validationState;
    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState
      }
    };
  };

  _proto.hasFeedback = function hasFeedback(children) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].some(children, function (child) {
      return child.props.bsRole === 'feedback' || child.props.children && _this.hasFeedback(child.props.children);
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        validationState = _this$props2.validationState,
        className = _this$props2.className,
        children = _this$props2.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["validationState", "className", "children"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['controlId']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      'has-feedback': this.hasFeedback(children)
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), children);
  };

  return FormGroup;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

FormGroup.propTypes = propTypes;
FormGroup.childContextTypes = childContextTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('form-group', Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["c" /* Size */].SMALL], FormGroup)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Glyphicon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  /**
   * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  glyph: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string.isRequired
};

var Glyphicon =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Glyphicon, _React$Component);

  function Glyphicon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Glyphicon.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        glyph = _this$props.glyph,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["glyph", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, glyph)] = true, _extends2));

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Glyphicon;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Glyphicon.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('glyphicon', Glyphicon));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * You can use a custom element for this component
   */
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div',
  fluid: false
};

var Grid =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Grid, _React$Component);

  function Grid() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Grid.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        fluid = _this$props.fluid,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["fluid", "componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, fluid && 'fluid');
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Grid;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('container', Grid));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/HelpBlock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var HelpBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(HelpBlock, _React$Component);

  function HelpBlock() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HelpBlock.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return HelpBlock;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('help-block', HelpBlock));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  /**
   * Sets image as responsive image
   */
  responsive: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Sets image shape as rounded
   */
  rounded: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Sets image shape as circle
   */
  circle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Sets image shape as thumbnail
   */
  thumbnail: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  responsive: false,
  rounded: false,
  circle: false,
  thumbnail: false
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        responsive = _this$props.responsive,
        rounded = _this$props.rounded,
        circle = _this$props.circle,
        thumbnail = _this$props.thumbnail,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["responsive", "rounded", "circle", "thumbnail", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (_classes = {}, _classes[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'responsive')] = responsive, _classes[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'rounded')] = rounded, _classes[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'circle')] = circle, _classes[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'thumbnail')] = thumbnail, _classes);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Image;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('img', Image));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/InputGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__InputGroupAddon__ = __webpack_require__("./node_modules/react-bootstrap/es/InputGroupAddon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__InputGroupButton__ = __webpack_require__("./node_modules/react-bootstrap/es/InputGroupButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");










var InputGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return InputGroup;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

InputGroup.Addon = __WEBPACK_IMPORTED_MODULE_5__InputGroupAddon__["a" /* default */];
InputGroup.Button = __WEBPACK_IMPORTED_MODULE_6__InputGroupButton__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('input-group', Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["c" /* Size */].SMALL], InputGroup)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/InputGroupAddon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var InputGroupAddon =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(InputGroupAddon, _React$Component);

  function InputGroupAddon() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupAddon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return InputGroupAddon;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('input-group-addon', InputGroupAddon));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/InputGroupButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var InputGroupButton =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(InputGroupButton, _React$Component);

  function InputGroupButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroupButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return InputGroupButton;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('input-group-btn', InputGroupButton));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Jumbotron.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }));
  };

  return Jumbotron;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('jumbotron', Jumbotron));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Label.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");









var Label =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Label, _React$Component);

  function Label() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Label.prototype;

  _proto.hasContent = function hasContent(children) {
    var result = false;
    __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.forEach(children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });
    return result;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }), children);
  };

  return Label;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('label', Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["d" /* State */]).concat([__WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["e" /* Style */].DEFAULT, __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["e" /* Style */].PRIMARY]), __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["e" /* Style */].DEFAULT, Label)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListGroupItem__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroupItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");









var propTypes = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (__WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].some(children, function (child) {
    return child.type !== __WEBPACK_IMPORTED_MODULE_6__ListGroupItem__["a" /* default */] || child.props.href || child.props.onClick;
  })) {
    return 'div';
  }

  return 'ul';
}

var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        _this$props$component = _this$props.componentClass,
        Component = _this$props$component === void 0 ? getDefaultComponent(children) : _this$props$component,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    var useListItem = Component === 'ul' && __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].every(children, function (child) {
      return child.type === __WEBPACK_IMPORTED_MODULE_6__ListGroupItem__["a" /* default */];
    });
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), useListItem ? __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(child, {
        listItem: true
      });
    }) : children);
  };

  return ListGroup;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ListGroup.propTypes = propTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('list-group', ListGroup));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroupItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");









var propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
  header: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
  listItem: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  href: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
var defaultProps = {
  listItem: false
};

var ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ListGroupItem, _React$Component);

  function ListGroupItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.renderHeader = function renderHeader(header, headingClassName) {
    if (__WEBPACK_IMPORTED_MODULE_5_react___default.a.isValidElement(header)) {
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(header, {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(header.props.className, headingClassName)
      });
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("h4", {
      className: headingClassName
    }, header);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        className = _this$props.className,
        header = _this$props.header,
        listItem = _this$props.listItem,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["active", "disabled", "className", "header", "listItem", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      active: active,
      disabled: disabled
    });

    var Component;

    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }

    elementProps.className = __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes); // TODO: Deprecate `header` prop.

    if (header) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, elementProps, this.renderHeader(header, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'heading')), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("p", {
        className: Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'text')
      }, children));
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, elementProps, children);
  };

  return ListGroupItem;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('list-group-item', Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["d" /* State */]), ListGroupItem)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MediaBody__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaBody.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MediaHeading__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaHeading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MediaLeft__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaLeft.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MediaList__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MediaListItem__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaListItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MediaRight__ = __webpack_require__("./node_modules/react-bootstrap/es/MediaRight.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");













var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Media;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Media.propTypes = propTypes;
Media.defaultProps = defaultProps;
Media.Heading = __WEBPACK_IMPORTED_MODULE_7__MediaHeading__["a" /* default */];
Media.Body = __WEBPACK_IMPORTED_MODULE_6__MediaBody__["a" /* default */];
Media.Left = __WEBPACK_IMPORTED_MODULE_8__MediaLeft__["a" /* default */];
Media.Right = __WEBPACK_IMPORTED_MODULE_11__MediaRight__["a" /* default */];
Media.List = __WEBPACK_IMPORTED_MODULE_9__MediaList__["a" /* default */];
Media.ListItem = __WEBPACK_IMPORTED_MODULE_10__MediaListItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__["a" /* bsClass */])('media', Media));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaBody.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");









var propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'middle', 'bottom']),
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var MediaBody =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaBody, _React$Component);

  function MediaBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        align = _this$props.align,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "align", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(__WEBPACK_IMPORTED_MODULE_7__Media__["a" /* default */].defaultProps, align)] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaBody;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MediaBody.propTypes = propTypes;
MediaBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('media-body', MediaBody));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaHeading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'h4'
};

var MediaHeading =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaHeading, _React$Component);

  function MediaHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaHeading;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MediaHeading.propTypes = propTypes;
MediaHeading.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('media-heading', MediaHeading));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaLeft.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaLeft =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaLeft, _React$Component);

  function MediaLeft() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaLeft.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["align", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(__WEBPACK_IMPORTED_MODULE_6__Media__["a" /* default */].defaultProps, align)] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaLeft;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MediaLeft.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('media-left', MediaLeft));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var MediaList =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaList, _React$Component);

  function MediaList() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ul", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaList;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('media-list', MediaList));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var MediaListItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaListItem, _React$Component);

  function MediaListItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("li", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaListItem;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('media', MediaListItem));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MediaRight.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'middle', 'bottom'])
};

var MediaRight =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MediaRight, _React$Component);

  function MediaRight() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MediaRight.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        align = _this$props.align,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["align", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-right-top`.
      classes[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(__WEBPACK_IMPORTED_MODULE_6__Media__["a" /* default */].defaultProps, align)] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return MediaRight;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

MediaRight.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('media-right', MediaRight));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_all__ = __webpack_require__("./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");











var propTypes = {
  /**
   * Highlight the menu item as active.
   */
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_all___default()(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, function (_ref) {
    var divider = _ref.divider,
        children = _ref.children;
    return divider && children ? new Error('Children will not be rendered for dividers') : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
};
var defaultProps = {
  divider: false,
  disabled: false,
  header: false
};

var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(MenuItem, _React$Component);

  function MenuItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        href = _this$props.href,
        disabled = _this$props.disabled,
        onSelect = _this$props.onSelect,
        eventKey = _this$props.eventKey;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        divider = _this$props2.divider,
        header = _this$props2.header,
        onClick = _this$props2.onClick,
        className = _this$props2.className,
        style = _this$props2.style,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["active", "disabled", "divider", "header", "onClick", "className", "style"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['eventKey', 'onSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
        role: "separator",
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, 'divider'),
        style: style
      }));
    }

    if (header) {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
        role: "heading",
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'header')),
        style: style
      }));
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
      role: "presentation",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, {
        active: active,
        disabled: disabled
      }),
      style: style
    }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__SafeAnchor__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "menuitem",
      tabIndex: "-1",
      onClick: Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(onClick, this.handleClick)
    })));
  };

  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["a" /* bsClass */])('dropdown', MenuItem));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Modal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_events__ = __webpack_require__("./node_modules/dom-helpers/events/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_ownerDocument__ = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_ownerDocument___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dom_helpers_ownerDocument__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_helpers_util_inDOM__ = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_helpers_util_inDOM___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_dom_helpers_util_inDOM__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_scrollbarSize__ = __webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal__ = __webpack_require__("./node_modules/react-overlays/lib/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_utils_isOverflowing__ = __webpack_require__("./node_modules/react-overlays/lib/utils/isOverflowing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_utils_isOverflowing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_utils_isOverflowing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ModalBody__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ModalDialog__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ModalFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ModalHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ModalTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__utils_splitComponentProps__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/splitComponentProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");


























var propTypes = Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default.a.propTypes, __WEBPACK_IMPORTED_MODULE_17__ModalDialog__["a" /* default */].propTypes, {
  /**
   * Include a backdrop component. Specify 'static' for a backdrop that doesn't
   * trigger an "onHide" when clicked.
   */
  backdrop: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['static', true, false]),

  /**
   * Add an optional extra class name to .modal-backdrop
   * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
   */
  backdropClassName: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * Open and close the Modal with a slide and fade animation.
   */
  animation: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * A Component type that provides the modal content Markup. This is a useful
   * prop when you want to use your own styles and markup to create a custom
   * modal component.
   */
  dialogComponentClass: __WEBPACK_IMPORTED_MODULE_14_prop_types_extra_lib_elementType___default.a,

  /**
   * When `true` The modal will automatically shift focus to itself when it
   * opens, and replace it to the last focused element when it closes.
   * Generally this should never be set to false as it makes the Modal less
   * accessible to assistive technologies, like screen-readers.
   */
  autoFocus: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while
   * open. Consider leaving the default value here, as it is necessary to make
   * the Modal work well with assistive technologies, such as screen readers.
   */
  enforceFocus: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * When `true` The modal will show itself.
   */
  show: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * A callback fired when the header closeButton or non-static backdrop is
   * clicked. Required if either are specified.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func,

  /**
   * @private
   */
  container: __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default.a.propTypes.container
});

var defaultProps = Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default.a.defaultProps, {
  animation: true,
  dialogComponentClass: __WEBPACK_IMPORTED_MODULE_17__ModalDialog__["a" /* default */]
});

var childContextTypes = {
  $bs_modal: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.shape({
    onHide: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.func
  })
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Fade__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
    timeout: Modal.TRANSITION_DURATION
  }));
}

function BackdropTransition(props) {
  return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Fade__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
    timeout: Modal.BACKDROP_TRANSITION_DURATION
  }));
}
/* eslint-enable no-use-before-define */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Modal, _React$Component);

  function Modal(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleEntering = _this.handleEntering.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleExited = _this.handleExited.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleWindowResize = _this.handleWindowResize.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleDialogClick = _this.handleDialogClick.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.setModalRef = _this.setModalRef.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.state = {
      style: {}
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide
      }
    };
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  _proto.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };

  _proto.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  _proto.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    __WEBPACK_IMPORTED_MODULE_5_dom_helpers_events___default.a.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  _proto.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    __WEBPACK_IMPORTED_MODULE_5_dom_helpers_events___default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  _proto.updateStyle = function updateStyle() {
    if (!__WEBPACK_IMPORTED_MODULE_7_dom_helpers_util_inDOM___default.a) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();

    var dialogHeight = dialogNode.scrollHeight;
    var document = __WEBPACK_IMPORTED_MODULE_6_dom_helpers_ownerDocument___default()(dialogNode);
    var bodyIsOverflowing = __WEBPACK_IMPORTED_MODULE_13_react_overlays_lib_utils_isOverflowing___default()(__WEBPACK_IMPORTED_MODULE_11_react_dom___default.a.findDOMNode(this.props.container || document.body));
    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_scrollbarSize___default()() : undefined,
        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? __WEBPACK_IMPORTED_MODULE_8_dom_helpers_util_scrollbarSize___default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        backdrop = _this$props.backdrop,
        backdropClassName = _this$props.backdropClassName,
        animation = _this$props.animation,
        show = _this$props.show,
        Dialog = _this$props.dialogComponentClass,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        onEntering = _this$props.onEntering,
        onExited = _this$props.onExited,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["backdrop", "backdropClassName", "animation", "show", "dialogComponentClass", "className", "style", "children", "onEntering", "onExited"]);

    var _splitComponentProps = Object(__WEBPACK_IMPORTED_MODULE_23__utils_splitComponentProps__["a" /* default */])(props, __WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default.a),
        baseModalProps = _splitComponentProps[0],
        dialogProps = _splitComponentProps[1];

    var inClassName = show && !animation && 'in';
    return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_react_overlays_lib_Modal___default.a, Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, baseModalProps, {
      ref: this.setModalRef,
      show: show,
      containerClassName: Object(__WEBPACK_IMPORTED_MODULE_21__utils_bootstrapUtils__["e" /* prefix */])(props, 'open'),
      transition: animation ? DialogTransition : undefined,
      backdrop: backdrop,
      backdropTransition: animation ? BackdropTransition : undefined,
      backdropClassName: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(Object(__WEBPACK_IMPORTED_MODULE_21__utils_bootstrapUtils__["e" /* prefix */])(props, 'backdrop'), backdropClassName, inClassName),
      onEntering: Object(__WEBPACK_IMPORTED_MODULE_22__utils_createChainedFunction__["a" /* default */])(onEntering, this.handleEntering),
      onExited: Object(__WEBPACK_IMPORTED_MODULE_22__utils_createChainedFunction__["a" /* default */])(onExited, this.handleExited)
    }), __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Dialog, Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, dialogProps, {
      style: Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, this.state.style, style),
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, inClassName),
      onClick: backdrop === true ? this.handleDialogClick : null
    }), children));
  };

  return Modal;
}(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.childContextTypes = childContextTypes;
Modal.Body = __WEBPACK_IMPORTED_MODULE_16__ModalBody__["a" /* default */];
Modal.Header = __WEBPACK_IMPORTED_MODULE_19__ModalHeader__["a" /* default */];
Modal.Title = __WEBPACK_IMPORTED_MODULE_20__ModalTitle__["a" /* default */];
Modal.Footer = __WEBPACK_IMPORTED_MODULE_18__ModalFooter__["a" /* default */];
Modal.Dialog = __WEBPACK_IMPORTED_MODULE_17__ModalDialog__["a" /* default */];
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_21__utils_bootstrapUtils__["a" /* bsClass */])('modal', Object(__WEBPACK_IMPORTED_MODULE_21__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_24__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_24__utils_StyleConfig__["c" /* Size */].SMALL], Modal)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalBody.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var ModalBody =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ModalBody, _React$Component);

  function ModalBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ModalBody;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('modal-body', ModalBody));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");








var propTypes = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        dialogClassName = _this$props.dialogClassName,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["dialogClassName", "className", "style", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var bsClassName = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps);

    var modalStyle = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      display: 'block'
    }, style);

    var dialogClasses = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[bsClassName] = false, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'dialog')] = true, _extends2));

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      tabIndex: "-1",
      role: "dialog",
      style: modalStyle,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, bsClassName)
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(dialogClassName, dialogClasses)
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'content'),
      role: "document"
    }, children)));
  };

  return ModalDialog;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ModalDialog.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('modal', Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_7__utils_StyleConfig__["c" /* Size */].SMALL], ModalDialog)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalFooter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ModalFooter;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('modal-footer', ModalFooter));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CloseButton__ = __webpack_require__("./node_modules/react-bootstrap/es/CloseButton.js");








 // TODO: `aria-label` should be `closeLabel`.

var propTypes = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
};
var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var contextTypes = {
  $bs_modal: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    onHide: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
  })
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["closeLabel", "closeButton", "onHide", "className", "children"]);

    var modal = this.context.$bs_modal;

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), closeButton && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CloseButton__["a" /* default */], {
      label: closeLabel,
      onClick: Object(__WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__["a" /* default */])(modal && modal.onHide, onHide)
    }), children);
  };

  return ModalHeader;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('modal-header', ModalHeader));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'h4'
};

var ModalTitle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ModalTitle, _React$Component);

  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return ModalTitle;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ModalTitle.propTypes = propTypes;
ModalTitle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('modal-title', ModalTitle));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_keycode__ = __webpack_require__("./node_modules/keycode/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_keycode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_keycode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types_extra_lib_all__ = __webpack_require__("./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");












 // TODO: Should we expose `<NavItem>` as `<Nav.Item>`?
// TODO: This `bsStyle` is very unlike the others. Should we rename it?
// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  justified: __WEBPACK_IMPORTED_MODULE_8_prop_types_extra_lib_all___default()(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, function (_ref) {
    var justified = _ref.justified,
        navbar = _ref.navbar;
    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};
var defaultProps = {
  justified: false,
  pullRight: false,
  pullLeft: false,
  stacked: false
};
var contextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }),
  $bs_tabContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
    onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    getTabId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    getPaneId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
  })
};

var Nav =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Nav, _React$Component);

  function Nav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    var _this = this;

    if (!this._needsRefocus) {
      return;
    }

    this._needsRefocus = false;
    var children = this.props.children;

    var _this$getActiveProps = this.getActiveProps(),
        activeKey = _this$getActiveProps.activeKey,
        activeHref = _this$getActiveProps.activeHref;

    var activeChild = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].find(children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    });
    var childrenArray = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].toArray(children);
    var activeChildIndex = childrenArray.indexOf(activeChild);
    var childNodes = __WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.findDOMNode(this).children;
    var activeNode = childNodes && childNodes[activeChildIndex];

    if (!activeNode || !activeNode.firstChild) {
      return;
    }

    activeNode.firstChild.focus();
  };

  _proto.getActiveProps = function getActiveProps() {
    var tabContainer = this.context.$bs_tabContainer;

    if (tabContainer) {
       true ? __WEBPACK_IMPORTED_MODULE_9_warning___default()(this.props.activeKey == null && !this.props.activeHref, 'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' + 'a `<TabContainer>` is not supported. Instead use `<TabContainer ' + ("activeKey={" + this.props.activeKey + "} />`.")) : void 0;
      return tabContainer;
    }

    return this.props;
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    var _this2 = this;

    var children = this.props.children;
    var validChildren = children.filter(function (child) {
      return child.props.eventKey != null && !child.props.disabled;
    });

    var _this$getActiveProps2 = this.getActiveProps(),
        activeKey = _this$getActiveProps2.activeKey,
        activeHref = _this$getActiveProps2.activeHref;

    var activeChild = __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].find(children, function (child) {
      return _this2.isActive(child, activeKey, activeHref);
    }); // This assumes the active child is not disabled.

    var activeChildIndex = validChildren.indexOf(activeChild);

    if (activeChildIndex === -1) {
      // Something has gone wrong. Select the first valid child we can find.
      return validChildren[0];
    }

    var nextIndex = activeChildIndex + offset;
    var numValidChildren = validChildren.length;

    if (nextIndex >= numValidChildren) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numValidChildren - 1;
    }

    return validChildren[nextIndex];
  };

  _proto.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
    var _this3 = this;

    if (!tabContainer && navRole !== 'tablist') {
      // No tab props here.
      return null;
    }

    var _child$props = child.props,
        id = _child$props.id,
        controls = _child$props['aria-controls'],
        eventKey = _child$props.eventKey,
        role = _child$props.role,
        onKeyDown = _child$props.onKeyDown,
        tabIndex = _child$props.tabIndex;

    if (tabContainer) {
       true ? __WEBPACK_IMPORTED_MODULE_9_warning___default()(!id && !controls, 'In the context of a `<TabContainer>`, `<NavItem>`s are given ' + 'generated `id` and `aria-controls` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly, provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;
      id = tabContainer.getTabId(eventKey);
      controls = tabContainer.getPaneId(eventKey);
    }

    if (navRole === 'tablist') {
      role = role || 'tab';
      onKeyDown = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(function (event) {
        return _this3.handleTabKeyDown(onSelect, event);
      }, onKeyDown);
      tabIndex = active ? tabIndex : -1;
    }

    return {
      id: id,
      role: role,
      onKeyDown: onKeyDown,
      'aria-controls': controls,
      tabIndex: tabIndex
    };
  };

  _proto.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
    var nextActiveChild;

    switch (event.keyCode) {
      case __WEBPACK_IMPORTED_MODULE_4_keycode___default.a.codes.left:
      case __WEBPACK_IMPORTED_MODULE_4_keycode___default.a.codes.up:
        nextActiveChild = this.getNextActiveChild(-1);
        break;

      case __WEBPACK_IMPORTED_MODULE_4_keycode___default.a.codes.right:
      case __WEBPACK_IMPORTED_MODULE_4_keycode___default.a.codes.down:
        nextActiveChild = this.getNextActiveChild(1);
        break;

      default:
        // It was a different key; don't handle this keypress.
        return;
    }

    event.preventDefault();

    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey != null) {
      onSelect(nextActiveChild.props.eventKey);
    }

    this._needsRefocus = true;
  };

  _proto.isActive = function isActive(_ref2, activeKey, activeHref) {
    var props = _ref2.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _extends2,
        _this4 = this;

    var _this$props = this.props,
        stacked = _this$props.stacked,
        justified = _this$props.justified,
        onSelect = _this$props.onSelect,
        propsRole = _this$props.role,
        propsNavbar = _this$props.navbar,
        pullRight = _this$props.pullRight,
        pullLeft = _this$props.pullLeft,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["stacked", "justified", "onSelect", "role", "navbar", "pullRight", "pullLeft", "className", "children"]);

    var tabContainer = this.context.$bs_tabContainer;
    var role = propsRole || (tabContainer ? 'tablist' : null);

    var _this$getActiveProps3 = this.getActiveProps(),
        activeKey = _this$getActiveProps3.activeKey,
        activeHref = _this$getActiveProps3.activeHref;

    delete props.activeKey; // Accessed via this.getActiveProps().

    delete props.activeHref; // Accessed via this.getActiveProps().

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'stacked')] = stacked, _extends2[Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'justified')] = justified, _extends2));

    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
    var pullLeftClassName;
    var pullRightClassName;

    if (navbar) {
      var navbarProps = this.context.$bs_navbar || {
        bsClass: 'navbar'
      };
      classes[Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'nav')] = true;
      pullRightClassName = Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'right');
      pullLeftClassName = Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'left');
    } else {
      pullRightClassName = 'pull-right';
      pullLeftClassName = 'pull-left';
    }

    classes[pullRightClassName] = pullRight;
    classes[pullLeftClassName] = pullLeft;
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("ul", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: role,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_12__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      var active = _this4.isActive(child, activeKey, activeHref);

      var childOnSelect = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(child.props.onSelect, onSelect, navbar && navbar.onSelect, tabContainer && tabContainer.onSelect);
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(child, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, _this4.getTabProps(child, tabContainer, role, active, childOnSelect), {
        active: active,
        activeKey: activeKey,
        activeHref: activeHref,
        onSelect: childOnSelect
      }));
    }));
  };

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["a" /* bsClass */])('nav', Object(__WEBPACK_IMPORTED_MODULE_10__utils_bootstrapUtils__["c" /* bsStyles */])(['tabs', 'pills'], Nav)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavDropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_splitComponentProps__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/splitComponentProps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");










var propTypes = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].propTypes, {
  // Toggle props.
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node.isRequired,
  noCaret: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  activeKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
  activeHref: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node
});

var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.isActive = function isActive(_ref, activeKey, activeHref) {
    var _this = this;

    var props = _ref.props;

    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
      return true;
    }

    if (__WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].some(props.children, function (child) {
      return _this.isActive(child, activeKey, activeHref);
    })) {
      return true;
    }

    return props.active;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        title = _this$props.title,
        activeKey = _this$props.activeKey,
        activeHref = _this$props.activeHref,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["title", "activeKey", "activeHref", "className", "style", "children"]);

    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().

    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_splitComponentProps__["a" /* default */])(props, __WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        toggleProps = _splitComponentProps[1]; // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.


    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, dropdownProps, {
      componentClass: "li",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, {
        active: active
      }),
      style: style
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].Toggle, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, toggleProps, {
      useAnchor: true
    }), title), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].Menu, null, __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, {
        active: _this2.isActive(child, activeKey, activeHref)
      });
    })));
  };

  return NavDropdown;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

NavDropdown.propTypes = propTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (NavDropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");









var propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  href: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any
};
var defaultProps = {
  active: false,
  disabled: false
};

var NavItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavItem, _React$Component);

  function NavItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = NavItem.prototype;

  _proto.handleClick = function handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey, e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        disabled = _this$props.disabled,
        onClick = _this$props.onClick,
        className = _this$props.className,
        style = _this$props.style,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["active", "disabled", "onClick", "className", "style"]);

    delete props.onSelect;
    delete props.eventKey; // These are injected down by `<Nav>` for building `<SubNav>`s.

    delete props.activeKey;
    delete props.activeHref;

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button';
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active;
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
      role: "presentation",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, {
        active: active,
        disabled: disabled
      }),
      style: style
    }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SafeAnchor__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      disabled: disabled,
      onClick: Object(__WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__["a" /* default */])(onClick, this.handleClick)
    })));
  };

  return NavItem;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Grid__ = __webpack_require__("./node_modules/react-bootstrap/es/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NavbarBrand__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarBrand.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__NavbarCollapse__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarCollapse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__NavbarHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__NavbarToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");




// TODO: Remove this pragma once we upgrade eslint-config-airbnb.

/* eslint-disable react/no-multi-comp */













var propTypes = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Sets `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * The onSelect callback should be used instead for more complex operations
   * that need to be executed after the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
};
var defaultProps = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  collapseOnSelect: false
};
var childContextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    expanded: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    onToggle: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  })
};

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Navbar, _React$Component);

  function Navbar(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = _this.handleToggle.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleCollapse = _this.handleCollapse.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        bsClass = _this$props.bsClass,
        expanded = _this$props.expanded,
        onSelect = _this$props.onSelect,
        collapseOnSelect = _this$props.collapseOnSelect;
    return {
      $bs_navbar: {
        bsClass: bsClass,
        expanded: expanded,
        onToggle: this.handleToggle,
        onSelect: Object(__WEBPACK_IMPORTED_MODULE_16__utils_createChainedFunction__["a" /* default */])(onSelect, collapseOnSelect ? this.handleCollapse : null)
      }
    };
  };

  _proto.handleCollapse = function handleCollapse() {
    var _this$props2 = this.props,
        onToggle = _this$props2.onToggle,
        expanded = _this$props2.expanded;

    if (expanded) {
      onToggle(false);
    }
  };

  _proto.handleToggle = function handleToggle() {
    var _this$props3 = this.props,
        onToggle = _this$props3.onToggle,
        expanded = _this$props3.expanded;
    onToggle(!expanded);
  };

  _proto.render = function render() {
    var _extends2;

    var _this$props4 = this.props,
        Component = _this$props4.componentClass,
        fixedTop = _this$props4.fixedTop,
        fixedBottom = _this$props4.fixedBottom,
        staticTop = _this$props4.staticTop,
        inverse = _this$props4.inverse,
        fluid = _this$props4.fluid,
        className = _this$props4.className,
        children = _this$props4.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props4, ["componentClass", "fixedTop", "fixedBottom", "staticTop", "inverse", "fluid", "className", "children"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['expanded', 'onToggle', 'onSelect', 'collapseOnSelect']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1]; // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one


    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].INVERSE;
    }

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'fixed-top')] = fixedTop, _extends2[Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'fixed-bottom')] = fixedBottom, _extends2[Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'static-top')] = staticTop, _extends2));

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Grid__["a" /* default */], {
      fluid: fluid
    }, children));
  };

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
Navbar.childContextTypes = childContextTypes;
Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["a" /* bsClass */])('navbar', Navbar);
var UncontrollableNavbar = __WEBPACK_IMPORTED_MODULE_8_uncontrollable___default()(Navbar, {
  expanded: 'onToggle'
});

function createSimpleWrapper(tag, suffix, displayName) {
  var Wrapper = function Wrapper(_ref, _ref2) {
    var Component = _ref.componentClass,
        className = _ref.className,
        pullRight = _ref.pullRight,
        pullLeft = _ref.pullLeft,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["componentClass", "className", "pullRight", "pullLeft"]);

    var _ref2$$bs_navbar = _ref2.$bs_navbar,
        navbarProps = _ref2$$bs_navbar === void 0 ? {
      bsClass: 'navbar'
    } : _ref2$$bs_navbar;
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, suffix), pullRight && Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'right'), pullLeft && Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'left'))
    }));
  };

  Wrapper.displayName = displayName;
  Wrapper.propTypes = {
    componentClass: __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a,
    pullRight: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    pullLeft: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
  };
  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };
  Wrapper.contextTypes = {
    $bs_navbar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
      bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
    })
  };
  return Wrapper;
}

UncontrollableNavbar.Brand = __WEBPACK_IMPORTED_MODULE_10__NavbarBrand__["a" /* default */];
UncontrollableNavbar.Header = __WEBPACK_IMPORTED_MODULE_12__NavbarHeader__["a" /* default */];
UncontrollableNavbar.Toggle = __WEBPACK_IMPORTED_MODULE_13__NavbarToggle__["a" /* default */];
UncontrollableNavbar.Collapse = __WEBPACK_IMPORTED_MODULE_11__NavbarCollapse__["a" /* default */];
UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink'); // Set bsStyles here so they can be overridden.

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["c" /* bsStyles */])([__WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].DEFAULT, __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].INVERSE], __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].DEFAULT, UncontrollableNavbar));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarBrand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var contextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
  })
};

var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'brand');

    if (__WEBPACK_IMPORTED_MODULE_4_react___default.a.isValidElement(children)) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(children, {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(children.props.className, className, bsClassName)
      });
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, bsClassName)
    }), children);
  };

  return NavbarBrand;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

NavbarBrand.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (NavbarBrand);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarCollapse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collapse__ = __webpack_require__("./node_modules/react-bootstrap/es/Collapse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var contextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    expanded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
  })
};

var NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'collapse');
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Collapse__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      in: navbarProps.expanded
    }, props), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      className: bsClassName
    }, children));
  };

  return NavbarCollapse;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

NavbarCollapse.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (NavbarCollapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var contextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
  })
};

var NavbarHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavbarHeader, _React$Component);

  function NavbarHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };
    var bsClassName = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'header');
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, bsClassName)
    }));
  };

  return NavbarHeader;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

NavbarHeader.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (NavbarHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");








var propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node
};
var contextTypes = {
  $bs_navbar: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    expanded: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    onToggle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
  })
};

var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(NavbarToggle, _React$Component);

  function NavbarToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onClick = _this$props.onClick,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["onClick", "className", "children"]);

    var navbarProps = this.context.$bs_navbar || {
      bsClass: 'navbar'
    };

    var buttonProps = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      type: 'button'
    }, props, {
      onClick: Object(__WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__["a" /* default */])(onClick, navbarProps.onToggle),
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(navbarProps, 'toggle'), !navbarProps.expanded && 'collapsed')
    });

    if (children) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", buttonProps, children);
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("button", buttonProps, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
      className: "sr-only"
    }, "Toggle navigation"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
      className: "icon-bar"
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
      className: "icon-bar"
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("span", {
      className: "icon-bar"
    }));
  };

  return NavbarToggle;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

NavbarToggle.propTypes = propTypes;
NavbarToggle.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (NavbarToggle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Overlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_overlays_lib_Overlay__ = __webpack_require__("./node_modules/react-overlays/lib/Overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_overlays_lib_Overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_overlays_lib_Overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");










var propTypes = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_6_react_overlays_lib_Overlay___default.a.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Use animation
   */
  animation: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * Sets the direction of the Overlay.
   */
  placement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left'])
});

var defaultProps = {
  animation: __WEBPACK_IMPORTED_MODULE_8__Fade__["a" /* default */],
  rootClose: false,
  show: false,
  placement: 'right'
};

var Overlay =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Overlay, _React$Component);

  function Overlay() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Overlay.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        animation = _this$props.animation,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["animation", "children"]);

    var transition = animation === true ? __WEBPACK_IMPORTED_MODULE_8__Fade__["a" /* default */] : animation || null;
    var child;

    if (!transition) {
      child = Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(children, {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(children.props.className, 'in')
      });
    } else {
      child = children;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_overlays_lib_Overlay___default.a, Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      transition: transition
    }), child);
  };

  return Overlay;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/OverlayTrigger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_core_js_array_is_array__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_core_js_array_is_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_core_js_array_is_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_query_contains__ = __webpack_require__("./node_modules/dom-helpers/query/contains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_query_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_query_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Overlay__ = __webpack_require__("./node_modules/react-bootstrap/es/Overlay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");












/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */

function isOneOf(one, of) {
  if (__WEBPACK_IMPORTED_MODULE_4__babel_runtime_corejs2_core_js_array_is_array___default()(of)) {
    return of.indexOf(one) >= 0;
  }

  return one === of;
}

var triggerType = __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(['click', 'hover', 'focus']);

var propTypes = Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_10__Overlay__["a" /* default */].propTypes, {
  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([triggerType, __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,

  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,

  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,
  // FIXME: This should be `defaultShow`.

  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node.isRequired,

  /**
   * @private
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * @private
   */
  onClick: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * @private
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * @private
   */
  onMouseOut: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * @private
   */
  onMouseOver: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,
  // Overridden props from `<Overlay>`.

  /**
   * @private
   */
  target: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf([null]),

  /**
   * @private
   */
  onHide: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf([null]),

  /**
   * @private
   */
  show: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf([null])
});

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
};

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(OverlayTrigger, _React$Component);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleToggle = _this.handleToggle.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleDelayedShow = _this.handleDelayedShow.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleDelayedHide = _this.handleDelayedHide.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleHide = _this.handleHide.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));

    _this.handleMouseOver = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e, 'toElement');
    };

    _this._mountNode = null;
    _this.state = {
      show: props.defaultOverlayShown
    };
    return _this;
  }

  var _proto = OverlayTrigger.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  _proto.handleDelayedHide = function handleDelayedHide() {
    var _this2 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(function () {
      _this2._hoverHideDelay = null;

      _this2.hide();
    }, delay);
  };

  _proto.handleDelayedShow = function handleDelayedShow() {
    var _this3 = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(function () {
      _this3._hoverShowDelay = null;

      _this3.show();
    }, delay);
  };

  _proto.handleHide = function handleHide() {
    this.hide();
  }; // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.


  _proto.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !__WEBPACK_IMPORTED_MODULE_5_dom_helpers_query_contains___default()(target, related)) {
      handler(e);
    }
  };

  _proto.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };

  _proto.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto.makeOverlay = function makeOverlay(overlay, props) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Overlay__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      show: this.state.show,
      onHide: this.handleHide,
      target: this
    }), overlay);
  };

  _proto.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto.renderOverlay = function renderOverlay() {
    __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        onBlur = _this$props.onBlur,
        onClick = _this$props.onClick,
        onFocus = _this$props.onFocus,
        onMouseOut = _this$props.onMouseOut,
        onMouseOver = _this$props.onMouseOver,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["trigger", "overlay", "children", "onBlur", "onClick", "onFocus", "onMouseOut", "onMouseOver"]);

    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;
    var child = __WEBPACK_IMPORTED_MODULE_6_react___default.a.Children.only(children);
    var childProps = child.props;
    var triggerProps = {};

    if (this.state.show) {
      triggerProps['aria-describedby'] = overlay.props.id;
    } // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.


    triggerProps.onClick = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(triggerProps.onClick, this.handleToggle);
    }

    if (isOneOf('hover', trigger)) {
       true ? __WEBPACK_IMPORTED_MODULE_9_warning___default()(!(trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;
      triggerProps.onMouseOver = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
      triggerProps.onMouseOut = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(childProps.onFocus, onFocus, this.handleDelayedShow);
      triggerProps.onBlur = Object(__WEBPACK_IMPORTED_MODULE_11__utils_createChainedFunction__["a" /* default */])(childProps.onBlur, onBlur, this.handleDelayedHide);
    }

    this._overlay = this.makeOverlay(overlay, props);
    return Object(__WEBPACK_IMPORTED_MODULE_6_react__["cloneElement"])(child, triggerProps);
  };

  return OverlayTrigger;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

OverlayTrigger.propTypes = propTypes;
OverlayTrigger.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (OverlayTrigger);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PageHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var PageHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PageHeader, _React$Component);

  function PageHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h1", null, children));
  };

  return PageHeader;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('page-header', PageHeader));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PageItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PagerItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PagerItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_deprecationWarning__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/deprecationWarning.js");


/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1__utils_deprecationWarning__["a" /* default */].wrapper(__WEBPACK_IMPORTED_MODULE_0__PagerItem__["a" /* default */], '`<PageItem>`', '`<Pager.Item>`'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Pager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PagerItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PagerItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");










var propTypes = {
  onSelect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};

var Pager =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Pager, _React$Component);

  function Pager() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pager.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["onSelect", "className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ul", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_9__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(child, {
        onSelect: Object(__WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__["a" /* default */])(child.props.onSelect, onSelect)
      });
    }));
  };

  return Pager;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Pager.propTypes = propTypes;
Pager.Item = __WEBPACK_IMPORTED_MODULE_6__PagerItem__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('pager', Pager));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PagerItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");









var propTypes = {
  disabled: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  previous: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  next: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any
};
var defaultProps = {
  disabled: false,
  previous: false,
  next: false
};

var PagerItem =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PagerItem, _React$Component);

  function PagerItem(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleSelect = _this.handleSelect.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = PagerItem.prototype;

  _proto.handleSelect = function handleSelect(e) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        onSelect = _this$props.onSelect,
        eventKey = _this$props.eventKey;

    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onSelect) {
      onSelect(eventKey, e);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        disabled = _this$props2.disabled,
        previous = _this$props2.previous,
        next = _this$props2.next,
        onClick = _this$props2.onClick,
        className = _this$props2.className,
        style = _this$props2.style,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["disabled", "previous", "next", "onClick", "className", "style"]);

    delete props.onSelect;
    delete props.eventKey;
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, {
        disabled: disabled,
        previous: previous,
        next: next
      }),
      style: style
    }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SafeAnchor__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      disabled: disabled,
      onClick: Object(__WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__["a" /* default */])(onClick, this.handleSelect)
    })));
  };

  return PagerItem;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

PagerItem.propTypes = propTypes;
PagerItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (PagerItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PaginationItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PaginationItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("ul", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), children);
  };

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('pagination', Pagination);
Pagination.First = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["b" /* First */];
Pagination.Prev = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["e" /* Prev */];
Pagination.Ellipsis = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["a" /* Ellipsis */];
Pagination.Item = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["f" /* default */];
Pagination.Next = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["d" /* Next */];
Pagination.Last = __WEBPACK_IMPORTED_MODULE_5__PaginationItem__["c" /* Last */];
/* unused harmony default export */ var _unused_webpack_default_export = (Pagination);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PaginationItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = PaginationItem;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return First; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Last; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");




/* eslint-disable react/no-multi-comp */




var propTypes = {
  eventKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  disabled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  activeLabel: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired
};
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PaginationItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__["a" /* default */];
  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, {
      active: active,
      disabled: disabled
    })
  }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
    disabled: disabled
  }, props), children, active && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}
PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          children = _this$props.children,
          className = _this$props.className,
          props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["disabled", "children", "className"]);

      var Component = disabled ? 'span' : __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__["a" /* default */];
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
        "aria-label": label,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, {
          disabled: disabled
        })
      }, props), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, null, children || defaultValue));
    };

    return _class;
  }(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _class.displayName = name, _class.propTypes = {
    disabled: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
  }, _temp;
}

var First = createButton('First', "\xAB");
var Prev = createButton('Prev', "\u2039");
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
var Next = createButton('Next', "\u203A");
var Last = createButton('Last', "\xBB");

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Panel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_assign__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PanelBody__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelBody.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PanelHeading__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelHeading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__PanelTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__PanelFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelFooter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__PanelToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__PanelCollapse__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelCollapse.js");

















var has = Object.prototype.hasOwnProperty;

var defaultGetId = function defaultGetId(id, type) {
  return id ? id + "--" + type : null;
};

var propTypes = {
  /**
   * Controls the collapsed/expanded state ofthe Panel. Requires
   * a `Panel.Collapse` or `<Panel.Body collapsible>` child component
   * in order to actually animate out or in.
   *
   * @controllable onToggle
   */
  expanded: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * A callback fired when the collapse state changes.
   *
   * @controllable expanded
   */
  onToggle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  eventKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,

  /**
   * An HTML `id` attribute uniquely identifying the Panel component.
   */
  id: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};
var contextTypes = {
  $bs_panelGroup: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    getId: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    activeKey: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.any,
    onToggle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
  })
};
var childContextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
    headingId: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    bodyId: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    bsClass: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    onToggle: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
    expanded: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
  })
};

var Panel =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Panel, _React$Component);

  function Panel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleToggle = function (e) {
      var panelGroup = _this.context.$bs_panelGroup;
      var expanded = !_this.getExpanded();

      if (panelGroup && panelGroup.onToggle) {
        panelGroup.onToggle(_this.props.eventKey, expanded, e);
      } else {
        _this.props.onToggle(expanded, e);
      }
    };

    return _this;
  }

  var _proto = Panel.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        eventKey = _this$props.eventKey,
        id = _this$props.id;
    var idKey = eventKey == null ? id : eventKey;
    var ids;

    if (idKey !== null) {
      var panelGroup = this.context.$bs_panelGroup;
      var getId = panelGroup && panelGroup.getId || defaultGetId;
      ids = {
        headingId: getId(idKey, 'heading'),
        bodyId: getId(idKey, 'body')
      };
    }

    return {
      $bs_panel: Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, ids, {
        bsClass: this.props.bsClass,
        expanded: this.getExpanded(),
        onToggle: this.handleToggle
      })
    };
  };

  _proto.getExpanded = function getExpanded() {
    var panelGroup = this.context.$bs_panelGroup;

    if (panelGroup && has.call(panelGroup, 'activeKey')) {
       true ? __WEBPACK_IMPORTED_MODULE_8_warning___default()(this.props.expanded == null, 'Specifying `<Panel>` `expanded` in the context of an accordion ' + '`<PanelGroup>` is not supported. Set `activeKey` on the ' + '`<PanelGroup>` instead.') : void 0;
      return panelGroup.activeKey === this.props.eventKey;
    }

    return !!this.props.expanded;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children;

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(this.props, ['onToggle', 'eventKey', 'expanded']),
        bsProps = _splitBsPropsAndOmit[0],
        props = _splitBsPropsAndOmit[1];

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps))
    }), children);
  };

  return Panel;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

Panel.propTypes = propTypes;
Panel.contextTypes = contextTypes;
Panel.childContextTypes = childContextTypes;
var UncontrolledPanel = __WEBPACK_IMPORTED_MODULE_7_uncontrollable___default()(Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["a" /* bsClass */])('panel', Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_10__utils_StyleConfig__["d" /* State */]).concat([__WEBPACK_IMPORTED_MODULE_10__utils_StyleConfig__["e" /* Style */].DEFAULT, __WEBPACK_IMPORTED_MODULE_10__utils_StyleConfig__["e" /* Style */].PRIMARY]), __WEBPACK_IMPORTED_MODULE_10__utils_StyleConfig__["e" /* Style */].DEFAULT, Panel)), {
  expanded: 'onToggle'
});

__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_assign___default()(UncontrolledPanel, {
  Heading: __WEBPACK_IMPORTED_MODULE_12__PanelHeading__["a" /* default */],
  Title: __WEBPACK_IMPORTED_MODULE_13__PanelTitle__["a" /* default */],
  Body: __WEBPACK_IMPORTED_MODULE_11__PanelBody__["a" /* default */],
  Footer: __WEBPACK_IMPORTED_MODULE_14__PanelFooter__["a" /* default */],
  Toggle: __WEBPACK_IMPORTED_MODULE_15__PanelToggle__["a" /* default */],
  Collapse: __WEBPACK_IMPORTED_MODULE_16__PanelCollapse__["a" /* default */]
});

/* unused harmony default export */ var _unused_webpack_default_export = (UncontrolledPanel);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelBody.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PanelCollapse__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelCollapse.js");







var propTypes = {
  /**
   * A convenience prop that renders a Collapse component around the Body for
   * situations when the parent Panel only contains a single Panel.Body child.
   *
   * renders:
   * ```jsx
   * <Panel.Collapse>
   *  <Panel.Body />
   * </Panel.Collapse>
   * ```
   */
  collapsible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
};
var defaultProps = {
  collapsible: false
};
var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  })
};

var PanelBody =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelBody, _React$Component);

  function PanelBody() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        collapsible = _this$props.collapsible;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(this.props, ['collapsible']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    var body = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'body'))
    }), children);

    if (collapsible) {
      body = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__PanelCollapse__["a" /* default */], null, body);
    }

    return body;
  };

  return PanelBody;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

PanelBody.propTypes = propTypes;
PanelBody.defaultProps = defaultProps;
PanelBody.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('panel', PanelBody));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelCollapse.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Collapse__ = __webpack_require__("./node_modules/react-bootstrap/es/Collapse.js");






var propTypes = {
  /**
   * Callback fired before the component expands
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to expand
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the component has expanded
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired before the component collapses
   */
  onExit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the component has collapsed
   */
  onExited: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    headingId: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    bodyId: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    bsClass: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    expanded: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
  })
};

var PanelCollapse =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelCollapse, _React$Component);

  function PanelCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelCollapse.prototype;

  _proto.render = function render() {
    var children = this.props.children;

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        bodyId = _ref.bodyId,
        _bsClass = _ref.bsClass,
        expanded = _ref.expanded;

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_4__utils_bootstrapUtils__["f" /* splitBsProps */])(this.props),
        bsProps = _splitBsProps[0],
        props = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId && bodyId) {
      props.id = bodyId;
      props.role = props.role || 'tabpanel';
      props['aria-labelledby'] = headingId;
    }

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Collapse__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      in: expanded
    }, props), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_4__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'collapse')
    }, children));
  };

  return PanelCollapse;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

PanelCollapse.propTypes = propTypes;
PanelCollapse.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__utils_bootstrapUtils__["a" /* bsClass */])('panel', PanelCollapse));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelFooter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");






var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  })
};

var PanelFooter =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelFooter, _React$Component);

  function PanelFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(this.props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'footer'))
    }), children);
  };

  return PanelFooter;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

PanelFooter.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('panel', PanelFooter));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/PropTypes.js");










var propTypes = {
  accordion: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * When `accordion` is enabled, `activeKey` controls the which child `Panel` is expanded. `activeKey` should
   * match a child Panel `eventKey` prop exactly.
   *
   * @controllable onSelect
   */
  activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,

  /**
   * A callback fired when a child Panel collapse state changes. It's called with the next expanded `activeKey`
   *
   * @controllable activeKey
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,

  /**
   * An HTML role attribute
   */
  role: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /**
   * A function that takes an eventKey and type and returns a
   * unique id for each Panel heading and Panel Collapse. The function _must_ be a pure function,
   * meaning it should always return the _same_ id for the same set of inputs. The default
   * value requires that an `id` to be set for the PanelGroup.
   *
   * The `type` argument will either be `"body"` or `"heading"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: Object(__WEBPACK_IMPORTED_MODULE_9__utils_PropTypes__["b" /* generatedId */])('PanelGroup')
};
var defaultProps = {
  accordion: false
};
var childContextTypes = {
  $bs_panelGroup: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    getId: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    headerRole: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    panelRole: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    onToggle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
  })
};

var PanelGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelGroup, _React$Component);

  function PanelGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, expanded, e) {
      if (expanded) {
        _this.props.onSelect(key, e);
      } else if (_this.props.activeKey === key) {
        _this.props.onSelect(null, e);
      }
    };

    return _this;
  }

  var _proto = PanelGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        activeKey = _this$props.activeKey,
        accordion = _this$props.accordion,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    var getId = null;

    if (accordion) {
      getId = generateChildId || function (key, type) {
        return id ? id + "-" + type + "-" + key : null;
      };
    }

    return {
      $bs_panelGroup: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
        getId: getId,
        headerRole: 'tab',
        panelRole: 'tabpanel'
      }, accordion && {
        activeKey: activeKey,
        onToggle: this.handleSelect
      })
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        accordion = _this$props2.accordion,
        className = _this$props2.className,
        children = _this$props2.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["accordion", "className", "children"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['onSelect', 'activeKey']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    if (accordion) {
      elementProps.role = elementProps.role || 'tablist';
    }

    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(child, {
        bsStyle: child.props.bsStyle || bsProps.bsStyle
      });
    }));
  };

  return PanelGroup;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;
PanelGroup.childContextTypes = childContextTypes;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6_uncontrollable___default()(Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('panel-group', PanelGroup), {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelHeading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__ = __webpack_require__("./node_modules/react-prop-types/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};
var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    headingId: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    bsClass: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  })
};

var PanelHeading =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelHeading, _React$Component);

  function PanelHeading() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelHeading.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        Component = _this$props.componentClass,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "className", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        headingId = _ref.headingId,
        _bsClass = _ref.bsClass;

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId) {
      elementProps.role = elementProps.role || 'tab';
      elementProps.id = headingId;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'heading'))
    }), children);
  };

  return PanelHeading;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

PanelHeading.propTypes = propTypes;
PanelHeading.defaultProps = defaultProps;
PanelHeading.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('panel', PanelHeading));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__ = __webpack_require__("./node_modules/react-prop-types/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PanelToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelToggle.js");









var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default.a,

  /**
   * A convenience prop that renders the Panel.Title as a panel collapse toggle component
   * for the common use-case.
   */
  toggle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
};
var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
  })
};
var defaultProps = {
  componentClass: 'div'
};

var PanelTitle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelTitle, _React$Component);

  function PanelTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PanelTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        toggle = _this$props.toggle,
        Component = _this$props.componentClass,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "className", "toggle", "componentClass"]);

    var _ref = this.context.$bs_panel || {},
        _bsClass = _ref.bsClass;

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (toggle) {
      children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__PanelToggle__["a" /* default */], null, children);
    }

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'title'))
    }), children);
  };

  return PanelTitle;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

PanelTitle.propTypes = propTypes;
PanelTitle.defaultProps = defaultProps;
PanelTitle.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('panel', PanelTitle));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PanelToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__ = __webpack_require__("./node_modules/react-prop-types/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");









var propTypes = {
  /**
   * only here to satisfy linting, just the html onClick handler.
   *
   * @private
   */
  onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /**
   * You can use a custom element for this component
   */
  componentClass: __WEBPACK_IMPORTED_MODULE_6_react_prop_types_lib_elementType___default.a
};
var defaultProps = {
  componentClass: __WEBPACK_IMPORTED_MODULE_7__SafeAnchor__["a" /* default */]
};
var contextTypes = {
  $bs_panel: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    bodyId: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    onToggle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    expanded: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
  })
};

var PanelToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(PanelToggle, _React$Component);

  function PanelToggle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleToggle = _this.handleToggle.bind(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = PanelToggle.prototype;

  _proto.handleToggle = function handleToggle(event) {
    var _ref = this.context.$bs_panel || {},
        onToggle = _ref.onToggle;

    if (onToggle) {
      onToggle(event);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onClick = _this$props.onClick,
        className = _this$props.className,
        componentClass = _this$props.componentClass,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["onClick", "className", "componentClass"]);

    var _ref2 = this.context.$bs_panel || {},
        expanded = _ref2.expanded,
        bodyId = _ref2.bodyId;

    var Component = componentClass;
    props.onClick = Object(__WEBPACK_IMPORTED_MODULE_8__utils_createChainedFunction__["a" /* default */])(onClick, this.handleToggle);
    props['aria-expanded'] = expanded;
    props.className = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className, !expanded && 'collapsed');

    if (bodyId) {
      props['aria-controls'] = bodyId;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, props);
  };

  return PanelToggle;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

PanelToggle.propTypes = propTypes;
PanelToggle.defaultProps = defaultProps;
PanelToggle.contextTypes = contextTypes;
/* harmony default export */ __webpack_exports__["a"] = (PanelToggle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Popover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__("./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y___default()(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number])),

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "left" position value for the Popover.
   */
  positionLeft: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * Title content
   */
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node
};
var defaultProps = {
  placement: 'right'
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Popover, _React$Component);

  function Popover() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Popover.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        title = _this$props.title,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "title", "className", "style", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      display: 'block',
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "tooltip",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes),
      style: outerStyle
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: "arrow",
      style: arrowStyle
    }), title && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("h3", {
      className: Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'title')
    }, title), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'content')
    }, children));
  };

  return Popover;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('popover', Popover));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ProgressBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");










var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(ProgressBar, null);
    if (child.type === element.type) return;
    var childIdentifier = __WEBPACK_IMPORTED_MODULE_5_react___default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var propTypes = {
  min: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  now: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  max: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
  label: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
  srOnly: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  striped: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};
var defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _extends2;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        active = _ref.active,
        className = _ref.className,
        style = _ref.style,
        props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["min", "now", "max", "label", "srOnly", "striped", "active", "className", "style"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {
      active: active
    }, _extends2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'striped')] = active || striped, _extends2));

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "progressbar",
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes),
      style: Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max
    }), srOnly ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
      className: "sr-only"
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        active = props.active,
        bsClass = props.bsClass,
        bsStyle = props.bsStyle,
        className = props.className,
        children = props.children,
        wrapperProps = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(props, ["min", "now", "max", "label", "srOnly", "striped", "active", "bsClass", "bsStyle", "className", "children"]);

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, wrapperProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, 'progress')
    }), children ? __WEBPACK_IMPORTED_MODULE_9__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      active: active,
      bsClass: bsClass,
      bsStyle: bsStyle
    }));
  };

  return ProgressBar;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('progress-bar', Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["c" /* bsStyles */])(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_values___default()(__WEBPACK_IMPORTED_MODULE_8__utils_StyleConfig__["d" /* State */]), ProgressBar)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Radio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");




/* eslint-disable jsx-a11y/label-has-for */





var propTypes = {
  inline: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * Only valid if `inline` is not set.
   */
  validationState: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['success', 'warning', 'error', null]),

  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};
var defaultProps = {
  inline: false,
  disabled: false,
  title: ''
};

var Radio =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Radio, _React$Component);

  function Radio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Radio.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        validationState = _this$props.validationState,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["inline", "disabled", "validationState", "inputRef", "className", "style", "title", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var input = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      ref: inputRef,
      type: "radio",
      disabled: disabled
    }));

    if (inline) {
      var _classes2;

      var _classes = (_classes2 = {}, _classes2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'inline')] = true, _classes2.disabled = disabled, _classes2); // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.


       true ? __WEBPACK_IMPORTED_MODULE_6_warning___default()(!validationState, '`validationState` is ignored on `<Radio inline>`. To display ' + 'validation state on an inline radio, set `validationState` on a ' + 'parent `<FormGroup>` or other element instead.') : void 0;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, _classes),
        style: style,
        title: title
      }, input, children);
    }

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      disabled: disabled
    });

    if (validationState) {
      classes["has-" + validationState] = true;
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes),
      style: style
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("label", {
      title: title
    }, input, children));
  };

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('radio', Radio));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







 // TODO: This should probably take a single `aspectRatio` prop.

var propTypes = {
  /**
   * This component requires a single child element
   */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.element.isRequired,

  /**
   * 16by9 aspect ratio
   */
  a16by9: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,

  /**
   * 4by3 aspect ratio
   */
  a4by3: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  a16by9: false,
  a4by3: false
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        a16by9 = _this$props.a16by9,
        a4by3 = _this$props.a4by3,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["a16by9", "a4by3", "className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

     true ? __WEBPACK_IMPORTED_MODULE_6_warning___default()(a16by9 || a4by3, 'Either `a16by9` or `a4by3` must be set.') : void 0;
     true ? __WEBPACK_IMPORTED_MODULE_6_warning___default()(!(a16by9 && a4by3), 'Only one of `a16by9` or `a4by3` can be set.') : void 0;

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, '16by9')] = a16by9, _extends2[Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, '4by3')] = a4by3, _extends2));

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(classes)
    }, Object(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(children, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'item'))
    })));
  };

  return ResponsiveEmbed;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ResponsiveEmbed.propTypes = propTypes;
ResponsiveEmbed.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('embed-responsive', ResponsiveEmbed));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'div'
};

var Row =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.componentClass,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["componentClass", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Row;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('row', Row));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SafeAnchor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");








var propTypes = {
  href: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  onKeyDown: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  disabled: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  tabIndex: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * this is sort of silly but needed for Button
   */
  componentClass: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_elementType___default.a
};
var defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleKeyDown = _this.handleKeyDown.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["componentClass", "disabled", "onKeyDown"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
        pointerEvents: 'none'
      }, props.style);
    }

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      onClick: this.handleClick,
      onKeyDown: Object(__WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__["a" /* default */])(this.handleKeyDown, onKeyDown)
    }));
  };

  return SafeAnchor;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (SafeAnchor);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SplitButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SplitToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/SplitToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_splitComponentProps__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/splitComponentProps.js");










var propTypes = Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].propTypes, {
  // Toggle props.
  bsStyle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  bsSize: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  href: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,

  /**
   * The content of the split button.
   */
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node.isRequired,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  // Override generated docs from <Dropdown>.

  /**
   * @private
   */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node
});

var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsSize = _this$props.bsSize,
        bsStyle = _this$props.bsStyle,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["bsSize", "bsStyle", "title", "toggleLabel", "children"]);

    var _splitComponentProps = Object(__WEBPACK_IMPORTED_MODULE_8__utils_splitComponentProps__["a" /* default */])(props, __WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].ControlledComponent),
        dropdownProps = _splitComponentProps[0],
        buttonProps = _splitComponentProps[1];

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, dropdownProps, {
      bsSize: bsSize,
      bsStyle: bsStyle
    }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, buttonProps, {
      disabled: props.disabled,
      bsSize: bsSize,
      bsStyle: bsStyle
    }), title), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SplitToggle__["a" /* default */], {
      "aria-label": toggleLabel || title,
      bsSize: bsSize,
      bsStyle: bsStyle
    }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].Menu, null, children));
  };

  return SplitButton;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

SplitButton.propTypes = propTypes;
SplitButton.Toggle = __WEBPACK_IMPORTED_MODULE_7__SplitToggle__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (SplitButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SplitToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DropdownToggle__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownToggle.js");





var SplitToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(SplitToggle, _React$Component);

  function SplitToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitToggle.prototype;

  _proto.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DropdownToggle__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, this.props, {
      useAnchor: false,
      noCaret: false
    }));
  };

  return SplitToggle;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

SplitToggle.defaultProps = __WEBPACK_IMPORTED_MODULE_3__DropdownToggle__["a" /* default */].defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (SplitToggle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tab.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabContainer__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TabContent__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TabPane__ = __webpack_require__("./node_modules/react-bootstrap/es/TabPane.js");








var propTypes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, __WEBPACK_IMPORTED_MODULE_6__TabPane__["a" /* default */].propTypes, {
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /**
   * tabClassName is used as className for the associated NavItem
   */
  tabClassName: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
});

var Tab =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, this.props); // These props are for the parent `<Tabs>` rather than the `<TabPane>`.


    delete props.title;
    delete props.disabled;
    delete props.tabClassName;
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TabPane__["a" /* default */], props);
  };

  return Tab;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Tab.propTypes = propTypes;
Tab.Container = __WEBPACK_IMPORTED_MODULE_4__TabContainer__["a" /* default */];
Tab.Content = __WEBPACK_IMPORTED_MODULE_5__TabContent__["a" /* default */];
Tab.Pane = __WEBPACK_IMPORTED_MODULE_6__TabPane__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (Tab);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__);





var TAB = 'tab';
var PANE = 'pane';
var idPropType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number]);
var propTypes = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, [props].concat(args));

      if (!error && !props.id) {
        error = new Error('In order to properly initialize Tabs in a way that is accessible ' + 'to assistive technologies (such as screen readers) an `id` or a ' + '`generateChildId` prop to TabContainer is required');
      }
    }

    return error;
  },

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any
};
var childContextTypes = {
  $bs_tabContainer: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    activeKey: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
    getTabId: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
    getPaneId: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired
  })
};

var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(TabContainer, _React$Component);

  function TabContainer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContainer.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        activeKey = _this$props.activeKey,
        onSelect = _this$props.onSelect,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;

    var getId = generateChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };

    return {
      $bs_tabContainer: {
        activeKey: activeKey,
        onSelect: onSelect,
        getTabId: function getTabId(key) {
          return getId(key, TAB);
        },
        getPaneId: function getPaneId(key) {
          return getId(key, PANE);
        }
      }
    };
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["children"]);

    delete props.generateChildId;
    delete props.onSelect;
    delete props.activeKey;
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children), props);
  };

  return TabContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

TabContainer.propTypes = propTypes;
TabContainer.childContextTypes = childContextTypes;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_uncontrollable___default()(TabContainer, {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");









var propTypes = {
  componentClass: __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};
var defaultProps = {
  componentClass: 'div',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false
};
var contextTypes = {
  $bs_tabContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any
  })
};
var childContextTypes = {
  $bs_tabContent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),
    activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
    mountOnEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    unmountOnExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    onPaneEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    onPaneExited: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    exiting: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired
  })
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(TabContent, _React$Component);

  function TabContent(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handlePaneEnter = _this.handlePaneEnter.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handlePaneExited = _this.handlePaneExited.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this))); // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.

    _this.state = {
      activeKey: null,
      activeChild: null
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.getChildContext = function getChildContext() {
    var _this$props = this.props,
        bsClass = _this$props.bsClass,
        animation = _this$props.animation,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit;
    var stateActiveKey = this.state.activeKey;
    var containerActiveKey = this.getContainerActiveKey();
    var activeKey = stateActiveKey != null ? stateActiveKey : containerActiveKey;
    var exiting = stateActiveKey != null && stateActiveKey !== containerActiveKey;
    return {
      $bs_tabContent: {
        bsClass: bsClass,
        animation: animation,
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        onPaneEnter: this.handlePaneEnter,
        onPaneExited: this.handlePaneExited,
        exiting: exiting
      }
    };
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.animation && this.state.activeChild) {
      this.setState({
        activeKey: null,
        activeChild: null
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  _proto.getContainerActiveKey = function getContainerActiveKey() {
    var tabContainer = this.context.$bs_tabContainer;
    return tabContainer && tabContainer.activeKey;
  };

  _proto.handlePaneEnter = function handlePaneEnter(child, childKey) {
    if (!this.props.animation) {
      return false;
    } // It's possible that this child should be transitioning out.


    if (childKey !== this.getContainerActiveKey()) {
      return false;
    }

    this.setState({
      activeKey: childKey,
      activeChild: child
    });
    return true;
  };

  _proto.handlePaneExited = function handlePaneExited(child) {
    // This might happen as everything is unmounting.
    if (this.isUnmounted) {
      return;
    }

    this.setState(function (_ref) {
      var activeChild = _ref.activeChild;

      if (activeChild !== child) {
        return null;
      }

      return {
        activeKey: null,
        activeChild: null
      };
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.componentClass,
        className = _this$props2.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["componentClass", "className"]);

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['animation', 'mountOnEnter', 'unmountOnExit']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'content'))
    }));
  };

  return TabContent;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TabContent.propTypes = propTypes;
TabContent.defaultProps = defaultProps;
TabContent.contextTypes = contextTypes;
TabContent.childContextTypes = childContextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8__utils_bootstrapUtils__["a" /* bsClass */])('tab', TabContent));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabPane.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");












var propTypes = {
  /**
   * Uniquely identify the `<TabPane>` among its siblings.
   */
  eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),

  /** @private * */
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** @private * */
  'aria-labelledby': __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * If not explicitly specified and rendered in the context of a
   * `<TabContent>`, the `bsClass` of the `<TabContent>` suffixed by `-pane`.
   * If otherwise not explicitly specified, `tab-pane`.
   */
  bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
};
var contextTypes = {
  $bs_tabContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    getTabId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    getPaneId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }),
  $bs_tabContent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    bsClass: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    animation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),
    activeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,
    mountOnEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    unmountOnExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    onPaneEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    onPaneExited: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
    exiting: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired
  })
};
/**
 * We override the `<TabContainer>` context so `<Nav>`s in `<TabPane>`s don't
 * conflict with the top level one.
 */

var childContextTypes = {
  $bs_tabContainer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf([null])
};

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(TabPane, _React$Component);

  function TabPane(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleEnter = _this.handleEnter.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.handleExited = _this.handleExited.bind(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_corejs2_helpers_esm_assertThisInitialized__["a" /* default */])(_this)));
    _this.in = false;
    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      $bs_tabContainer: null
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.shouldBeIn()) {
      // In lieu of the action event firing.
      this.handleEnter();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.in) {
      if (!this.shouldBeIn()) {
        // We shouldn't be active any more. Notify the parent.
        this.handleExited();
      }
    } else if (this.shouldBeIn()) {
      // We are the active child. Notify the parent.
      this.handleEnter();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.in) {
      // In lieu of the action event firing.
      this.handleExited();
    }
  };

  _proto.getAnimation = function getAnimation() {
    if (this.props.animation != null) {
      return this.props.animation;
    }

    var tabContent = this.context.$bs_tabContent;
    return tabContent && tabContent.animation;
  };

  _proto.handleEnter = function handleEnter() {
    var tabContent = this.context.$bs_tabContent;

    if (!tabContent) {
      return;
    }

    this.in = tabContent.onPaneEnter(this, this.props.eventKey);
  };

  _proto.handleExited = function handleExited() {
    var tabContent = this.context.$bs_tabContent;

    if (!tabContent) {
      return;
    }

    tabContent.onPaneExited(this);
    this.in = false;
  };

  _proto.isActive = function isActive() {
    var tabContent = this.context.$bs_tabContent;
    var activeKey = tabContent && tabContent.activeKey;
    return this.props.eventKey === activeKey;
  };

  _proto.shouldBeIn = function shouldBeIn() {
    return this.getAnimation() && this.isActive();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        eventKey = _this$props.eventKey,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        propsMountOnEnter = _this$props.mountOnEnter,
        propsUnmountOnExit = _this$props.unmountOnExit,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["eventKey", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit"]);

    var _this$context = this.context,
        tabContent = _this$context.$bs_tabContent,
        tabContainer = _this$context.$bs_tabContainer;

    var _splitBsPropsAndOmit = Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["g" /* splitBsPropsAndOmit */])(props, ['animation']),
        bsProps = _splitBsPropsAndOmit[0],
        elementProps = _splitBsPropsAndOmit[1];

    var active = this.isActive();
    var animation = this.getAnimation();
    var mountOnEnter = propsMountOnEnter != null ? propsMountOnEnter : tabContent && tabContent.mountOnEnter;
    var unmountOnExit = propsUnmountOnExit != null ? propsUnmountOnExit : tabContent && tabContent.unmountOnExit;

    if (!active && !animation && unmountOnExit) {
      return null;
    }

    var Transition = animation === true ? __WEBPACK_IMPORTED_MODULE_11__Fade__["a" /* default */] : animation || null;

    if (tabContent) {
      bsProps.bsClass = Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["e" /* prefix */])(tabContent, 'pane');
    }

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), {
      active: active
    });

    if (tabContainer) {
       true ? __WEBPACK_IMPORTED_MODULE_8_warning___default()(!elementProps.id && !elementProps['aria-labelledby'], 'In the context of a `<TabContainer>`, `<TabPanes>` are given ' + 'generated `id` and `aria-labelledby` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;
      elementProps.id = tabContainer.getPaneId(eventKey);
      elementProps['aria-labelledby'] = tabContainer.getTabId(eventKey);
    }

    var pane = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(className, classes)
    }));

    if (Transition) {
      var exiting = tabContent && tabContent.exiting;
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Transition, {
        in: active && !exiting,
        onEnter: Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleEnter, onEnter),
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: Object(__WEBPACK_IMPORTED_MODULE_10__utils_createChainedFunction__["a" /* default */])(this.handleExited, onExited),
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit
      }, pane);
    }

    return pane;
  };

  return TabPane;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

TabPane.propTypes = propTypes;
TabPane.contextTypes = contextTypes;
TabPane.childContextTypes = childContextTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9__utils_bootstrapUtils__["a" /* bsClass */])('tab-pane', TabPane));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Table.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");







var propTypes = {
  striped: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  bordered: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  condensed: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  hover: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
  responsive: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool
};
var defaultProps = {
  bordered: false,
  condensed: false,
  hover: false,
  responsive: false,
  striped: false
};

var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        condensed = _this$props.condensed,
        hover = _this$props.hover,
        responsive = _this$props.responsive,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["striped", "bordered", "condensed", "hover", "responsive", "className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'striped')] = striped, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'bordered')] = bordered, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'condensed')] = condensed, _extends2[Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'hover')] = hover, _extends2));

    var table = __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("table", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));

    if (responsive) {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
        className: Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'responsive')
      }, table);
    }

    return table;
  };

  return Table;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_6__utils_bootstrapUtils__["a" /* bsClass */])('table', Table));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__("./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__ = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Nav__ = __webpack_require__("./node_modules/react-bootstrap/es/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__NavItem__ = __webpack_require__("./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TabContainer__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__TabContent__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");














var TabContainer = __WEBPACK_IMPORTED_MODULE_10__TabContainer__["a" /* default */].ControlledComponent;
var propTypes = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,

  /**
   * Navigation style
   */
  bsStyle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['tabs', 'pills']),

  /**
   * Sets a default animation strategy. Use `false` to disable, `true`
   * to enable the default `<Fade>` animation, or a react-transition-group
   * v2 `<Transition/>` component.
   */
  animation: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_7_prop_types_extra_lib_elementType___default.a]),
  id: __WEBPACK_IMPORTED_MODULE_5_prop_types_extra_lib_isRequiredForA11y___default()(__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number])),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
};
var defaultProps = {
  bsStyle: 'tabs',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  __WEBPACK_IMPORTED_MODULE_13__utils_ValidComponentChildren__["a" /* default */].forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__NavItem__["a" /* default */], {
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        animation = _this$props.animation,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        bsClass = _this$props.bsClass,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["id", "onSelect", "animation", "mountOnEnter", "unmountOnExit", "bsClass", "className", "style", "children", "activeKey"]);

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      className: className,
      style: style
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Nav__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      role: "tablist"
    }), __WEBPACK_IMPORTED_MODULE_13__utils_ValidComponentChildren__["a" /* default */].map(children, this.renderTab)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__TabContent__["a" /* default */], {
      bsClass: bsClass,
      animation: animation,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, children)));
  };

  return Tabs;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Object(__WEBPACK_IMPORTED_MODULE_12__utils_bootstrapUtils__["a" /* bsClass */])('tab', Tabs);
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_6_uncontrollable___default()(Tabs, {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Thumbnail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");




/* eslint-disable jsx-a11y/alt-text */





var propTypes = {
  /**
   * src property that is passed down to the image inside this component
   */
  src: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * alt property that is passed down to the image inside this component
   */
  alt: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * href property that is passed down to the image inside this component
   */
  href: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /**
   * onError callback that is passed down to the image inside this component
   */
  onError: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,

  /**
   * onLoad callback that is passed down to the image inside this component
   */
  onLoad: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func
};

var Thumbnail =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Thumbnail, _React$Component);

  function Thumbnail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Thumbnail.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        src = _this$props.src,
        alt = _this$props.alt,
        onError = _this$props.onError,
        onLoad = _this$props.onLoad,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["src", "alt", "onError", "onLoad", "className", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var Component = elementProps.href ? __WEBPACK_IMPORTED_MODULE_6__SafeAnchor__["a" /* default */] : 'div';
    var classes = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("img", {
      src: src,
      alt: alt,
      onError: onError,
      onLoad: onLoad
    }), children && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: "caption"
    }, children));
  };

  return Thumbnail;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Thumbnail.propTypes = propTypes;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('thumbnail', Thumbnail));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");






var propTypes = {
  /**
   * The `<input>` `type`
   * @type {[type]}
   */
  type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   * [onChange description]
   */
  onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /**
   * The value of the input, and unique identifier in the ToggleButtonGroup
   */
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any.isRequired
};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ToggleButton, _React$Component);

  function ToggleButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "name", "checked", "type", "onChange", "value"]);

    var disabled = props.disabled;
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Button__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      active: !!checked,
      componentClass: "label"
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("input", {
      name: name,
      type: type,
      autoComplete: "off",
      value: value,
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange
    }), children);
  };

  return ToggleButton;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ToggleButton.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (ToggleButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable__ = __webpack_require__("./node_modules/uncontrollable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uncontrollable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uncontrollable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ToggleButton__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButton.js");











var propTypes = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['checkbox', 'radio']).isRequired
};
var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) {
        onChange(value);
      }

      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }));
    } else {
      onChange(values.concat([value]));
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["children", "type", "name"]);

    var values = this.getValues();
    !(type !== 'radio' || !!name) ?  true ? __WEBPACK_IMPORTED_MODULE_5_invariant___default()(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : invariant(false) : void 0;
    delete props.onChange;
    delete props.value; // the data attribute is required b/c twbs css uses it in the selector

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ButtonGroup__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, props, {
      "data-toggle": "buttons"
    }), __WEBPACK_IMPORTED_MODULE_8__utils_ValidComponentChildren__["a" /* default */].map(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler() {
        return _this.handleToggle(value);
      };

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: Object(__WEBPACK_IMPORTED_MODULE_7__utils_createChainedFunction__["a" /* default */])(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

ToggleButtonGroup.propTypes = propTypes;
ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = __WEBPACK_IMPORTED_MODULE_6_uncontrollable___default()(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = __WEBPACK_IMPORTED_MODULE_10__ToggleButton__["a" /* default */];
/* unused harmony default export */ var _unused_webpack_default_export = (UncontrolledToggleButtonGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tooltip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__("./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");








var propTypes = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: __WEBPACK_IMPORTED_MODULE_6_prop_types_extra_lib_isRequiredForA11y___default()(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number])),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),

  /**
   * The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string])
};
var defaultProps = {
  placement: 'right'
};

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Tooltip, _React$Component);

  function Tooltip() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tooltip.prototype;

  _proto.render = function render() {
    var _extends2;

    var _this$props = this.props,
        placement = _this$props.placement,
        positionTop = _this$props.positionTop,
        positionLeft = _this$props.positionLeft,
        arrowOffsetTop = _this$props.arrowOffsetTop,
        arrowOffsetLeft = _this$props.arrowOffsetLeft,
        className = _this$props.className,
        style = _this$props.style,
        children = _this$props.children,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["placement", "positionTop", "positionLeft", "arrowOffsetTop", "arrowOffsetLeft", "className", "style", "children"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps), (_extends2 = {}, _extends2[placement] = true, _extends2));

    var outerStyle = Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({
      top: positionTop,
      left: positionLeft
    }, style);

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft
    };
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      role: "tooltip",
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes),
      style: outerStyle
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'arrow'),
      style: arrowStyle
    }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
      className: Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["e" /* prefix */])(bsProps, 'inner')
    }, children));
  };

  return Tooltip;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_7__utils_bootstrapUtils__["a" /* bsClass */])('tooltip', Tooltip));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Well.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");








var Well =
/*#__PURE__*/
function (_React$Component) {
  Object(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(Well, _React$Component);

  function Well() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Well.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["className"]);

    var _splitBsProps = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["f" /* splitBsProps */])(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["d" /* getClassSet */])(bsProps);
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, elementProps, {
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
    }));
  };

  return Well;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["a" /* bsClass */])('well', Object(__WEBPACK_IMPORTED_MODULE_5__utils_bootstrapUtils__["b" /* bsSizes */])([__WEBPACK_IMPORTED_MODULE_6__utils_StyleConfig__["c" /* Size */].LARGE, __WEBPACK_IMPORTED_MODULE_6__utils_StyleConfig__["c" /* Size */].SMALL], Well)));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion__ = __webpack_require__("./node_modules/react-bootstrap/es/Accordion.js");
/* unused harmony reexport Accordion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert__ = __webpack_require__("./node_modules/react-bootstrap/es/Alert.js");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge__ = __webpack_require__("./node_modules/react-bootstrap/es/Badge.js");
/* unused harmony reexport Badge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Breadcrumb__ = __webpack_require__("./node_modules/react-bootstrap/es/Breadcrumb.js");
/* unused harmony reexport Breadcrumb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BreadcrumbItem__ = __webpack_require__("./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* unused harmony reexport BreadcrumbItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Button__ = __webpack_require__("./node_modules/react-bootstrap/es/Button.js");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonGroup.js");
/* unused harmony reexport ButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonToolbar__ = __webpack_require__("./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* unused harmony reexport ButtonToolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Carousel__ = __webpack_require__("./node_modules/react-bootstrap/es/Carousel.js");
/* unused harmony reexport Carousel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CarouselItem__ = __webpack_require__("./node_modules/react-bootstrap/es/CarouselItem.js");
/* unused harmony reexport CarouselItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Checkbox__ = __webpack_require__("./node_modules/react-bootstrap/es/Checkbox.js");
/* unused harmony reexport Checkbox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Clearfix__ = __webpack_require__("./node_modules/react-bootstrap/es/Clearfix.js");
/* unused harmony reexport Clearfix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CloseButton__ = __webpack_require__("./node_modules/react-bootstrap/es/CloseButton.js");
/* unused harmony reexport CloseButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ControlLabel__ = __webpack_require__("./node_modules/react-bootstrap/es/ControlLabel.js");
/* unused harmony reexport ControlLabel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Col__ = __webpack_require__("./node_modules/react-bootstrap/es/Col.js");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Collapse__ = __webpack_require__("./node_modules/react-bootstrap/es/Collapse.js");
/* unused harmony reexport Collapse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Dropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/Dropdown.js");
/* unused harmony reexport Dropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DropdownButton__ = __webpack_require__("./node_modules/react-bootstrap/es/DropdownButton.js");
/* unused harmony reexport DropdownButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Fade__ = __webpack_require__("./node_modules/react-bootstrap/es/Fade.js");
/* unused harmony reexport Fade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Form__ = __webpack_require__("./node_modules/react-bootstrap/es/Form.js");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__FormControl__ = __webpack_require__("./node_modules/react-bootstrap/es/FormControl.js");
/* unused harmony reexport FormControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__FormGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/FormGroup.js");
/* unused harmony reexport FormGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Glyphicon__ = __webpack_require__("./node_modules/react-bootstrap/es/Glyphicon.js");
/* unused harmony reexport Glyphicon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Grid__ = __webpack_require__("./node_modules/react-bootstrap/es/Grid.js");
/* unused harmony reexport Grid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__HelpBlock__ = __webpack_require__("./node_modules/react-bootstrap/es/HelpBlock.js");
/* unused harmony reexport HelpBlock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Image__ = __webpack_require__("./node_modules/react-bootstrap/es/Image.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_25__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__InputGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/InputGroup.js");
/* unused harmony reexport InputGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Jumbotron__ = __webpack_require__("./node_modules/react-bootstrap/es/Jumbotron.js");
/* unused harmony reexport Jumbotron */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Label__ = __webpack_require__("./node_modules/react-bootstrap/es/Label.js");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ListGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroup.js");
/* unused harmony reexport ListGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ListGroupItem__ = __webpack_require__("./node_modules/react-bootstrap/es/ListGroupItem.js");
/* unused harmony reexport ListGroupItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Media__ = __webpack_require__("./node_modules/react-bootstrap/es/Media.js");
/* unused harmony reexport Media */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__MenuItem__ = __webpack_require__("./node_modules/react-bootstrap/es/MenuItem.js");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Modal__ = __webpack_require__("./node_modules/react-bootstrap/es/Modal.js");
/* unused harmony reexport Modal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ModalBody__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalBody.js");
/* unused harmony reexport ModalBody */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ModalDialog__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalDialog.js");
/* unused harmony reexport ModalDialog */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ModalFooter__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalFooter.js");
/* unused harmony reexport ModalFooter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ModalHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalHeader.js");
/* unused harmony reexport ModalHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ModalTitle__ = __webpack_require__("./node_modules/react-bootstrap/es/ModalTitle.js");
/* unused harmony reexport ModalTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Nav__ = __webpack_require__("./node_modules/react-bootstrap/es/Nav.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_39__Nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Navbar__ = __webpack_require__("./node_modules/react-bootstrap/es/Navbar.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_40__Navbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__NavbarBrand__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarBrand.js");
/* unused harmony reexport NavbarBrand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__NavDropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/NavDropdown.js");
/* unused harmony reexport NavDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__NavItem__ = __webpack_require__("./node_modules/react-bootstrap/es/NavItem.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_43__NavItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Overlay__ = __webpack_require__("./node_modules/react-bootstrap/es/Overlay.js");
/* unused harmony reexport Overlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__OverlayTrigger__ = __webpack_require__("./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* unused harmony reexport OverlayTrigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__PageHeader__ = __webpack_require__("./node_modules/react-bootstrap/es/PageHeader.js");
/* unused harmony reexport PageHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__PageItem__ = __webpack_require__("./node_modules/react-bootstrap/es/PageItem.js");
/* unused harmony reexport PageItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__Pager__ = __webpack_require__("./node_modules/react-bootstrap/es/Pager.js");
/* unused harmony reexport Pager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Pagination__ = __webpack_require__("./node_modules/react-bootstrap/es/Pagination.js");
/* unused harmony reexport Pagination */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__Panel__ = __webpack_require__("./node_modules/react-bootstrap/es/Panel.js");
/* unused harmony reexport Panel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__PanelGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/PanelGroup.js");
/* unused harmony reexport PanelGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__Popover__ = __webpack_require__("./node_modules/react-bootstrap/es/Popover.js");
/* unused harmony reexport Popover */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ProgressBar__ = __webpack_require__("./node_modules/react-bootstrap/es/ProgressBar.js");
/* unused harmony reexport ProgressBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__Radio__ = __webpack_require__("./node_modules/react-bootstrap/es/Radio.js");
/* unused harmony reexport Radio */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ResponsiveEmbed__ = __webpack_require__("./node_modules/react-bootstrap/es/ResponsiveEmbed.js");
/* unused harmony reexport ResponsiveEmbed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__Row__ = __webpack_require__("./node_modules/react-bootstrap/es/Row.js");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__SafeAnchor__ = __webpack_require__("./node_modules/react-bootstrap/es/SafeAnchor.js");
/* unused harmony reexport SafeAnchor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__SplitButton__ = __webpack_require__("./node_modules/react-bootstrap/es/SplitButton.js");
/* unused harmony reexport SplitButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__Tab__ = __webpack_require__("./node_modules/react-bootstrap/es/Tab.js");
/* unused harmony reexport Tab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__TabContainer__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContainer.js");
/* unused harmony reexport TabContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__TabContent__ = __webpack_require__("./node_modules/react-bootstrap/es/TabContent.js");
/* unused harmony reexport TabContent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__Table__ = __webpack_require__("./node_modules/react-bootstrap/es/Table.js");
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__TabPane__ = __webpack_require__("./node_modules/react-bootstrap/es/TabPane.js");
/* unused harmony reexport TabPane */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__Tabs__ = __webpack_require__("./node_modules/react-bootstrap/es/Tabs.js");
/* unused harmony reexport Tabs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__Thumbnail__ = __webpack_require__("./node_modules/react-bootstrap/es/Thumbnail.js");
/* unused harmony reexport Thumbnail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ToggleButton__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButton.js");
/* unused harmony reexport ToggleButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ToggleButtonGroup__ = __webpack_require__("./node_modules/react-bootstrap/es/ToggleButtonGroup.js");
/* unused harmony reexport ToggleButtonGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__Tooltip__ = __webpack_require__("./node_modules/react-bootstrap/es/Tooltip.js");
/* unused harmony reexport Tooltip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__Well__ = __webpack_require__("./node_modules/react-bootstrap/es/Well.js");
/* unused harmony reexport Well */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__utils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/index.js");
/* unused harmony reexport utils */















































































































































/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/PropTypes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = generatedId;
/* harmony export (immutable) */ __webpack_exports__["c"] = requiredRoles;
/* harmony export (immutable) */ __webpack_exports__["a"] = exclusiveRoles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types_extra_lib_utils_createChainableTypeChecker__ = __webpack_require__("./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types_extra_lib_utils_createChainableTypeChecker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types_extra_lib_utils_createChainableTypeChecker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");



var idPropType = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]);
function generatedId(name) {
  return function (props) {
    var error = null;

    if (!props.generateChildId) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, [props].concat(args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize the " + name + " in a way that is accessible to assistive technologies " + ("(such as screen readers) an `id` or a `generateChildId` prop to " + name + " is required"));
      }
    }

    return error;
  };
}
function requiredRoles() {
  for (var _len2 = arguments.length, roles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return __WEBPACK_IMPORTED_MODULE_1_prop_types_extra_lib_utils_createChainableTypeChecker___default()(function (props, propName, component) {
    var missing;
    roles.every(function (role) {
      if (!__WEBPACK_IMPORTED_MODULE_2__ValidComponentChildren__["a" /* default */].some(props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error("(children) " + component + " - Missing a required child with bsRole: " + (missing + ". " + component + " must have at least one child of each of ") + ("the following bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}
function exclusiveRoles() {
  for (var _len3 = arguments.length, roles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    roles[_key3] = arguments[_key3];
  }

  return __WEBPACK_IMPORTED_MODULE_1_prop_types_extra_lib_utils_createChainableTypeChecker___default()(function (props, propName, component) {
    var duplicate;
    roles.every(function (role) {
      var childrenWithRole = __WEBPACK_IMPORTED_MODULE_2__ValidComponentChildren__["a" /* default */].filter(props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error("(children) " + component + " - Duplicate children detected of bsRole: " + (duplicate + ". Only one child each allowed with the following ") + ("bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/StyleConfig.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIZE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEVICE_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Style; });
var Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall'
};
var SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};
var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
var State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
};
var Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse'
};

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
// TODO: This module should be ElementChildren, and should use named exports.

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */

function map(children, func, context) {
  var index = 0;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}
/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */


function forEach(children, func, context) {
  var index = 0;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}
/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */


function count(children) {
  var result = 0;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    ++result;
  });
  return result;
}
/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */


function filter(children, func, context) {
  var index = 0;
  var result = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });
  return result;
}

function find(children, func, context) {
  var index = 0;
  var result;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (result) {
      return;
    }

    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });
  return result;
}

function every(children, func, context) {
  var index = 0;
  var result = true;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (!result) {
      return;
    }

    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });
  return result;
}

function some(children, func, context) {
  var index = 0;
  var result = false;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (result) {
      return;
    }

    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });
  return result;
}

function toArray(children) {
  var result = [];
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) {
      return;
    }

    result.push(child);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
});

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/bootstrapUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = prefix;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bsClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bsStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bsSizes; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getClassSet;
/* harmony export (immutable) */ __webpack_exports__["f"] = splitBsProps;
/* harmony export (immutable) */ __webpack_exports__["g"] = splitBsPropsAndOmit;
/* unused harmony export addStyle */
/* unused harmony export _curry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StyleConfig__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/StyleConfig.js");


// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.




function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];

    if (typeof last === 'function') {
      return fn.apply(void 0, args);
    }

    return function (Component) {
      return fn.apply(void 0, args.concat([Component]));
    };
  };
}

function prefix(props, variant) {
  var bsClass = (props.bsClass || '').trim();
  !(bsClass != null) ?  true ? __WEBPACK_IMPORTED_MODULE_2_invariant___default()(false, 'A `bsClass` prop is required for this component') : invariant(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}
var bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};
  styles.forEach(function (style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });
  var propType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(existing); // expose the values on the propType function for documentation

  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};
  sizes.forEach(function (size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });
  var values = [];
  existing.forEach(function (size) {
    var mappedSize = __WEBPACK_IMPORTED_MODULE_4__StyleConfig__["b" /* SIZE_MAP */][size];

    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });
  var propType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(values);
  propType._values = values; // expose the values on the propType function for documentation

  Component.SIZES = existing;
  Component.propTypes = Object(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_corejs2_helpers_esm_extends__["a" /* default */])({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});
function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = __WEBPACK_IMPORTED_MODULE_4__StyleConfig__["b" /* SIZE_MAP */][props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var elementProps = {};

  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries___default()(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function (propName) {
    isOmittedProp[propName] = true;
  });
  var elementProps = {};

  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries___default()(props).forEach(function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */

function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant, Component);
}
var _curry = curry;

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/capitalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = capitalize;
function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["a"] = (createChainedFunction);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/deprecationWarning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _resetWarned */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/helpers/esm/inheritsLoose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_warning__);


var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message;

  if (typeof oldname === 'object') {
    message = oldname.message;
  } else {
    message = oldname + " is deprecated. Use " + newname + " instead.";

    if (link) {
      message += "\nYou can read more about it at " + link;
    }
  }

  if (warned[message]) {
    return;
  }

   true ? __WEBPACK_IMPORTED_MODULE_1_warning___default()(false, message) : void 0;
  warned[message] = true;
}

deprecationWarning.wrapper = function (Component) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return (
    /*#__PURE__*/
    function (_Component) {
      Object(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_helpers_esm_inheritsLoose__["a" /* default */])(DeprecatedComponent, _Component);

      function DeprecatedComponent() {
        return _Component.apply(this, arguments) || this;
      }

      var _proto = DeprecatedComponent.prototype;

      _proto.componentWillMount = function componentWillMount() {
        deprecationWarning.apply(void 0, args);

        if (_Component.prototype.componentWillMount) {
          var _Component$prototype$;

          for (var _len2 = arguments.length, methodArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            methodArgs[_key2] = arguments[_key2];
          }

          (_Component$prototype$ = _Component.prototype.componentWillMount).call.apply(_Component$prototype$, [this].concat(methodArgs));
        }
      };

      return DeprecatedComponent;
    }(Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (deprecationWarning);
function _resetWarned() {
  warned = {};
}

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrapUtils__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/bootstrapUtils.js");
/* unused harmony reexport bootstrapUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createChainedFunction__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* unused harmony reexport createChainedFunction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ValidComponentChildren__ = __webpack_require__("./node_modules/react-bootstrap/es/utils/ValidComponentChildren.js");
/* unused harmony reexport ValidComponentChildren */







/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/splitComponentProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = splitComponentProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries__ = __webpack_require__("./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries__);

function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};

  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_corejs2_core_js_object_entries___default()(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.5.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_PLACEHOLDER_TYPE = hasSymbol ? Symbol.for('react.placeholder') : 0xead1;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_PLACEHOLDER_TYPE || typeof type === 'object' && type !== null && (typeof type.then === 'function' || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var Portal = REACT_PORTAL_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;

function isAsyncMode(object) {
  return typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Profiler = Profiler;
exports.Portal = Portal;
exports.StrictMode = StrictMode;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isProfiler = isProfiler;
exports.isPortal = isPortal;
exports.isStrictMode = isStrictMode;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-overlays/lib/LegacyPortal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__("./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__("./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._mountOverlayTarget = function () {
      if (!_this._overlayTarget) {
        _this._overlayTarget = document.createElement('div');
        _this._portalContainerNode = (0, _getContainer2.default)(_this.props.container, (0, _ownerDocument2.default)(_this).body);
        _this._portalContainerNode.appendChild(_this._overlayTarget);
      }
    }, _this._unmountOverlayTarget = function () {
      if (_this._overlayTarget) {
        _this._portalContainerNode.removeChild(_this._overlayTarget);
        _this._overlayTarget = null;
      }
      _this._portalContainerNode = null;
    }, _this._renderOverlay = function () {
      var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

      // Save reference for future access.
      if (overlay !== null) {
        _this._mountOverlayTarget();

        var initialRender = !_this._overlayInstance;

        _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget, function () {
          if (initialRender && _this.props.onRendered) {
            _this.props.onRendered();
          }
        });
      } else {
        // Unrender if the component is null for transitions to null
        _this._unrenderOverlay();
        _this._unmountOverlayTarget();
      }
    }, _this._unrenderOverlay = function () {
      if (_this._overlayTarget) {
        _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
        _this._overlayInstance = null;
      }
    }, _this.getMountNode = function () {
      return _this._overlayTarget;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._renderOverlay();
  };

  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
    this._renderOverlay();
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this._overlayTarget && nextProps.container !== this.props.container) {
      this._portalContainerNode.removeChild(this._overlayTarget);
      this._portalContainerNode = (0, _getContainer2.default)(nextProps.container, (0, _ownerDocument2.default)(this).body);
      this._portalContainerNode.appendChild(this._overlayTarget);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this._unrenderOverlay();
    this._unmountOverlayTarget();
  };

  Portal.prototype.render = function render() {
    return null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = Portal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _activeElement = __webpack_require__("./node_modules/dom-helpers/activeElement.js");

var _activeElement2 = _interopRequireDefault(_activeElement);

var _contains = __webpack_require__("./node_modules/dom-helpers/query/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__("./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _deprecated = __webpack_require__("./node_modules/prop-types-extra/lib/deprecated.js");

var _deprecated2 = _interopRequireDefault(_deprecated);

var _elementType = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _ModalManager = __webpack_require__("./node_modules/react-overlays/lib/ModalManager.js");

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _Portal = __webpack_require__("./node_modules/react-overlays/lib/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _RefHolder = __webpack_require__("./node_modules/react-overlays/lib/RefHolder.js");

var _RefHolder2 = _interopRequireDefault(_RefHolder);

var _addEventListener = __webpack_require__("./node_modules/react-overlays/lib/utils/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _addFocusListener = __webpack_require__("./node_modules/react-overlays/lib/utils/addFocusListener.js");

var _addFocusListener2 = _interopRequireDefault(_addFocusListener);

var _getContainer = __webpack_require__("./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

var modalManager = new _ModalManager2.default();

/**
 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.omitProps = function omitProps(props, propTypes) {

    var keys = Object.keys(props);
    var newProps = {};
    keys.map(function (prop) {
      if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
        newProps[prop] = props[prop];
      }
    });

    return newProps;
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        show = _props.show,
        container = _props.container,
        children = _props.children,
        Transition = _props.transition,
        backdrop = _props.backdrop,
        className = _props.className,
        style = _props.style,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered;


    var dialog = _react2.default.Children.only(children);
    var filteredProps = this.omitProps(this.props, Modal.propTypes);

    var mountModal = show || Transition && !this.state.exited;
    if (!mountModal) {
      return null;
    }

    var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;


    if (role === undefined || tabIndex === undefined) {
      dialog = (0, _react.cloneElement)(dialog, {
        role: role === undefined ? 'document' : role,
        tabIndex: tabIndex == null ? '-1' : tabIndex
      });
    }

    if (Transition) {
      dialog = _react2.default.createElement(
        Transition,
        {
          appear: true,
          unmountOnExit: true,
          'in': show,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.handleHidden,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        dialog
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      {
        ref: this.setMountNode,
        container: container,
        onRendered: this.onPortalRendered
      },
      _react2.default.createElement(
        'div',
        _extends({
          ref: this.setModalNodeRef,
          role: role || 'dialog'
        }, filteredProps, {
          style: style,
          className: className
        }),
        backdrop && this.renderBackdrop(),
        _react2.default.createElement(
          _RefHolder2.default,
          { ref: this.setDialogRef },
          dialog
        )
      )
    );
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Modal.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!this.props.show && nextProps.show) {
      this.checkForFocus();
    }
  };

  Modal.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    if (this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;


    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        show = _props2.show,
        transition = _props2.transition;


    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  Modal.prototype.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) {
      return;
    }

    var dialogElement = this.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(this));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      this.lastFocus = currentActiveElement;

      if (!dialogElement.hasAttribute('tabIndex')) {
        (0, _warning2.default)(false, 'The modal content node does not accept focus. For the benefit of ' + 'assistive technologies, the tabIndex of the node is being set ' + 'to "-1".');

        dialogElement.setAttribute('tabIndex', -1);
      }

      dialogElement.focus();
    }
  };

  Modal.prototype.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  Modal.prototype.getDialogElement = function getDialogElement() {
    return _reactDom2.default.findDOMNode(this.dialog);
  };

  Modal.prototype.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  return Modal;
}(_react2.default.Component);

Modal.propTypes = _extends({}, _Portal2.default.propTypes, {

  /**
   * Set the visibility of the Modal
   */
  show: _propTypes2.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes2.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes2.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['static'])]),

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes2.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes2.default.func,

  /**
   * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   * @deprecated
   */
  onEscapeKeyUp: (0, _deprecated2.default)(_propTypes2.default.func, 'Please use onEscapeKeyDown instead for consistency'),

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes2.default.func,

  /**
   * A style object for the backdrop component.
   */
  backdropStyle: _propTypes2.default.object,

  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName: _propTypes2.default.string,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes2.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes2.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType2.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType2.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes2.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes2.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes2.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes2.default.object.isRequired
});
Modal.defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react2.default.createElement('div', props);
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { exited: !this.props.show };

  this.renderBackdrop = function () {
    var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.backdropTransition;


    var backdropRef = function backdropRef(ref) {
      return _this2.backdrop = ref;
    };

    var backdrop = renderBackdrop({
      ref: backdropRef,
      style: backdropStyle,
      className: backdropClassName,
      onClick: _this2.handleBackdropClick
    });

    if (Transition) {
      backdrop = _react2.default.createElement(
        Transition,
        {
          appear: true,
          'in': _this2.props.show
        },
        backdrop
      );
    }

    return backdrop;
  };

  this.onPortalRendered = function () {
    _this2.autoFocus();

    if (_this2.props.onShow) {
      _this2.props.onShow();
    }
  };

  this.onShow = function () {
    var doc = (0, _ownerDocument2.default)(_this2);
    var container = (0, _getContainer2.default)(_this2.props.container, doc.body);

    _this2.props.manager.add(_this2, container, _this2.props.containerClassName);

    _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(doc, 'keydown', _this2.handleDocumentKeyDown);

    _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this2.handleDocumentKeyUp);

    _this2._onFocusinListener = (0, _addFocusListener2.default)(_this2.enforceFocus);
  };

  this.onHide = function () {
    _this2.props.manager.remove(_this2);

    _this2._onDocumentKeydownListener.remove();

    _this2._onDocumentKeyupListener.remove();

    _this2._onFocusinListener.remove();

    if (_this2.props.restoreFocus) {
      _this2.restoreLastFocus();
    }
  };

  this.setMountNode = function (ref) {
    _this2.mountNode = ref ? ref.getMountNode() : ref;
  };

  this.setModalNodeRef = function (ref) {
    _this2.modalNode = ref;
  };

  this.setDialogRef = function (ref) {
    _this2.dialog = ref;
  };

  this.handleHidden = function () {
    _this2.setState({ exited: true });
    _this2.onHide();

    if (_this2.props.onExited) {
      var _props4;

      (_props4 = _this2.props).onExited.apply(_props4, arguments);
    }
  };

  this.handleBackdropClick = function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (_this2.props.onBackdropClick) {
      _this2.props.onBackdropClick(e);
    }

    if (_this2.props.backdrop === true) {
      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyDown = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyDown) {
        _this2.props.onEscapeKeyDown(e);
      }

      _this2.props.onHide();
    }
  };

  this.handleDocumentKeyUp = function (e) {
    if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
      if (_this2.props.onEscapeKeyUp) {
        _this2.props.onEscapeKeyUp(e);
      }
    }
  };

  this.checkForFocus = function () {
    if (_inDOM2.default) {
      _this2.lastFocus = (0, _activeElement2.default)();
    }
  };

  this.enforceFocus = function () {
    if (!_this2.props.enforceFocus || !_this2._isMounted || !_this2.isTopModal()) {
      return;
    }

    var dialogElement = _this2.getDialogElement();
    var currentActiveElement = (0, _activeElement2.default)((0, _ownerDocument2.default)(_this2));

    if (dialogElement && !(0, _contains2.default)(dialogElement, currentActiveElement)) {
      dialogElement.focus();
    }
  };
};

Modal.Manager = _ModalManager2.default;

exports.default = Modal;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/ModalManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class = __webpack_require__("./node_modules/dom-helpers/class/index.js");

var _class2 = _interopRequireDefault(_class);

var _style = __webpack_require__("./node_modules/dom-helpers/style/index.js");

var _style2 = _interopRequireDefault(_style);

var _scrollbarSize = __webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js");

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _isOverflowing = __webpack_require__("./node_modules/react-overlays/lib/utils/isOverflowing.js");

var _isOverflowing2 = _interopRequireDefault(_isOverflowing);

var _manageAriaHidden = __webpack_require__("./node_modules/react-overlays/lib/utils/manageAriaHidden.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}

function findContainer(data, modal) {
  return findIndexOf(data, function (d) {
    return d.modals.indexOf(modal) !== -1;
  });
}

function setContainerStyle(state, container) {
  var style = { overflow: 'hidden' };

  // we are only interested in the actual `style` here
  // becasue we will override it
  state.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (state.overflowing) {
    // use computed style, here to get the real padding
    // to add our scrollbar width
    style.paddingRight = parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2.default)() + 'px';
  }

  (0, _style2.default)(container, style);
}

function removeContainerStyle(_ref, container) {
  var style = _ref.style;


  Object.keys(style).forEach(function (key) {
    return container.style[key] = style[key];
  });
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */

var ModalManager = function ModalManager() {
  var _this = this;

  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
      hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
      _ref2$handleContainer = _ref2.handleContainerOverflow,
      handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

  _classCallCheck(this, ModalManager);

  this.add = function (modal, container, className) {
    var modalIdx = _this.modals.indexOf(modal);
    var containerIdx = _this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = _this.modals.length;
    _this.modals.push(modal);

    if (_this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
    }

    if (containerIdx !== -1) {
      _this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],

      overflowing: (0, _isOverflowing2.default)(container)
    };

    if (_this.handleContainerOverflow) {
      setContainerStyle(data, container);
    }

    data.classes.forEach(_class2.default.addClass.bind(null, container));

    _this.containers.push(container);
    _this.data.push(data);

    return modalIdx;
  };

  this.remove = function (modal) {
    var modalIdx = _this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = findContainer(_this.data, modal);
    var data = _this.data[containerIdx];
    var container = _this.containers[containerIdx];

    data.modals.splice(data.modals.indexOf(modal), 1);

    _this.modals.splice(modalIdx, 1);

    // if that was the last modal in a container,
    // clean up the container
    if (data.modals.length === 0) {
      data.classes.forEach(_class2.default.removeClass.bind(null, container));

      if (_this.handleContainerOverflow) {
        removeContainerStyle(data, container);
      }

      if (_this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
      }
      _this.containers.splice(containerIdx, 1);
      _this.data.splice(containerIdx, 1);
    } else if (_this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
    }
  };

  this.isTopModal = function (modal) {
    return !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal;
  };

  this.hideSiblingNodes = hideSiblingNodes;
  this.handleContainerOverflow = handleContainerOverflow;
  this.modals = [];
  this.containers = [];
  this.data = [];
};

exports.default = ModalManager;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Overlay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementType = __webpack_require__("./node_modules/prop-types-extra/lib/elementType.js");

var _elementType2 = _interopRequireDefault(_elementType);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Portal = __webpack_require__("./node_modules/react-overlays/lib/Portal.js");

var _Portal2 = _interopRequireDefault(_Portal);

var _Position = __webpack_require__("./node_modules/react-overlays/lib/Position.js");

var _Position2 = _interopRequireDefault(_Position);

var _RootCloseWrapper = __webpack_require__("./node_modules/react-overlays/lib/RootCloseWrapper.js");

var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
 */
var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleHidden = function () {
      _this.setState({ exited: true });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = { exited: !props.show };
    _this.onHiddenListener = _this.handleHidden.bind(_this);
    return _this;
  }

  Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({ exited: false });
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({ exited: true });
    }
  };

  Overlay.prototype.render = function render() {
    var _props = this.props,
        container = _props.container,
        containerPadding = _props.containerPadding,
        target = _props.target,
        placement = _props.placement,
        shouldUpdatePosition = _props.shouldUpdatePosition,
        rootClose = _props.rootClose,
        children = _props.children,
        Transition = _props.transition,
        props = _objectWithoutProperties(_props, ['container', 'containerPadding', 'target', 'placement', 'shouldUpdatePosition', 'rootClose', 'children', 'transition']);

    // Don't un-render the overlay while it's transitioning out.


    var mountOverlay = props.show || Transition && !this.state.exited;
    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;

    // Position is be inner-most because it adds inline styles into the child,
    // which the other wrappers don't forward correctly.
    child = _react2.default.createElement(
      _Position2.default,
      { container: container, containerPadding: containerPadding, target: target, placement: placement, shouldUpdatePosition: shouldUpdatePosition },
      child
    );

    if (Transition) {
      var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered;

      // This animates the child node by injecting props, so it must precede
      // anything that adds a wrapping div.

      child = _react2.default.createElement(
        Transition,
        {
          'in': props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: this.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        },
        child
      );
    }

    // This goes after everything else because it adds a wrapping div.
    if (rootClose) {
      child = _react2.default.createElement(
        _RootCloseWrapper2.default,
        { onRootClose: props.onHide },
        child
      );
    }

    return _react2.default.createElement(
      _Portal2.default,
      { container: container },
      child
    );
  };

  return Overlay;
}(_react2.default.Component);

Overlay.propTypes = _extends({}, _Portal2.default.propTypes, _Position2.default.propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2.default.bool,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes2.default.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes2.default.func;
    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(undefined, [props].concat(args));
  },


  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType2.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2.default.func
});

exports.default = Overlay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Portal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__("./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _getContainer = __webpack_require__("./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

var _LegacyPortal = __webpack_require__("./node_modules/react-overlays/lib/LegacyPortal.js");

var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.setContainer = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      _this._portalContainerNode = (0, _getContainer2.default)(props.container, (0, _ownerDocument2.default)(_this).body);
    }, _this.getMountNode = function () {
      return _this._portalContainerNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    this.setContainer();
    this.forceUpdate(this.props.onRendered);
  };

  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps);
    }
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    this._portalContainerNode = null;
  };

  Portal.prototype.render = function render() {
    return this.props.children && this._portalContainerNode ? _reactDom2.default.createPortal(this.props.children, this._portalContainerNode) : null;
  };

  return Portal;
}(_react2.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  onRendered: _propTypes2.default.func
};
exports.default = _reactDom2.default.createPortal ? Portal : _LegacyPortal2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/Position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentOrElement = __webpack_require__("./node_modules/prop-types-extra/lib/componentOrElement.js");

var _componentOrElement2 = _interopRequireDefault(_componentOrElement);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calculatePosition = __webpack_require__("./node_modules/react-overlays/lib/utils/calculatePosition.js");

var _calculatePosition2 = _interopRequireDefault(_calculatePosition);

var _getContainer = __webpack_require__("./node_modules/react-overlays/lib/utils/getContainer.js");

var _getContainer2 = _interopRequireDefault(_getContainer);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The Position component calculates the coordinates for its child, to position
 * it relative to a `target` component or node. Useful for creating callouts
 * and tooltips, the Position component injects a `style` props with `left` and
 * `top` values for positioning your component.
 *
 * It also injects "arrow" `left`, and `top` values for styling callout arrows
 * for giving your components a sense of directionality.
 */
var Position = function (_React$Component) {
  _inherits(Position, _React$Component);

  function Position(props, context) {
    _classCallCheck(this, Position);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.getTarget = function () {
      var target = _this.props.target;

      var targetElement = typeof target === 'function' ? target() : target;
      return targetElement && _reactDom2.default.findDOMNode(targetElement) || null;
    };

    _this.maybeUpdatePosition = function (placementChanged) {
      var target = _this.getTarget();

      if (!_this.props.shouldUpdatePosition && target === _this._lastTarget && !placementChanged) {
        return;
      }

      _this.updatePosition(target);
    };

    _this.state = {
      positionLeft: 0,
      positionTop: 0,
      arrowOffsetLeft: null,
      arrowOffsetTop: null
    };

    _this._needsFlush = false;
    _this._lastTarget = null;
    return _this;
  }

  Position.prototype.componentDidMount = function componentDidMount() {
    this.updatePosition(this.getTarget());
  };

  Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this._needsFlush = true;
  };

  Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._needsFlush) {
      this._needsFlush = false;
      this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
    }
  };

  Position.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['children', 'className']);

    var _state = this.state,
        positionLeft = _state.positionLeft,
        positionTop = _state.positionTop,
        arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop']);

    // These should not be forwarded to the child.


    delete props.target;
    delete props.container;
    delete props.containerPadding;
    delete props.shouldUpdatePosition;

    var child = _react2.default.Children.only(children);
    return (0, _react.cloneElement)(child, _extends({}, props, arrowPosition, {
      // FIXME: Don't forward `positionLeft` and `positionTop` via both props
      // and `props.style`.
      positionLeft: positionLeft,
      positionTop: positionTop,
      className: (0, _classnames2.default)(className, child.props.className),
      style: _extends({}, child.props.style, {
        left: positionLeft,
        top: positionTop
      })
    }));
  };

  Position.prototype.updatePosition = function updatePosition(target) {
    this._lastTarget = target;

    if (!target) {
      this.setState({
        positionLeft: 0,
        positionTop: 0,
        arrowOffsetLeft: null,
        arrowOffsetTop: null
      });

      return;
    }

    var overlay = _reactDom2.default.findDOMNode(this);
    var container = (0, _getContainer2.default)(this.props.container, (0, _ownerDocument2.default)(this).body);

    this.setState((0, _calculatePosition2.default)(this.props.placement, overlay, target, container, this.props.containerPadding));
  };

  return Position;
}(_react2.default.Component);

Position.propTypes = {
  /**
   * A node, element, or function that returns either. The child will be
   * be positioned next to the `target` specified.
   */
  target: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),

  /**
   * "offsetParent" of the component
   */
  container: _propTypes2.default.oneOfType([_componentOrElement2.default, _propTypes2.default.func]),
  /**
   * Minimum spacing in pixels between container border and component border
   */
  containerPadding: _propTypes2.default.number,
  /**
   * How to position the component relative to the target
   */
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Whether the position should be changed on each update
   */
  shouldUpdatePosition: _propTypes2.default.bool
};

Position.displayName = 'Position';

Position.defaultProps = {
  containerPadding: 0,
  placement: 'right',
  shouldUpdatePosition: false
};

exports.default = Position;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/RefHolder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node
};

/**
 * Internal helper component to allow attaching a non-conflicting ref to a
 * child element that may not accept refs.
 */

var RefHolder = function (_React$Component) {
  _inherits(RefHolder, _React$Component);

  function RefHolder() {
    _classCallCheck(this, RefHolder);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  RefHolder.prototype.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react2.default.Component);

RefHolder.propTypes = propTypes;

exports.default = RefHolder;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/RootCloseWrapper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _contains = __webpack_require__("./node_modules/dom-helpers/query/contains.js");

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = __webpack_require__("./node_modules/react-overlays/lib/utils/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var escapeKeyCode = 27;

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */

var RootCloseWrapper = function (_React$Component) {
  _inherits(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    _classCallCheck(this, RootCloseWrapper);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.addEventListeners = function () {
      var event = _this.props.event;

      var doc = (0, _ownerDocument2.default)(_this);

      // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.
      _this.documentMouseCaptureListener = (0, _addEventListener2.default)(doc, event, _this.handleMouseCapture, true);

      _this.documentMouseListener = (0, _addEventListener2.default)(doc, event, _this.handleMouse);

      _this.documentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this.handleKeyUp);
    };

    _this.removeEventListeners = function () {
      if (_this.documentMouseCaptureListener) {
        _this.documentMouseCaptureListener.remove();
      }

      if (_this.documentMouseListener) {
        _this.documentMouseListener.remove();
      }

      if (_this.documentKeyupListener) {
        _this.documentKeyupListener.remove();
      }
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2.default)(_reactDom2.default.findDOMNode(_this), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  RootCloseWrapper.prototype.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react2.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';

RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes2.default.func,
  /**
   * Children to render.
   */
  children: _propTypes2.default.element,
  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes2.default.oneOf(['click', 'mousedown'])
};

RootCloseWrapper.defaultProps = {
  event: 'click'
};

exports.default = RootCloseWrapper;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/addEventListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (node, event, handler, capture) {
  (0, _on2.default)(node, event, handler, capture);

  return {
    remove: function remove() {
      (0, _off2.default)(node, event, handler, capture);
    }
  };
};

var _on = __webpack_require__("./node_modules/dom-helpers/events/on.js");

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__("./node_modules/dom-helpers/events/off.js");

var _off2 = _interopRequireDefault(_off);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/addFocusListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = addFocusListener;
/**
 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
 *
 * We only allow one Listener at a time to avoid stack overflows
 */
function addFocusListener(handler) {
  var useFocusin = !document.addEventListener;
  var remove = void 0;

  if (useFocusin) {
    document.attachEvent('onfocusin', handler);
    remove = function remove() {
      return document.detachEvent('onfocusin', handler);
    };
  } else {
    document.addEventListener('focus', handler, true);
    remove = function remove() {
      return document.removeEventListener('focus', handler, true);
    };
  }

  return { remove: remove };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/calculatePosition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calculatePosition;

var _offset = __webpack_require__("./node_modules/dom-helpers/query/offset.js");

var _offset2 = _interopRequireDefault(_offset);

var _position = __webpack_require__("./node_modules/dom-helpers/query/position.js");

var _position2 = _interopRequireDefault(_position);

var _scrollTop = __webpack_require__("./node_modules/dom-helpers/query/scrollTop.js");

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _ownerDocument = __webpack_require__("./node_modules/react-overlays/lib/utils/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainerDimensions(containerNode) {
  var width = void 0,
      height = void 0,
      scroll = void 0;

  if (containerNode.tagName === 'BODY') {
    width = window.innerWidth;
    height = window.innerHeight;

    scroll = (0, _scrollTop2.default)((0, _ownerDocument2.default)(containerNode).documentElement) || (0, _scrollTop2.default)(containerNode);
  } else {
    var _getOffset = (0, _offset2.default)(containerNode);

    width = _getOffset.width;
    height = _getOffset.height;

    scroll = (0, _scrollTop2.default)(containerNode);
  }

  return { width: width, height: height, scroll: scroll };
}

function getTopDelta(top, overlayHeight, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerScroll = containerDimensions.scroll;
  var containerHeight = containerDimensions.height;

  var topEdgeOffset = top - padding - containerScroll;
  var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

  if (topEdgeOffset < 0) {
    return -topEdgeOffset;
  } else if (bottomEdgeOffset > containerHeight) {
    return containerHeight - bottomEdgeOffset;
  } else {
    return 0;
  }
}

function getLeftDelta(left, overlayWidth, container, padding) {
  var containerDimensions = getContainerDimensions(container);
  var containerWidth = containerDimensions.width;

  var leftEdgeOffset = left - padding;
  var rightEdgeOffset = left + padding + overlayWidth;

  if (leftEdgeOffset < 0) {
    return -leftEdgeOffset;
  } else if (rightEdgeOffset > containerWidth) {
    return containerWidth - rightEdgeOffset;
  }

  return 0;
}

function calculatePosition(placement, overlayNode, target, container, padding) {
  var childOffset = container.tagName === 'BODY' ? (0, _offset2.default)(target) : (0, _position2.default)(target, container);

  var _getOffset2 = (0, _offset2.default)(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

  var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

  if (placement === 'left' || placement === 'right') {
    positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

    if (placement === 'left') {
      positionLeft = childOffset.left - overlayWidth;
    } else {
      positionLeft = childOffset.left + childOffset.width;
    }

    var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);

    positionTop += topDelta;
    arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
    arrowOffsetLeft = void 0;
  } else if (placement === 'top' || placement === 'bottom') {
    positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

    if (placement === 'top') {
      positionTop = childOffset.top - overlayHeight;
    } else {
      positionTop = childOffset.top + childOffset.height;
    }

    var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);

    positionLeft += leftDelta;
    arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
    arrowOffsetTop = void 0;
  } else {
    throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
  }

  return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/getContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2.default.findDOMNode(container) || defaultContainer;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/isOverflowing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = __webpack_require__("./node_modules/dom-helpers/query/isWindow.js");

var _isWindow2 = _interopRequireDefault(_isWindow);

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument2.default)(node);
  var win = (0, _isWindow2.default)(doc);
  var fullWidth = win.innerWidth;

  // Support: ie8, no innerWidth
  if (!fullWidth) {
    var documentElementRect = doc.documentElement.getBoundingClientRect();
    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  return doc.body.clientWidth < fullWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow2.default)(container);

  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/manageAriaHidden.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;

var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, mount, cb) {
  mount = [].concat(mount);

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) {
    return;
  }
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/react-overlays/lib/utils/ownerDocument.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (componentOrElement) {
  return (0, _ownerDocument2.default)(_reactDom2.default.findDOMNode(componentOrElement));
};

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ownerDocument = __webpack_require__("./node_modules/dom-helpers/ownerDocument.js");

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-prop-types/lib/elementType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__("./node_modules/react-prop-types/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  if (propType !== 'function' && propType !== 'string') {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),

/***/ "./node_modules/react-prop-types/lib/utils/createChainableTypeChecker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLifecyclesCompat = __webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;

    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null // allows for nested Transitions
    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return { status: EXITED };
    }
    return null;
  };

  // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null

  //   if (prevProps !== this.props) {
  //     const { status } = this.state

  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }

  //   return { nextStatus }
  // }

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;


      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var nextStatus = arguments[1];

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func

  // Name the function so it is clearer in the documentation
} : {};function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = (0, _reactLifecyclesCompat.polyfill)(Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/uncontrollable/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = uncontrollable;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _invariant = _interopRequireDefault(__webpack_require__("./node_modules/invariant/browser.js"));

var Utils = _interopRequireWildcard(__webpack_require__("./node_modules/uncontrollable/utils.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var isCompositeComponent = Utils.isReactComponent(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(isCompositeComponent || !methods.length) ?  true ? (0, _invariant.default)(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (isCompositeComponent) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[Utils.defaultKey(key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!Utils.isProp(nextProps, key) && Utils.isProp(props, key)) {
          _this3._values[key] = nextProps[Utils.defaultKey(key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.getControlledInstance = function getControlledInstance() {
      return this.inner;
    };

    _proto.render = function render() {
      var _this4 = this;

      var props = _extends({}, this.props);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return _react.default.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(_react.default.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Utils.uncontrolledPropTypes(controlledValues, displayName);
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _inner;

      return (_inner = this.inner)[method].apply(_inner, arguments);
    };
  });
  UncontrolledComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  UncontrolledComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return UncontrolledComponent;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/uncontrollable/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.isProp = isProp;
exports.defaultKey = defaultKey;
exports.isReactComponent = isReactComponent;

var _invariant = _interopRequireDefault(__webpack_require__("./node_modules/invariant/browser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? (0, _invariant.default)(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : invariant(false) : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function isReactComponent(component) {
  return !!(component && component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/LoginIntro/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/LoginIntro/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LoginIntro =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginIntro, _Component);

  function LoginIntro() {
    _classCallCheck(this, LoginIntro);

    return _possibleConstructorReturn(this, (LoginIntro.__proto__ || Object.getPrototypeOf(LoginIntro)).apply(this, arguments));
  }

  _createClass(LoginIntro, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "login-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "login-intro-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Image */], {
        className: "meee-image hidden-xs",
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "visible-xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Values are incredibly important. If you can understand, nurture and connect with your values, you can start creating the kind of life you want to lead")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "hidden-xs",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/GetStartedSchool');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Sounds Good"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "next-btn",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/GetStartedSchool');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Next", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Image */], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/rightArrow.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })))));
    }
  }]);

  return LoginIntro;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginIntro);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/LoginIntro")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/assets/meeLogo2.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/meeLogo2-6b83fcf2ab36760a20fcebd891dda391.png";

/***/ }),

/***/ "./utils/assets/rightArrow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAYAAAACsSQRAAAAAXNSR0IArs4c6QAAANtJREFUOBGdk80KAWEUhofI3x24CBa2LBRRdlyI3AA3wA2wZ8OGy7FWrGRBKTWeo5nS6UxnOPU0c773fc83zcwXBE6FYViGI+yg6NhtmWAJziB1gLztdFYJNuAGUhvIOhFbJtiEO0itbFeKVcI9eMoUapEiYlsID+ElU6iZuDLcdLm27Uji6gClFqkTGXKiqSbafeEqQzr4/nmSejR/7O+jHGw6gvidTJXst4T7EH+duZ9QDsIteIDUUsl+S+j7j13T//bHEpCzcwGpPeT8bZWDUAXkFG+hoORP+wYLrcgLXjxErQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/LoginIntro/index.js");


/***/ })

},[7])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=LoginIntro.js.map