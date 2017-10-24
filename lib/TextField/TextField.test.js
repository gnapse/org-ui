'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _MenuItem = require('material-ui/Menu/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _TextField3 = require('./TextField');

var _TextField4 = _interopRequireDefault(_TextField3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders a material-ui TextField', function () {
  expect((0, _enzyme.mount)(_react2.default.createElement(_TextField4.default, null))).toContainReact(_react2.default.createElement(_TextField2.default, null));
});

it('passes any props received to the material-ui TextField', function () {
  var props = { name: 'title', type: 'email', value: 'hello@example.com' };
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_TextField4.default, props));
  expect(wrapper).toContainReact(_react2.default.createElement(_TextField2.default, props));
});

it('renders all error messages inside a single FormHelperText', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_TextField4.default, { errors: ['one', 'two'] }));
  expect(wrapper).toContainReact(_react2.default.createElement(_TextField2.default, { error: true, helperText: 'one, two' }));
});

it('renders as a select if a list of options is given', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_TextField4.default, { value: 'one', options: ['one', 'two'] }));
  expect(wrapper).toContainReact(_react2.default.createElement(
    _TextField2.default,
    { select: true, value: 'one' },
    _react2.default.createElement(
      _MenuItem2.default,
      { key: 'one', value: 'one' },
      'one'
    ),
    _react2.default.createElement(
      _MenuItem2.default,
      { key: 'two', value: 'two' },
      'two'
    )
  ));
});