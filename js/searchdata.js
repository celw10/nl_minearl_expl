const datatemplate = document.querySelector("[data-template]")

const datausertodo = document.querySelector("[data-user-todo]")

// Select the search bar //
const searchInput = document.querySelector("[data-search]")

let users = []

// Add an event lister to the search bar //
searchInput.addEventListener("input", (e) => {

    // Extract the values typed into the search bar //
    const value = e.target.value

    // Output what is typed into seach bar on the console log //
    //console.log(users)
    users.forEach(user => {
        const isVisible = user.title.includes(value) //|| user.userId.includes(value) || user.id.includes(value)
        console.log(isVisible)
        //user.element.classlist.toggle("hide", !isVisible)
    })

    //Print the input value const to an arbitrary (and temporary) locaiton on main //
//    document.getElementById('search-output').innerHTML = value;
})

// Fetch some dummy 'to do' data to populate table
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        users = data.map(user => {
            const searchrow = datatemplate.content.cloneNode(true).children[0]
            const company = searchrow.querySelector("[data-title]")
            const license = searchrow.querySelector("[data-userId]")
            const location = searchrow.querySelector("[data-id]")
            const totalexp = searchrow.querySelector("[data-completed]")
            company.textContent = user.title
            license.textContent = user.userId
            location.textContent = user.id
            totalexp.textContent = user.completed
            datausertodo.append(searchrow)
            return { title: user.title, userId: user.userId, id: user.id, completed: user.completed, 
                element: searchrow }
    });
})