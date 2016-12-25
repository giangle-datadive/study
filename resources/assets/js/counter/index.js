import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {

    constructor() {
        this.state = {
            counter: 0,
        }
    }

    plus() {
        this.setState({counter: this.state.counter + 1,})
    }

    sub() {
        this.setState({counter: this.state.counter - 1,});
    }

    render() {
        return (
            <div>
                <button onClick={this.plus.bind(this)}>+</button>
                <div>{this.state.counter}</div>
                <button onClick={this.sub.bind(this)}>-</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('counter')
);
