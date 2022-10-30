import React, { Suspense } from "react";

class CompanyList extends React.Component {
  constructor(props) {
    super(props);
  }
//   shouldComponentUpdate(){
//     return false
//   }
  render() {
    console.log("hello rendering")
    return <h1>hello from company list {this.props.company.name}</h1>;
  }
}

export default CompanyList;
