// Create a module that defines a function for building the form fields dynamically instead of them being hard-coded in the HTML.

const journalForm = `
        <form action="">
            <input type="hidden" id="entryId" value="" />
            <fieldset>
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate" required>
            </fieldset>
            <fieldset>
                <label for="concepts">Concepts Covered</label>
                <!-- Pattern for the concepts box meets requirements outlined in the Journal 7 exercise. -->
                <input type="text" name="concepts" id="concepts" pattern="[A-Za-z0-9\\(\\)\\{\\};:',\\s]*"
                    title="No characters other than letters, numbers, commas, (), {}, :, ', and ; in the Concepts Covered field." maxlength="50" required />
                <div id="concepts-message-div"></div>
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal Entry</label>
                <!-- Not adding a pattern for required characters. The user can use any character in the journalEntry box. -->
                <textarea name="journalEntry" id="journalEntry" maxlength="1000" required></textarea>
                <div id="journalEntry-message-div"></div>
            </fieldset>
            <fieldset>
                <label for="mood">Mood For the Day</label>
                <select name="mood" id="mood" required>
                    <option value=""></option>
                    <option value="Great!">Great!</option>
                    <option value="Happy">Happy</option>
                    <option value="Hopeful">Hopeful</option>
                    <option value="Grateful">Grateful</option>
                    <option value="Sad">Sad</option>
                    <option value="Stressed">Stressed</option>
                    <option value="Tired">Tired</option>
                    <option value="Impostor Syndrome">Impostor Syndrome</option>
                </select>
            </fieldset>
        </form>
        <div class="button-wrapper">
            <button type="button" id="recordButton">Record Journal Entry</button>
        </div>

`

export default journalForm