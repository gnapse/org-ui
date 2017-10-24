import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MenuItem from '../components/MenuItem';
import IconMenu from '../components/IconMenu';

storiesOf('IconMenu', module)
  .add('basic example', () => (
    <Router>
      <IconMenu>
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </IconMenu>
    </Router>
  ))
  .add('with custom icon', () => (
    <Router>
      <IconMenu icon="add">
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </IconMenu>
    </Router>
  ))
  .add('keep open on item click', () => (
    <Router>
      <IconMenu keepOnItemClick>
        <MenuItem href="https://material-ui-next.com/" label="Material-UI" />
        <MenuItem onClick={action('clicked')} label="Click me" />
      </IconMenu>
    </Router>
  ));
