import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props);
    }
    decrement = ()=>{
        this.props.decrement();
    }
    increment = ()=>{
        this.props.increment();
    }
    render(){
        return(
            <div>
                <h1>{this.props.name} {this.props.age}</h1>
                <h1>hello Counter with class components</h1>
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>decrement</button>
                <h1> count: {this.props.count}</h1>
            </div>
        )
    }
}

export default Counter