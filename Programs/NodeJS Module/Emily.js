// var movies = require('./Movies');

// movies.favMovie = "The Notebook";
// console.log("Emily's fav Movie"+ movies.favMovie);



// importing the Objects from Object Factory
var movies = require('./Object Factory');

var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";
console.log("Emily Fav Movie is "+emilyMovies.favMovie);