import React, { useState } from "react";
import { taskCompletion } from "./api";

const GeneratedTask = () => {
  
  const [currentTask, setCurrentTask] = useState("");

  const generateTask = () => {
    const chosenTask = getRandomTask();
    setCurrentTask(chosenTask);
  };

  const completeTask = () => {
    
  }
  

  return (
    <div>
      <h1>{currentTask.description}</h1>
      {currentTask
        ? <>
          <button onClick={taskCompletion}>Did it!</button>
          <button>I'll do that later...</button>
          </>
        : <button onClick={generateTask}>What should I do?</button>
      }
    </div>
  );
};


const getRandomTask = () => {
  const taskList = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  const taskIndex = Math.floor(Math.random() * taskList.length);
  return taskList.length === 0 ? "" : taskList[taskIndex];
};


export default GeneratedTask;