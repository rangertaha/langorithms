


var http = require("http");



http.createServer(function (request, response){

    response.writeHead(200, {'Contetn-Type': 'text/plain'});
    response.end('Hello World)')



}).listen(8881);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');