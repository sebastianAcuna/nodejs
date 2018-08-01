//se importan los modulos necesarios
var server  = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//se genera un manejador "handler" que almacenara la llave "/upload" con su valor "request.upload" asi podre saber que peticion se le hace al servidor
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);