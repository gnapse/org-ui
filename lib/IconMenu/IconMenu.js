'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconMenu = function (_Component) {
  _inherits(IconMenu, _Component);

  function IconMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMenu.__proto__ || Object.getPrototypeOf(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: undefined,
      open: false
    }, _this.onButtonClick = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    }, _this.onClose = function () {
      _this.setState({ open: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          keepOnItemClick = _props.keepOnItemClick,
          icon = _props.icon;

      var buttonProps = _extends({}, this.props.buttonProps, {
        onClick: this.onButtonClick
      });
      var menuProps = _extends({}, this.state, {
        onRequestClose: this.onClose,
        onClick: keepOnItemClick ? null : this.onClose
      });

      return _react2.default.createElement(
        'div',
        { className: 'IconMenu' },
        _react2.default.createElement(
          _IconButton2.default,
          buttonProps,
          _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            icon
          )
        ),
        _react2.default.createElement(
          _Menu2.default,
          _extends({ className: 'IconMenu__menu' }, menuProps),
          children
        )
      );
    }
  }]);

  return IconMenu;
}(_react.Component);

IconMenu.propTypes = {
  icon: _propTypes2.default.string,
  keepOnItemClick: _propTypes2.default.bool,
  buttonProps: _propTypes2.default.object
};
IconMenu.defaultProps = {
  icon: 'more_vert',
  keepOnItemClick: false,
  buttonProps: {}
};
exports.default = IconMenu;