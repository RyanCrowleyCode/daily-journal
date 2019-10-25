
// a reference to the article tag that will contain my journal entries on the DOM
const domJournalContainer = document.querySelector(".entryLog")



// This function takes a journalEntry object and returns a string template that represents a single journal entry object as HTML.
const makeJournalEntryComponent = (journalEntry) => {
    return `
        <section class="journal-entry">
            <h2 class="journal-title">${journalEntry.title}</h2>
            <div class="journal-date">${journalEntry.date}</div>
            <p class="journal-content">${journalEntry.content}</p>
            <div class="journal-mood">Current mood: ${journalEntry.mood}</div>
        </section>

    `
}

// This function iterates through my array of journal entries and adds them to the DOM.
const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        const addEntry = makeJournalEntryComponent(entry)
        domJournalContainer.innerHTML += addEntry
    }
    )}

// Calling my function to put the journal entries on the DOM
renderJournalEntries(journalCollection)