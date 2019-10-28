// a reference to the article tag that will contain my journal entries on the DOM
const domJournalContainer = document.querySelector(".entryLog")

// This function iterates through my array of journal entries and adds them to the DOM.
const DomBuilder = {
    renderJournalEntries: (entries) => {
    entries.forEach(entry => {
        const addEntry = JournalEntryComponent.makeJournalEntryComponent(entry)
        domJournalContainer.innerHTML += addEntry
    }
    )}
}
