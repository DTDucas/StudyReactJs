import React from 'react';

const Chapter28 = () => {
  // Section 28.1: Higher Order Component that checks for authentication
  const withAuth = (WrappedComponent) => {
    return class extends React.Component {
      render() {
        // In a real app, you would check for actual authentication
        const isAuthenticated = true;
        if (isAuthenticated) {
          return <WrappedComponent {...this.props} />;
        } else {
          return <div>Please log in to view this component.</div>;
        }
      }
    };
  };

  // Section 28.2: Simple Higher Order Component
  const withLogging = (WrappedComponent) => {
    return class extends React.Component {
      componentDidMount() {
        console.log('Component is mounted');
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };

  const SimpleComponent = () => <div>This is a simple component</div>;
  const EnhancedComponent = withLogging(withAuth(SimpleComponent));

  return (
    <div>
      <h1>Chapter 28: Higher Order Components</h1>
      <EnhancedComponent />
    </div>
  );
};

export default Chapter28;