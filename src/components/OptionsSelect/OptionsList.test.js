import React from 'react';
import { mount } from 'enzyme';
import Checkbox from 'material-ui/Checkbox';
import Switch from 'material-ui/Switch';
import OptionsList from './OptionsList';

const options = [
  { id: '1', name: 'Los Angeles' },
  { id: '2', name: 'Atlanta' },
  { id: '3', name: 'San José' },
  { id: '4', name: 'Wroclaw' },
  { id: '5', name: 'Lima' },
];

function getItems(wrapper, propName) {
  const component = wrapper.props().ItemComponent;
  return wrapper.find(component).filterWhere(item => item.props()[propName]);
}

it('renders an item per option', () => {
  const wrapper = mount(<OptionsList options={options} />);
  expect(wrapper.find(Checkbox)).toHaveLength(5);
});

it('has all items unchecked by default', () => {
  const wrapper = mount(<OptionsList options={options} />);
  expect(getItems(wrapper, 'checked')).toHaveLength(0);
});

it('checks the items that are included in the value', () => {
  const wrapper = mount(<OptionsList options={options} value={['2', '5']} />);
  expect(getItems(wrapper, 'checked')).toHaveLength(2);
  expect(
    wrapper
      .find(Checkbox)
      .at(1)
      .props().checked
  ).toEqual(true);
  expect(
    wrapper
      .find(Checkbox)
      .at(4)
      .props().checked
  ).toEqual(true);
});

describe('item labels', () => {
  it('checks for some default attr names to use as default label', () => {
    const withOptions = attr =>
      mount(
        <OptionsList options={[{ id: '1', [attr]: attr.toUpperCase() }]} />
      );
    expect(withOptions('label').find('label')).toHaveText('LABEL');
    expect(withOptions('name').find('label')).toHaveText('NAME');
    expect(withOptions('title').find('label')).toHaveText('TITLE');
    expect(withOptions('displayName').find('label')).toHaveText('DISPLAYNAME');
  });

  it('allows to customize the label and other props of each item', () => {
    const getItemProps = ({ name }) => ({ label: name.toUpperCase() });
    const wrapper = mount(
      <OptionsList options={options} getItemProps={getItemProps} />
    );
    expect(wrapper.find('label').at(0)).toHaveText('LOS ANGELES');
  });
});

describe('onChange', () => {
  const setupTest = (initialValue, event) => {
    const onChange = jest.fn();
    const wrapper = mount(
      <OptionsList
        name="cities"
        options={options}
        onChange={onChange}
        value={initialValue}
      />
    );
    wrapper
      .find('input[type="checkbox"]')
      .at(3)
      .simulate('change', { target: event });
    return onChange.mock.calls[0][0];
  };

  it('adds new values when checked', () => {
    const onChangeEvent = setupTest(['1', '5'], { value: '4', checked: true });
    expect(onChangeEvent).toMatchObject({
      target: { name: 'cities', value: ['1', '4', '5'] },
    });
  });

  it('remove values when unchecked', () => {
    const onChangeEvent = setupTest(['1', '4', '5'], {
      value: '4',
      checked: false,
    });
    expect(onChangeEvent).toMatchObject({
      target: { name: 'cities', value: ['1', '5'] },
    });
  });
});

it('supports using a different component in place of checkboxes', () => {
  const wrapper = mount(
    <OptionsList options={options} ItemComponent={Switch} />
  );
  expect(wrapper.find(Checkbox)).toHaveLength(0);
  expect(wrapper.find(Switch)).toHaveLength(5);
});

it('disables all items if disabled or readonly', () => {
  const wrapper = props => mount(<OptionsList {...props} options={options} />);
  expect(getItems(wrapper({ disabled: true }), 'disabled')).toHaveLength(5);
  expect(getItems(wrapper({ disabled: false }), 'disabled')).toHaveLength(0);
  expect(getItems(wrapper({ readonly: true }), 'disabled')).toHaveLength(5);
  expect(getItems(wrapper({ readonly: false }), 'disabled')).toHaveLength(0);
});

describe('errors', () => {
  it('renders them if present', () => {
    const errors = ['Not cool', "Won't work"];
    const wrapper = mount(<OptionsList options={options} errors={errors} />);
    expect(wrapper.find('div.errors')).toHaveLength(1);
    expect(wrapper.find('div.errors')).toIncludeText('Not cool');
    expect(wrapper.find('div.errors')).toIncludeText("Won't work");
  });

  it('does not render the errors section if there are none', () => {
    const wrapper = mount(<OptionsList options={options} />);
    expect(wrapper.find('.errors')).toHaveLength(0);
  });
});
