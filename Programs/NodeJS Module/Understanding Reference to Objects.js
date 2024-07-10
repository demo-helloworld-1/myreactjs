var HelloWorld = {
    favFood: "DigitalData",
    favMovie: "Interstellar"
};

var Person = HelloWorld;
// When ever we assign a new object, we are just refering the value we are not copying

Person.favFood="Salad";
console.log(HelloWorld.favFood);


// Difference between == and ===

console.log(19=="19"); //true
console.log(19==="19");//false



// == compairs only the Data but == compairs the data along with the Datatype