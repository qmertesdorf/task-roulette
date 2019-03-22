import openSocket from 'socket.io-client';
//revisit
const socket = openSocket('https://dashboard.heroku.com/apps/the-task-roulette:8000');

export const taskCompletion = (cb) => {
  socket.on("completionPoints", (receivesPoints) => cb(null, receivesPoints));
}

export const addPoints = (completedTask) => {
  socket.emit("taskCompleted", completedTask);
}
