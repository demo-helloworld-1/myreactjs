//This is called an anonymous function, We are storing a function to a variable. By this we can pass the function as an argument
var printhelloworld = function (){
    console.log("Hello World");
};

// printhelloworld();

//Here we are passing out our function as a argurment, now this program stops displaying within 5 seconds
setTimeout(printhelloworld,5000);

//setTimeout function will be waited for the given number of duration and then calls the function