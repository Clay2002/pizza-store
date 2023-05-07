
function payNow(){

    const payNow = document.getElementById("pay-now")
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();

    let stuff = document.getElementById("payout");

    stuff.innerHTML = "New Heading";

};

const container1  = document.getElementById("container-1")
const container2  = document.getElementById("container-2")
const container3  = document.getElementById("container-3")
const container4  = document.getElementById("container-4")





container1.style.visibility = 'hidden';
container2.style.visibility = 'hidden';
container3.style.visibility = 'hidden';


//buttons for each container to be added on the page. 


 function containerOne(){

 
    container1.style.visibility = 'visible';
};

function deleteOne(){

    const deleteOne = document.getElementById("deletedone");
    container1.style.visibility = 'hidden';
    
}


container1.style.visibility = 'hidden';

function containerTwo(){


    container2.style.visibility = 'visible';

};

function deleteTwo(){

    const deleteTwo= document.getElementById("deletedtwo");
    container2.style.visibility = 'hidden';
    
}


function containerThree(){


    container3.style.visibility = 'visible';

};

function deleteThree(){

    const deleteThree= document.getElementById("deletedthree");
    container3.style.visibility = 'hidden';
    
}







const total = document.getElementById("total");







let totalCost = [];




//add to cart for pizzas
function Addcart1(){



     totalCost.unshift(15);
    console.log(totalCost);
    display();
};

function Addcart2(){


    totalCost.unshift(17);
    console.log(totalCost);
    display();

};
function Addcart3(){
    totalCost.unshift(20);
    console.log(totalCost);
    display();

};

function Addcart4(){

    totalCost.unshift(13);
    console.log(totalCost);
    display();
};





function drinkCart1(){

    totalCost.unshift(5);
    console.log(totalCost);
    display();
}
function drinkCart2(){
    totalCost.unshift(5);
    console.log(totalCost);
    display();
}

function drinkCart3(){
    totalCost.unshift(5);
    console.log(totalCost);
    display();
   
}

function drinkCart4(){

    totalCost.unshift(5);
    console.log(totalCost);
    display();
}




function wingsCart1(){

    totalCost.unshift(8);
    console.log(totalCost);
    display();
}



function wingsCart2(){

    totalCost.unshift(8);
    console.log(totalCost);
    display();
}


function wingsCart3(){

    totalCost.unshift(8);
    console.log(totalCost);
    display();
}


function wingsCart4(){
    totalCost.unshift(8);
    console.log(totalCost);
 
    display();
    
}




function display(){

    let sum = totalCost.reduce(function (a, b) {
    return a + b;
    }, 0);
    total.innerText = "Cart Total: $"+(sum);
    };


