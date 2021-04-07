function my_dictionary() { //assigning a function
    var Candy = {  //assigning a variable with KVP's
      Red_vines:"licorice",
      Snickers: "candy bar",
     Jelly_Belly: "jelly beans",
    };
    delete Candy.Snickers; // deleting snickers value
    document.getElementById("Dictionary").innerHTML = Candy.Snickers; //assigning an id and the return of  the function
}