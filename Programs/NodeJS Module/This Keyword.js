var HelloWorld = {
    printFirstName : function(){
        console.log("My Name is HelloWorld");
        console.log(this===HelloWorld);
    }
};

HelloWorld.printFirstName();

// The Default calling context is Global
function doSomethingWorthless(){
    console.log("\nThis is worthless function");
    console.log(this===HelloWorld);
}

doSomethingWorthless();