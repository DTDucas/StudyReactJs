import React, { useState } from 'react';

const Chapter22 = () => {
  // Section 22.1: Controlled Components
  const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitted value: ${inputValue}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      <h1>Chapter 22: React Forms</h1>
      <h2>Controlled Component Example:</h2>
      <ControlledForm />
    </div>
  );
};

export default Chapter22;