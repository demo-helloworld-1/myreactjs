var http = require("http");

function onRequest(request, response){
    console.log("A user made an request " + request.url);
    response.writeHead(200,{"Context-Type": "text/plain"});
    response.write("Here is your Data");
    response.end();
}


http.createServer(onRequest).listen(8080);

console.log("The server is now Running...");

//When we run this code, there will be a server enabled and active 