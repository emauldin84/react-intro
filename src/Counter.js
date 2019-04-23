import React from 'react';

// If a component needs to remember stuff,
// then you need a class

class Counter extends React.Component {

    // define how the instance gets created
    // including the initial state
    constructor(props) {
        // always activate the super powers from
        // React.Component
        super(props);
        // this.state is always an object
        // where the component stores key/value pairs
        this.state = {
            number: 0
        }
    }

    // do more setup when the component gets draws
    // to the page
    componentDidMount() {
        console.log(this.state.number)
        // YOU CANNOT MUTATE STATE DIRECTLY...
        // this.state.number++ is a no-no

        setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });

        }, 1000);

        // Safely change state using this.setState()
        // It accepts an object with updated key/value pairs
    }

    // define what will be drawn
    render() {
        return (
            <h1>{this.state.number}</h1>
        )
    }
}



// function Counter (props) {
//     return (
//         <h1>{props.number}</h1>
//     );
// }




export default Counter;