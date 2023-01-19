//Referencing the styling of each individual card via template
const userCardTemplate = document.querySelector("[data-user-template]")
//Styling for card container div
const userCardContainer = document.querySelector("[data-user-cards-container]")

// Select the search bar //
const searchInput = document.querySelector("[data-search]")

//Initilize array filled by map
let users = []; 

// Fetch some dummy data to populate table
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        //Fill users array
        users = data.map(user => {
            //What does this one do again? Re-watch section of video...
            const card = userCardTemplate.content.cloneNode(true).children[0]
            //Variable linked to data header through the DOM
            const header = card.querySelector("[data-header]")
            //Variable linked to data content through the DOM
            const body = card.querySelector("[data-body]")
            //Populate template header with name of each user
            header.textContent = user.name
            //Populate template body with email of each user 
            body.textContent = user.email
            //Again double check this bit in the video...
            userCardContainer.append( card )
            //This is outputting name, email, and card(?) info to my initialized users list
            return { name: user.name, email: user.email, element: card }
    });
})


// Add an event lister to the search bar
searchInput.addEventListener("input", (e) => {
    
    // Extract the values typed into the search bar
    const value = e.target.value

    //console.log(users)

    //Loop through each user in users array - I HAVE TO LOWERCASE EVERYTHING STILL..
    users.forEach(user => {
        //Variable (bool) if value is in name or email of each user
        const isVisible = user.name.includes(value) || user.email.includes(value) 
        //console.log(user.element.classlist)
        //Change the class to hide by accessing the classlist if the typed value is not in the user info.
        user.element.classList.toggle("hide", !isVisible) // I HAD LOWERCASE l FOR 4 DAYS :(
    })
})