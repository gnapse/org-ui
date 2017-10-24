import React, { Component } from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import toPairs from 'lodash/toPairs';
import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel, FormHelperText } from 'material-ui/Form';
import './styles.css';

const fullWidth = {
  item: true,
  lg: 12,
  sm: 12,
  xs: 12,
};

export default class OptionsList extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    onChange: PropTypes.func,
    ItemComponent: PropTypes.func,
    groupProps: PropTypes.shape(Grid.propTypes),
    gridProps: PropTypes.shape(Grid.propTypes),
    gridItemProps: PropTypes.shape(Grid.propTypes),
    getLabel: PropTypes.func,
    groupBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    sortOptionsBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    value: [],
    disabled: false,
    readonly: false,
    ItemComponent: Checkbox,
    gridProps: { spacing: 8 },
    gridItemProps: { lg: 4, sm: 6, xs: 12 },
    getLabel: ({ name, title, label, displayName }) =>
      displayName || label || name || title,
  };

  onChange = ({ target: { value } }, checked) => {
    const { name, value: currentValue, onChange } = this.props;
    const newValue = checked
      ? currentValue.concat(value).sort()
      : currentValue.filter(v => v !== value);
    if (onChange) {
      onChange({ target: { name, value: newValue } });
    }
  };

  renderItem = item => {
    const {
      disabled,
      readonly,
      name,
      value,
      getLabel,
      ItemComponent,
      gridItemProps,
    } = this.props;
    return (
      <Grid {...gridItemProps} item key={item.id}>
        <FormControlLabel
          label={getLabel(item)}
          control={
            <ItemComponent
              value={item.id}
              name={name}
              disabled={disabled || readonly}
              checked={value.includes(item.id)}
              onChange={this.onChange}
            />
          }
        />
      </Grid>
    );
  };

  renderErrors() {
    const { errors, disabled } = this.props;
    return (
      <Grid className="errors" {...fullWidth}>
        {errors.map((error, index) => (
          <FormHelperText error key={index} disabled={disabled}>
            {error}
          </FormHelperText>
        ))}
      </Grid>
    );
  }

  renderGroupTitle(title, options) {
    const { value } = this.props;
    const selectedCount = options.filter(opt => value.includes(opt.id)).length;
    return (
      <Grid {...fullWidth}>
        {selectedCount ? (
          <h3>
            {title} ({selectedCount})
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
      </Grid>
    );
  }

  renderGroup = ([title, options]) => {
    const { groupProps, sortOptionsBy } = this.props;
    const opts = sortOptionsBy ? sortBy(options, sortOptionsBy) : options;
    return (
      <Grid
        key={title || 'unique'}
        className="OptionsList--Group"
        {...fullWidth}
        {...groupProps}
        container
      >
        {title && this.renderGroupTitle(title, options)}
        {opts.map(this.renderItem)}
      </Grid>
    );
  };

  render() {
    const { options, errors, gridProps } = this.props;
    const hasErrors = errors && errors.length;
    const groups = this.props.groupBy
      ? toPairs(groupBy(options, this.props.groupBy))
      : [[null, options]];
    return (
      <Grid container {...gridProps}>
        {hasErrors && this.renderErrors()}
        {groups.map(this.renderGroup)}
      </Grid>
    );
  }
}
