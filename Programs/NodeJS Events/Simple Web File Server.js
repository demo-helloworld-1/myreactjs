var http = require("http");
var fs = require("fs");

//404 response 

function send404Response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

function onRequest(request,response){
    
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("Programs/NodeJS Events/index.html").pipe(response);
    }
    else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8080);
console.log("The server is Running....");