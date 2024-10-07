import React, { useEffect, useRef } from 'react';

const Chapter9 = () => {
  const jqueryExampleRef = useRef(null);

  useEffect(() => {
    // Simulating jQuery usage (not actually using jQuery here)
    if (jqueryExampleRef.current) {
      jqueryExampleRef.current.style.color = 'blue';
    }
  }, []);

  return (
    <div>
      <h1>Chapter 9: Using ReactJS with jQuery</h1>
      <p ref={jqueryExampleRef}>This text color is changed using a jQuery-like approach</p>
    </div>
  );
};

export default Chapter9;