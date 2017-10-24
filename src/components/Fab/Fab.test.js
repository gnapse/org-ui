import React from 'react';
import { mountWithRouter } from '../../test-helpers';
import Fab from './Fab';

it('renders the specified icon', () => {
  const wrapper = mountWithRouter(<Fab icon="add" onClick="/" />);
  expect(wrapper).toContainReact(<i className="material-icons">add</i>);
  expect(wrapper.find('a i.material-icons').length).toEqual(1);
});

describe('when onClick is a string (url)', () => {
  it('renders a link to the given url', () => {
    const wrapper = mountWithRouter(<Fab icon="add" onClick="/path" />);
    expect(wrapper.find('a').at(0)).toHaveProp('href', '/path');
  });
});

describe('when onClick is a function', () => {
  it('calls the given callback', () => {
    const onClick = jest.fn();
    const wrapper = mountWithRouter(<Fab icon="add" onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
