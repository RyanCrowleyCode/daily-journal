import API from "./data.js"
import DomBuilder from "./entriesDOM.js"


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getEntries().then(entries => DomBuilder.renderJournalEntries(entries))