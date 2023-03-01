// ============================================================================
// Hide/Display Menu and Search Results 
// ============================================================================

// Define local variables //
const toggleaside = document.getElementById("asidemenu")
const togglefooter = document.getElementById("footer-search")

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
// Search Funcitons (NAV & FOOTER Tabs)
// ============================================================================

//Access elements from DOM
const searchRow = document.querySelector("#search-row")
const searchTable = document.querySelector("#table")
const searchInput = document.querySelector("#data-search")

//Initalize data array inported from JSON
let geo_data = [];

//Initialize variable to store search result
let searchResultsText = "Search Results: "
let searchResults = ""

//Value for search
const searchQuery = document.querySelector('#data-headers')

//Use npoint.io hosted historic claims data
fetch('https://api.npoint.io/616f555ba4fb21255e8a')
        .then(res => res.json())
        .then(data => {
        //Fill users array
        geo_data = data.map( item => {
            //Define JSON data row
            const row = searchRow.content.cloneNode(true).children[0]

            //Access portions of each tabular row in referenced table
            const company = row.querySelector("#data-company") //Get element by ID does not work with row
            const license = row.querySelector("#data-license")
            const location = row.querySelector("#data-location")
            const status = row.querySelector("#data-status")
            const active = row.querySelector("#data-active")
            const unactive = row.querySelector("#data-unactive")
            const expenditures = row.querySelector("#data-expenditures")

            //Poupulate the table
            company.textContent = item.properties.CLIENT_NAM
            license.textContent = item.properties.LICENSE_NB
            location.textContent = item.properties.LOCATION
            status.textContent = item.properties.STATUS
            active.textContent = item.properties.STAKEDATE
            unactive.textContent = item.properties.RPTDUE
            expenditures.textContent = item.properties.TOTAL_EXP

            //Append content from file to table
            searchTable.append( row )

            //Return searchable data to geo_data
            return { company: item.properties.CLIENT_NAM, license: item.properties.LICENSE_NB, location: item.properties.LOCATION,
                status: item.properties.STATUS, active: item.properties.STAKEDATE, unactive: item.properties.RPTDUE, 
                expenditures: item.properties.TOTAL_EXP, element: row }

    })
})

// Add an event lister to the search bar
searchInput.addEventListener("input", (e) => {
    
    // Extract the values typed into the search bar
    const value = e.target.value.toLowerCase()

    //Write the search result to search results header
    searchResults = searchResultsText + value
    document.getElementById('search-output').innerHTML = searchResults

    // Define search query based on select option 
    const query = document.getElementById("data-headers").value

    //Loop through each user in users array
    geo_data.forEach(result => {

        //Incorporate search query to search through different data headers
        if ( query == "License Number" ){
            let isVisible = result.license.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else if ( query == "Location" ){
            let isVisible = result.location.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else if ( query == "Status" ){
            let isVisible = result.status.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else if ( query == "Active From" ){
            let isVisible = result.active.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else if ( query == "Active To" ){
            let isVisible = result.unactive.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else if ( query == "Total Expenditues" ){
            let isVisible = result.expenditures.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }
        else{
            //Set default search to company
            let isVisible = result.company.toLowerCase().includes(value)
            result.element.classList.toggle("hide", !isVisible) 
        }

    })
})

// ============================================================================
// Assessment Report View/Upload
// ============================================================================

const realFileButton = document.getElementById("selected-file")

// Add an event lister to the search bar
realFileButton.addEventListener("change", function() {
    if (realFileButton.value) {
        console.log("You uploaded the following PDF file: ")
        console.log(realFileButton.value)
        console.log("In the future, some cool backend code will look at this PDF and extract tabular data and (possibly) georeference old maps.")
        console.log("You'll then be able to download the extracted data package for usage.")
    }
})

// ============================================================================
// Menu Funcitons
// ============================================================================

// Reset map to basemap
function resetmap(){
    document.getElementById('gis').src = "../images/gis/EastCoastBasemap.jpg"
}

// Upload document
function uploadpdf(){
    document.getElementById('selected-file').click()
}

// Toggle current claims
function currentclaims(){
    document.getElementById('gis').src = "../images/gis/MineralExplorationClaims.jpg"
}

// Toggle historic claims
function historicclaims(){
    document.getElementById('gis').src = "../images/gis/HistoricExplorationClaims.jpg"
}

// Toggle mienral tenure
function mineraltenure(){
    document.getElementById('gis').src = "../images/gis/MineralTenure.jpg"
}

// Toggle drill collars
function drillcollars(){
    document.getElementById('gis').src = "../images/gis/DiamondDrillHoles.jpg"
}

// Toggle mineral showings
function mineralshowings(){
    document.getElementById('gis').src = "../images/gis/MineralOccurrences.jpg"
}

// Toggle geophysics
function geophysics(){
    document.getElementById('gis').src = "../images/gis/RegionalMagnetics.jpg"
}

// Toggle bedrock geology maps
function bedrockmaps(){
    document.getElementById('gis').src = "../images/gis/GeneralizedBedrockGeology.jpg"
}