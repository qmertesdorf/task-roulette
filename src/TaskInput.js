import React from "react";

class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInputText: ""
    };
  }

  taskInputChange = e => {
    this.setState({ taskInputText: e.target.value });
  };

  onSubmit = () => {
    const previousList = localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : [];
    const newList = previousList.slice();
    newList.push({
      description: this.state.taskInputText,
      complete: false,
      seenCounter: 0
    });
    localStorage.setItem("taskList", JSON.stringify(newList));
    this.setState({ taskInputText: "" });
  };

  render() {
    const { taskInputChange, onSubmit, state } = this;
    const { taskInputText } = state;
    return (
      <>
        <input
          {...{
            onChange: taskInputChange,
            value: taskInputText
          }}
        />
        <button
          {...{
            onClick: onSubmit,
            disabled: !taskInputText
          }}
        >
          Submit
        </button>
      </>
    );
  }
}

export default TaskInput;
