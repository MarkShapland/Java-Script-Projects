function addition_Function() {  //defining the function 
    var addition = 5 + 8;   //defining the variable and assigning values
    document.getElementById("Math").innerHTML = "5 + 8 =" + addition; //defining the id attribute and adding text 
}

function Subraction_Function() { //defining the function
     var subtraction = 8 - 6;  //defining the variable and assigning values
    document.getElementById("Subtract").innerHTML = "8 - 6 =" + subtraction; //defining the id attribute and adding text
}

function Multiplication_Function() {  //defining the function
    var multiply = 22 * 71;  //defining the variable and assigning values
    document.getElementById("multiplication").innerHTML = "22 * 71 =" + multiply; //defining the id attribute and adding text
}

function Division_Function() {  //defining the function
    var division = 72 / 9;      //defining the variable and assigning values
    document.getElementById("divide").innerHTML = "72 / 9 =" + division; //defining the id attribute and adding text
}

function math_operations() {                 //defining the function
    var simplemath = (9 + 8) * 12 / 18 -7;  //defining the variable and assigning values
    document.getElementById("multiple").innerHTML = "9 plus 8, times 12, divided by 18, and then subtracted by  7 equals " +simplemath; //defining the id attribute and adding text
}

function modulus_operator() {  //defining the function
    var modulus = 5 % 2;  //defining the variable and assigning values
    document.getElementById("operator").innerHTML = "When you divide 5 by 2 you have a remainder of: " + modulus; //defining the id attribute and adding text
}

function negation_operator() {  //defining the function
    var x = 25;  //defining the variable and assigning values
    document.getElementById("unary").innerHTML = -x; //defining the id attribute and adding text
}

{
   var x = 100;  //defining the variable and assigning a value
    x++ //increasing the value by 1
    document.write(x); // the number 101 will be displayed
}
{
    var breakline = "</br>"
    document.write(breakline); //
}
{
    var y = 100  //defining the variable and assigning a value
    y-- //decreasing the value by 1 
    document.write(y); //the number 99 will be displayed
}    
{
    document.write(breakline);
}
    {
    window.alert(Math.random() *100); //an alert window will pop up with a random number between 1-100
}  

{
  
    document.write("Rounded value if positive input value (5.3) is provided:  "+Math.round(5.3)); //returns the value of 5.3 rounded to its nearest integer
}
{
    document.write(breakline);
}
