import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

function getDisplayName({ displayName, name }) {
  return displayName || name || 'Component';
}

/**
 * Higher-Order Component that guards a wrapped component in the case the data
 * it needs to render is not yet loaded, and renders a loading indicator
 * instead.
 *
 * @param {Function} isDataLoaded a function that returns true if the data
 *   needed by the component is already loaded, or false otherwise.
 * @param {String} [dataLoaderProp] the name of the prop function that triggers
 *   loading the necessary data when this is not yet loaded.
 * @param {Object} [loadingProps] optional additional props to pass to the
 *   loading indicator component when this needs to be rendered.
 * @returns a new component with the described functionality
 */
export default (
  isDataLoaded = ({ data }) => data != null,
  { dataLoaderProp = 'loadData', ...loadingProps } = {}
) => WrappedComponent => {
  const displayName = getDisplayName(WrappedComponent);

  const propTypes = {
    [dataLoaderProp]: PropTypes.func,
  };

  if (typeof isDataLoaded === 'string') {
    const dataPropName = isDataLoaded;
    propTypes[dataPropName] = PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]);
    isDataLoaded = ({ [dataPropName]: data }) => data != null;
  }

  class WithPageLoading extends Component {
    static propTypes = propTypes;

    componentDidMount() {
      if (!isDataLoaded(this.props)) {
        const loadData = this.props[dataLoaderProp];
        if (!loadData) {
          console.warn(`[${displayName}] data load callback was not provided`);
          return;
        }
        loadData();
      }
    }

    render() {
      if (!isDataLoaded(this.props)) {
        return <Loading {...loadingProps} />;
      }
      const { [dataLoaderProp]: _, ...props } = this.props; // eslint-disable-line no-unused-vars
      return <WrappedComponent {...props} />;
    }
  }

  WithPageLoading.displayName = `WithLoading(${displayName})`;
  return WithPageLoading;
};
