function placeAnOrder(orderNumber){

    console.log("Customer Order:",orderNumber);

    cookAndDeliverFood(function (){
        console.log("Delivered Food order:",orderNumber)
    })

}

// Simulate a 5-second Operation
function cookAndDeliverFood(callback){
        setTimeout(callback, 5000);
}
// callback is something that it will callback the same function once the 5-sec timeout happens



//Simulate User Web Request

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);



