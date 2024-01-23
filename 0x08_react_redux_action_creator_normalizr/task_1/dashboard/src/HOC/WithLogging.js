import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return WithLogging;
}

export default WithLogging;
