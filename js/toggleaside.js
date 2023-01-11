// Toggle the aside tab containing "map" toggle fields //

// Define togglemenu variable which is connected to the aside tab by togglemenu ID //
var togglemenu = document.getElementById("togglemenu");

//The closemenu function simply moves the aside tab off screen, we can do this because overflow is hidden for main css //
function closemenu(){
    togglemenu.style.right = "-1000px";
}

//The openmenu function places the aside tab back in its original location //
function openmenu(){
    togglemenu.style.right = "0px";
}