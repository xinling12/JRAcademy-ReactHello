import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
		this.setState(
            { count: this.state.count + 1 }
        );
    };

    decrementCount = () =>{
        this.setState(
            {count: this.state.count - 1}
        );
    };

    render(){
        return(
            <div>
                <span>count is : {this.state.count} </span>
                <button onclick={this.incrementCOunt}>-</button>
                <button onclick={this.decrementCount}>+</button>
            </div>
        );
    }
}