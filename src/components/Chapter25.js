import React from 'react';

const Chapter25 = () => {
  return (
    <div>
      <h1>Chapter 25: React, Webpack & TypeScript installation</h1>
      <p>Your project is already set up with React and Webpack. To add TypeScript:</p>
      <ol>
        <li>Install TypeScript: npm install --save-dev typescript @types/react @types/react-dom</li>
        <li>Rename your .js files to .tsx</li>
        <li>Update webpack.config.js to handle .tsx files</li>
        <li>Create a tsconfig.json file</li>
      </ol>
    </div>
  );
};

export default Chapter25;