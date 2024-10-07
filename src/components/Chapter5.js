import React from 'react';

const Chapter5 = () => {
  // Section 5.1: Introduction
  const IntroExample = ({ name }) => <div>Hello, {name}!</div>;

  // Section 5.2: Default props
  const DefaultPropsExample = ({ greeting = "Hello", name = "Guest" }) => (
    <div>{greeting}, {name}!</div>
  );

  // Section 5.3: PropTypes
  const PropTypesExample = ({ name, age }) => (
    <div>{name} is {age} years old</div>
  );
  PropTypesExample.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  };

  // Section 5.4: Passing down props using spread operator
  const ChildComponent = ({ name, age }) => (
    <div>{name} is {age} years old</div>
  );
  const ParentComponent = (props) => <ChildComponent {...props} />;

  // Section 5.5: Prop Validation
  const ValidatedProps = ({ name, age }) => (
    <div>{name} is {age} years old</div>
  );
  ValidatedProps.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  };

  // Section 5.6: Detecting the type of Children components
  const ChildrenTypeDetector = ({ children }) => (
    <div>
      {React.Children.map(children, child => 
        <div>Child type: {typeof child}</div>
      )}
    </div>
  );

  return (
    <div>
      <h1>Chapter 5: Props in React</h1>
      <IntroExample name="Props" />
      <DefaultPropsExample />
      <PropTypesExample name="John" age={30} />
      <ParentComponent name="Jane" age={25} />
      <ValidatedProps name="Bob" age={40} />
      <ChildrenTypeDetector>
        <span>Text child</span>
        <div>Element child</div>
        {42}
      </ChildrenTypeDetector>
    </div>
  );
};

export default Chapter5;