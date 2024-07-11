var connect = require('connect');
var http = require('http');

var app = connect();

// function doFirst(request,response, next){
//     console.log("Bacon");
//     next();
// }

// function doSecond(request,response, next){
//     console.log("Tuna");
//     next();
// }

// app.use(doFirst);
// app.use(doSecond);

function profile(request,response){
    console.log("User requested for profile");
}

function form(request,response){
    console.log("User requested for Form");
}


app.use('/profile',profile);
app.use('/form',form);

http.createServer(app).listen(8080);

console.log("The Server is running....");