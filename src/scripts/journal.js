import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import NewJournal from "./journalObject.js"
import VerifyText from "./verifyText.js"


// Function for every time we need to get all of the journal entries and render them to the DOM
const getAndRender = () => {
    API.getEntries().then(entries => DomBuilder.renderJournalEntries(entries))
}
// Calling that function to get all of the journal entries and render them to the DOM
getAndRender()

// targeting the record button
const recButton = document.querySelector("#recordButton")

// targeting the input fields
const date = document.querySelector("#journalDate")
const concepts = document.querySelector("#concepts")
const entry = document.querySelector("#journalEntry")
const mood = document.querySelector("#mood")

/// Verifying the character length for the concepts and entry fields
VerifyText.watchCharacterLength(concepts)
VerifyText.watchCharacterLength(entry)


// adding an event listener for when the record button is clicked.
recButton.addEventListener("click", () => {
    // variable to get the actual text inside the mood, not just the value, like "Great!"
    const moodText = mood.options[mood.selectedIndex].text
    
    const inputFieldArray = [date, concepts, entry, mood]

    // checking to make sure all forms are filled out before posting to database
    if (date.value, concepts.value, entry.value, mood.value) { 
        // checking to make sure concepts field matches the required format
        if (concepts.checkValidity()) {
            // Posting to API
            const newestEntry = NewJournal.createJournalObject(date.value, concepts.value, entry.value, moodText)
            API.saveJournalEntry(newestEntry)
                .then(getAndRender)
            // for loop to clear inputFields
            inputFieldArray.forEach(inputField => {
                inputField.value = ""
            })
        }
    } else {
        window.alert("Please fill out all forms for the journal before recording your entry.")
    }
})

