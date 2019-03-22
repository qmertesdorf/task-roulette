import React from "react";
import { addPoints, taskCompletion } from "./api";

class GeneratedTask extends React.Component {
  constructor(props) {
    super(props);

    taskCompletion((err, receivesPoints) =>
      this.increasePoints(receivesPoints)
    );

    this.state = {
      currentTask: "",
      points: 0
    };
  }

  increasePoints = receivesPoints => {
    receivesPoints && this.setState({ points: this.state.points + 1 });
  };

  generateTask = () => {
    const chosenTask = getRandomTask();
    this.setState({ currentTask: chosenTask });
  };

  completeTask = () => {};

  render() {
    const currentTask = this.state.currentTask;
    const generateTask = this.generateTask;
    return (
      <div>
        <h1>{this.state.points}</h1>
        <h1>{currentTask.description}</h1>
        {currentTask ? (
          <>
            <button
              onClick={() => addPoints(true)}
            >
              Did it!
            </button>
            <button>I'll do that later...</button>
          </>
        ) : (
          <button onClick={generateTask}>What should I do?</button>
        )}
      </div>
    );
  }
}

const getRandomTask = () => {
  const taskList = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  const taskIndex = Math.floor(Math.random() * taskList.length);
  return taskList.length === 0 ? "" : taskList[taskIndex];
};

export default GeneratedTask;
