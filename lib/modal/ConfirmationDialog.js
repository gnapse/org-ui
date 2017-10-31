'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmationDialog = function (_Component) {
  _inherits(ConfirmationDialog, _Component);

  function ConfirmationDialog() {
    _classCallCheck(this, ConfirmationDialog);

    return _possibleConstructorReturn(this, (ConfirmationDialog.__proto__ || Object.getPrototypeOf(ConfirmationDialog)).apply(this, arguments));
  }

  _createClass(ConfirmationDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          okButtonLabel = _props.okButtonLabel,
          cancelButtonLabel = _props.cancelButtonLabel;
      var _props2 = this.props,
          open = _props2.open,
          title = _props2.title,
          message = _props2.message,
          destructive = _props2.destructive,
          confirm = _props2.confirm,
          cancel = _props2.cancel;

      return _react2.default.createElement(
        _Dialog2.default,
        { open: open, onRequestClose: cancel },
        title ? _react2.default.createElement(
          _Dialog.DialogTitle,
          null,
          title
        ) : null,
        _react2.default.createElement(
          _Dialog.DialogContent,
          null,
          message
        ),
        _react2.default.createElement(
          _Dialog.DialogActions,
          null,
          _react2.default.createElement(
            _Button2.default,
            { onClick: cancel, color: 'primary' },
            cancelButtonLabel
          ),
          _react2.default.createElement(
            _Button2.default,
            { onClick: confirm, className: destructive ? 'red' : null },
            okButtonLabel
          )
        )
      );
    }
  }]);

  return ConfirmationDialog;
}(_react.Component);

ConfirmationDialog.propTypes = {
  title: _propTypes2.default.string,
  message: _propTypes2.default.string,
  okButtonLabel: _propTypes2.default.string,
  cancelButtonLabel: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  destructive: _propTypes2.default.bool,
  confirm: _propTypes2.default.func.isRequired,
  cancel: _propTypes2.default.func.isRequired
};
ConfirmationDialog.defaultProps = {
  destructive: false,
  open: true,
  okButtonLabel: 'Ok',
  cancelButtonLabel: 'Cancel',
  message: 'Are you sure?'
};
exports.default = ConfirmationDialog;