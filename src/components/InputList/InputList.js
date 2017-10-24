import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormHelperText } from 'material-ui/Form';
import List, { ListItem, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import isNil from 'lodash/isNil';

export default class InputList extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    onChange: PropTypes.func,
    maxListSize: PropTypes.number,
  };

  static defaultProps = {
    value: [],
    type: 'text',
    disabled: false,
    required: false,
    readonly: false,
  };

  constructor(props) {
    super(props);
    const isEmpty = !props.value || props.value.length === 0;
    this.state = {
      value: props.required && isEmpty ? [''] : props.value,
    };
  }

  onItemChange = index => ({ target }) => {
    const itemValue = target.value;
    const newValue = this.state.value.map(
      (v, i) => (i === index ? itemValue : v)
    );
    this.onChange(newValue);
  };

  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      const { name } = this.props;
      const newValue = value.filter(item => item.length > 0);
      this.props.onChange({ target: { name, value: newValue } });
    }
  };

  onDelete = index => () => {
    this.removeItem(index);
  };

  onBlur = () => {
    let newValue = this.state.value.filter(item => item.trim().length > 0);
    if (newValue.length === 0 && this.props.required) {
      newValue = [''];
    }
    this.onChange(newValue);
  };

  focusLast = () => {
    const inputList = ReactDOM.findDOMNode(this).querySelectorAll(
      `input[type=${this.props.type}]`
    );
    if (inputList.length > 0) {
      const lastInput = inputList[inputList.length - 1];
      lastInput.select();
    }
  };

  addItem = () => {
    const newValue = this.state.value.concat('');
    this.onChange(newValue);
    setTimeout(this.focusLast, 100);
  };

  removeItem = index => {
    const newValue = this.state.value.filter((_, i) => i !== index);
    this.onChange(newValue);
  };

  renderTextItem = (item, index) =>
    item && (
      <ListItem className="InputList-item" key={index}>
        {item}
      </ListItem>
    );

  renderInputItem = (item, index) => {
    const { type, required, disabled, readonly } = this.props;
    const canDelete = !disabled && (!required || this.state.value.length > 1);
    return (
      <ListItem className="InputList-item" key={index}>
        <Input
          fullWidth
          value={item}
          type={type}
          disabled={disabled || readonly}
          onChange={this.onItemChange(index)}
          onBlur={this.onBlur}
        />
        {!readonly && (
          <ListItemSecondaryAction className="InputList-remove">
            <IconButton disabled={!canDelete} onClick={this.onDelete(index)}>
              <i className="material-icons">close</i>
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    );
  };

  render() {
    const {
      label,
      disabled,
      readonly,
      required,
      errors,
      maxListSize,
    } = this.props;
    const { value } = this.state;
    const canAdd =
      !disabled && (isNil(maxListSize) || value.length < maxListSize);
    const renderItem = readonly ? this.renderTextItem : this.renderInputItem;
    const formControlProps = { required, disabled, error: !!errors };
    return (
      <div className="InputList">
        {label && <InputLabel {...formControlProps}>{label}</InputLabel>}
        {(errors || []).map((error, index) => (
          <FormHelperText key={index} {...formControlProps}>
            {error}
          </FormHelperText>
        ))}
        <List>
          {value.map(renderItem)}
          {!readonly && (
            <ListItem className="InputList-add">
              <IconButton disabled={!canAdd} onClick={this.addItem}>
                <i className="material-icons">add</i>
              </IconButton>
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}
