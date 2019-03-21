import openSocket from 'socket.io-client';
//revisit
const socket = openSocket('http://localhost:8000');

export const taskCompletion = (cb) => {
  socket.on("completionPoints", (receivesPoints) => cb(null, receivesPoints));
  socket.emit("taskCompleted", true)
}

