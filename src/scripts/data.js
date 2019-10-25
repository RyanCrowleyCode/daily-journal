// function with fetch call to entries.json
const getEntries = () => {
    fetch("http://localhost:3000/entries") // gets the json
    .then(response => response.json()) // turns the json into javascript object
    .then(entries => {
        renderJournalEntries(entries) // calls the function to print each entry in entries to the DOM
    })
}

// calling the fetch call function
getEntries();