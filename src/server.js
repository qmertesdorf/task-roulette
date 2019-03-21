const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('taskCompletion', (completed) => {
    console.log('client has completed a task: ', completed)
  })
})

const port = 8000;
io.listen(port);
console.log(`listening on port ${port}`);