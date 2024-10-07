import React from 'react';

const Chapter19 = () => {
  // Section 19.1: Simple React Component
  const SimpleComponent = () => <div>This is a simple React component</div>;

  // Section 19.5: HTML file to use react component
  const HtmlExample = () => (
    <pre>
      {`
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
    </script>
  </body>
</html>
      `}
    </pre>
  );

  // Section 19.6: Transpile and bundle javascript
  const BundleExample = () => (
    <div>
      <p>To transpile and bundle JavaScript, you typically use tools like Babel and Webpack.</p>
      <p>Your current project setup already includes these tools.</p>
    </div>
  );

  return (
    <div>
      <h1>Chapter 19: Setting Up React Environment</h1>
      <SimpleComponent />
      <h2>HTML Example:</h2>
      <HtmlExample />
      <BundleExample />
    </div>
  );
};

export default Chapter19;