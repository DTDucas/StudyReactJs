import React, { useState } from 'react';

const Chapter23 = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  // Section 23.1: Basic Pane
  const BasicPane = ({ children }) => (
    <div style={{ border: '1px solid black', padding: '10px' }}>{children}</div>
  );

  // Section 23.2: Panel
  const Panel = ({ title, children }) => (
    <div style={{ border: '1px solid black', margin: '10px' }}>
      <div style={{ background: '#f0f0f0', padding: '5px' }}>{title}</div>
      <div style={{ padding: '10px' }}>{children}</div>
    </div>
  );

  // Section 23.3: Tab
  const Tab = ({ id, active, onClick, children }) => (
    <div
      style={{
        padding: '10px',
        border: active ? '1px solid black' : 'none',
        display: 'inline-block',
        cursor: 'pointer'
      }}
      onClick={() => onClick(id)}
    >
      {children}
    </div>
  );

  // Section 23.4: PaneGroup
  const PaneGroup = ({ children }) => (
    <div style={{ display: 'flex' }}>{children}</div>
  );

  // Section 23.5: Example view with 'PaneGroup's
  const ExampleView = () => (
    <PaneGroup>
      <Panel title="Left Panel">
        <Tab id="tab1" active={activeTab === 'tab1'} onClick={setActiveTab}>Tab 1</Tab>
        <Tab id="tab2" active={activeTab === 'tab2'} onClick={setActiveTab}>Tab 2</Tab>
        {activeTab === 'tab1' && <BasicPane>Content for Tab 1</BasicPane>}
        {activeTab === 'tab2' && <BasicPane>Content for Tab 2</BasicPane>}
      </Panel>
      <Panel title="Right Panel">
        <BasicPane>Some content here</BasicPane>
      </Panel>
    </PaneGroup>
  );

  return (
    <div>
      <h1>Chapter 23: User interface solutions</h1>
      <ExampleView />
    </div>
  );
};

export default Chapter23;