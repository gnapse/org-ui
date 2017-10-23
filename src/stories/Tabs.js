import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs, { Tab } from '../components/Tabs';
import Card from '../components/MaterialCard';

storiesOf('Tabs', module)
  .add('default', () => (
    <Tabs>
      <Tab label="Details">
        <Card>Here we show the details</Card>
      </Tab>
      <Tab label="Extra info">
        <Card>And in this tab we show extra information.</Card>
      </Tab>
    </Tabs>
  ))
  .add('centered', () => (
    <Tabs centered>
      <Tab label="Details">
        <Card>Here we show the details</Card>
      </Tab>
      <Tab label="Extra info">
        <Card>And in this tab we show extra information.</Card>
      </Tab>
    </Tabs>
  ));
