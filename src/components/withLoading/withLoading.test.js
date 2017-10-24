import React from 'react';
import noop from 'lodash/noop';
import { mount } from 'enzyme';
import withLoading from './withLoading';
import Loading from './Loading';

const Component = ({ item }) => <div>{item.title}</div>;
const isDataLoaded = ({ item }) => item != null;
const Page = withLoading(isDataLoaded)(Component);
const item = { title: 'Hello World' };

it('specifies the wrapper in the display name', () => {
  expect(Page.displayName).toEqual('WithLoading(Component)');
});

describe('when item is loaded', () => {
  it('renders the wrapped component', () => {
    const wrapper = mount(<Page item={item} loadData={noop} />);
    expect(wrapper).toContainReact(<Component item={item} />);
  });

  it('does not render a progress indicator', () => {
    const wrapper = mount(<Page item={item} loadData={noop} />);
    expect(wrapper).not.toContainReact(<Loading />);
  });

  it('does not call loadData', () => {
    const loadData = jest.fn();
    mount(<Page item={item} loadData={loadData} />);
    expect(loadData).not.toHaveBeenCalled();
  });
});

describe('when item is not loaded', () => {
  it('does not render the wrapped component', () => {
    const wrapper = mount(<Page loadData={noop} />);
    expect(wrapper).not.toContainReact(<Component item={item} />);
  });

  it('renders a progress indicator', () => {
    const wrapper = mount(<Page loadData={noop} />);
    expect(wrapper).toContainReact(<Loading />);
  });

  it('calls loadData', () => {
    const loadData = jest.fn();
    mount(<Page loadData={loadData} />);
    expect(loadData).toHaveBeenCalled();
  });
});

describe('with custom parameters', () => {
  it('passes extra props to the progress indicator', () => {
    const Page = withLoading(isDataLoaded, { size: 60 })(Component);
    const wrapper = mount(<Page loadData={noop} />);
    expect(wrapper).toContainReact(<Loading size={60} />);
  });

  it('allows to customize the loadData callback name', () => {
    const props = { dataLoaderProp: 'fetchInfo' };
    const Page = withLoading(isDataLoaded, props)(Component);
    const loadData = jest.fn();
    mount(<Page fetchInfo={loadData} />);
    expect(loadData).toHaveBeenCalled();
  });
});

describe('when given a prop name instead of a isDataLoaded function', () => {
  const Page = withLoading('item')(Component);

  it('uses that prop value to determine if data is loaded', () => {
    const loadData = jest.fn();
    // With data loaded
    const wrapperLoaded = mount(<Page item={item} loadData={loadData} />);
    expect(wrapperLoaded).toContainReact(<Component item={item} />);
    expect(loadData).not.toHaveBeenCalled();
    // With no data loaded
    const wrapperNotLoaded = mount(<Page loadData={loadData} />);
    expect(wrapperNotLoaded).not.toContainReact(<Component item={item} />);
    expect(loadData).toHaveBeenCalled();
  });
});
