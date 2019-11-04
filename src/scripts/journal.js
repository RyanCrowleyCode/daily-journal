import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import VerifyText from "./verifyText.js"
import Events from "./eventManager.js"
import journalForm from "./form.js"

//render form to the dom
DomBuilder.renderForm(journalForm)


// Get, Render, Listen to Delete buttons rendered
API.getEntries()
.then(entries => DomBuilder.renderJournalEntries(entries))
.then(Events.listenToDeleteButtons)


// targeting the input fields
const date = document.querySelector("#journalDate")
const concepts = document.querySelector("#concepts")
const entry = document.querySelector("#journalEntry")
const mood = document.querySelector("#mood")

/// Verifying the character length for the concepts and entry fields
VerifyText.watchCharacterLength(concepts)
VerifyText.watchCharacterLength(entry)



// Listening to Buttons

Events.listenToRecordButtonClick(date, concepts, entry, mood)
Events.listenToMoodButtons()




