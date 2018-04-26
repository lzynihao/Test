var http = require("http");
var URL = require("url");

function start(route) {
    function onRequest( request, response) {
        var pathName = URL.parse(request.url).pathname;
        console.log("Request for " + pathName + " received");

        route(pathName);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");

    console.log(__filename);
    console.log(__dirname);
}

exports.start = start;