
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
/*let geo_data = {}

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

*/

//Access elements from DOM
const searchRow = document.querySelector("#search-row")
const searchTable = document.querySelector("#table")
const searchInput = document.querySelector("#data-search")

//Initalize data array for search
let list = []; 

//Fetch API to get json data - using dummy data to work in fuctionality
fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        //Fill users array
        list = data.map(item => {
            const row = searchRow.content.cloneNode(true).children[0]

            //Assing variables to each tabular element
            const company = row.querySelector("#data-company")
            const license = row.querySelector("#data-license")
            const location = row.querySelector("#data-location")
            const status = row.querySelector("#data-status")
            const active = row.querySelector("#data-active")
            const unactive = row.querySelector("#data-unactive")
            const expenditures = row.querySelector("#data-expenditures")

            //Poupulate the table
            company.textContent = item.company.name
            license.textContent = item.username
            location.textContent = item.address.city
            status.textContent = item.website
            active.textContent = item.address.geo.lat
            unactive.textContent = item.address.geo.lng
            expenditures.textContent = item.address.zipcode

            //Append content from file to table
            searchTable.append( row )

            //Return searchable data to list
            return { company: item.company.name, element: row }
    });
})

// Add an event lister to the search bar
searchInput.addEventListener("input", (e) => {
    
    // Extract the values typed into the search bar
    const value = e.target.value.toLowerCase()

    console.log(list)

    //Loop through each user in users array - I HAVE TO LOWERCASE EVERYTHING STILL..
    list.forEach(result => {
        //Variable (bool) if value is in name or email of each user
        const isVisible = result.company.toLowerCase().includes(value)
        //console.log(user.element.classlist)
        //Change the class to hide by accessing the classlist if the typed value is not in the user info.
        result.element.classList.toggle("hide", !isVisible) // I HAD LOWERCASE l FOR 4 DAYS :(
    })
})



// ============================================================================
// JS for handling search bar
// ============================================================================

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