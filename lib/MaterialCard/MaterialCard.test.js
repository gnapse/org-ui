'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _MaterialCard = require('./MaterialCard');

var _MaterialCard2 = _interopRequireDefault(_MaterialCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders a header if given', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_MaterialCard2.default, { header: 'Hello World' }));
  expect(wrapper).toIncludeText('Hello World');
});

it('renders a sub-header if given', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_MaterialCard2.default, { header: 'Hello World', subheader: 'A better way to live' }));
  expect(wrapper).toIncludeText('A better way to live');
});

it('renders its content, if any', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
    _MaterialCard2.default,
    null,
    'Hello again'
  ));
  expect(wrapper).toIncludeText('Hello again');
});

it('renders all of the above together', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
    _MaterialCard2.default,
    { header: 'A fancy title', subheader: 'To catch attention' },
    'And then some cool content to justify it.'
  ));
  expect(wrapper).toIncludeText('A fancy title');
  expect(wrapper).toIncludeText('To catch attention');
  expect(wrapper).toIncludeText('And then some cool content to justify it.');
});