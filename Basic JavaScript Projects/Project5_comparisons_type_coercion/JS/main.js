{
    var linebreak = "</br>"; // defining a variable
    document.write(typeof 72); // displaying "number"
    document.write(linebreak); // line break
    document.write(typeof "hello"); //displaying "word"
    document.write(linebreak);
    document.write(2E310); // display infinity
    document.write(linebreak);
    document.write(-3E310); // display -infinity
    document.write(linebreak);
    document.write(12>10); // display boolean comparison true
    document.write(linebreak);
    document.write(12<10); //display boolean comparison false
    document.write(linebreak);
    document.write((25 + 30) == 55); //display true if data on the left is equal to data on the right
    document.write(linebreak);
    x=5; //assigning a variable
    y=5; //assigning a variable
    document.write(x === y); //Return true by ensuring to match the data type and value
    document.write(linebreak)
    a=25;
    b="Mark";
    document.write(a === b); //Return false by writing a different data type and different value
    document.write(linebreak);
    c=25;
    d="25";
    document.write(c === d); //Return false by writing a different data type but the same value for both.
    document.write(linebreak);
    e=25;
    f=26;
    document.write(e === f); //Return false by writing the same data type but a different value for both.
    document.write(linebreak);
    document.write(7 > 2 && 12>5); //utilize the AND operator to display true
    document.write(linebreak);
    document.write(7>2 && 2>7); //utilize the AND operator to display false
    document.write(linebreak);
    document.write(7 > 3 || 3>7); //Utilize the OR operator to display true
    document.write(linebreak);
    document.write(7 > 10 || 22 < 10); //Utilize the OR operator to display false

}
function my_function() //defining a function
     {
    document.getElementById("test").innerHTML = 0/0; //
}

function word() {
    document.getElementById("test2").innerHTML = isNaN("Is this a word?"); // NaN true statement
}

function number() {
    document.getElementById("test3").innerHTML = isNaN("2500"); //Nan false statement
}

{
    console.log(9 < 8); //display false in console
      
}

{
    console.log(8 * 8); //display 64 in console
}

function not_function() {
    document.getElementById("Not").innerHTML = !(40 > 25); //utilize the NOT operator to display false

    
}
    
function nFunction() {
    document.getElementById("true").innerHTML = !(40 < 25); //utilize the NOT operator to display true 
}