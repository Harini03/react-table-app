import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*
 * Error Boundaries: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1 aria-level="1">Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.object
};
