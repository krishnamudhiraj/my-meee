webpackHotUpdate(6,{

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
          year: selectedYear ? selectedYear.label : null,
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
          lineNumber: 71
        }
      }, isLoading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Loader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "user-deatils-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["a" /* Image */], {
        className: "meee-image",
        src: __webpack_require__("./utils/assets/meeLogo2.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "What", "'", "s your gender?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
          lineNumber: 87
        }
      }))), selectedGender !== null && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Are you a pupil, teacher, or member of staff?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
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
          lineNumber: 103
        }
      }))), selectedGender !== null && selectedType !== null && selectedType.value === 'pupil' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-view-in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "question",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "Which year are you in?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "dropdown-theme",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_select__["a" /* default */], {
        value: selectedYear,
        placeholder: 'I am in...',
        indicatorSeparator: true,
        onChange: function onChange(value) {
          return _this2.handleChange('selectedYear', value);
        },
        options: optionYear,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }))))), (selectedGender !== null && selectedType !== null && selectedType.value === 'teacher' || selectedGender !== null && selectedType !== null && selectedType.value === 'pupil' && selectedYear !== null) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "next-button",
        onClick: this.updateUserDetails,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "btn-up-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "All done!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap__["a" /* Image */], {
        className: "next-arrow",
        src: __webpack_require__("./utils/assets/rightArrow.png"),
        responsive: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "btm-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["a" /* searchCode */])(Number(code));

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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["c" /* updateCodeUsed */])(codeData.id, code);

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
                return Object(__WEBPACK_IMPORTED_MODULE_2__services_code__["b" /* searchSchoolCode */])(Number(code));

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

/***/ "./services/schools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateUserData; });
/* unused harmony export getCode */
/* unused harmony export fetchCodes */
/* unused harmony export generateSchoolCodes */
/* unused harmony export fetchSchools */
/* unused harmony export fetchSchoolDataService */
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
//# sourceMappingURL=6.acb4d034cc3f399d67bb.hot-update.js.map