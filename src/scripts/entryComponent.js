// This function takes a journalEntry object and returns a string template that represents a single journal entry object as HTML.
const JournalEntryComponent = {
    makeJournalEntryComponent: (journalEntry) => {
    return `
        <section class="journal-entry">
            <h2 class="journal-title">${journalEntry.title}</h2>
            <div class="journal-date">${journalEntry.date}</div>
            <p class="journal-content">${journalEntry.content}</p>
            <div class="journal-mood">Current mood: ${journalEntry.mood}</div>
        </section>

    `
    }
}