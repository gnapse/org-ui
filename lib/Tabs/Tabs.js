'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tabs = require('material-ui/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_APPBAR_PROPS = {
  position: 'static',
  color: 'primary'
};

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.onChange = function (_, activeTab) {
      _this.setState({ activeTab: activeTab });
    };

    _this.renderTab = function (_ref, index) {
      var _ref$props = _ref.props,
          value = _ref$props.value,
          label = _ref$props.label,
          icon = _ref$props.icon;

      var iconElement = typeof icon === 'string' ? _react2.default.createElement(
        'i',
        { className: 'material-icons' },
        icon
      ) : icon;
      return _react2.default.createElement(_Tabs.Tab, {
        key: value || label,
        value: value || index,
        label: label,
        icon: iconElement
      });
    };

    _this.renderContent = function (tab, index) {
      var _tab$props = tab.props,
          value = _tab$props.value,
          label = _tab$props.label;

      var className = (0, _classnames2.default)('TabContent', {
        'TabContent--active': (value || index) === _this.state.activeTab
      });
      return _react2.default.createElement(
        'div',
        { key: value || label, className: className },
        tab
      );
    };

    _this.state = {
      activeTab: props.initialTab || props.children[0].props.value || 0
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          initialTab = _props.initialTab,
          tabs = _props.children,
          appBar = _props.appBar,
          props = _objectWithoutProperties(_props, ['initialTab', 'children', 'appBar']);

      var tabButtons = _react2.default.createElement(
        _Tabs2.default,
        _extends({ value: this.state.activeTab, onChange: this.onChange }, props),
        tabs.map(this.renderTab)
      );

      if (appBar) {
        var appBarProps = (typeof appBar === 'undefined' ? 'undefined' : _typeof(appBar)) === 'object' ? appBar : DEFAULT_APPBAR_PROPS;
        tabButtons = _react2.default.createElement(
          _AppBar2.default,
          appBarProps,
          tabButtons
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'Tabs' },
        tabButtons,
        tabs.map(this.renderContent)
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  initialTab: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  appBar: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
  children: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired
};
Tabs.defaultProps = {
  appBar: false
};
exports.default = Tabs;