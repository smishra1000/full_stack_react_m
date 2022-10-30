import React from "react";
import CompanyList from "./CompanyList";
class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        name: "",
      },
      display:false,
    };
  }

  onNameChange = (event)=>{
    let company = this.state.company;
    company.name=event.target.value;
    this.setState({company:company})
  }
  saveCompany = (event)=>{
    event.preventDefault();
    this.setState({display:!this.state.display})
  }

  render(){
    return(
        <div>
            <h1>From company parent</h1>
            <label>Company Name:</label>
            <input type="text" value={this.state.company.name} onChange={this.onNameChange} placeholder="enter company name"/>
            <button onClick={this.saveCompany}>Save Comapny</button>
            {this.state.display && <CompanyList company={this.state.company}/>}
        </div>

    )
  }
}

export default Company;
