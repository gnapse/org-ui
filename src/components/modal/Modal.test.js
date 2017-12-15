/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal';

const hide = jest.fn();

const Component = ({ label, open, hide }) => (
  <button onClick={hide}>{label || 'Hello World!'}</button>
);

describe('when no component is given', () => {
  it('does not render anythng', () => {
    expect(
      mount(<Modal open={true} hide={hide} />).isEmptyRender()
    ).toBeTruthy();
    expect(
      mount(<Modal open={false} hide={hide} />).isEmptyRender()
    ).toBeTruthy();
  });
});

describe('when a component is given', () => {
  it('passes open down to the component', () => {
    expect(
      mount(<Modal open={true} component={Component} hide={hide} />).find(
        Component
      )
    ).toHaveProp('open', true);
    expect(
      mount(<Modal open={false} component={Component} hide={hide} />).find(
        Component
      )
    ).toHaveProp('open', false);
  });

  it('renders the given component', () => {
    const wrapper = mount(<Modal open component={Component} hide={hide} />);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toEqual('Hello World!');
  });

  it('passes any extra props to the component', () => {
    const wrapper = mount(
      <Modal
        open
        component={Component}
        hide={hide}
        props={{ label: 'Goodbye' }}
      />
    );
    expect(wrapper.text()).toEqual('Goodbye');
  });

  it('passes the hide function to the component', () => {
    const wrapper = mount(<Modal open component={Component} hide={hide} />);
    wrapper.find('button').simulate('click');
    expect(hide).toHaveBeenCalled();
  });
});
