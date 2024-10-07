import React from 'react';

const AppendixA = () => {
  return (
    <div>
      <h1>Appendix A: Installation</h1>
      <h2>Section A.1: Simple setup</h2>
      <pre>
        {`
npm init -y
npm install react react-dom
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server
        `}
      </pre>
      <h2>Section A.2: Using webpack-dev-server</h2>
      <p>Add this to your package.json scripts:</p>
      <pre>
        {`
"start": "webpack serve --mode development --open"
        `}
      </pre>
    </div>
  );
};

export default AppendixA;