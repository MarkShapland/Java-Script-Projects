function Ride_function() { //assigning a function
    var Height, Can_ride; //assigning  variables
    Height = document.getElementById("Height").value; //assigning id
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //ternary operator
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function Vote_function() { //assigning a function
    var Age, Can_vote; //assigning variables
    Age= document.getElementById("Age").value; //assigning id
    Can_vote= (Age < 18) ? "You are not old enough to vote.":"You can vote!"; //ternary operator
    document.getElementById("Vote").innerHTML = Can_vote;
    
}

function Vehicle(Make, Model, Year, Color) {  //object constructor
    this.Vehicle_Make = Make; //instance properties
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //assigning a function
    document.getElementById("Keywords_and_Constructors").innerHTML = //assigning id
    "Erik drives a " + Erik.Vehicle_Color + "-Colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2()  //assigning a function
     {
    document.getElementById("New_and_This").innerHTML = //assigning id
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in "
    + Emily.Vehicle_Year;
    
} 

var x = 25 // used var as a variable and my webpage stopped working

function Reserved_word() {
    document.getElementById("test").innerHTML = x;
}

function Football(location, stadium, color, quarterback) { //object constructor
    this.city_Location = location;
    this.type_Stadium = stadium;
    this.jersey_Color = color;
    this.team_Quarterback = quarterback;
}

var Seahawks = new  Football("Seattle", "retractable roof", "blue and green", "Russell Wilson");

function myFunction3() {
    document.getElementById("Seattle").innerHTML = "The Seahawks are located in " + Seahawks.city_Location +  //assigning id
    ", and they have a " + Seahawks.type_Stadium + ". " + " The team colors are " + Seahawks.jersey_Color + 
    " and their quarterback is " + Seahawks.team_Quarterback;
}

function myFunction4 () { //nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 12;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
     
    
}

