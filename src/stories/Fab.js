import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Fab from '../components/Fab';

storiesOf('Fab', module)
  .add('basic example', () => <Fab icon="add" onClick={action('clicked')} />)
  .add('with different icon', () => (
    <Fab icon="edit" onClick={action('clicked')} />
  ));
