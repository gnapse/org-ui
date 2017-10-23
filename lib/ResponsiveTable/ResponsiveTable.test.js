'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ResponsiveTable = require('./ResponsiveTable');

var _ResponsiveTable2 = _interopRequireDefault(_ResponsiveTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columns = [{
  key: 'name',
  header: 'Name',
  render: function render(_ref) {
    var name = _ref.name;
    return _react2.default.createElement(
      'span',
      { className: 'size1' },
      name
    );
  }
}, {
  key: 'jobTitle',
  header: 'Job title',
  className: 'job-title',
  hideResponsiveHeader: true
}];

var data = [{ id: '1', name: 'Walter White', jobTitle: 'Main cook' }, { id: '2', name: 'Jesse Pinkman', jobTitle: 'Aid cook' }, { id: '3', name: 'Mike Ehrmantraut', jobTitle: 'Hitman' }];

it('renders a row per data item', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data }));
  expect(wrapper.find('tbody tr').length).toEqual(data.length);
});

it('renders all item names in table cells', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data }));
  expect(wrapper.find('tbody tr td span.size1').length).toEqual(data.length);
  data.forEach(function (_ref2) {
    var name = _ref2.name;

    expect(wrapper).toContainReact(_react2.default.createElement(
      'td',
      { 'data-header': 'Name' },
      _react2.default.createElement(
        'span',
        { className: 'size1' },
        name
      )
    ));
  });
});

it('renders all item job titles in table cells', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data }));
  expect(wrapper.find('tbody tr td.job-title').length).toEqual(data.length);
  data.forEach(function (_ref3) {
    var jobTitle = _ref3.jobTitle;

    expect(wrapper).toContainReact(_react2.default.createElement(
      'td',
      { className: 'job-title' },
      jobTitle
    ));
  });
});

it('renders column headers', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data }));
  expect(wrapper.find('table thead tr th').length).toEqual(columns.length);
  columns.forEach(function (_ref4) {
    var header = _ref4.header;

    expect(wrapper).toContainReact(_react2.default.createElement(
      'th',
      null,
      header
    ));
  });
});

it('renders non-sticky headers by default', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data }));
  expect(wrapper.find('table.ResponsiveTable--sticky').length).toEqual(0);
});

describe('with stickyHeader=true', function () {
  it('renders sticky header', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ResponsiveTable2.default, { columns: columns, data: data, stickyHeader: true }));
    expect(wrapper.find('table.ResponsiveTable--sticky').length).toEqual(1);
  });
});