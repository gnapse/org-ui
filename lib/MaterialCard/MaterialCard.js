'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _styles = require('material-ui/styles');

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  card: {
    marginBottom: 20
  },
  cardContent: {
    padding: 30
  }
};

var MaterialCard = function (_Component) {
  _inherits(MaterialCard, _Component);

  function MaterialCard() {
    _classCallCheck(this, MaterialCard);

    return _possibleConstructorReturn(this, (MaterialCard.__proto__ || Object.getPrototypeOf(MaterialCard)).apply(this, arguments));
  }

  _createClass(MaterialCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          header = _props.header,
          subheader = _props.subheader,
          classes = _props.classes;

      var cardHeader = header && _react2.default.createElement(
        'div',
        { className: 'Card__header' },
        header
      );
      var cardSubHeader = subheader && _react2.default.createElement(
        'div',
        { className: 'Card__subheader' },
        subheader
      );

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        cardHeader,
        cardSubHeader,
        _react2.default.createElement(
          _Card.CardContent,
          { className: classes.cardContent },
          children
        )
      );
    }
  }]);

  return MaterialCard;
}(_react.Component);

MaterialCard.propTypes = {
  header: _propTypes2.default.string,
  subheader: _propTypes2.default.string
};
exports.default = (0, _styles.withStyles)(styles)(MaterialCard);