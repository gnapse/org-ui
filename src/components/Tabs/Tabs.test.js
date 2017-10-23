import React from 'react';
import { mount } from 'enzyme';
import Tabs from './Tabs';
import Tab from './Tab';

function render(props = {}) {
  return (
    <Tabs {...props}>
      <Tab label="Main">Hello</Tab>
      <Tab label="Extra">World</Tab>
    </Tabs>
  );
}

// selectors
const TAB_BUTTONS = 'button[role="tab"]';
const SELECTED_TAB_BUTTON = 'button[role="tab"][aria-selected=true]';
const UNSELECTED_TAB_BUTTON = 'button[role="tab"][aria-selected=false]';
const SELECTED_TAB_CONTENT = '.TabContent--active';

it('renders one tab button per child Tab', () => {
  const wrapper = mount(render());
  expect(wrapper.find(TAB_BUTTONS).length).toEqual(2);
  expect(wrapper.text()).toContain('Main');
  expect(wrapper.text()).toContain('Extra');
});

it('renders the first tab as active by default', () => {
  const wrapper = mount(render());
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
});

it('renders a given tab as active if specified', () => {
  const wrapper = mount(render({ initialTab: 1 }));
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
});

it('switches the active tab when buttons are clicked', () => {
  const wrapper = mount(render());
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
  wrapper.find(UNSELECTED_TAB_BUTTON).simulate('click');
  expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
  expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
});

describe('when indexing tabs by value instead of position', () => {
  function render(props = {}) {
    return (
      <Tabs {...props}>
        <Tab value="main-tab" label="Main">
          Hello
        </Tab>
        <Tab value="extra-tab" label="Extra">
          World
        </Tab>
      </Tabs>
    );
  }

  it('renders the first tab as active by default', () => {
    const wrapper = mount(render());
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Main');
    expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('Hello');
  });

  it('renders a given tab as active if specified', () => {
    const wrapper = mount(render({ initialTab: 'extra-tab' }));
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('Extra');
    expect(wrapper.find(SELECTED_TAB_CONTENT).text()).toEqual('World');
  });
});

describe('when appBar is false', () => {
  it('does not render tab buttons inside an AppBar', () => {
    const wrapper = mount(render({ appBar: false }));
    expect(wrapper.find(`header ${TAB_BUTTONS}`).length).toEqual(0);
  });
});

describe('when appBar is true', () => {
  it('renders tab buttons inside an AppBar', () => {
    const wrapper = mount(render({ appBar: true }));
    expect(wrapper.find(`header ${TAB_BUTTONS}`).length).toEqual(2);
  });
});

describe('support for icons in tab buttons', () => {
  it('renders an icon in the tabs that have it', () => {
    const wrapper = mount(
      <Tabs>
        <Tab icon={<i className="material-icons">add</i>} label="Main">
          Hello
        </Tab>
        <Tab icon={<i className="material-icons">remove</i>} label="Extra">
          World
        </Tab>
      </Tabs>
    );
    expect(wrapper.find(`${TAB_BUTTONS} i.material-icons`).length).toEqual(2);
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('addMain');
    expect(wrapper.find(UNSELECTED_TAB_BUTTON).text()).toEqual('removeExtra');
  });

  it('supports specifying icons as string names of material icons', () => {
    const wrapper = mount(
      <Tabs>
        <Tab icon="add" label="Main">
          Hello
        </Tab>
        <Tab icon="remove" label="Extra">
          World
        </Tab>
      </Tabs>
    );
    expect(wrapper.find(`${TAB_BUTTONS} i.material-icons`).length).toEqual(2);
    expect(wrapper.find(SELECTED_TAB_BUTTON).text()).toEqual('addMain');
    expect(wrapper.find(UNSELECTED_TAB_BUTTON).text()).toEqual('removeExtra');
  });
});
