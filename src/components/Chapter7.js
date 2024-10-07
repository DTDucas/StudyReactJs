import React, { useState } from 'react';

const Chapter7 = () => {
  // Section 7.1: Controlled Components
  const ControlledComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => setInputValue(e.target.value);

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>You typed: {inputValue}</p>
      </div>
    );
  };

  // Section 7.2: Uncontrolled Components
  const UncontrolledComponent = () => {
    const inputRef = React.createRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Input value:', inputRef.current.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      <h1>Chapter 7: Forms and User Input</h1>
      <h2>Controlled Component</h2>
      <ControlledComponent />
      <h2>Uncontrolled Component</h2>
      <UncontrolledComponent />
    </div>
  );
};

export default Chapter7;