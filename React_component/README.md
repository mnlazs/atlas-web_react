![GIF Soraya](https://media.giphy.com/media/uSaZNvjYoetFhEBAX2/giphy.gif)


# My React Project: Component :sparkles:

This React-based project showcases a range of components, unit testing, and efficient development practices.

## Resources :books:

- **React Components**: Fundamental building blocks of React applications, encapsulating logic and rendering behavior.

- **React Developer Tools**: A browser extension providing a React tree inspector, useful for examining the structure and state of React components.

- **Enzyme Shallow Rendering**: A testing technique in Enzyme that renders only the given component, not its children, ideal for isolated unit tests.

- **Enzyme Mount**: Full DOM rendering useful for testing interactions and lifecycle methods of components.

- **Enzyme Unmount**: A method to simulate the unmounting of a component, useful for testing cleanup behavior.

- **React Pure Components**: Components that shallowly compare props and state to optimize rendering, avoiding unnecessary updates.

- **React Higher Order Components (HOCs)**: Functions that take a component and return a new component, used for enhancing or modifying the behavior of the original component.

- **Jest Mock Functions**: Functions in Jest testing framework that allow you to spy on, stub, or mock functions, useful for isolating components in tests.

## Project Overview :mag:

This project demonstrates the use of modern React features and testing methodologies.

### Key Features

- Implementation of Pure React Components and HOCs.
- Comprehensive unit testing using Jest and Enzyme.

### Example Code

```jsx
import React from 'react';

class MyComponent extends React.Component {
  render() {
    return <div>Hello, React!</div>;
  }
}
```

# Components
React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React.Component or React.PureComponent.

- **React.Component**
- **React.PureComponent**
If you don’t use ES6 classes, you may use the create-react-class module instead. See Using React without ES6 for more information.

React components can also be defined as functions which can be wrapped:

- **React.memo** 

# React Developer Tool ⚛️
### Overview
Adds React debugging tools to the Chrome Developer Tools.

Created from revision 993c4d003 on 12/5/2023.

React Developer Tools is a Chrome DevTools extension for the open-source React JavaScript library. It allows you to inspect the React component hierarchies in the Chrome Developer Tools.

You will get two new tabs in your Chrome DevTools: "⚛️ Components" and "⚛️ Profiler".

The Components tab shows you the root React components that were rendered on the page, as well as the subcomponents that they ended up rendering.

<img src="reactdev.png" alt="imagendev" width="600">

## Mock Modules

`jest.disableAutomock()`
Disables automatic mocking in the module loader.

INFO
Automatic mocking should be enabled via automock configuration option for this method to have any effect. Also see documentation of the configuration option for more details.

```JavaScript

/** @type {import('jest').Config} */
const config = {
  automock: true,
};

module.exports = config;
```

```TypeScript
import type {Config} from 'jest';

const config: Config = {
  automock: true,
};

export default config;
```


After `disableAutomock()` is called, all `require()s` will return the real versions of each module (rather than a mocked version).
```
utils.js
export default {
  authorize: () => {
    return 'token';
  },
};
```
__tests__/disableAutomocking.js
import utils from '../utils';
```
jest.disableAutomock();

test('original implementation', () => {
  // now we have the original implementation,
  // even if we set the automocking in a jest configuration
  expect(utils.authorize()).toBe('token');
});
```
This is usually useful when you have a scenario where the number of dependencies you want to mock is far less than the number of dependencies that you don't. For example, if you're writing a test for a module that uses a large number of dependencies that can be reasonably classified as "implementation details" of the module, then you likely do not want to mock them.

Examples of dependencies that might be considered "implementation details" are things ranging from language built-ins (e.g. `Array.prototype methods`) to highly common utility methods (e.g. `underscore`, `lodash`, array utilities, etc) and entire libraries like React.js.



## Running Tests :runner:
To run the tests, use the following command:
```
npm test
```

## :sunglasses: Author
Manuel Zambrano

- [my Github](https://github.com/mnlazs)

Crafting with :heart: and a bunch of :coffee:.


