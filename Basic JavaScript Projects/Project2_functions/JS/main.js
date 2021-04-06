  
function My_First_Function() {             //Defining a function and naming it                      
  var str = "This text is yellow!";        //Defining a variable and giving it a string value     
    var result = str.fontcolor("yellow");  //Using the fontcolor method  on str variable
    document.getElementById("Yellow_text") .innerHTML = result;   //Putting the value  of result into HTML element with "Yellow_Text" id
}
function myFunction() {                      //Defining a function and naming it  
var sentence = "I am learning";              //Defining a variable and giving it a string value  and using the += operator to concatenate the string   
sentence += " a lot from this book!";           
document.getElementById("Concatenate") .innerHTML = sentence; //Putting the value  of sentence into HTML element with "Concatemnate" id
}

function myFunction2() {                         //Defining a function and naming it  
    var dog = "Dogs have fur";
    dog += " and some dogs have long tails.";    //Defining a variable and using the += operator to concatenate the string
    var result = dog.fontcolor("green");         //Using the fontcolor method  on dog variable
    document.getElementById("dogs").innerHTML = result; //Putting the value  of result into HTML element with "dogs" id
} 