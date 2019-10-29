// function with fetch call to entries.json
const API = {
    getEntries: function () {
        return fetch("http://localhost:3000/entries") // gets the json
        .then(response => response.json()) // turns the json into javascript object

    },
    saveJournalEntry: (journalEntryObject) => {
        fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
    }).then(response => response.json())
    }
}

export default API
