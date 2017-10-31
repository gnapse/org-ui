import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal';

const hide = jest.fn();

const Component = ({ label, hide }) => (
  <button onClick={hide}>{label || 'Hello World!'}</button>
);

describe('when no component is given', () => {
  it('does not render anythng', () => {
    const wrapper = mount(<Modal hide={hide} />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});

describe('when a component is given', () => {
  it('renders the given component', () => {
    const wrapper = mount(<Modal component={Component} hide={hide} />);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toEqual('Hello World!');
  });

  it('passes any extra props to the component', () => {
    const wrapper = mount(
      <Modal component={Component} hide={hide} label={'Goodbye'} />
    );
    expect(wrapper.text()).toEqual('Goodbye');
  });

  it('passes the hide function to the component', () => {
    const wrapper = mount(<Modal component={Component} hide={hide} />);
    wrapper.find('button').simulate('click');
    expect(hide).toHaveBeenCalled();
  });
});
