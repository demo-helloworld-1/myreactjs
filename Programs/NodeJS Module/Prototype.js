/* What Prototyping is 
Prototyping gives ability to add cool methods and protpoties to objects and classees

In JavaScript, including in Node.js applications, the prototype is used to extend or enhance existing objects,
typically by adding new methods or properties that can be shared among all instances of that object type. 
So this will add the new Properties to the Class itself, Not at an object level.

We can consider this as a template

Syntax to use Prototype
Object.prototype.functionname/property
*/

function User(){
    this.name = "";
    this.life = 100;
    this.giveLife=function giveLife(targetPlayer){
        targetPlayer.life+=1;
        this.life-=1;
        console.log(this.name+" gave 1 life to "+targetPlayer.name);
    }
}

var Bucky = new User();
var Vendy = new User();
Bucky.name="Bucky";
Vendy.name="Vendy";

Bucky.giveLife(Vendy);

console.log("Bucky Life = "+Bucky.life+"\nVendy Life = "+Vendy.life);


User.prototype.upperCut= function upperCut(targetPlayer){
    targetPlayer.life-=3;
    console.log(this.name+" just Uppercutted "+targetPlayer.name);

}

Vendy.upperCut(Bucky);
console.log("Bucky Life = "+Bucky.life+"\nVendy Life = "+Vendy.life);

User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Vendy.magic);