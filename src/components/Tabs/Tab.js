import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
  static propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
