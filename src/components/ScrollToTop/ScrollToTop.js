import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollToTop extends Component {
  static propTypes = {
    onMount: PropTypes.bool,
    children: PropTypes.element,
  };

  static defaultProps = {
    onMount: false,
  };

  componentDidMount() {
    if (this.props.onMount) {
      this.scrollToTop();
    }
  }

  componentDidUpdate({ location: newLocation }) {
    const { onMount, location } = this.props;
    if (!onMount && location !== newLocation) {
      this.scrollToTop();
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children || null;
  }
}
