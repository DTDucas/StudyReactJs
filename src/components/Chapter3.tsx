import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

const StatelessComponent: React.FC = () => {
  return <div>This is a stateless component</div>;
};

const SimpleComponent: React.FC = () => <div>Simple component</div>;

const Chapter3: React.FC = () => {
  return (
    <div>
      <h1>Chapter 3: Using ReactJS with TypeScript</h1>
      <Greeting name="TypeScript User" />
      <StatelessComponent />
      <SimpleComponent />
    </div>
  );
};

export default Chapter3;