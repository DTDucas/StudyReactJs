import React, { useState } from 'react';

const Chapter11 = () => {
  const [message, setMessage] = useState('');

  const Parent = ({ onMessageChange }) => (
    <Child onButtonClick={() => onMessageChange('Hello from Child!')} />
  );

  const Child = ({ onButtonClick }) => (
    <button onClick={onButtonClick}>Send message to Parent</button>
  );

  return (
    <div>
      <h1>Chapter 11: Communicate Between Components</h1>
      <Parent onMessageChange={setMessage} />
      <p>{message}</p>
    </div>
  );
};

export default Chapter11;