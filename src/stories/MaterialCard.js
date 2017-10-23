import React from 'react';
import { storiesOf } from '@storybook/react';
import MaterialCard from '../components/MaterialCard';

storiesOf('MaterialCard', module)
  .add('with header', () => (
    <MaterialCard header="Hello World">This is the content area.</MaterialCard>
  ))
  .add('with subheader too', () => (
    <MaterialCard header="Hello World" subheader="A better way to live">
      This is the content area.
    </MaterialCard>
  ));
