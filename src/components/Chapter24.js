import React, { useState, useEffect } from 'react';

const Chapter24 = () => {
  // Section 24.1: Data Flow
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating data fetch
    setTimeout(() => {
      setData({ message: 'Data loaded' });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Chapter 24: Using ReactJS in Flux way</h1>
      <p>Data: {data ? data.message : 'Loading...'}</p>
      <p>Note: This is a simplified example. In a real Flux architecture, you would use actions and stores.</p>
    </div>
  );
};

export default Chapter24;