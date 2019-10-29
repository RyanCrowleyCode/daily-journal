import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import NewJournal from "./journalObject.js"


// Function for every time we need to get all of the journal entries and render them to the DOM
const getAndRender = () => {
    API.getEntries().then(entries => DomBuilder.renderJournalEntries(entries))
}

// Calling that function to get all of the journal entries and render them to the DOM
getAndRender()

// targeting the record button
const recButton = document.querySelector("#recordButton")

// adding an event listener for when the record button is clicked.
recButton.addEventListener("click", () => {
    // targeting the input fields
    const date = document.querySelector("#journalDate")
    const concepts = document.querySelector("#concepts")
    const entry = document.querySelector("#journalEntry")
    const mood = document.querySelector("#mood")
    // variable to get the actual text inside the mood, not just the value, like "Great!"
    const moodText = mood.options[mood.selectedIndex].text

    const newestEntry = NewJournal.createJournalObject(date.value, concepts.value, entry.value, moodText)
    API.saveJournalEntry(newestEntry)
})


