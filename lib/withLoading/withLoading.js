'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getDisplayName(_ref) {
  var displayName = _ref.displayName,
      name = _ref.name;

  return displayName || name || 'Component';
}

/**
 * Higher-Order Component that guards a wrapped component in the case the data
 * it needs to render is not yet loaded, and renders a loading indicator
 * instead.
 *
 * @param {Function} isDataLoaded a function that returns true if the data
 *   needed by the component is already loaded, or false otherwise.
 * @param {String} [dataLoaderProp] the name of the prop function that triggers
 *   loading the necessary data when this is not yet loaded.
 * @param {boolean} [showLoading] if false, it will not show a loading indicator
 *   when the data isn't loaded, and will let the wrapped component render
 *   itself.
 * @param {Object} [loadingProps] optional additional props to pass to the
 *   loading indicator component when this needs to be rendered.
 * @returns a new component with the described functionality
 */

exports.default = function () {
  var isDataLoaded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_ref3) {
    var data = _ref3.data;
    return data != null;
  };

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref2$dataLoaderProp = _ref2.dataLoaderProp,
      dataLoaderProp = _ref2$dataLoaderProp === undefined ? 'loadData' : _ref2$dataLoaderProp,
      _ref2$showLoading = _ref2.showLoading,
      showLoading = _ref2$showLoading === undefined ? true : _ref2$showLoading,
      loadingProps = _objectWithoutProperties(_ref2, ['dataLoaderProp', 'showLoading']);

  return function (WrappedComponent) {
    var displayName = getDisplayName(WrappedComponent);

    var propTypes = _defineProperty({}, dataLoaderProp, _propTypes3.default.func);

    if (typeof isDataLoaded === 'string') {
      var dataPropName = isDataLoaded;
      propTypes[dataPropName] = _propTypes3.default.oneOfType([_propTypes3.default.object, _propTypes3.default.array]);
      isDataLoaded = function isDataLoaded(_ref4) {
        var data = _ref4[dataPropName];
        return data != null;
      };
    }

    var WithPageLoading = function (_Component) {
      _inherits(WithPageLoading, _Component);

      function WithPageLoading() {
        _classCallCheck(this, WithPageLoading);

        return _possibleConstructorReturn(this, (WithPageLoading.__proto__ || Object.getPrototypeOf(WithPageLoading)).apply(this, arguments));
      }

      _createClass(WithPageLoading, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (!isDataLoaded(this.props)) {
            var loadData = this.props[dataLoaderProp];
            if (!loadData) {
              console.warn('[' + displayName + '] data load callback was not provided');
              return;
            }
            loadData();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          if (showLoading && !isDataLoaded(this.props)) {
            return _react2.default.createElement(_Loading2.default, loadingProps);
          }

          var _props = this.props,
              _ = _props[dataLoaderProp],
              props = _objectWithoutProperties(_props, [dataLoaderProp]); // eslint-disable-line no-unused-vars


          return _react2.default.createElement(WrappedComponent, props);
        }
      }]);

      return WithPageLoading;
    }(_react.Component);

    WithPageLoading.propTypes = propTypes;


    WithPageLoading.displayName = 'WithLoading(' + displayName + ')';
    return WithPageLoading;
  };
};