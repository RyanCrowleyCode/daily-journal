
// a reference to the article tag that will contain my journal entries on the DOM
const domJournalContainer = document.querySelector(".entryLog")
console.log(domJournalContainer)


// An array of objects. The objects are individual journal entries.
const journalCollection = [
    {
        date: "10/18/2019",
        title: "Event Listeners",
        content: "Yesterday, I was working with event listeners. I had one event listener looking for an event of when a \"Create\" button was pressed, and that button would create an element that had a \"Delete\" button created. The first event listener called a function, and in that function there was the event listener for the delete button. I tried to put the event listener for the delete button within the event listener for the create button, but that didn't work. Putting the delete button event listener in the function that was called, however, did work.",
        mood: "Tired"
    },

    {
        date: "10/18/2019",
        title: "Targeting Elements on the DOM",
        content: "I've learned a few ways to target elements on the dom. I can use .querySelector() to find the first item that meets my criteria, or .querySelectorAll() to find all that meet my criteria. When using .querySelector(), I must specify with # or . if searching for an id or class. .querySelectorAll() returns a node list, which I can use like an array. If I use .getElementByID or .getElementByClassname, I do not need to specify that I'm searching for an id or class because it is implied in the method.",
        mood: "Hopeful"
    },

    {
        date: "10/18/2019",
        title: "API",
        content: "API's allow us to access large amounts of data. I believe JSON is a language/data structure that looks a lot like JavaScript, and it stands for \"JavaScript Object Notation\". We use fetch to access the JSON data in an API, and we convert that into JavaScript. It's still really confusing to me how, and what all I can do with this, but I do know that it will allow us to access the world of information provided on the internet in some incredible ways.",
        mood: "Imposter Syndrome"
    },

    {
        date: "10/18/2019",
        title: "Functions",
        content: "I really understand functions. I think. As far as we have used them so far, I understand them. I spent most of my time while learning to code before NSS working in Python, and I love functions. Functions are like blueprints of code that allow us to reuse our code over and over again. They allow for DRY code, clean code, and for our programs to do powerful tasks. Functions take Parameters (placeholder variables), and when we call a function, we insert Arguments (actual data types / variables) into the appropriate spots where those Parameters were placed.",
        mood: "Great!"
    },
]

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