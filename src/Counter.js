import React from 'react'

class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {count : 0}
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
            <button onClick={this.incrementCount}>+</button>
            <button onClick={this.decrementCount}>-</button>
            </div>
        );
        
    }

    
}

export default Counter;