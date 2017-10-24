import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';

function getErrorProps(errors) {
  const helperText = (errors || []).join(', ');
  return helperText.length > 0 ? { error: true, helperText } : null;
}

export default class TextField extends Component {
  static propTypes = {
    ...MuiTextField.propTypes,
    options: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const { errors, options, ...extraProps } = this.props;
    const props = { ...extraProps, ...getErrorProps(errors) };
    if (!options || !options.length) {
      return <MuiTextField {...props} />;
    }
    return (
      <MuiTextField {...props} select>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MuiTextField>
    );
  }
}
