import React from "react";
import List from "./List";

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"test"
        }
    }
    render(){
        return <div>
            {/* <List /> */}
            <h2>{this.state.name}</h2>
            {/* <table>
                <tr>
                    <th>name</th>
                    <th>age</th>
                </tr>
                <tr>
                    <td>test</td>
                    <td>20</td>
                </tr>
            </table> */}
        </div>
    }
}

export default Home