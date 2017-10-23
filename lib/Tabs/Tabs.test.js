'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _react2.default.createElement(
    _Tabs2.default,
    props,
    _react2.default.createElement(
      _Tab2.default,
      { label: 'Main' },
      'Hello'
    ),
    _react2.default.createElement(
      _Tab2.default,
      { label: 'Extra' },
      'World'
    )
  );
}

// selectors
var TAB_BUTTONS = 'button[role="tab"]';
var SELECTED_TAB_BUTTON = 'button[role="tab"][aria-selected=true]';
var UNSELECTED_TAB_BUTTON = 'button[role="tab"][aria-selected=false]';
var SELECTED_TAB_CONTENT = '.TabContent--active';

it('renders one tab button per child Tab', function () {
  var wrapper = (0, _enzyme.mount)(render());
  expect(wrapper.find(TAB_BUTTONS).length).toEqual(2);
  expect(wrapper.text()).toContain('Main');
  expect(wrapper.text()).toContain('Extra');
});

it('renders the first tab as active by default', function () {
  var wrapper = (0, _enzyme.mount)(render());
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
});

it('renders a given tab as active if specified', function () {
  var wrapper = (0, _enzyme.mount)(render({ initialTab: 1 }));
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
});

it('switches the active tab when buttons are clicked', function () {
  var wrapper = (0, _enzyme.mount)(render());
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
  wrapper.find(UNSELECTED_TAB_BUTTON).simulate('click');
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
});

describe('when indexing tabs by value instead of position', function () {
  function render() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _react2.default.createElement(
      _Tabs2.default,
      props,
      _react2.default.createElement(
        _Tab2.default,
        { value: 'main-tab', label: 'Main' },
        'Hello'
      ),
      _react2.default.createElement(
        _Tab2.default,
        { value: 'extra-tab', label: 'Extra' },
        'World'
      )
    );
  }

  it('renders the first tab as active by default', function () {
    var wrapper = (0, _enzyme.mount)(render());
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
    expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
  });

  it('renders a given tab as active if specified', function () {
    var wrapper = (0, _enzyme.mount)(render({ initialTab: 'extra-tab' }));
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
    expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
  });
});

describe('when appBar is false', function () {
  it('does not render tab buttons inside an AppBar', function () {
    var wrapper = (0, _enzyme.mount)(render({ appBar: false }));
    expect(wrapper.find('header ' + TAB_BUTTONS).length).toEqual(0);
  });
});

describe('when appBar is true', function () {
  it('renders tab buttons inside an AppBar', function () {
    var wrapper = (0, _enzyme.mount)(render({ appBar: true }));
    expect(wrapper.find('header ' + TAB_BUTTONS).length).toEqual(2);
  });
});

describe('support for icons in tab buttons', function () {
  it('renders an icon in the tabs that have it', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Tabs2.default,
      null,
      _react2.default.createElement(
        _Tab2.default,
        { icon: _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'add'
          ), label: 'Main' },
        'Hello'
      ),
      _react2.default.createElement(
        _Tab2.default,
        { icon: _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'remove'
          ), label: 'Extra' },
        'World'
      )
    ));
    expect(wrapper.find(TAB_BUTTONS + ' i.material-icons').length).toEqual(2);
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('addMain');
    expect(wrapper.find(UNSELECTED_TAB_BUTTON).text()).toEqual('removeExtra');
  });

  it('supports specifying icons as string names of material icons', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _Tabs2.default,
      null,
      _react2.default.createElement(
        _Tab2.default,
        { icon: 'add', label: 'Main' },
        'Hello'
      ),
      _react2.default.createElement(
        _Tab2.default,
        { icon: 'remove', label: 'Extra' },
        'World'
      )
    ));
    expect(wrapper.find(TAB_BUTTONS + ' i.material-icons').length).toEqual(2);
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('addMain');
    expect(wrapper.find(UNSELECTED_TAB_BUTTON).text()).toEqual('removeExtra');
  });
});