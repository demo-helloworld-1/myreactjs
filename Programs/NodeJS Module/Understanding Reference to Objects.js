var HelloWorld = {
    favFood: "DigitalData",
    favMovie: "Interstellar"
};

var Person = HelloWorld;
// When ever we assign a new object, we are just refering the value we are not copying

Person.favFood="Salad";
console.log(HelloWorld.favFood);

