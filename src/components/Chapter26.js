import React from 'react';

const Chapter26 = () => {
  // Section 26.1: Basic Example
  const ListWithKeys = () => {
    const items = ['Apple', 'Banana', 'Cherry'];
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Chapter 26: How and why to use keys in React</h1>
      <ListWithKeys />
      <p>Keys help React identify which items have changed, been added, or been removed in lists.</p>
    </div>
  );
};

export default Chapter26;