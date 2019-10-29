import API from "./data.js"
import DomBuilder from "./entriesDOM.js"


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


    // console.log("date: ", date.required)
    // console.log("concepts: ", concepts.required)
    // console.log("entry: ", entry.required)
    // console.log("mood: ", mood.required)

})


// Basic Input Validation
// No characters other than letters, numbers, (), {}, :, and ;

// Journal Entry Factory Function
// Define a factory function whose responsibility is to generate an object that represents a journal entry.