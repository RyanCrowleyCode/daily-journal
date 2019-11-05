import NewJournal from "./journalObject.js"
import API from "./data.js"
import DomBuilder from "./entriesDOM.js"
import journalForm from "./form.js"
import VerifyText from "./verifyText.js"


// Function for every time we need to get all of the journal entries and render them to the DOM
const getRenderListenWatch = () => {
    API.getEntries()
    .then(entries => DomBuilder.renderJournalEntries(entries))
    .then(DomBuilder.renderForm(journalForm))
    .then(listenToEverything)
    .then(VerifyText.watchCharacterLength(document.querySelector("#concepts")))
    .then(VerifyText.watchCharacterLength(document.querySelector("#journalEntry")))
    
}

const Events = {
    
    listenToRecordButtonClick: function () {
        // targeting the record button
        const recButton = document.querySelector("#recordButton")
        
        recButton.addEventListener("click", () => {
            // targeting the input fields
            const date = document.querySelector("#journalDate")
            const concepts = document.querySelector("#concepts")
            const entry = document.querySelector("#journalEntry")
            const mood = document.querySelector("#mood")
            // variable to get the actual text inside the mood, not just the value, like "Great!"
            const moodText = mood.options[mood.selectedIndex].text
            
            // checking to make sure all forms are filled out before posting to database
            if (date.value, concepts.value, entry.value, mood.value) { 
                // checking to make sure concepts field matches the required format
                if (concepts.checkValidity()) {
                    const newestEntry = NewJournal.createJournalObject(date.value, concepts.value, entry.value, moodText)
                    const entryId = document.getElementById("entryId")
                    if (entryId.value) {
                        // Updating entry in API (PUT)
                        API.updateSingleEntry(newestEntry, entryId.value)
                        .then(getRenderListenWatch)  
                        
                    } else {
                        // Posting to API
                        API.saveJournalEntry(newestEntry)
                        .then(getRenderListenWatch)
                    }
                    
                } else {
                    window.alert(concepts.title)
                }
            } else {
                window.alert("Please fill out all forms for the journal before recording your entry.")
            }
            
        })
    },
    
    listenToMoodButtons: function () {
        // targeting all mood radio buttons
        const moodButtons = document.getElementsByName("mood-radio-button")
        
        // iterating through array of moodButtons to add event listener to each one
        moodButtons.forEach( moodButton => {
            moodButton.addEventListener("click", () => {
                // targeting the specific mood selected
                const selectedMood = event.target.value
                
                // fetch call to API to get all entries
                API.getEntries()
                .then(response => {
                    // filtering to only the selected moods
                    if (selectedMood === "all") {
                        // if all selected, return all entries from response
                        DomBuilder.renderJournalEntries(response)
                    } else {
                        const selectedMoodArray = response.filter(journalEntry => {
                            return journalEntry.mood === selectedMood
                        })
                        
                        //display filtered mood to the DOM
                        DomBuilder.renderJournalEntries(selectedMoodArray)
                    }
                    
                    
                })
            })
        })
        
    },
    
    listenToDeleteButtons: function () {
        const allDeleteButtons = document.querySelectorAll(".deleteButton")
        
        allDeleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener("click", () => {
                const buttonId = deleteButton.id.split("--")[1]
                // fetch call to delete
                API.deleteOneEntry(buttonId)
                .then(getRenderListenWatch)
                
            })
        })
    },
    
    listenToEditButtons: function () {
        const allEditButtons = document.querySelectorAll(".editButton")
        
        allEditButtons.forEach(editButton => {
            editButton.addEventListener("click", () => {
                const buttonId = editButton.id.split("--")[1]
                // When clicked, get the individual entry and populate the form fields with text content.
                API.getSingleEntry(buttonId)
                .then(selectedEntry => {
                    // populate the form with the values from the entry we are editing
                    document.getElementById("journalDate").value = selectedEntry.date
                    document.getElementById("concepts").value = selectedEntry.title
                    document.getElementById("journalEntry").value = selectedEntry.content
                    document.getElementById("mood").value = selectedEntry.mood
                    // update the hidden input
                    document.getElementById("entryId").value = selectedEntry.id
                    // scroll back to the top where the form is located
                    document.documentElement.scrollTop = 0;
                    
                })
            })
        })
    }
    
}

// Function to loop through and call all listeners in events
const listenToEverything = () => {
    for (const methodName of Object.values(Events)) {
        methodName.call()
    }
}
export default getRenderListenWatch