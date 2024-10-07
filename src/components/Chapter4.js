import React, { useState } from 'react';

const Chapter4 = () => {
  // Section 4.1: Basic State
  const BasicState = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };

  // Section 4.2: Common Antipattern
  const AntipatternExample = () => {
    const [count, setCount] = useState(0);
    const incrementCorrectly = () => {
      setCount(prevCount => prevCount + 1);
    };
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCorrectly}>Increment Correctly</button>
      </div>
    );
  };

  // Section 4.3: setState()
  class SetStateExample extends React.Component {
    state = { count: 0 };

    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };

    render() {
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }

  // Section 4.4: State, Events And Managed Controls
  const FormExample = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => setInputValue(e.target.value);

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You typed: {inputValue}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Chapter 4: State in React</h1>
      <BasicState />
      <AntipatternExample />
      <SetStateExample />
      <FormExample />
    </div>
  );
};

export default Chapter4;