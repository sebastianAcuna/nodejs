var http = require("http");
var url = require("url");


function start(route, handle){ //recive una funcion (route) //se pasa el manejador
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request from " + pathname + "  received.");
 
        route(handle, pathname, response); //se ejecuta la funcion con el manejador y el path

        /* response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(content);
        response.end(); */
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started.");
}

exports.start = start;

