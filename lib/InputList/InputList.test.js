'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _InputList = require('./InputList');

var _InputList2 = _interopRequireDefault(_InputList);

var _Form = require('material-ui/Form');

var _Input = require('material-ui/Input');

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var countDisabled = function countDisabled(nodes) {
  return nodes.filterWhere(function (input) {
    return input.prop('disabled');
  }).length;
};

function expectDisabledCount(wrapper, selector, count) {
  expect(countDisabled(wrapper(true).find(selector))).toEqual(count);
  expect(countDisabled(wrapper(false).find(selector))).toEqual(0);
}

it('renders an input element per value', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['Hello', 'World'] }));
  expect(wrapper.find('input[type="text"]').length).toEqual(2);
});

it('allows to specify the type of input field to use', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { type: 'number', value: ['1', '2'] }));
  expect(wrapper.find('input[type="text"]').length).toEqual(0);
  expect(wrapper.find('input[type="number"]').length).toEqual(2);
});

it('renders the label if given', function () {
  var props = { required: false, disabled: false, error: false };
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { label: 'Names' }));
  expect(wrapper).toContainReact(_react2.default.createElement(
    _Input.InputLabel,
    props,
    'Names'
  ));
  expect(wrapper.find('label').length).toEqual(1);
  expect((0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, null)).find('label').length).toEqual(0);
});

it('renders an error list when there are errors', function () {
  var props = { required: false, disabled: false, error: true };
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { errors: ['Name cannot be blank', 'Name is too short'] }));
  expect(wrapper).toContainReact(_react2.default.createElement(
    _Form.FormHelperText,
    props,
    'Name cannot be blank'
  ));
  expect(wrapper).toContainReact(_react2.default.createElement(
    _Form.FormHelperText,
    props,
    'Name is too short'
  ));
});

it('renders an empty list if no value is given', function () {
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, null));
  expect(wrapper.find('input').length).toEqual(0);
});

it('removes empty items from the values given to onChange', function () {
  var onChange = jest.fn(function () {});
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['Hello', 'World'], onChange: onChange }));
  wrapper.find('.InputList-add button').simulate('click');
  expect(wrapper.find('input').length).toEqual(3);
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World'] }
  });
  wrapper.find('.InputList-item input').last().simulate('change', { target: { value: '!' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World', '!'] }
  });
  wrapper.find('.InputList-item input').first().simulate('change', { target: { value: '' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['World', '!'] }
  });
});

it('allows to add new items to the list', function () {
  var onChange = jest.fn(function () {});
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['Hello', 'World'], onChange: onChange }));
  wrapper.find('.InputList-add button').simulate('click');
  expect(wrapper.find('input').length).toEqual(3);
});

it('allows to remove items from the list', function () {
  var onChange = jest.fn(function () {});
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['Hello', 'World'], onChange: onChange }));
  wrapper.find('.InputList-remove button').first().simulate('click');
  expect(wrapper.find('input').length).toEqual(1);
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['World'] }
  });
});

it('updates the value when typing in some of the input fields', function () {
  var onChange = jest.fn(function () {});
  var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['Hello', 'World'], onChange: onChange }));
  wrapper.find('.InputList-item input').last().simulate('change', { target: { value: 'World!' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World!'] }
  });
});

describe('on input blur', function () {
  it('removes all empty values', function () {
    var value = ['Hello', '  ', 'Cruel', '', 'World'];
    var onChange = jest.fn(function () {});
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: value, onChange: onChange }));
    expect(wrapper.find('input').length).toEqual(5);
    wrapper.find('.InputList-item input').last().simulate('blur');
    expect(wrapper.find('input').length).toEqual(3);
    expect(onChange).toHaveBeenCalledWith({
      target: { value: ['Hello', 'Cruel', 'World'] }
    });
  });

  it('leaves the list of inputs empty if necessary', function () {
    var onChange = jest.fn(function () {});
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { value: ['', ' '], onChange: onChange }));
    expect(wrapper.find('input').length).toEqual(2);
    wrapper.find('.InputList-item input').last().simulate('blur');
    expect(wrapper.find('input').length).toEqual(0);
    expect(onChange).toHaveBeenCalledWith({ target: { value: [] } });
  });

  it('leaves at least a single input field if required', function () {
    var onChange = jest.fn(function () {});
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { required: true, value: ['', ' '], onChange: onChange }));
    expect(wrapper.find('input').length).toEqual(2);
    wrapper.find('.InputList-item input').last().simulate('blur');
    expect(wrapper.find('input').length).toEqual(1);
  });
});

describe('with required=true', function () {
  it('renders a single input field even if value is empty', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { required: true }));
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('does not allow to remove a single remaining item', function () {
    var wrapper = function wrapper(required) {
      return (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { required: required, value: ['Single'] }));
    };
    expectDisabledCount(wrapper, '.InputList-remove button', 1);
  });
});

describe('with readonly=true', function () {
  it('renders items as regular text instead of input fields', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { readonly: true, value: ['Hello', 'World'] }));
    expect(wrapper.find('input').length).toEqual(0);
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(wrapper).toContainReact(_react2.default.createElement(
      _List.ListItem,
      { className: 'InputList-item' },
      'Hello'
    ));
    expect(wrapper).toContainReact(_react2.default.createElement(
      _List.ListItem,
      { className: 'InputList-item' },
      'World'
    ));
  });

  it('does not render the button that adds new items', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { readonly: true, value: ['Hello', 'World'] }));
    expect(wrapper.find('.InputList-add button').length).toEqual(0);
  });

  it('does not render the buttons that remove existing items', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { readonly: true, value: ['Hello', 'World'] }));
    expect(wrapper.find('.InputList-remove button').length).toEqual(0);
  });

  it('does not render empty items', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { readonly: true, value: ['Hello', '', 'World'] }));
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(wrapper).not.toContainReact(_react2.default.createElement(_List.ListItem, { className: 'InputList-item' }));
    expect(wrapper).toContainReact(_react2.default.createElement(
      _List.ListItem,
      { className: 'InputList-item' },
      'Hello'
    ));
    expect(wrapper).toContainReact(_react2.default.createElement(
      _List.ListItem,
      { className: 'InputList-item' },
      'World'
    ));
  });
});

describe('with disabled=true', function () {
  var wrapper = function wrapper(disabled) {
    return (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { disabled: disabled, value: ['Hello', 'World'] }));
  };

  it('marks all input fields as disabled', function () {
    expectDisabledCount(wrapper, 'input', 2);
  });

  it('disables the button that add new items', function () {
    expectDisabledCount(wrapper, '.InputList-add button', 1);
  });

  it('disables the buttons that remove existing items', function () {
    expectDisabledCount(wrapper, '.InputList-remove button', 2);
  });
});

describe('with a given maxListSize', function () {
  var wrapper = function wrapper(size) {
    return (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { maxListSize: size, value: ['Hello', 'World'] }));
  };

  it('does not allow to grow the list size beyond the given maxListSize', function () {
    expect(wrapper(1).find('.InputList-add button').prop('disabled')).toBeTruthy();
    expect(wrapper(2).find('.InputList-add button').prop('disabled')).toBeTruthy();
    expect(wrapper(3).find('.InputList-add button').prop('disabled')).toBeFalsy();
    expect(wrapper().find('.InputList-add button').prop('disabled')).toBeFalsy();
  });
});

describe('with a given input name', function () {
  it('includes the name in the onChange event', function () {
    var onChange = jest.fn(function () {});
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputList2.default, { name: 'items', value: [''], onChange: onChange }));
    wrapper.find('.InputList-item input').first().simulate('change', { target: { value: 'Hello World!' } });
    expect(onChange).toHaveBeenCalledWith({
      target: {
        name: 'items',
        value: ['Hello World!']
      }
    });
  });
});