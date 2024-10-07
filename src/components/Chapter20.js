import React from 'react';

const Chapter20 = () => {
  // Section 20.1: Using Flow to check prop types of stateless functional components
  const Greeting = ({ name }) => {
    return <div>Hello, {name}!</div>;
  };

  // Section 20.2: Using Flow to check prop types
  const UserProfile = ({ name, age }) => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Chapter 20: Using React with Flow</h1>
      <p>Note: Flow is a static type checker. In a real project, you would use Flow annotations.</p>
      <Greeting name="Flow User" />
      <UserProfile name="John Doe" age={30} />
    </div>
  );
};

export default Chapter20;