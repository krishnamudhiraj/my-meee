webpackHotUpdate(7,{

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

/***/ "./pages/GetStarted/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_reducers_getStarted_actions__ = __webpack_require__("./redux/reducers/getStarted/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_reducers_valueCards_actions__ = __webpack_require__("./redux/reducers/valueCards/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_reducers_code_actions__ = __webpack_require__("./redux/reducers/code/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Loader__ = __webpack_require__("./components/Loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_InputTheme__ = __webpack_require__("./components/InputTheme.js");

var _jsxFileName = "/Users/krishna/Sites/projects/clients/meee/pages/GetStarted/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var GetStarted =
/*#__PURE__*/
function (_Component) {
  _inherits(GetStarted, _Component);

  function GetStarted(props) {
    var _this;

    _classCallCheck(this, GetStarted);

    _this = _possibleConstructorReturn(this, (GetStarted.__proto__ || Object.getPrototypeOf(GetStarted)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(ev) {
        ev.preventDefault();
        var inputCode = ev.target.input_name.value;

        _this.verifyCode(inputCode);
      }
    });
    _this.state = {
      isLoggedIn: props.isLoggedIn,
      status: null
    };
    return _this;
  }

  _createClass(GetStarted, [{
    key: "verifyCode",
    value: function () {
      var _verifyCode = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(inputCode) {
        var _this2 = this;

        var _props, onSignupRequested, onLogin, clearCards, flag;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _props = this.props, onSignupRequested = _props.onSignupRequested, onLogin = _props.onLogin, clearCards = _props.clearCards;
                _context.next = 3;
                return onSignupRequested(inputCode);

              case 3:
                flag = _context.sent;

                if (!flag) {
                  _context.next = 12;
                  break;
                }

                _context.next = 7;
                return onLogin();

              case 7:
                _context.next = 9;
                return clearCards();

              case 9:
                __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push('/WhatAreValues');
                _context.next = 14;
                break;

              case 12:
                this.setState({
                  status: 'Code already used'
                });
                setTimeout(function () {
                  _this2.setState({
                    status: ''
                  });
                }, 2000);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function verifyCode(_x) {
        return _verifyCode.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.props.isLoading;
      var status = this.state.status;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "get-statred",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "get-started-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_react_bootstrap__["a" /* Image */], {
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "text-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Ready to get started?"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "body-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Enter the code we emailed you:")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InputTheme__["a" /* default */], {
        placeholder: "e.g. 0391",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "input-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Enter"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          height: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, status !== '' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        className: "error-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, status))));
    }
  }]);

  return GetStarted;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    onSignupRequested: function onSignupRequested(code) {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__redux_reducers_getStarted_actions__["a" /* onSignupRequested */])(code));
    },
    onLogin: function onLogin() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__redux_reducers_code_actions__["a" /* onLogin */])());
    },
    clearCards: function clearCards() {
      return dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_reducers_valueCards_actions__["a" /* clearCards */])());
    }
  };
};

var mapStateToProps = function mapStateToProps(_ref) {
  var getStarted = _ref.getStarted;
  return {
    isLoading: Object(__WEBPACK_IMPORTED_MODULE_4_lodash__["get"])(getStarted, 'isLoading')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(GetStarted));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/GetStarted")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/reducers/code/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onLogin; });
/* unused harmony export onSchoolLogin */
/* unused harmony export onLogout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
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

/***/ "./redux/reducers/getStarted/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onSignupRequested; });
/* unused harmony export onSchoolSignupRequested */
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

/***/ }),

/***/ "./services/users.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUsers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchUser; });
/* unused harmony export addUser */
/* unused harmony export deleteUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_firebase__ = __webpack_require__("./config/firebase.js");

var db = __WEBPACK_IMPORTED_MODULE_0__config_firebase__["a" /* firebaseApp */].firestore();
var fetchUsers = function fetchUsers() {
  db.collection('/users').get().then(function (snapshot) {
    snapshot.forEach(function (doc) {
      console.log('User: ', doc.id, '=>', doc.data());
      return doc.data();
    });
  }).catch(function (err) {
    console.log('Error getting user data: ', err);
  });
};
var fetchUser = function fetchUser(customer_id) {
  return new Promise(function (resolve, reject) {
    db.collection('/users').where('customer_id', '==', customer_id).get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        resolve({
          response: true,
          data: doc.data()
        });
      });
      resolve({
        response: false,
        message: 'Customer ID not found: ',
        customer_id: customer_id
      });
    }).catch(function (err) {
      console.log('Error: ', err);
      reject(err);
    });
  });
};
var addUser = function addUser(item) {
  db.collection('/users').add(item).then(function (ref) {}).catch(function (err) {
    console.log('Error adding user: ', err);
  });
};
var deleteUser = function deleteUser(item) {
  db.collection('/users').where('email', '==', item).delete().then(function (ref) {
    console.log('Deleted User with Data: ', ref);
  }).catch(function (err) {
    console.log('Error deleting user: ', err);
  });
};

/***/ })

})
//# sourceMappingURL=7.8409b7bc2a5a804f091f.hot-update.js.map