'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _groupBy = require('lodash/groupBy');

var _groupBy2 = _interopRequireDefault(_groupBy);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

var _toPairs = require('lodash/toPairs');

var _toPairs2 = _interopRequireDefault(_toPairs);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Form = require('material-ui/Form');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fullWidth = {
  item: true,
  lg: 12,
  sm: 12,
  xs: 12
};

var getLabel = function getLabel(_ref) {
  var displayName = _ref.displayName,
      label = _ref.label,
      title = _ref.title,
      name = _ref.name;
  return displayName || label || title || name;
};

var OptionsList = function (_Component) {
  _inherits(OptionsList, _Component);

  function OptionsList() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, OptionsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = OptionsList.__proto__ || Object.getPrototypeOf(OptionsList)).call.apply(_ref2, [this].concat(args))), _this), _this.onChange = function (_ref3, checked) {
      var value = _ref3.target.value;
      var _this$props = _this.props,
          name = _this$props.name,
          currentValue = _this$props.value,
          onChange = _this$props.onChange;

      var newValue = checked ? currentValue.concat(value).sort() : currentValue.filter(function (v) {
        return v !== value;
      });
      if (onChange) {
        onChange({ target: { name: name, value: newValue } });
      }
    }, _this.renderItem = function (item) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          readonly = _this$props2.readonly,
          name = _this$props2.name,
          value = _this$props2.value,
          ItemComponent = _this$props2.ItemComponent,
          getItemProps = _this$props2.getItemProps,
          gridItemProps = _this$props2.gridItemProps;

      return _react2.default.createElement(
        _Grid2.default,
        _extends({}, gridItemProps, { item: true, key: item.id }),
        _react2.default.createElement(_Form.FormControlLabel, _extends({
          label: getLabel(item),
          disabled: disabled || readonly
        }, getItemProps(item), {
          checked: value.includes(item.id),
          name: name,
          value: item.id,
          onChange: _this.onChange,
          control: _react2.default.createElement(ItemComponent, null)
        }))
      );
    }, _this.renderGroup = function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          title = _ref5[0],
          options = _ref5[1];

      var _this$props3 = _this.props,
          groupProps = _this$props3.groupProps,
          sortOptionsBy = _this$props3.sortOptionsBy;

      var opts = sortOptionsBy ? (0, _sortBy2.default)(options, sortOptionsBy) : options;
      return _react2.default.createElement(
        _Grid2.default,
        _extends({
          key: title || 'unique',
          className: 'OptionsList--Group'
        }, fullWidth, groupProps, {
          container: true
        }),
        title && _this.renderGroupTitle(title, options),
        opts.map(_this.renderItem)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OptionsList, [{
    key: 'renderErrors',
    value: function renderErrors() {
      var _props = this.props,
          errors = _props.errors,
          disabled = _props.disabled;

      return _react2.default.createElement(
        _Grid2.default,
        _extends({ className: 'errors' }, fullWidth),
        errors.map(function (error, index) {
          return _react2.default.createElement(
            _Form.FormHelperText,
            { error: true, key: index, disabled: disabled },
            error
          );
        })
      );
    }
  }, {
    key: 'renderGroupTitle',
    value: function renderGroupTitle(title, options) {
      var value = this.props.value;

      var selectedCount = options.filter(function (opt) {
        return value.includes(opt.id);
      }).length;
      return _react2.default.createElement(
        _Grid2.default,
        fullWidth,
        selectedCount ? _react2.default.createElement(
          'h3',
          null,
          title,
          ' (',
          selectedCount,
          ')'
        ) : _react2.default.createElement(
          'h3',
          null,
          title
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          options = _props2.options,
          errors = _props2.errors,
          gridProps = _props2.gridProps;

      var hasErrors = errors && errors.length;
      var groups = this.props.groupBy ? (0, _toPairs2.default)((0, _groupBy2.default)(options, this.props.groupBy)) : [[null, options]];
      return _react2.default.createElement(
        _Grid2.default,
        _extends({ container: true }, gridProps),
        hasErrors && this.renderErrors(),
        groups.map(this.renderGroup)
      );
    }
  }]);

  return OptionsList;
}(_react.Component);

OptionsList.propTypes = {
  name: _propTypes2.default.string,
  value: _propTypes2.default.arrayOf(_propTypes2.default.string),
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  disabled: _propTypes2.default.bool,
  readonly: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  ItemComponent: _propTypes2.default.func,
  groupProps: _propTypes2.default.shape(_Grid2.default.propTypes),
  gridProps: _propTypes2.default.shape(_Grid2.default.propTypes),
  gridItemProps: _propTypes2.default.shape(_Grid2.default.propTypes),
  getItemProps: _propTypes2.default.func,
  groupBy: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  sortOptionsBy: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
};
OptionsList.defaultProps = {
  value: [],
  disabled: false,
  readonly: false,
  ItemComponent: _Checkbox2.default,
  gridProps: { spacing: 8 },
  gridItemProps: { lg: 4, sm: 6, xs: 12 },
  getItemProps: function getItemProps(item) {
    return {};
  }
};
exports.default = OptionsList;