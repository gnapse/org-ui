import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MenuItem from '../components/MenuItem';
import DropdownMenu from '../components/DropdownMenu';

storiesOf('DropdownMenu & MenuItem', module)
  .add('with default icon', () => (
    <Router>
      <DropdownMenu>
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </DropdownMenu>
    </Router>
  ))
  .add('with custom icon', () => (
    <Router>
      <DropdownMenu icon="add">
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </DropdownMenu>
    </Router>
  ))
  .add('with label', () => (
    <Router>
      <DropdownMenu label="Options">
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </DropdownMenu>
    </Router>
  ))
  .add('keep open on item click', () => (
    <Router>
      <DropdownMenu keepOnItemClick>
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </DropdownMenu>
    </Router>
  ));
