import NewJournal from "./journalObject.js"
import API from "./data.js"
import DomBuilder from "./entriesDOM.js"

// Function for every time we need to get all of the journal entries and render them to the DOM
const getRenderAndListen = () => {
    API.getEntries()
        .then(entries => DomBuilder.renderJournalEntries(entries))
        .then(Events.listenToDeleteButtons)
        .then(Events.listenToEditButtons)
}

const Events = {
    recordEntry: function (date, concepts, entry, mood) {
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
                .then(getRenderAndListen)
                
                // for loop to clear inputFields
                inputFieldArray.forEach(inputField => {
                    inputField.value = ""
                })
                
            } else {
                window.alert(concepts.title)
            }
        } else {
            window.alert("Please fill out all forms for the journal before recording your entry.")
        }
    },

    listenToRecordButtonClick: function (date, concepts, entry, mood) {
        // targeting the record button
        const recButton = document.querySelector("#recordButton")

        recButton.addEventListener("click", () => {
            this.recordEntry(date, concepts, entry, mood)
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
                    .then(getRenderAndListen)
                    
            })
        })
    },

    listenToEditButtons: function () {
        const allEditButtons = document.querySelectorAll(".editButton")

        allEditButtons.forEach(editButton => {
            editButton.addEventListener("click", () => {
                const buttonId = editButton.id.split("--")[1]
                // When clicked, get the individual entry and populate the form fields with text content.
            })
        })
    }
    
}

export default Events