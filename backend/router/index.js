const selectedletters = require('./selectedLetter.router')
const getWord = require('./getWord.router');
const generateUUID = require('./generateUUID.router')


module.exports = (app) => {
    app.use('/selectedletters', selectedletters)
    app.use('/getword', getWord)
    app.use('/generateuuid', generateUUID)
};