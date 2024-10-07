import React from 'react';

const Chapter27 = () => {
  // Section 27.1: Using the id of an element
  const ListWithIdKeys = () => {
    const items = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' }
    ];
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  };

  // Section 27.2: Using the array index
  const ListWithIndexKeys = () => {
    const items = ['Dog', 'Cat', 'Fish'];
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
      <h1>Chapter 27: Keys in React</h1>
      <h2>Using ID as key:</h2>
      <ListWithIdKeys />
      <h2>Using index as key (not recommended for dynamic lists):</h2>
      <ListWithIndexKeys />
    </div>
  );
};

export default Chapter27;