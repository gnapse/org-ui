import React from 'react';
import { mountWithRouter } from '../../test-helpers';
import MenuItem from './MenuItem';

it('renders the specified icon', () => {
  const wrapper = mountWithRouter(
    <MenuItem icon="add" href="/" label="Click me" />
  );
  expect(wrapper).toContainReact(<i className="material-icons">add</i>);
  expect(wrapper.find('a i.material-icons').length).toEqual(1);
});

describe('when no icon is specified', () => {
  it('does not render any icon', () => {
    const wrapper = mountWithRouter(<MenuItem href="/" label="Click me" />);
    expect(wrapper.find('.material-icons').length).toEqual(0);
  });
});

it('renders the specified label', () => {
  const wrapper = mountWithRouter(<MenuItem href="/" label="Click me" />);
  expect(wrapper.text()).toEqual('Click me');
});

it('renders a link to the given url', () => {
  const wrapper = mountWithRouter(
    <MenuItem icon="add" href="/path" label="Click me" />
  );
  expect(wrapper.find('a').at(0)).toHaveProp('href', '/path');
});
