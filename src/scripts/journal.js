import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import VerifyText from "./verifyText.js"
import Events from "./eventManager.js"


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

// Listening to RecordButton
Events.listenToRecordButtonClick(recButton, date, concepts, entry, mood)



