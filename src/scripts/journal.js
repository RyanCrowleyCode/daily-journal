import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import NewJournal from "./journalObject.js"


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getEntries().then(entries => DomBuilder.renderJournalEntries(entries))


// targeting the record button
const recButton = document.querySelector("#recordButton")

// adding an event listener for when the record button is clicked.
recButton.addEventListener("click", () => {
    // targeting the input fields
    const date = document.querySelector("#journalDate")
    const concepts = document.querySelector("#concepts")
    const entry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#mood")

    const newestEntry = NewJournal.createJournalObject(date.value, concepts.value, entry.value, mood.value)
    
})


// AT THIS PART NOW
// In main module, invoke method to save entry (API.saveJournalEntry(newEntry)), then add item to local array.
// Update DOM with updated array values.
// post.then(get).then(render)

