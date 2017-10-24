import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from 'material-ui/Switch';
import OptionsSelect from '../components/OptionsSelect';

const countries = [
  { id: '1', name: 'USA', continent: 'North America', language: 'English' },
  { id: '2', name: 'Chile', continent: 'South America', language: 'Spanish' },
  { id: '3', name: 'Perú', continent: 'South America', language: 'Spanish' },
  { id: '4', name: 'Cuba', continent: 'Central America', language: 'Spanish' },
  {
    id: '5',
    name: 'Costa Rica',
    continent: 'Central America',
    language: 'Spanish',
  },
  { id: '6', name: 'Spain', continent: 'Europe', language: 'Spanish' },
  { id: '7', name: 'England', continent: 'Europe', language: 'English' },
  { id: '8', name: 'Scotland', continent: 'Europe', language: 'English' },
  { id: '9', name: 'Poland', continent: 'Europe', language: 'Polish' },
  { id: '10', name: 'Germany', continent: 'Europe', language: 'German' },
  { id: '11', name: 'South Korea', continent: 'Asia', language: 'Korean' },
  {
    id: '12',
    name: 'South Africa',
    continent: 'Africa',
    language: 'Afrikaans',
  },
  { id: '13', name: 'Egypt', continent: 'Africa', language: 'Arabic' },
  { id: '14', name: 'Nigeria', continent: 'Africa', language: 'English' },
  { id: '15', name: 'Saudi Arabia', continent: 'Asia', language: 'Arabic' },
  {
    id: '16',
    name: 'New Zealand',
    continent: 'Australia & Oceania',
    language: 'English',
  },
  {
    id: '17',
    name: 'Australia',
    continent: 'Australia & Oceania',
    language: 'English',
  },
];

storiesOf('OptionsSelect', module)
  .add('basic example', () => (
    <OptionsSelect label="Select country" options={countries} />
  ))
  .add('with grouped options', () => (
    <OptionsSelect
      label="Select country"
      options={countries}
      groupBy="continent"
    />
  ))
  .add('with different check component', () => (
    <OptionsSelect
      label="Select country"
      options={countries}
      groupBy="continent"
      ItemComponent={Switch}
    />
  ))
  .add('with errors', () => (
    <OptionsSelect
      label="Select country"
      options={countries}
      groupBy="continent"
      errors={[
        'You must select at least one item',
        'Your selection must include a spanish-speaking country',
      ]}
    />
  ))
  .add('with custom item labels', () => (
    <OptionsSelect
      label="Select country"
      options={countries}
      groupBy="language"
      getLabel={({ name, continent }) => `${name}, ${continent}`}
    />
  ))
  .add('sorting items', () => (
    <OptionsSelect
      label="Select country (items sorted by language within each section)"
      options={countries}
      groupBy="continent"
      sortOptionsBy="language"
      getLabel={({ name, language }) => `${name} (${language})`}
    />
  ))
  .add('disabled', () => (
    <OptionsSelect
      disabled
      label="Select country"
      options={countries}
      groupBy="continent"
    />
  ))
  .add('customizing layout', () => (
    <OptionsSelect
      label="Select country (items right aligned and fit more per line)"
      options={countries}
      groupBy="continent"
      groupProps={{ justify: 'flex-end' }}
      gridItemProps={{ lg: 3, sm: 3, xs: 3 }}
    />
  ));
