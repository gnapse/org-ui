import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    component: PropTypes.func,
    hide: PropTypes.func.isRequired,
  };

  render() {
    const { component, hide, ...props } = this.props;
    return component
      ? React.createElement(component, { ...props, hide })
      : null;
  }
}
