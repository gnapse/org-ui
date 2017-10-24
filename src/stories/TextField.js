import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from '../components/TextField';

storiesOf('TextField', module)
  .add('empty', () => (
    <TextField
      name="description"
      label="Description"
      onChange={action('change')}
    />
  ))
  .add('with initial value', () => (
    <TextField
      name="username"
      label="User name"
      value="jane-doe"
      onChange={action('change')}
    />
  ))
  .add('disabled', () => (
    <TextField
      disabled
      label="Disabled input"
      value="This text field is disabled"
      onChange={action('change')}
    />
  ))
  .add('required', () => (
    <TextField
      required
      name="list"
      label="Required input"
      value="This text field is required"
      onChange={action('change')}
    />
  ))
  .add('with errors', () => (
    <TextField
      name="wrong"
      label="Items list"
      value={['One', 'Three', 'Two']}
      onChange={action('change')}
      errors={['Items are not sorted', 'Something is not right']}
    />
  ));
