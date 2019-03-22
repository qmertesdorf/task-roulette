import openSocket from 'socket.io-client';
// import { port } from './server';
const port = port = process.env.PORT || 8000;
//revisit
const socket = openSocket(`https://dashboard.heroku.com/apps/the-task-roulette:${port}`);

export const taskCompletion = (cb) => {
  socket.on("completionPoints", (receivesPoints) => cb(null, receivesPoints));
}

export const addPoints = (completedTask) => {
  socket.emit("taskCompleted", completedTask);
}
