function Full_sentence() { //concat method
    var part_1 = "This";
    var part_2 = " is a";
    var part_3 = " short";
    var part_4 = " sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function Slice_method() { //slice method
    var Sentence = "I'm here to chew bubble gum and kick a**";
    var Section = Sentence.slice(12,24);
    document.getElementById("Slice").innerHTML = Section;

}

function to_Uppercase() { //Uppercase method
    var lower = "I hate lower case letters!";
    var upper = lower.toUpperCase();
    document.getElementById("Upper").innerHTML = upper;
}

function Search_method () {  //search method
    var sentence = "I want to find the location of the word search."
    var find = sentence.search("search");
    document.getElementById("Search").innerHTML = find;
}

function to_String() { //Number to string method
    var x =250;
    var y = x.toString()
    document.getElementById("String").innerHTML = y;
}

function Precision_method() { //precision method
    var x = 12345.749278432784938573495734537;
    var y = x.toPrecision(10);
    document.getElementById("Precision").innerHTML = y;
}

function Fixed_method() { //fixed method
    var x = "I love teletype.";
    var y = x.fixed();
    document.getElementById("Fixed").innerHTML = y;
}

function Valueof_method() { //value of method
    var x = "Primitive value.";
    var y = x.valueOf();
    document.getElementById("Valueof").innerHTML = y;
}