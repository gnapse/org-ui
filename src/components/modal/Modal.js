import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    component: PropTypes.func,
    props: PropTypes.object,
    open: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
  };

  static defaultProps = {
    props: {},
  };

  render() {
    const { component, props, open, hide } = this.props;
    return component
      ? React.createElement(component, { ...props, open, hide })
      : null;
  }
}
