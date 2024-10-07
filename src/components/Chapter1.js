import React from 'react';

const Chapter1 = () => {
  // Section 1.3: Hello World with Stateless Functions
  const HelloWorld = () => <h2>Hello, World!</h2>;

  // Section 1.4: Absolute Basics of Creating Reusable Components
  const Button = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
  );

  // Section 1.6: Hello World
  const SimpleHelloWorld = () => <h2>Hello, World! (Simple)</h2>;

  // Section 1.7: Hello World Component
  const HelloWorldWithName = ({ name }) => <h2>Hello, {name}!</h2>;

  return (
    <div>
      <h1>Chapter 1: Getting started with React</h1>
      <HelloWorld />
      <Button text="Click me" onClick={() => alert('Button clicked!')} />
      <SimpleHelloWorld />
      <HelloWorldWithName name="React Learner" />
    </div>
  );
};

export default Chapter1;