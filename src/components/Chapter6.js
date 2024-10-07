import React, { Component, useEffect, useState } from 'react';

const Chapter6 = () => {
  // Section 6.1: Component Creation
  class ClassComponent extends Component {
    render() {
      return <div>Class Component</div>;
    }
  }

  const FunctionalComponent = () => <div>Functional Component</div>;

  // Section 6.2: Component Lifecycle
  class LifecycleComponent extends Component {
    componentDidMount() {
      console.log('Component did mount');
    }

    componentWillUnmount() {
      console.log('Component will unmount');
    }

    render() {
      return <div>Lifecycle Component</div>;
    }
  }

  // Section 6.3: Component Update
  const UpdateComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log('Component updated');
    }, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };

  // Section 6.4: Lifecycle method call in different states
  class LifecycleMethodsComponent extends Component {
    constructor(props) {
      super(props);
      console.log('Constructor');
    }

    componentDidMount() {
      console.log('ComponentDidMount');
    }

    componentDidUpdate() {
      console.log('ComponentDidUpdate');
    }

    render() {
      console.log('Render');
      return <div>Lifecycle Methods Component</div>;
    }
  }

  // Section 6.5: React Component Container
  const PresentationalComponent = ({ data }) => <div>{data}</div>;
  const ContainerComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
      // Simulate data fetching
      setTimeout(() => setData('Fetched Data'), 1000);
    }, []);

    return <PresentationalComponent data={data} />;
  };

  return (
    <div>
      <h1>Chapter 6: React Component Lifecycle</h1>
      <ClassComponent />
      <FunctionalComponent />
      <LifecycleComponent />
      <UpdateComponent />
      <LifecycleMethodsComponent />
      <ContainerComponent />
    </div>
  );
};

export default Chapter6;