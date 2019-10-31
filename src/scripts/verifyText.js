
const VerifyText = {
    // Function that warns the user when they are running out of characters to type in a field
    watchCharacterLength: function (inputField) {
        const messageDiv = inputField.nextElementSibling
        
        inputField.addEventListener("keydown", function () {
            const totalCharacters = inputField.value.length
            const charRemaining = inputField.maxLength - totalCharacters
            if (inputField.maxLength <= 50) {
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
            } else {
                if (charRemaining <=15) {
                    messageDiv.innerHTML = `${charRemaining} characters remaining`
                    messageDiv.className = "red-text-validator"
                } else if (charRemaining <= 30) {
                    messageDiv.innerHTML = `${charRemaining} characters remaining`
                    messageDiv.className = "yellow-text-validator"
                } else {
                    messageDiv.innerHTML = ""
                    messageDiv.className = ""
                }
            }
        } )
    },
    watchForProfanity: function (inputField) {
        // Test that the concept and entry fields contain no curse words. You can use regular expressions for that.
        // regex expression
        // empty div below concepts field and content field.

    }
}

export default VerifyText