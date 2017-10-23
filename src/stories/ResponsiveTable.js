import React from 'react';
import { storiesOf } from '@storybook/react';
import ResponsiveTable from '../components/ResponsiveTable';

const columns = [
  {
    key: 'employee',
    header: 'Employee',
  },
  {
    key: 'department',
    header: 'Department',
  },
  {
    key: 'salary',
    header: 'Salary',
    className: 'text-right',
  },
];

const data = [
  { employee: 'Maya Angelou', department: 'Finance', salary: 300000 },
  { employee: 'William B. Yeats', department: 'Insurance', salary: 250000 },
  { employee: 'Maggie Anderson', department: 'Acquisitions', salary: 225000 },
  { employee: 'Margaret Atwood', department: 'Headquarters', salary: 275000 },
  { employee: 'Richard Aldington', department: 'HR', salary: 200000 },
  { employee: 'Matthew Arnold', department: 'IT', salary: 300000 },
];

storiesOf('ResponsiveTable', module)
  .add('still loading, without data', () => (
    <ResponsiveTable columns={columns} />
  ))
  .add('with some data', () => (
    <ResponsiveTable columns={columns} data={data} />
  ));
