var http = require('http');
http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World');
        console.log(req.rawHeaders)
    })
    .listen(8081, '0.0.0.0');

console.log('Server running at http://0.0.0.0:8081/');
