import React from 'react';
import { mount } from 'enzyme';
import DropdownMenu from './DropdownMenu';

describe('with a label', () => {
  it('renders a button with the given label', () => {
    const wrapper = mount(<DropdownMenu label="Open Menu" />);
    expect(wrapper.find('button').text()).toEqual('Open Menu');
  });
});

describe('without label', () => {
  it('renders the ellipsis button', () => {
    const wrapper = mount(<DropdownMenu />);
    expect(wrapper).toContainReact(<i className="material-icons">more_vert</i>);
  });

  it('allows to customize the icon', () => {
    const wrapper = mount(<DropdownMenu icon="add" />);
    expect(wrapper).toContainReact(<i className="material-icons">add</i>);
  });
});
