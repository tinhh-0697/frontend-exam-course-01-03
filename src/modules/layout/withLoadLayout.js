import React from 'react';

export default (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};
