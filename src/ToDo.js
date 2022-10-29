import React from "react";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      taskName: "",
    };
    // this.handleChange = this.handleChange.bind(this)
    // this.saveTask = this.saveTask.bind(this)
  }
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ taskName: event.target.value });
  };
  saveTask = () => {
    let tasks = this.state.tasks;
    tasks.push(this.state.taskName);
    this.setState({ tasks: tasks,taskName:"" });
  };
  render() {
    return (
      <div>
        <h2>My First ToDo Application</h2>
        <input
          type="text"
          placeholder="enter task name"
          onChange={(event) => this.handleChange(event)}
          value={this.state.taskName}
        />
        <button onClick={() => this.saveTask()}>Save Task</button>
        <ul>
          {this.state.tasks.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ToDo;
