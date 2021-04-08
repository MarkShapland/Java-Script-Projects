var x = 20 //assigning a variable
function Add_numbers_1() { //creating a function with a global variable
    document.write(20 + x + "<br>");
}
function Add_numbers_2() { //creating a functions with a global variable
    document.write(100 + x +"<br>");
}
Add_numbers_1();
Add_numbers_2();




function Add_numbers_3() { //creating a function returning the argument in the console
    var y = 20;
   console.log(y + 20 + "<br>");
} 

function Add_numbers_4() {//creating a function returning the argument in the console
    console.log(y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Current_date( ) { //function with an if statement
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Current_year() { //function with an if statement
    if (new Date().getMonth() < 6) {
        document.getElementById("Year").innerHTML = "I can't wait until summer.";

    }
}

function Age_Function() { // function with an if and else statement
    Drinking_age = document.getElementById("Drinking_age").value;
    if (Drinking_age >20) {
        Drink = "Let me buy you a drink!";
    }
    else {
        Drink = "Go home kid, you need to be 21 to drink here!"
    }
    document.getElementById("Are_you_old_enough").innerHTML = Drink;
}

function Time_Function() { //function with else if statement
    var time = new Date().getHours();
    var Reply;
    if (time <12 == time >0) {
    Reply = "It is morning time.";
    }
    else if (time >= 12 == time < 18) {
    Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    } 
    document.getElementById("Time_of_day").innerHTML = Reply
}