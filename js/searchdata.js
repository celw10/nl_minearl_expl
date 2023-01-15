// Fetch historic claims data
fetch("../data/HistoricClaims_Test.geojson").then(res => res.json()).then(data => {})

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