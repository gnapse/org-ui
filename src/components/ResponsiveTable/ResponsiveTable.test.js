import React from 'react';
import { mount } from 'enzyme';
import ResponsiveTable from './ResponsiveTable';

const columns = [
  {
    key: 'name',
    header: 'Name',
    render: ({ name }) => <span className="size1">{name}</span>,
  },
  {
    key: 'jobTitle',
    header: 'Job title',
    className: 'job-title',
    hideResponsiveHeader: true,
  },
];

const data = [
  { id: '1', name: 'Walter White', jobTitle: 'Main cook' },
  { id: '2', name: 'Jesse Pinkman', jobTitle: 'Aid cook' },
  { id: '3', name: 'Mike Ehrmantraut', jobTitle: 'Hitman' },
];

it('renders a row per data item', () => {
  const wrapper = mount(<ResponsiveTable columns={columns} data={data} />);
  expect(wrapper.find('tbody tr').length).toEqual(data.length);
});

it('renders all item names in table cells', () => {
  const wrapper = mount(<ResponsiveTable columns={columns} data={data} />);
  expect(wrapper.find('tbody tr td span.size1').length).toEqual(data.length);
  data.forEach(({ name }) => {
    expect(wrapper).toContainReact(
      <td data-header="Name">
        <span className="size1">{name}</span>
      </td>
    );
  });
});

it('renders all item job titles in table cells', () => {
  const wrapper = mount(<ResponsiveTable columns={columns} data={data} />);
  expect(wrapper.find('tbody tr td.job-title').length).toEqual(data.length);
  data.forEach(({ jobTitle }) => {
    expect(wrapper).toContainReact(<td className="job-title">{jobTitle}</td>);
  });
});

it('renders column headers', () => {
  const wrapper = mount(<ResponsiveTable columns={columns} data={data} />);
  expect(wrapper.find('table thead tr th').length).toEqual(columns.length);
  columns.forEach(({ header }) => {
    expect(wrapper).toContainReact(<th>{header}</th>);
  });
});

it('renders non-sticky headers by default', () => {
  const wrapper = mount(<ResponsiveTable columns={columns} data={data} />);
  expect(wrapper.find('table.ResponsiveTable--sticky').length).toEqual(0);
});

describe('with stickyHeader=true', () => {
  it('renders sticky header', () => {
    const wrapper = mount(
      <ResponsiveTable columns={columns} data={data} stickyHeader />
    );
    expect(wrapper.find('table.ResponsiveTable--sticky').length).toEqual(1);
  });
});
