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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GHOST_DATA = Array(5).fill(null);

var ResponsiveTable = function (_Component) {
  _inherits(ResponsiveTable, _Component);

  function ResponsiveTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResponsiveTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResponsiveTable.__proto__ || Object.getPrototypeOf(ResponsiveTable)).call.apply(_ref, [this].concat(args))), _this), _this.getCellContent = function (row, column) {
      if (!row) {
        return _react2.default.createElement(
          'div',
          null,
          '\xA0'
        );
      }
      return column.render ? column.render(row) : row[column.key];
    }, _this.renderHeader = function (_ref2) {
      var header = _ref2.header,
          key = _ref2.key;
      return _react2.default.createElement(
        'th',
        { key: key },
        header
      );
    }, _this.renderRow = function (row, index) {
      return _react2.default.createElement(
        'tr',
        { key: row ? row.id : index },
        _this.props.columns.map(_this.renderCell(row))
      );
    }, _this.renderCell = function (row) {
      return function (column) {
        var content = _this.getCellContent(row, column);
        var showResponsiveHeader = !column.hideResponsiveHeader && !!column.header;
        var dataHeader = showResponsiveHeader ? { 'data-header': column.header } : {};
        var className = column.className ? { className: column.className } : {};
        return _react2.default.createElement(
          'td',
          _extends({ key: column.key }, dataHeader, className),
          content
        );
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResponsiveTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          data = _props.data,
          stickyHeader = _props.stickyHeader,
          noPaper = _props.noPaper;

      var className = (0, _classnames2.default)('ResponsiveTable', {
        'ResponsiveTable--sticky': stickyHeader,
        'ResponsiveTable--loading': !data,
        'ResponsiveTable--no-paper': noPaper
      });
      return _react2.default.createElement(
        'table',
        { className: className },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            columns.map(this.renderHeader)
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          (data || GHOST_DATA).map(this.renderRow)
        )
      );
    }
  }]);

  return ResponsiveTable;
}(_react.Component);

ResponsiveTable.propTypes = {
  columns: _propTypes2.default.array.isRequired,
  data: _propTypes2.default.array,
  stickyHeader: _propTypes2.default.bool,
  noPaper: _propTypes2.default.bool
};
ResponsiveTable.defaultProps = {
  stickyHeader: false
};
exports.default = ResponsiveTable;