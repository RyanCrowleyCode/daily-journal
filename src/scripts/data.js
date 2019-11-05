// function with fetch call to entries.json
const API = {
    getEntries: function () {
        return fetch("http://localhost:3000/entries") // gets the json
        .then(response => response.json()) // turns the json into javascript object

    },
    saveJournalEntry: (journalEntryObject) => {
        return fetch("http://localhost:3000/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journalEntryObject)
    }).then(response => response.json())
    },

    deleteOneEntry: function (entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`, {
            method: "DELETE",
        })
            .then(response => response.json())

    },

    getSingleEntry: function (entryId) {
        return fetch(`http://localhost:3000/entries/${entryId}`) // gets the json for 1 entry
        .then(response => response.json()) // turns the json into javascript object 
    }
}

export default API
