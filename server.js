var http = require("http");
var url = require("url");


function start(){
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request from " + pathname + "  received.");
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello world ! ");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started.");
}

exports.start = start;
