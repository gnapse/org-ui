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

var _MaterialCard = require('../MaterialCard');

var _MaterialCard2 = _interopRequireDefault(_MaterialCard);

var _withLoading = require('../withLoading');

var _withLoading2 = _interopRequireDefault(_withLoading);

var _OptionsList = require('./OptionsList');

var _OptionsList2 = _interopRequireDefault(_OptionsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingOptionsList = (0, _withLoading2.default)('options')(_OptionsList2.default);

var OptionsSelect = function (_Component) {
  _inherits(OptionsSelect, _Component);

  function OptionsSelect() {
    _classCallCheck(this, OptionsSelect);

    return _possibleConstructorReturn(this, (OptionsSelect.__proto__ || Object.getPrototypeOf(OptionsSelect)).apply(this, arguments));
  }

  _createClass(OptionsSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          props = _objectWithoutProperties(_props, ['label']);

      return _react2.default.createElement(
        _MaterialCard2.default,
        { header: label },
        _react2.default.createElement(LoadingOptionsList, props)
      );
    }
  }]);

  return OptionsSelect;
}(_react.Component);

OptionsSelect.propTypes = _extends({}, _OptionsList2.default.propTypes, {
  label: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.object),
  loadData: _propTypes2.default.func
});
OptionsSelect.defaultProps = {
  value: [],
  disabled: false
};
exports.default = OptionsSelect;