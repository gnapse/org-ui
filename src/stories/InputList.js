import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputList from '../components/InputList';

storiesOf('InputList', module)
  .add('empty', () => (
    <InputList name="words" label="Word list" onChange={action('change')} />
  ))
  .add('with initial value', () => (
    <InputList
      name="words"
      label="Word list"
      value={['Hello', 'World']}
      onChange={action('change')}
    />
  ))
  .add('without label', () => (
    <InputList
      name="words"
      value={['Hello', 'World']}
      onChange={action('change')}
    />
  ))
  .add('disabled', () => (
    <InputList
      disabled
      label="Disabled list"
      value={['Disabled', 'List']}
      onChange={action('change')}
    />
  ))
  .add('readonly', () => (
    <InputList
      readonly
      label="Read-only list"
      value={['Read-only', 'List']}
      onChange={action('change')}
    />
  ))
  .add('required', () => (
    <InputList
      required
      name="list"
      label="Required list"
      value={['Required', 'List']}
      onChange={action('change')}
    />
  ))
  .add('type = number', () => (
    <InputList
      type="number"
      name="numbers"
      label="List of numbers"
      value={[123, 456]}
      onChange={action('change')}
    />
  ))
  .add('with maxListSize = 3', () => (
    <InputList
      maxListSize={3}
      name="thrice"
      label="Items (no more than three)"
      value={['One', 'Two', 'Three']}
      onChange={action('change')}
    />
  ))
  .add('with errors', () => (
    <InputList
      name="wrong"
      label="Items list"
      value={['One', 'Two', 'Three']}
      onChange={action('change')}
      errors={['Items are not sorted', 'Something is not right']}
    />
  ));
