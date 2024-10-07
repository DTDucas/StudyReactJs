import React from 'react';

const Chapter10 = () => {
  const ExampleRouter = ({ path }) => {
    switch (path) {
      case '/':
        return <h2>Home Page</h2>;
      case '/about':
        return <h2>About Page</h2>;
      default:
        return <h2>404 Not Found</h2>;
    }
  };

  return (
    <div>
      <h1>Chapter 10: React Routing</h1>
      <ExampleRouter path="/" />
      <ExampleRouter path="/about" />
    </div>
  );
};

export default Chapter10;