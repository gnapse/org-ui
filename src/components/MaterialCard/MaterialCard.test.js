import React from 'react';
import { mount } from 'enzyme';
import MaterialCard from './MaterialCard';

it('renders a header if given', () => {
  const wrapper = mount(<MaterialCard header="Hello World" />);
  expect(wrapper).toIncludeText('Hello World');
});

it('renders a sub-header if given', () => {
  const wrapper = mount(
    <MaterialCard header="Hello World" subheader="A better way to live" />
  );
  expect(wrapper).toIncludeText('A better way to live');
});

it('renders its content, if any', () => {
  const wrapper = mount(<MaterialCard>Hello again</MaterialCard>);
  expect(wrapper).toIncludeText('Hello again');
});

it('renders all of the above together', () => {
  const wrapper = mount(
    <MaterialCard header="A fancy title" subheader="To catch attention">
      And then some cool content to justify it.
    </MaterialCard>
  );
  expect(wrapper).toIncludeText('A fancy title');
  expect(wrapper).toIncludeText('To catch attention');
  expect(wrapper).toIncludeText('And then some cool content to justify it.');
});
