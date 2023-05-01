



const container1  = document.getElementById("container-1")
const container2  = document.getElementById("container-2")
const container3  = document.getElementById("container-3")
const container4  = document.getElementById("container-4")

//tip
const tip10 = document.getElementById("10");
const tip15 = document.getElementById("15");
const tip20 = document.getElementById("20");



//pizza items
const itemOne = document.getElementById("item-1")
const itemTwo = document.getElementById("item-2")
const itemThree = document.getElementById("item-3")
const itemFour = document.getElementById("item-4")









const total = document.getElementById("cart-total")



const cart = document.getElementById("cart");





container3.remove();


var price = ["", "","",""];
var tip = ["","",""];




//add to cart for pizzas
function Addcart1(){


    price[0] = 15;

    total.innerText = price[0] + price[1] + price[2] + price[3];
   

    console.log(price);

};

function Addcart2(){



    price[1] = 17;

    total.innerText = price[0] + price[1] + price[2] + price[3];
   
    console.log(price);

  


};
function Addcart3(){

    price[2] = 20;

    total.innerText = price[0] + price[1] + price[2] + price[3];
   
    console.log(price);

  


};

function Addcart4(){

    price[3] = 13;

    total.innerText = price[0] + price[1] + price[2] + price[3];
   
    console.log(price);




};



//tip functions

function tip1(){

    tip[0] = total.innerText * (10/100);
    
    console.log(tip[0]);

    console.log(tip);
}

function tip2(){

    tip[1] = total.innerText * (15/100);
    
    console.log(tip[1]);

    console.log(tip);
}

function tip3(){

    tip[2] = total.innerText * (20/100);
    
    console.log(tip[2]);

    console.log(tip);
}


console.log(tip);

console.log(price);


//wings functions



//drinks functions



var priceD = ["","","",""];