
const VerifyText = {
    // Function that warns the user when they are running out of characters to type in a field
    watchCharacterLength: function (inputField) {
        const messageDiv = inputField.nextElementSibling
        
        inputField.addEventListener("keyup", function () {
            const totalCharacters = inputField.value.length
            const charRemaining = inputField.maxLength - totalCharacters
            if (charRemaining <=5) {
                messageDiv.innerHTML = `${charRemaining} characters remaining`
                messageDiv.className = "red-text-validator"
            } else if (charRemaining <= 10) {
                messageDiv.innerHTML = `${charRemaining} characters remaining`
                messageDiv.className = "yellow-text-validator"
            } else {
                messageDiv.innerHTML = ""
                messageDiv.className = ""
            }
        } )
    }
}

export default VerifyText