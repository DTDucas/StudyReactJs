import React, { useState } from 'react';

const Chapter2 = () => {
  // Section 2.1: Creating Components
  const SimpleComponent = () => <div>This is a simple component</div>;

  // Section 2.2: Basic Component
  class BasicComponent extends React.Component {
    render() {
      return <div>This is a basic class component</div>;
    }
  }

  // Section 2.3: Nesting Components
  const ChildComponent = () => <div>I'm a child component</div>;
  const ParentComponent = () => (
    <div>
      I'm a parent component
      <ChildComponent />
    </div>
  );

  // Section 2.4: Props
  const Greeting = ({ name }) => <h3>Hello, {name}!</h3>;

  // Section 2.5: Component states - Dynamic user-interface
  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };

  // Section 2.6: Variations of Stateless Functional Components
  const ArrowFunctionComponent = () => <div>Arrow Function Component</div>;
  function RegularFunctionComponent() {
    return <div>Regular Function Component</div>;
  }

  // Section 2.7: setState pitfalls
  const SetStatePitfalls = () => {
    const [value, setValue] = useState(0);
    const incrementCorrectly = () => {
      setValue(prevValue => prevValue + 1);
    };
    return (
      <div>
        <p>Value: {value}</p>
        <button onClick={incrementCorrectly}>Increment Correctly</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Chapter 2: Components</h1>
      <SimpleComponent />
      <BasicComponent />
      <ParentComponent />
      <Greeting name="Props Example" />
      <Counter />
      <ArrowFunctionComponent />
      <RegularFunctionComponent />
      <SetStatePitfalls />
    </div>
  );
};

export default Chapter2;