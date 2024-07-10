var HelloWorld = {
    printFirstName : function(){
        console.log("My Name is HelloWorld");
        console.log(this==HelloWorld);
    }
};

HelloWorld.printFirstName();