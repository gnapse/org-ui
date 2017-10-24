'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _isNil = require('lodash/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputList = function (_Component) {
  _inherits(InputList, _Component);

  function InputList(props) {
    _classCallCheck(this, InputList);

    var _this = _possibleConstructorReturn(this, (InputList.__proto__ || Object.getPrototypeOf(InputList)).call(this, props));

    _this.onItemChange = function (index) {
      return function (_ref) {
        var target = _ref.target;

        var itemValue = target.value;
        var newValue = _this.state.value.map(function (v, i) {
          return i === index ? itemValue : v;
        });
        _this.onChange(newValue);
      };
    };

    _this.onChange = function (value) {
      _this.setState({ value: value });
      if (_this.props.onChange) {
        var name = _this.props.name;

        var newValue = value.filter(function (item) {
          return item.length > 0;
        });
        _this.props.onChange({ target: { name: name, value: newValue } });
      }
    };

    _this.onDelete = function (index) {
      return function () {
        _this.removeItem(index);
      };
    };

    _this.onBlur = function () {
      var newValue = _this.state.value.filter(function (item) {
        return item.trim().length > 0;
      });
      if (newValue.length === 0 && _this.props.required) {
        newValue = [''];
      }
      _this.onChange(newValue);
    };

    _this.focusLast = function () {
      var inputList = _reactDom2.default.findDOMNode(_this).querySelectorAll('input[type=' + _this.props.type + ']');
      if (inputList.length > 0) {
        var lastInput = inputList[inputList.length - 1];
        lastInput.select();
      }
    };

    _this.addItem = function () {
      var newValue = _this.state.value.concat('');
      _this.onChange(newValue);
      setTimeout(_this.focusLast, 100);
    };

    _this.removeItem = function (index) {
      var newValue = _this.state.value.filter(function (_, i) {
        return i !== index;
      });
      _this.onChange(newValue);
    };

    _this.renderTextItem = function (item, index) {
      return item && _react2.default.createElement(
        _List.ListItem,
        { className: 'InputList-item', key: index },
        item
      );
    };

    _this.renderInputItem = function (item, index) {
      var _this$props = _this.props,
          type = _this$props.type,
          required = _this$props.required,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly;

      var canDelete = !disabled && (!required || _this.state.value.length > 1);
      return _react2.default.createElement(
        _List.ListItem,
        { className: 'InputList-item', key: index },
        _react2.default.createElement(_Input2.default, {
          fullWidth: true,
          value: item,
          type: type,
          disabled: disabled || readonly,
          onChange: _this.onItemChange(index),
          onBlur: _this.onBlur
        }),
        !readonly && _react2.default.createElement(
          _List.ListItemSecondaryAction,
          { className: 'InputList-remove' },
          _react2.default.createElement(
            _IconButton2.default,
            { disabled: !canDelete, onClick: _this.onDelete(index) },
            _react2.default.createElement(
              'i',
              { className: 'material-icons' },
              'close'
            )
          )
        )
      );
    };

    var isEmpty = !props.value || props.value.length === 0;
    _this.state = {
      value: props.required && isEmpty ? [''] : props.value
    };
    return _this;
  }

  _createClass(InputList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          disabled = _props.disabled,
          readonly = _props.readonly,
          required = _props.required,
          errors = _props.errors,
          maxListSize = _props.maxListSize;
      var value = this.state.value;

      var canAdd = !disabled && ((0, _isNil2.default)(maxListSize) || value.length < maxListSize);
      var renderItem = readonly ? this.renderTextItem : this.renderInputItem;
      var formControlProps = { required: required, disabled: disabled, error: !!errors };
      return _react2.default.createElement(
        'div',
        { className: 'InputList' },
        label && _react2.default.createElement(
          _Input.InputLabel,
          formControlProps,
          label
        ),
        (errors || []).map(function (error, index) {
          return _react2.default.createElement(
            _Form.FormHelperText,
            _extends({ key: index }, formControlProps),
            error
          );
        }),
        _react2.default.createElement(
          _List2.default,
          null,
          value.map(renderItem),
          !readonly && _react2.default.createElement(
            _List.ListItem,
            { className: 'InputList-add' },
            _react2.default.createElement(
              _IconButton2.default,
              { disabled: !canAdd, onClick: this.addItem },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'add'
              )
            )
          )
        )
      );
    }
  }]);

  return InputList;
}(_react.Component);

InputList.propTypes = {
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.arrayOf(_propTypes2.default.string),
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  type: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  maxListSize: _propTypes2.default.number
};
InputList.defaultProps = {
  value: [],
  type: 'text',
  disabled: false,
  required: false,
  readonly: false
};
exports.default = InputList;