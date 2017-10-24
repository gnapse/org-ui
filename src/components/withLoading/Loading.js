import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

export default function Loading({
  className = 'loading',
  component = CircularProgress,
  ...props
}) {
  return (
    <div className={className}>{React.createElement(component, props)}</div>
  );
}
