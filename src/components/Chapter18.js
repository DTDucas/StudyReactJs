import React from 'react';

const Chapter18 = () => {
  const ServerRenderedComponent = ({ initialData }) => (
    <div>
      <h2>Server-Side Rendered Component</h2>
      <p>Initial data: {initialData}</p>
    </div>
  );

  return (
    <div>
      <h1>Chapter 18: Introduction to Server-Side Rendering</h1>
      <ServerRenderedComponent initialData="This would be rendered on the server" />
    </div>
  );
};

export default Chapter18;