// Export defined functions
//export {resetmap, currentclaims, historicclaims, drillcollars, mineralshowings}

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

// Export funcitons
export { resetmap, currentclaims, historicclaims, drillcollars, mineralshowings };