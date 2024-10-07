import React from 'react';

const Chapter16 = () => {
  const StatelessComponent = ({ name }) => (
    <div>Hello, {name}! This is a stateless functional component.</div>
  );

  return (
    <div>
      <h1>Chapter 16: Stateless Functional Components</h1>
      <StatelessComponent name="User" />
    </div>
  );
};

export default Chapter16;