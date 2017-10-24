import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

/**
 * Mounts the given node within a router visiting the given path.
 * @param {Node} childElement the root element to mount
 * @param {String} [at] the path on which to mount the router
 * @returns the enzyme mount wrapper
 */
export const mountWithRouter = (childElement, { at = '/' } = {}) => {
  return mount(<Router initialEntries={[at]}>{childElement}</Router>);
};
