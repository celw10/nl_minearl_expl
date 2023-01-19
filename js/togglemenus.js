
// DELETE


// Define local variables //
const toggleaside = document.getElementById("asidemenu")
const togglefooter = document.getElementById("footerserach")

// Move the aside/footer tab off screen - BETTER WAY THAN 1000px? //
function closemenu(){
    toggleaside.style.right = "-1000px";
}

function closesearch(){
    togglefooter.style.bottom= "-1000px";
}

// Move the aside/footer tab back to its original locaiton //
function openmenu(){

    // If search tab is open close it
    if(togglefooter.style.bottom == "0px"){
        togglefooter.style.bottom = "-1000px"
    }

    // Show the meanu
    toggleaside.style.right = "0px";

}

function opensearch(){

    // If aside tab is open close it
    if(toggleaside.style.right == "0px"){
        toggleaside.style.right = "-1000px"
    }

    // Show the search results
    togglefooter.style.bottom = "0px";
}
