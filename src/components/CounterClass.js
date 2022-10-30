import React, { Suspense} from "react";
//import Counter from "./Counter"
const Counter = React.lazy(()=>import("./Counter"))
class CounterClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            load:false
        }
    }
    decrement = ()=>{
        //this.props.decrement();
        this.setState({count:this.state.count-1})
    }
    increment = ()=>{
        //this.props.decrement();
        this.setState({count:this.state.count+1})
    }
    loadComponent = ()=>{
        this.setState({load:!this.state.load})
    }
    render(){
        return(
            <div>
                <Suspense fallback={<h1>Loading....</h1>}>
                    <Counter name={"sameer"} age={20} count={this.state.count} increment={this.increment} decrement={this.decrement}/>
                </Suspense>
                
                {/* {this.state.load && <Counter name={"sameer"} age={20} count={this.state.count} increment={this.increment} decrement={this.decrement}/>} */}
            </div>
        )
    }
}

export default CounterClass