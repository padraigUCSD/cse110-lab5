// server.js
const http = require('http')
const fs = require('fs')

// Create an instance of the http server to handle HTTP requests
const server = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { 'content-type': 'text/html' })
  // serve index.html
  fs.createReadStream('index.html').pipe(res)
})

// Start the server on port 3000
server.listen(process.env.PORT || 3000)
