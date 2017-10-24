import React from 'react';
import { mount } from 'enzyme';
import MuiTextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from './TextField';

it('renders a material-ui TextField', () => {
  expect(mount(<TextField />)).toContainReact(<MuiTextField />);
});

it('passes any props received to the material-ui TextField', () => {
  const props = { name: 'title', type: 'email', value: 'hello@example.com' };
  const wrapper = mount(<TextField {...props} />);
  expect(wrapper).toContainReact(<MuiTextField {...props} />);
});

it('renders all error messages inside a single FormHelperText', () => {
  const wrapper = mount(<TextField errors={['one', 'two']} />);
  expect(wrapper).toContainReact(<MuiTextField error helperText="one, two" />);
});

it('renders as a select if a list of options is given', () => {
  const wrapper = mount(<TextField value="one" options={['one', 'two']} />);
  expect(wrapper).toContainReact(
    <MuiTextField select value="one">
      <MenuItem key="one" value="one">
        one
      </MenuItem>
      <MenuItem key="two" value="two">
        two
      </MenuItem>
    </MuiTextField>
  );
});
