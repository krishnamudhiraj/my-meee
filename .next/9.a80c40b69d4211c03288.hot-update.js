webpackHotUpdate(9,{

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

/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_14__utils_bootstrapUtils__["c" /* bsStyles */])([__WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].DEFAULT, __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].INVERSE], __WEBPACK_IMPORTED_MODULE_15__utils_StyleConfig__["e" /* Style */].DEFAULT, UncontrollableNavbar));

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
/* unused harmony reexport Nav */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Navbar__ = __webpack_require__("./node_modules/react-bootstrap/es/Navbar.js");
/* unused harmony reexport Navbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__NavbarBrand__ = __webpack_require__("./node_modules/react-bootstrap/es/NavbarBrand.js");
/* unused harmony reexport NavbarBrand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__NavDropdown__ = __webpack_require__("./node_modules/react-bootstrap/es/NavDropdown.js");
/* unused harmony reexport NavDropdown */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__NavItem__ = __webpack_require__("./node_modules/react-bootstrap/es/NavItem.js");
/* unused harmony reexport NavItem */
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

/***/ "./pages/SchoolValues/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/SchoolValues/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SchoolValues =
/*#__PURE__*/
function (_Component) {
  _inherits(SchoolValues, _Component);

  function SchoolValues() {
    _classCallCheck(this, SchoolValues);

    return _possibleConstructorReturn(this, (SchoolValues.__proto__ || Object.getPrototypeOf(SchoolValues)).apply(this, arguments));
  }

  _createClass(SchoolValues, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "school-values",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "school-values-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["a" /* Image */], {
        className: "meee-image",
        src: __webpack_require__("./utils/assets/meeLogo2White.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "What are your values?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Values are very important. If you can understand your values, you can make better decisions, take clear action and create the kind of life you want.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-title-sm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Why complete this exercise"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "All too often we live on autopilot. So this is your chance to stop and think about what really matters to you. In just a few minutes, you", "'", "ll begin to see yourself \u2013 and your future \u2013 in a new light.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "text-values-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "What matters to you? Choose the values that resonate with you to begin your exciting new journey")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push('/LoginIntro');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Get started with the Meee Values Cards"))));
    }
  }]);

  return SchoolValues;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SchoolValues);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/SchoolValues")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=9.a80c40b69d4211c03288.hot-update.js.map