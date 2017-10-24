import React from 'react';
import { mount } from 'enzyme';
import InputList from './InputList';

import { FormHelperText } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import { ListItem } from 'material-ui/List';

const countDisabled = nodes =>
  nodes.filterWhere(input => input.prop('disabled')).length;

function expectDisabledCount(wrapper, selector, count) {
  expect(countDisabled(wrapper(true).find(selector))).toEqual(count);
  expect(countDisabled(wrapper(false).find(selector))).toEqual(0);
}

it('renders an input element per value', () => {
  const wrapper = mount(<InputList value={['Hello', 'World']} />);
  expect(wrapper.find('input[type="text"]').length).toEqual(2);
});

it('allows to specify the type of input field to use', () => {
  const wrapper = mount(<InputList type="number" value={['1', '2']} />);
  expect(wrapper.find('input[type="text"]').length).toEqual(0);
  expect(wrapper.find('input[type="number"]').length).toEqual(2);
});

it('renders the label if given', () => {
  const props = { required: false, disabled: false, error: false };
  const wrapper = mount(<InputList label="Names" />);
  expect(wrapper).toContainReact(<InputLabel {...props}>Names</InputLabel>);
  expect(wrapper.find('label').length).toEqual(1);
  expect(mount(<InputList />).find('label').length).toEqual(0);
});

it('renders an error list when there are errors', () => {
  const props = { required: false, disabled: false, error: true };
  const wrapper = mount(
    <InputList errors={['Name cannot be blank', 'Name is too short']} />
  );
  expect(wrapper).toContainReact(
    <FormHelperText {...props}>Name cannot be blank</FormHelperText>
  );
  expect(wrapper).toContainReact(
    <FormHelperText {...props}>Name is too short</FormHelperText>
  );
});

it('renders an empty list if no value is given', () => {
  const wrapper = mount(<InputList />);
  expect(wrapper.find('input').length).toEqual(0);
});

it('removes empty items from the values given to onChange', () => {
  const onChange = jest.fn(() => {});
  const wrapper = mount(
    <InputList value={['Hello', 'World']} onChange={onChange} />
  );
  wrapper.find('.InputList-add button').simulate('click');
  expect(wrapper.find('input').length).toEqual(3);
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World'] },
  });
  wrapper
    .find('.InputList-item input')
    .last()
    .simulate('change', { target: { value: '!' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World', '!'] },
  });
  wrapper
    .find('.InputList-item input')
    .first()
    .simulate('change', { target: { value: '' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['World', '!'] },
  });
});

it('allows to add new items to the list', () => {
  const onChange = jest.fn(() => {});
  const wrapper = mount(
    <InputList value={['Hello', 'World']} onChange={onChange} />
  );
  wrapper.find('.InputList-add button').simulate('click');
  expect(wrapper.find('input').length).toEqual(3);
});

it('allows to remove items from the list', () => {
  const onChange = jest.fn(() => {});
  const wrapper = mount(
    <InputList value={['Hello', 'World']} onChange={onChange} />
  );
  wrapper
    .find('.InputList-remove button')
    .first()
    .simulate('click');
  expect(wrapper.find('input').length).toEqual(1);
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['World'] },
  });
});

it('updates the value when typing in some of the input fields', () => {
  const onChange = jest.fn(() => {});
  const wrapper = mount(
    <InputList value={['Hello', 'World']} onChange={onChange} />
  );
  wrapper
    .find('.InputList-item input')
    .last()
    .simulate('change', { target: { value: 'World!' } });
  expect(onChange).toHaveBeenCalledWith({
    target: { value: ['Hello', 'World!'] },
  });
});

describe('on input blur', () => {
  it('removes all empty values', () => {
    const value = ['Hello', '  ', 'Cruel', '', 'World'];
    const onChange = jest.fn(() => {});
    const wrapper = mount(<InputList value={value} onChange={onChange} />);
    expect(wrapper.find('input').length).toEqual(5);
    wrapper
      .find('.InputList-item input')
      .last()
      .simulate('blur');
    expect(wrapper.find('input').length).toEqual(3);
    expect(onChange).toHaveBeenCalledWith({
      target: { value: ['Hello', 'Cruel', 'World'] },
    });
  });

  it('leaves the list of inputs empty if necessary', () => {
    const onChange = jest.fn(() => {});
    const wrapper = mount(<InputList value={['', ' ']} onChange={onChange} />);
    expect(wrapper.find('input').length).toEqual(2);
    wrapper
      .find('.InputList-item input')
      .last()
      .simulate('blur');
    expect(wrapper.find('input').length).toEqual(0);
    expect(onChange).toHaveBeenCalledWith({ target: { value: [] } });
  });

  it('leaves at least a single input field if required', () => {
    const onChange = jest.fn(() => {});
    const wrapper = mount(
      <InputList required value={['', ' ']} onChange={onChange} />
    );
    expect(wrapper.find('input').length).toEqual(2);
    wrapper
      .find('.InputList-item input')
      .last()
      .simulate('blur');
    expect(wrapper.find('input').length).toEqual(1);
  });
});

describe('with required=true', () => {
  it('renders a single input field even if value is empty', () => {
    const wrapper = mount(<InputList required />);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('does not allow to remove a single remaining item', () => {
    const wrapper = required =>
      mount(<InputList required={required} value={['Single']} />);
    expectDisabledCount(wrapper, '.InputList-remove button', 1);
  });
});

describe('with readonly=true', () => {
  it('renders items as regular text instead of input fields', () => {
    const wrapper = mount(<InputList readonly value={['Hello', 'World']} />);
    expect(wrapper.find('input').length).toEqual(0);
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(wrapper).toContainReact(
      <ListItem className="InputList-item">Hello</ListItem>
    );
    expect(wrapper).toContainReact(
      <ListItem className="InputList-item">World</ListItem>
    );
  });

  it('does not render the button that adds new items', () => {
    const wrapper = mount(<InputList readonly value={['Hello', 'World']} />);
    expect(wrapper.find('.InputList-add button').length).toEqual(0);
  });

  it('does not render the buttons that remove existing items', () => {
    const wrapper = mount(<InputList readonly value={['Hello', 'World']} />);
    expect(wrapper.find('.InputList-remove button').length).toEqual(0);
  });

  it('does not render empty items', () => {
    const wrapper = mount(
      <InputList readonly value={['Hello', '', 'World']} />
    );
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(wrapper).not.toContainReact(<ListItem className="InputList-item" />);
    expect(wrapper).toContainReact(
      <ListItem className="InputList-item">Hello</ListItem>
    );
    expect(wrapper).toContainReact(
      <ListItem className="InputList-item">World</ListItem>
    );
  });
});

describe('with disabled=true', () => {
  const wrapper = disabled =>
    mount(<InputList disabled={disabled} value={['Hello', 'World']} />);

  it('marks all input fields as disabled', () => {
    expectDisabledCount(wrapper, 'input', 2);
  });

  it('disables the button that add new items', () => {
    expectDisabledCount(wrapper, '.InputList-add button', 1);
  });

  it('disables the buttons that remove existing items', () => {
    expectDisabledCount(wrapper, '.InputList-remove button', 2);
  });
});

describe('with a given maxListSize', () => {
  const wrapper = size =>
    mount(<InputList maxListSize={size} value={['Hello', 'World']} />);

  it('does not allow to grow the list size beyond the given maxListSize', () => {
    expect(
      wrapper(1)
        .find('.InputList-add button')
        .prop('disabled')
    ).toBeTruthy();
    expect(
      wrapper(2)
        .find('.InputList-add button')
        .prop('disabled')
    ).toBeTruthy();
    expect(
      wrapper(3)
        .find('.InputList-add button')
        .prop('disabled')
    ).toBeFalsy();
    expect(
      wrapper()
        .find('.InputList-add button')
        .prop('disabled')
    ).toBeFalsy();
  });
});

describe('with a given input name', () => {
  it('includes the name in the onChange event', () => {
    const onChange = jest.fn(() => {});
    const wrapper = mount(
      <InputList name="items" value={['']} onChange={onChange} />
    );
    wrapper
      .find('.InputList-item input')
      .first()
      .simulate('change', { target: { value: 'Hello World!' } });
    expect(onChange).toHaveBeenCalledWith({
      target: {
        name: 'items',
        value: ['Hello World!'],
      },
    });
  });
});
