import React, { useState } from 'react';

const Chapter15 = () => {
  const [parentData, setParentData] = useState('');

  const Parent = () => (
    <div>
      <h2>Parent Component</h2>
      <Child onDataReceived={setParentData} />
      <p>Received from child: {parentData}</p>
    </div>
  );

  const Child = ({ onDataReceived }) => (
    <button onClick={() => onDataReceived('Data from child')}>
      Send data to parent
    </button>
  );

  return (
    <div>
      <h1>Chapter 15: Communication Between Components</h1>
      <Parent />
    </div>
  );
};

export default Chapter15;