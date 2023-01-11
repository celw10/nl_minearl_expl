// CHANGE DISPLAYED DATA ON MAP //

//Extract a variable from my css :root variables//
//var imgpath = getComputedStyle(document.documentElement).getPropertyValue('--imgsrc')//

//Change a variable in my css :root variables//
//document.documentElement.style.setProperty('--imgsrc', '')//

//alert() is useful to see how I'm changing my variables and for de-bugging//
//alert(getComputedStyle(document.documentElement).getPropertyValue('--currentimg'))//

// Change the image path variable to show current claims //
function currentclaims(){

    document.documentElement.style.setProperty('--currentimg', getComputedStyle(document.documentElement).getPropertyValue('--currentclaims'))
}

// Change the image path variable to show historic claims //
function historicclaims(){

    document.documentElement.style.setProperty('--currentimg', getComputedStyle(document.documentElement).getPropertyValue('--historicclaims'))
}

// Change the image path variable to show drill collars //
function drillcollars(){

    document.documentElement.style.setProperty('--currentimg', getComputedStyle(document.documentElement).getPropertyValue('--drillcollars'))
}

// Change the image path variable to show the MODS mineral showings //
function mineralshowings(){

    document.documentElement.style.setProperty('--currentimg', getComputedStyle(document.documentElement).getPropertyValue('--minearlshowings'))
}