
// ============================================================================
// JS for Aside menu and related handlers
// ============================================================================

// Define local variables //
const toggleaside = document.getElementById("asidemenu")
const togglefooter = document.getElementById("footerserach")

// Move the aside/footer tab off screen - BETTER WAY THAN 1000px? //Check out CSS methods (transform: translate(x, y))
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



// ============================================================================
// JS for handling search bar
// ============================================================================

// Fetch historic claims data
let geo_data = {}

fetch("../data/HistoricClaims_Test.geojson").then(res => res.json()).then(data => geo_data = data)

// Select the search bar //
const searchInput = document.querySelector("[data-search]")

// Add an event lister to the search bar //
searchInput.addEventListener("input", (e) => {

    // Extract the values typed into the search bar //
    const value = e.target.value

    // Output what is typed into seach bar on the console log //
    console.log(value)

    //Print the input value const to an arbitrary (and temporary) locaiton on main //
    document.getElementById('search-output').innerHTML = value;
})




// ============================================================================
// JS for handling search bar
// ============================================================================
// Export defined functions

// Reset map to basemap
function resetmap(){
    document.getElementById('gis').src = "images/gis/NL_Basemap.jpg"
}

// Toggle current claims
function currentclaims(){
    document.getElementById('gis').src = "images/gis/CurrentClaimsExample.jpg"
}

// Toggle historic claims
function historicclaims(){
    document.getElementById('gis').src = "images/gis/HistoricClaimsExample.jpg"
}

// Toggle drill collars
function drillcollars(){
    document.getElementById('gis').src = "images/gis/CurrentDrillingExample.jpg"
}

// Toggle mineral showings
function mineralshowings(){
    document.getElementById('gis').src = "images/gis/MODSExample.jpg"
}



// ============================================================================
// Clark's Sample Code
// ============================================================================

const clark_button = document.getElementById('super_cool_button');

// using the unique id property I assign to the button allows me to attach complex logic easily
// in a callback function. There are a ton of other event triggers as well!
clark_button.addEventListener('click', (event) => {
    // Logging things to the console is a great way to test your code!
    console.table({geo_data})
    console.log({event})
})