import React, { useState, useEffect } from 'react';

const Chapter14 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an AJAX call
    setTimeout(() => {
      setData({ message: 'Data fetched successfully' });
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Chapter 14: React AJAX call</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Chapter14;