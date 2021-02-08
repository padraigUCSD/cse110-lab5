// server.js
var http = require('http');
var url = require('url);
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

 /*
// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send back a response and end the connection
    res.end('Hello World! I am a server.js message\n');
});

*/

/*
// Start the server on port 3000
app.listen(process.env.PORT || 3000);
console.log('Node server running on port 3000');
*/
