import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error('Error caught by Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            margin: '0 auto',
            opacity: 0.7,
            fontSize: 12,
            fontWeight: 'bold',
          }}
        >
          <p>编辑模式暂不可用</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
