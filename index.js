const server = require('./api/server');

server.get('/', (req, res) => {
  res.send(`
  <h1>Welcome to the Server-Testing!</h1>
  `)
})

const port = 5000;
server.listen(port, () => console.log(`\n***** Server running on port ${port} *****\n`));