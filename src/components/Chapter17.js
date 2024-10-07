import React, { useState, useEffect } from 'react';

const Chapter17 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    // Simulating some operation
    for (let i = 0; i < 1000000; i++) {}
    const end = performance.now();
    console.log(`Operation took ${end - start} milliseconds.`);
  }, [count]);

  return (
    <div>
      <h1>Chapter 17: Performance</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Check console for performance measurement</p>
    </div>
  );
};

export default Chapter17;