import openSocket from 'socket.io-client';
// import { port } from './server';
const port = process.env.PORT || 8000;
const url = process.env.PORT ? 'https://dashboard.heroku.com/apps/the-task-roulette' : 'localhost';
//revisit
const socket = openSocket(`${url}:${port}`);

export const taskCompletion = (cb) => {
  socket.on("completionPoints", (receivesPoints) => cb(null, receivesPoints));
}

export const addPoints = (completedTask) => {
  socket.emit("taskCompleted", completedTask);
}
