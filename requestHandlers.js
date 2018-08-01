const exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");

    var content = "empty";
    //ls - lah
    exec("find /", {timeout: 10000, maxBuffer: 20000*1024},function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
        //content = stdout;
    });

    /*         function sleep(milliseconds){
                let startTime = new Date().getTime();
                while(new Date().getTime() < startTime + milliseconds);
            }
            sleep(10000);   */ 
    //return content;
}

function upload(response){
    console.log("Request handler 'upload' was called.")

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;