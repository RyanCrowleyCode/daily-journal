// function with fetch call to entries.json
const API = {
    getEntries: function () {
        return fetch("http://localhost:3000/entries") // gets the json
        .then(response => response.json()) // turns the json into javascript object

    }
}

export default API