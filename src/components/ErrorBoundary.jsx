import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: 'white', color: 'red', zIndex: 999999, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'auto' }}>
          <h2>Something went wrong (React Error).</h2>
          <p>Please take a screenshot of this error and show it to the developer.</p>
          <details style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '10px', background: '#f8f8f8' }}>
            <summary>Error Details</summary>
            <strong>{this.state.error && this.state.error.toString()}</strong>
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
