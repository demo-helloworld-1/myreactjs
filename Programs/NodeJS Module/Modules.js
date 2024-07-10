/*
In JavaScript, a module is a reusable piece of code that encapsulates related functions, 
classes, and variables. Modules help in organizing code into smaller, manageable units, 
and they encourage code reuse and separation of concerns. JavaScript historically lacked built-in 
support for modules until the introduction of ES6 (ECMAScript 2015), which standardized the module system 
with import and export keywords.
*/

var movies = require('./Movie');

movies.printAvathar();
movies.printChappie();
console.log(movies.favMovie);