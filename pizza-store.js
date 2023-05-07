
function payNow(){

    const payNow = document.getElementById("pay-now")
    container1.remove();
    container2.remove();
    container3.remove();
    container4.remove();




    let stuff = document.getElementById("payout");

    stuff.innerHTML = "What payment will you be using?";
    var btn1 = document.createElement("BUTTON");
    var text1 = document.createTextNode("Credit Card");
    btn1.appendChild(text1);
    document.body.appendChild(btn1);
    btn1.id ='btn1'; 

    var btn2 = document.createElement("BUTTON");
    var text2 = document.createTextNode("Cash");
    btn2.appendChild(text2);
    document.body.appendChild(btn2);
    btn2.id ='btn2'; 



//cash option
    btn2.onclick = function(){

        btn1.remove();
        btn2.remove();
        stuff.remove();


        
var cashdisplay = document.getElementById('cashdisplay')


cashdisplay.innerHTML = "Please have the cash amount ready when we arrive!";
time.innerHTML = "Your Order is cooking in the oven!";
time2.innerHTML = "30 mins till order is finished!";


    }



 //credit card option
    btn1.onclick = function() {
       
       
        btn2.remove();
        btn1.remove();
        stuff.remove();

        const name = document.getElementById("name")
        const AccountNumber = document.getElementById("AccountNumber")
        
    
        name.innerHTML = "Enter First And Last Name";
        const input1 = document.createElement("INPUT");
        input1.id ='input1'; 
        document.body.appendChild(input1);


        AccountNumber.innerHTML = "Enter Account Number";
        const input2 = document.createElement("INPUT");
        input2.id ='input2'; 
        document.body.appendChild(input2);

        ExpirationDate.innerHTML = "Enter Expiration Date";
        const input3 = document.createElement("INPUT");
        input3.id ='input3'; 
        document.body.appendChild(input3);

        CVC.innerHTML = "Enter CVC";
        const input4 = document.createElement("INPUT");
        input4.id ='input4'; 
        document.body.appendChild(input4);
        
        var btnOrder = document.createElement("BUTTON");
        var text3 = document.createTextNode("Order Now!");
        btnOrder.appendChild(text3);
        document.body.appendChild(btnOrder);
        btnOrder.id ='btnOrder'; 


    };

   



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


