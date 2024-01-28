const { insertSelectedLettersModel, updateSelectedLetters, getFindSelectedLetters } = require('../model/selectedLetter.model')

async function insertSelectedLetters(req, res, next) {
    try {
        let insertID = await insertSelectedLettersModel({ ...req.body,createdOn:new Date() })
        res.status(200).send(`inserted successfully. Insertion ID - ${insertID}`);
    } catch (e) {
        res.status(400).send('DB Connection Issue')
    }

}

async function getSelectedLetters(req, res, next) {
    try {
        let selectedLetterResponse = await getFindSelectedLetters(req.params?.sessionId);
        let result = selectedLetterResponse.length ? selectedLetterResponse[0] : {};
        return res.status(200).json(result)
    } catch (e) {
        res.status(400).send('DB Connection Issue')
    }
}

async function updateSelectedLetter(req, res, next) {
    try {
        let selectLetterResponse = await updateSelectedLetters(req.params?.sessionId, {...req.body})
        res.status(200).json(selectLetterResponse);
    } catch (e) {
        console.log('updateSelectedLetter', e);
        thro
    }
}


module.exports = { getSelectedLetters, insertSelectedLetters, updateSelectedLetter };