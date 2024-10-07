import React from 'react';

const Chapter13 = () => {
  // Using createClass (deprecated, shown for historical context)
  const ComponentUsingCreateClass = React.createClass({
    render: function() {
      return <div>Component using createClass</div>;
    }
  });

  // Using ES6 class
  class ComponentUsingClass extends React.Component {
    render() {
      return <div>Component using ES6 class</div>;
    }
  }

  return (
    <div>
      <h1>Chapter 13: React.createClass vs extends React.Component</h1>
      <ComponentUsingCreateClass />
      <ComponentUsingClass />
    </div>
  );
};

export default Chapter13;