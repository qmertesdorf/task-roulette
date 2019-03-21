import React, { Component } from "react";
import "./App.css";
import TaskInput from "./TaskInput";
import GeneratedTask from "./GeneratedTask";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GeneratedTask />
          <TaskInput />
        </header>
      </div>
    );
  }
}

export default App;
