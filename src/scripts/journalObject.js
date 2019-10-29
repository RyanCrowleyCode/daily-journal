// Journal Entry Factory Function
// Define a factory function whose responsibility is to generate an object that represents a journal entry.

// date, title, content, mood

const NewJournal = {
    createJournalObject: (date, title, content, mood) => {
        return {
            date: date,
            title: title,
            content: content,
            mood: mood
        } 
    }
}

export default NewJournal


