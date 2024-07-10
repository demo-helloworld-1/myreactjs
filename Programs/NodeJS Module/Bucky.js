// var movies = require('./Movies');

// movies.favMovie = "The Notebook";
// console.log("Emily's fav Movie is "+ movies.favMovie);



var movies = require('./Object Factory');

var buckyMovie = movies();
console.log("Bucky Fav Movie is "+buckyMovie.favMovie);