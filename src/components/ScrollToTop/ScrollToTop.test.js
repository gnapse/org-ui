import React from 'react';
import { mount } from 'enzyme';
import ScrollToTop from './ScrollToTop';

it('renders its children', () => {
  const wrapper = mount(
    <ScrollToTop>
      <h1>Hello World</h1>
    </ScrollToTop>
  );
  expect(wrapper).toContainReact(<h1>Hello World</h1>);
});
