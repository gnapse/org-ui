import React from 'react';
import { mount } from 'enzyme';
import IconMenu from './IconMenu';
import MenuItem from '../MenuItem';

it('renders the ellipsis button', () => {
  const wrapper = mount(<IconMenu />);
  expect(wrapper).toContainReact(<i className="material-icons">more_vert</i>);
});

it('allows to customize the icon', () => {
  const wrapper = mount(<IconMenu icon="add" />);
  expect(wrapper).toContainReact(<i className="material-icons">add</i>);
});

/*
 * TODO:
 * This test case is skipped because wrapped content is rendered in a separate location of a page's
 * html, and therefore the wrapper does not contain it.  We have yet to figure out how to test these
 * kind of things.
 */
xit('renders wrapped content', () => {
  const wrapper = mount(
    <IconMenu>
      <MenuItem href="/" icon="edit" label="Edit" />
    </IconMenu>
  );
  expect(wrapper).toContainReact(<i className="material-icons">edit</i>);
});
