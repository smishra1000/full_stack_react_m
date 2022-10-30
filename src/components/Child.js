import React, { Suspense} from "react";
class Child extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        name:"sundar"
       }
    }
    static getDerivedStateFromProps(props,state){
        console.log(props.name,state)
       return {name:props.name}
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("hello in snapshot",prevProps,prevState)

    }

    componentDidUpdate(){
        console.log("inside update ",this.state.name)
    }
   
    render(){
        console.log("hello i am rendering")
        return(
            <h1>hello from child {this.state.name}</h1>
        )
    }
}

export default Child