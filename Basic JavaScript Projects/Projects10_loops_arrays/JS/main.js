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

// let keyword
{
let a = 22;
    document.write(a);
}

// 
var d = myFunction(5, 37); 

function myFunction(a, b) {
  return a * b;   
}  
document.getElementById("function").innerHTML = d;

  




