const io = require('socket.io')();

io.on('connection', (socket) => {
  socket.on('taskCompleted', (completed) => {
    socket.broadcast.emit("completionPoints", completed)
    console.log('client has completed a task: ', completed)
  })
})

const port = process.env.PORT || 8000;
io.listen(port);
console.log(`listening on port ${port}`);