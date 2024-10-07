import React from 'react';

const Chapter21 = () => {
  // Section 21.1: Props in JSX
  const Greeting = ({ name, age }) => (
    <div>
      Hello, {name}! You are {age} years old.
    </div>
  );

  // Section 21.2: Children in JSX
  const Parent = ({ children }) => (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );

  const Child = () => <div>This is a child component</div>;

  return (
    <div>
      <h1>Chapter 21: JSX</h1>
      <Greeting name="JSX User" age={25} />
      <Parent>
        <Child />
        <Child />
      </Parent>
    </div>
  );
};

export default Chapter21;