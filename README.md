# React Learning Project

This project covers a comprehensive guide to React, from basics to advanced topics. Each chapter is implemented as a separate component, demonstrating various concepts and techniques.

## Table of Contents

- **Chapter 1: Getting Started with React**
  - [1.1: What is React JS?](#section-11-what-is-react-js)
  - [1.2: Installation or Setup](#section-12-installation-or-setup)
  - [1.3: Hello World with Stateless Functions](#section-13-hello-world-with-stateless-functions)
  - [1.4: Absolute Basics of Creating Reusable Components](#section-14-absolute-basics-of-creating-reusable-components)
  - [1.5: Create React App](#section-15-create-react-app)
  - [1.6: Hello World](#section-16-hello-world)
  - [1.7: Hello World Component](#section-17-hello-world-component)

- **Chapter 2: Components**
  - [2.1: Creating Components](#section-21-creating-components)
  - [2.2: Basic Component](#section-22-basic-component)
  - [2.3: Nesting Components](#section-23-nesting-components)
  - [2.4: Props](#section-24-props)
  - [2.5: Component States - Dynamic User-Interface](#section-25-component-states---dynamic-user-interface)
  - [2.6: Variations of Stateless Functional Components](#section-26-variations-of-stateless-functional-components)
  - [2.7: setState Pitfalls](#section-27-setstate-pitfalls)

- **Chapter 3: Using ReactJS with TypeScript**
  - [3.1: ReactJS Component written in TypeScript](#section-31-reactjs-component-written-in-typescript)
  - [3.2: Installation and Setup](#section-32-installation-and-setup)
  - [3.3: Stateless React Components in TypeScript](#section-33-stateless-react-components-in-typescript)
  - [3.4: Stateless and Property-less Components](#section-34-stateless-and-property-less-components)

- **Chapter 4: State in React**
  - [4.1: Basic State](#section-41-basic-state)
  - [4.2: Common Antipattern](#section-42-common-antipattern)
  - [4.3: setState()](#section-43-setstate)
  - [4.4: State, Events, and Managed Controls](#section-44-state-events-and-managed-controls)

- **Chapter 5: Props in React**
  - [5.1: Introduction](#section-51-introduction)
  - [5.2: Default Props](#section-52-default-props)
  - [5.3: PropTypes](#section-53-proptypes)
  - [5.4: Passing Down Props Using Spread Operator](#section-54-passing-down-props-using-spread-operator)
  - [5.5: Props.children and Component Composition](#section-55-propschildren-and-component-composition)
  - [5.6: Detecting the Type of Children Components](#section-56-detecting-the-type-of-children-components)

- **Chapter 6: React Component Lifecycle**
  - [6.1: Component Creation](#section-61-component-creation)
  - [6.2: Component Lifecycle](#section-62-component-lifecycle)
  - [6.3: Component Update](#section-63-component-update)
  - [6.4: Lifecycle Method Calls in Different States](#section-64-lifecycle-method-calls-in-different-states)
  - [6.5: React Component Container](#section-65-react-component-container)

- **Chapter 7: Forms and User Input**
  - [7.1: Controlled Components](#section-71-controlled-components)
  - [7.2: Uncontrolled Components](#section-72-uncontrolled-components)

- **Chapter 8: React Boilerplate [React + Babel + Webpack]**
  - [8.1: React Starter Project](#section-81-react-starter-project)
  - [8.2: Setting Up the Project](#section-82-setting-up-the-project)

- **Chapter 9: Using ReactJS with jQuery**
  - [9.1: ReactJS with jQuery](#section-91-reactjs-with-jquery)

- **Chapter 10: React Routing**
  - [10.1: Example Routes.js](#section-101-example-routesjs)
  - [10.2: React Routing Async](#section-102-react-routing-async)

- **Chapter 11: Communication Between Components**
  - [11.1: Stateless Functional Components](#section-111-stateless-functional-components)

- **Chapter 12: Webpack, React, and Babel Environment Setup**
  - [12.1: Pipeline for "Hello World" with Images](#section-121-pipeline-for-hello-world-with-images)

- **Chapter 13: React.createClass vs Extending React.Component**
  - [13.1: Create React Component](#section-131-create-react-component)
  - [13.2: "this" Context](#section-132-this-context)
  - [13.3: Default Props and PropTypes](#section-133-default-props-and-proptypes)
  - [13.4: Mixins](#section-134-mixins)
  - [13.5: Set Initial State](#section-135-set-initial-state)
  - [13.6: Binding Methods in JSX Callbacks](#section-136-binding-methods-in-jsx-callbacks)

- **Chapter 14: React AJAX Call**
  - [14.1: HTTP GET Request](#section-141-http-get-request)
  - [14.2: Looping Through Data](#section-142-looping-through-data)

- **Chapter 15: Communication Between Components**
  - [15.1: Child to Parent](#section-151-child-to-parent)
  - [15.2: Not-related Components](#section-152-not-related-components)
  - [15.3: Parent to Child](#section-153-parent-to-child)

- **Chapter 16: Stateless Functional Components**
  - [16.1: Stateless Functional Component](#section-161-stateless-functional-component)

- **Chapter 17: Performance**
  - [17.1: Performance Measurement](#section-171-performance-measurement)
  - [17.2: React's Diff Algorithm](#section-172-react-diff-algorithm)
  - [17.3: HTML DOM vs Virtual DOM](#section-173-html-dom-vs-virtual-dom)
  - [17.4: Performance Tips & Tricks](#section-174-performance-tips-tricks)

- **Chapter 18: Server-Side Rendering**
  - [18.1: Rendering Components](#section-181-rendering-components)

- **Chapter 19: Setting Up React Environment**
  - [19.1: Simple React Component](#section-191-simple-react-component)
  - [19.2: Install Dependencies](#section-192-install-dependencies)
  - [19.3: Configure Webpack](#section-193-configure-webpack)
  - [19.4: Configure Babel](#section-194-configure-babel)
  - [19.5: HTML Setup for React Component](#section-195-html-setup-for-react-component)
  - [19.6: Transpile and Bundle JavaScript](#section-196-transpile-and-bundle-javascript)

- **Chapter 20: Using React with Flow**
  - [20.1: Flow and Prop Types](#section-201-flow-and-prop-types)
  - [20.2: Flow Prop Type Checking](#section-202-flow-prop-type-checking)

- **Chapter 21: JSX**
  - [21.1: Props in JSX](#section-211-props-in-jsx)
  - [21.2: Children in JSX](#section-212-children-in-jsx)

- **Chapter 22: React Forms**
  - [22.1: Controlled Components](#section-221-controlled-components)

- **Chapter 23: User Interface Solutions**
  - [23.1: Basic Pane](#section-231-basic-pane)
  - [23.2: Panel](#section-232-panel)
  - [23.3: Tab](#section-233-tab)
  - [23.4: PaneGroup](#section-234-panegroup)
  - [23.5: Example View with PaneGroups](#section-235-example-view-with-panegroups)

- **Chapter 24: Using ReactJS in Flux Architecture**
  - [24.1: Data Flow](#section-241-data-flow)

- **Chapter 25: React, Webpack, & TypeScript Installation**
  - [25.1: webpack.config.js](#section-251-webpackconfigjs)
  - [25.2: tsconfig.json](#section-252-tsconfigjson)
  - [25.3: First Component](#section-253-first-component)

- **Chapter 26: Using Keys in React**
  - [26.1: Basic Example](#section-261-basic-example)

- **Chapter 27: Higher Order Components**
  - [27.1: Authentication HOC](#section-271-authentication-hoc)

- **Chapter 28: Using Ref in React**
  - [28.1: Basic Example](#section-281-basic-example)

- **Chapter 29: Redux Architecture**
  - [29.1: Redux Overview](#section-291-redux-overview)

## License

This project is licensed under the Apache-2.0 license - see the [LICENSE](LICENSE) file for details.
