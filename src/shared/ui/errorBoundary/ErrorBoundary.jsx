// src/shared/ErrorBoundary.jsx
import { Component } from 'react';

import Fallback from './Fallback';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback || <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

ErrorBoundary.Fallback = Fallback;

export default ErrorBoundary;
