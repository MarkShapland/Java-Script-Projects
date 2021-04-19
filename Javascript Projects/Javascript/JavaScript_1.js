//switch statement
function Musician_function() {
    var Musician_output;
    var Musician = document.getElementById("Musician_input").value;
    var Musician_string = " is a great musician!";
    switch(Musician) {
        case "Michael Jackson":
            Musician_output = "Michael Jackson" + Musician_string;
        break;
        case "Elvis Presley":
            Musician_output = "Elvis Presley" + Musician_string;
        break;
        case "Beyonce":
            Musician_output = "Beyonce" + Musician_string;
        break;
        case "Jimi Hendrix":
            Musician_output = "Jimi Hendrix" + Musician_string;
        break;
        case "Bob Dylan":
            Musician_output = "Bob Dylan" + Musician_string;
        break;
        default:
        Musician_output = "Please enter the musician's name exactly as written in the list above.";
        }
    
    document.getElementById("Output").innerHTML = Musician_output;
    }
    //get element by class method
    function myFunction() {
        var A = document.getElementsByClassName("click");
        A[0].innerHTML = "The car is now blue!";
    }

    //canvas element circular gradient method
    var c = document.getElementById("Canvas_element");
    var ctx = c.getContext("2d");

    var grd = ctx.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0,"blue");
    grd.addColorStop(1,"white");

    ctx.fillStyle = grd;
    ctx.fillRect(10,10,150,80);
    
    //canvas element linear gradient method
    var c = document.getElementById("Canvas_element_2");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
