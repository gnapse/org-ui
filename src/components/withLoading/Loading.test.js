import React from 'react';
import { mount } from 'enzyme';
import { CircularProgress, LinearProgress } from 'material-ui/Progress';
import Loading from './Loading';

it('renders a circular progress indicator', () => {
  expect(mount(<Loading />)).toContainReact(<CircularProgress />);
});

describe('it allows to customize the className', () => {
  it('uses the className .loading by default', () => {
    expect(mount(<Loading />).find('div.loading').length).toEqual(1);
  });

  it('passes the className prop to the root level element', () => {
    const wrapper = mount(<Loading className="my-loader" />);
    expect(wrapper.find('div.my-loader').length).toEqual(1);
  });
});

describe('it allows to customize the component to use', () => {
  it('uses CircularProgress by default', () => {
    expect(mount(<Loading />)).toContainReact(<CircularProgress />);
  });

  it('uses a different component if specified', () => {
    const wrapper = mount(<Loading component={LinearProgress} />);
    expect(wrapper).toContainReact(<LinearProgress />);
    expect(wrapper).not.toContainReact(<CircularProgress />);
  });
});

it('passes any extra props to the progress component', () => {
  const wrapper = mount(<Loading size={66} />);
  expect(wrapper).toContainReact(<CircularProgress size={66} />);
});
