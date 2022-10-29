import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [
      //   {
      //     name: "test",
      //     age: 20,
      //   },
      //   {
      //     name: "test2",
      //     age: 20,
      //   },
      //   {
      //     name: "test3",
      //     age: 20,
      //   },
      //   {
      //     name: "test4",
      //     age: 20,
      //   },
      // ],
      // isAdmin:false
    };
  }
  render() {
    console.log(this.props.employees)
    return (
      <div>
        Employees List
        <ul>
          
          {this.props.employees.map((item) => {
            return <div>
                <li>{item.id}</li>
                <li>{item.age}</li>
                <li>{item.name}</li>
                <li>{item.address}</li>
                <li>{item.designation}</li>
              </div>
          })}
        </ul>
      </div>
    );
  }
}

export default List;
