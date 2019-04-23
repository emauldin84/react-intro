// Just like require() in your Node.js code
// "ES6 style imports" (as opposed to calling require() in Node.js)

import React from 'react';      // Pull in the React library itself
                                // Put this in every .js file in your project

import logo from './logo.svg';  // Import an image. (React will do optimizations.)
import './App.css';             // Recommendation: no individual style files. Just use index.css

import Greet from './Greet';
import Counter from './Counter';
import ClickyCounter from './ClickyCounter'

// "App" is a component
// A component is a function that returns a React Element.
// A React Element is a description of a DOM element (or tree).
// The most common way to specify a React Element is to use JSX.
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Counter /> */}
      <ClickyCounter />
      <ClickyCounter />
      <ClickyCounter />

      <Greet whom="Koa" />
      {/* this is a comment in JSX */}
      <Greet />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Equivalent to module.exports
export default App;
