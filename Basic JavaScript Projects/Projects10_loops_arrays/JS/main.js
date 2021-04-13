//While loop
function Call_loop() { //While Loop//
    var Digit = "";
    var x = 20;
    while (x > 0) {
        Digit +=  "<br>" + x;
        x--
    }
    document.getElementById("Loop").innerHTML = Digit;
}
    //Sring length property 
function String() { 
     var str = "I am a string!!";
    var n = str.length;
    document.getElementById("string").innerHTML = n;
}
//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y; 
    function for_Loop() { 
        for (Y = 0; Y < Instruments.length;  Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
    }    

    // Array Function
function array_Function() {

    var Coffee = ["Cappuccino", " Americano", " Cafe Mocha", " Irish Coffee"];
    document.getElementById("Array").innerHTML = Coffee;
}

//Constant 
function constant_function() {
    const Cups = {type:"coffee", material:"glass", color:"red"};
    Cups.color = "green";
    Cups.brand = "Nespresso";
    document.getElementById("Constant").innerHTML = "I like to drink "
    + Cups.type + " from " + Cups.color + "<br>" +Cups.material 
    + "<br>" + Cups.brand + " cups.";
}

 // let keyword with properties
 let clock = { Type: "analog,  ", Color: "dark espresso, ", Shape:"round, ", Frame_Material: "plastic ",
 Description : function() {
  return "The clock is an " + this.Type + this.Shape + this.Color + " clock, made from " +  this.Frame_Material + ".";
 }
};
document.getElementById("Clock").innerHTML = clock.Description(); 


// let keyword
{
let f = 22;
    document.write(f);
}

// return statement
var d = myFunction(5, 37); 

function myFunction(a, b) {
  return a * b;   
}  
document.getElementById("function").innerHTML = d;

//loop with break
var loop_break = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) { break;}
    loop_break += "The number is " + i + "<br>";
}
document.getElementById("Loop_Break").innerHTML = loop_break;

//loop with continue
var loop_continue = "";
var j
for (j = 0; j < 10; j++) {
    if (j === 5) {continue;}
    loop_continue += "The number is  " + j + "<br>";
}
document.getElementById("Loop_Continue").innerHTML = loop_continue;



