// Your custom components (this file) should start with a capital letter.

// #1 Import React
// If we were doing Node, we would have written:
// const React = require('react');
import React from 'react';



// #3 Declare your component
function Greet(props) {
    // Every component must return a React Element
    return (
    <h1>Hello, {props.whom ? props.whom : 'You'}.</h1>
    )
}








// #2 Export your component
export default Greet; // make the component name match the file name
// by `default`, if someone imports from Greet.js, they should receive our Greet component.

