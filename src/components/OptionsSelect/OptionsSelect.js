import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialCard from '../MaterialCard';
import withLoading from '../withLoading';
import OptionsList from './OptionsList';

const LoadingOptionsList = withLoading('options')(OptionsList);

export default class OptionsSelect extends Component {
  static propTypes = {
    ...OptionsList.propTypes,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
    loadData: PropTypes.func,
  };

  static defaultProps = {
    value: [],
    disabled: false,
  };

  render() {
    const { label, ...props } = this.props;
    return (
      <MaterialCard header={label}>
        <LoadingOptionsList {...props} />
      </MaterialCard>
    );
  }
}
