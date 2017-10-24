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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('material-ui/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).call(this, props));

    _this.state = {
      anchorEl: undefined,
      open: false
    };

    _this.onButtonClick = function (event) {
      _this.setState({ open: true, anchorEl: event.currentTarget });
    };

    _this.onClose = function () {
      _this.setState({ open: false });
    };

    _this.menuId = 'id' + new Date().getTime();
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: 'getButtonProps',
    value: function getButtonProps() {
      return _extends({
        'aria-owns': this.menuId,
        'aria-haspopup': 'true'
      }, this.props.buttonProps, {
        onClick: this.onButtonClick
      });
    }
  }, {
    key: 'renderLabelButton',
    value: function renderLabelButton() {
      return _react2.default.createElement(
        _Button2.default,
        this.getButtonProps(),
        this.props.label
      );
    }
  }, {
    key: 'renderIconButton',
    value: function renderIconButton() {
      return _react2.default.createElement(
        _IconButton2.default,
        this.getButtonProps(),
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          this.props.icon
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          label = _props.label,
          keepOnItemClick = _props.keepOnItemClick;

      var menuProps = _extends({
        id: this.menuId
      }, this.state, {
        onRequestClose: this.onClose,
        onClick: keepOnItemClick ? null : this.onClose
      });
      return _react2.default.createElement(
        'div',
        null,
        label ? this.renderLabelButton() : this.renderIconButton(),
        _react2.default.createElement(
          _Menu2.default,
          menuProps,
          children
        )
      );
    }
  }]);

  return DropdownMenu;
}(_react.Component);

DropdownMenu.propTypes = {
  label: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  buttonProps: _propTypes2.default.object,
  keepOnItemClick: _propTypes2.default.bool
};
DropdownMenu.defaultProps = {
  icon: 'more_vert',
  buttonProps: {},
  keepOnItemClick: false
};
exports.default = DropdownMenu;