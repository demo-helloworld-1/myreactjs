var http = require("http");

function onRequest(request, response){
    console.log("A user made an request " + request.url);
    response.writeHead(200,{"Cone"})
}


http.createServer(onRequest).listen(8080);

console.log("Helloworld, The server is now Running");